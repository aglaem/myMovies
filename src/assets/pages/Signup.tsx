

import { useState } from "react";



const Signup = () => {

    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [confirmPassword, setConfirmPassword] = useState<string>("");

    const handleClick = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // console.log("Email:", email);
        // console.log("Password:", password);
        // console.log("Confirm Password:", confirmPassword);
        if (password === confirmPassword) {
            // Proceed with signup logic
            console.log("Signup successful!");
        } else {
        }
    }

    return (
        <div className="flex flex-col items-center justify-center bg-transparent">
            <div className="card w-96 bg-gray-800 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title text-center mb-6">Sign Up</h2>
                    <form className="space-y-4" onSubmit={handleClick}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                autoComplete="username"
                                className="input input-bordered bg-gray-800"
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type="password"
                                autoComplete="new-password"
                                className="input input-bordered bg-gray-800"
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Confirm Password</span>
                            </label>
                            <input
                                type="password"
                                autoComplete="new-password"
                                className="input input-bordered bg-gray-800"
                                onChange={(e) => setConfirmPassword(e.target.value)}
                            />
                        </div>
                        
                        <button type="submit" className="btn btn-primary w-full mt-6">
                            Sign Up
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Signup;