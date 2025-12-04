import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { TbEyeFilled, TbEyeClosed } from "react-icons/tb";

const Signup = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormData>();
  const [showRules, setShowRules] = useState(false);
  const navigate = useNavigate();
  interface IPasswordRules {
    regex: RegExp;
    label: string;
  }
  interface FormData {
    email: string;
    password: string;
    confirmPassword: string;
  }
  const [showPassword, setShowPassword] = useState(false);

  const password = watch("password");
  const confirmPassword = watch("confirmPassword");
  const rules: IPasswordRules[] = [
    { regex: /^.{8,}$/, label: "Au moins 8 caractères" },
    { regex: /[A-Z]/, label: "Au moins une majuscule" },
    { regex: /[a-z]/, label: "Au moins une minuscule" },
    { regex: /\d/, label: "Au moins un chiffre" },
    { regex: /[^A-Za-z0-9]/, label: "Au moins un caractère spécial" },
  ];

  const handleClick = (data: FormData) => {
    const passwordValid = rules.every((rule) => rule.regex.test(data.password));
    if (passwordValid) {
      if (data.password === data.confirmPassword) {
        navigate("/login");
      }
    } else {
      setShowRules(true);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center bg-transparent">
      <div className="card w-96 bg-gray-800 shadow-xl">
        <div className="card-body">
          <h2 className="card-title text-center mb-6">Sign Up</h2>
          <form className="space-y-4" onSubmit={handleSubmit(handleClick)}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                autoComplete="username"
                placeholder="Enter email"
                className="py-2.5 sm:py-3 ps-4 pe-10 block w-full border border-white rounded sm:text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-800 dark:border-white dark:text-white dark:placeholder-white dark:focus:ring-neutral-600"
                {...register("email", {
                  required: true,
                  pattern: /^\S+@\S+\.\S+$/i,
                })}
              />
            </div>
            {errors.email?.type === "required" && (
              <span className="text-red-500">Email is required</span>
            )}
            {errors.email?.type === "pattern" && (
              <span className="text-red-500">Invalid email address</span>
            )}
            {/* Form Group */}
            <div className="max-w-sm">
              <label className="block text-sm mb-2 dark:text-white">
                Password
              </label>
              <div className="relative">
                <input
                  id="hs-toggle-password"
                  type={showPassword ? "text" : "password"}
                  className="py-2.5 sm:py-3 ps-4 pe-10 block w-full border border-white rounded sm:text-sm disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-800 dark:border-white dark:text-white dark:placeholder-white dark:focus:ring-neutral-600"
                  placeholder="Enter password"
                  {...register("password", { required: true })}
                  onFocus={() => setShowRules(true)}
                  onBlur={() => setShowRules(false)}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 end-0 flex items-center z-20 px-3 cursor-pointer text-white rounded-e-md focus:outline-hidden dark:text-neutral-600"
                >
                  {showPassword ? <TbEyeFilled onClick={() => setShowRules(true)} /> : <TbEyeClosed onClick={() => setShowRules(true)}/>}
                </button>
              </div>
            </div>
            {/* End Form Group */}
            {showRules && (
              <ul>
                <li>Your password must contain the following:</li>
                {rules.map((rule, i) => (
                  <li
                    key={i}
                    style={{
                      color: rule.regex.test(password) ? "green" : "red",
                    }}
                  >
                    {rule.label}
                  </li>
                ))}
              </ul>
            )}

            {errors.password?.type === "required" && (
              <span className="text-red-500">Password is required</span>
            )}
            <div className="max-w-sm">
              <label className="block text-sm mb-2 dark:text-white">
                Confirm Password
              </label>
              <div className="relative">
                <input
                  id="hs-toggle-password"
                  type="password"
                  className="py-2.5 sm:py-3 ps-4 pe-10 block w-full border border-white rounded sm:text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-800 dark:border-white dark:text-white dark:placeholder-white dark:focus:ring-neutral-600"
                  placeholder="Confirm password"
                  {...register("confirmPassword", { required: true })}
                />
              </div>
            </div>
            {errors.confirmPassword?.type === "required" && (
              <span className="text-red-500">Confirm Password is required</span>
            )}
            {password !== confirmPassword && (
              <span className="text-red-500">Passwords do not match</span>
            )}

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
