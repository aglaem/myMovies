import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";

const Signup = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormData>();
  const [showRules, setShowRules] = useState(false);
  const navigate = useNavigate();
  interface PasswordRules {
    regex: RegExp;
    label: string;
  }
  interface FormData {
    email: string;
    password: string;
    confirmPassword: string;
  }

  const password = watch("password");
  const rules: PasswordRules[] = [
    { regex: /^.{8,}$/, label: "Au moins 8 caractères" },
    { regex: /[A-Z]/, label: "Au moins une majuscule" },
    { regex: /[a-z]/, label: "Au moins une minuscule" },
    { regex: /\d/, label: "Au moins un chiffre" },
    { regex: /[^A-Za-z0-9]/, label: "Au moins un caractère spécial" },
  ];

  const handleClick = (data: FormData) => {
    if (data.password === data.confirmPassword) {
      navigate("/login");
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
                className="input input-bordered bg-gray-800"
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
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                autoComplete="new-password"
                className="input input-bordered bg-gray-800"
                {...register("password", { required: true })}
                onFocus={() => setShowRules(true)}
                onBlur={() => setShowRules(false)}
              />
            </div>
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
            <div className="form-control">
              <label className="label">
                <span className="label-text">Confirm Password</span>
              </label>
              <input
                type="password"
                autoComplete="new-password"
                className="input input-bordered bg-gray-800"
                {...register("confirmPassword", {
                  required: true,
                  validate: (value) =>
                    value === password || "Passwords do not match",
                })}
              />
            </div>
            {errors.confirmPassword?.type === "required" && (
              <span className="text-red-500">Confirm Password is required</span>
            )}
            {errors.confirmPassword?.type === "validate" && (
              <span className="text-red-500">
                {errors.confirmPassword.message as string}
              </span>
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
