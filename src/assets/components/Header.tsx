import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { FaSearch, FaHome } from "react-icons/fa";
import { RiDeleteBin5Fill } from "react-icons/ri";
import type { Imovie } from '../interfaces/Imovie';

interface HeaderProps {
    wishlist: Imovie[];
    updateHeadWishlist: (theMovie: Imovie) => void;
}


export default function Header({ wishlist, updateHeadWishlist }: HeaderProps) {

    

    return (
        <Disclosure
            as="nav"
            className="relative after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-px  p-5 border-none"
        >
            <div className="w-3/5 m-auto px-2 sm:px-6 lg:px-8 rounded-base border border-white/10  shadow-lg bg-red-950/50">
                <div className="relative flex h-16 items-center justify-between">
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        {/* Mobile menu button*/}
                        <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-white/5 hover:text-white focus:outline-2 focus:-outline-offset-1 focus:outline-indigo-500">
                            <span className="absolute -inset-0.5" />
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon aria-hidden="true" className="block size-6 group-data-open:hidden" />
                            <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-open:block" />
                        </DisclosureButton>
                    </div>
                    <div className="flex items-center justify-center ">
                        <div className="flex shrink-0 items-center">
                        </div>
                        <div className="hidden sm:ml-6 sm:block">
                            <div className="flex space-x-4">
                                <a href="#" className="rounded-md px-3 py-2 m-auto text-sm font-medium text-teal-500">
                                    <FaHome className="size-6 text-gray-700" />
                                </a>
                                <Menu as="div" className="relative inline-block m-auto">
                                    <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-transparent px-3 py-2 text-sm font-semibold text-gray-700 inset-ring-1 hover:bg-red-950/20 hover:cursor-pointer">
                                        Wishlist
                                        <ChevronDownIcon aria-hidden="true" className="-mr-1 size-5 text-gray-700" />
                                    </MenuButton>

                                    <MenuItems
                                        transition
                                        className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-red-950/50 outline-1 -outline-offset-1 outline-white/10 transition data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
                                    >
                                        <div className="py-1">
                                            <MenuItem>
                                                <div
                                                    className="block px-4 py-2 text-sm text-gray-300"
                                                >
                                                    {wishlist.length === 0 ? (
                                                        <span>Your wishlist is empty</span>
                                                    ) : (wishlist.map((movie : Imovie) => (
                                                        <li key={movie.id} className='list-none flex justify-between'>{movie.titre}<button onClick={() => updateHeadWishlist(movie)} className='hover:cursor-pointer'><RiDeleteBin5Fill /></button></li>
                                                        
                                                    )))}
                                                </div> 
                                            </MenuItem>
                                        </div>
                                    </MenuItems>
                                </Menu>
                            </div>
                        </div>
                    </div>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                        <button
                            type="button"
                            className="relative rounded-full p-1 text-gray-400 hover:text-white focus:outline-2 focus:outline-offset-2 focus:outline-indigo-500 hover:cursor-pointer"
                        >
                            <span className="absolute -inset-1.5" />
                            <span className="sr-only">View notifications</span>
                            <FaSearch aria-hidden="true" className="size-6 text-gray-700" />
                        </button>
                    </div>
                </div>
            </div>
            <DisclosurePanel className="sm:hidden">
                <div className="space-y-1 px-2 pt-2 pb-3">
                    <DisclosureButton
                        as="a"
                        href="#"
                        className="block rounded-md px-3 py-2 text-base font-medium text-teal-800"
                    >
                        <FaHome className="size-6 text-gray-700" />
                    </DisclosureButton>
                </div>
            </DisclosurePanel>
        </Disclosure>
    )
}
