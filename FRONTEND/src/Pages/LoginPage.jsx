import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";
import { useAuth } from "../context/auth/useAuth";

export default function LoginPage() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
  });

  const handleGoogleLogin = async () => {
    window.location.href = "http://localhost:8080/oauth2/authorization/google";
  };

  const onSubmit = async (data) => {
    const user = {
      email: data.email,
      password: data.password,
    };
    try {
      const res = await axios.post(
          `http://localhost:8080/api/auth/login`,
          user
      );
      console.log(res.status);
      if (res.status === 200) {
        toast.success("Login Successfully");
        login(res.data);
        navigate("/");
      }
    } catch (error) {
      if (error?.response) {
        toast.error(error.response.data);
      } else {
        console.log(error);
        toast.error("Something went wrong");
      }
    }
  };

  return (
      <div className="min-h-screen flex flex-col md:flex-row">
        {/* Left side - Brand and Image */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-8 relative overflow-hidden" style={{
          backgroundImage: "url('https://img.freepik.com/premium-vector/illustration-cooking-logo-solid-background_852896-5192.jpg')", // Use your image path here, e.g., '/images/bg.jpg'
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}>
         

          <div className="relative z-10 text-center max-w-md">
            <h1 className="text-5xl font-extrabold text-black-600 mb-4" >
             CuliConnect
            </h1>
            <p className="text-black-800 text-lg mb-4 font-italic ">
            Through the art of cooking, we bridge worlds and savor moments...
            </p>

            <div className="mt-8 grid grid-cols-3 gap-4">
              <div className="bg-[#f2f5d0]/50 p-4 rounded-lg text-center">
                <div className="text-black text-xl font-bold mb-2">10k+</div>
                <div className="text-black/100 text-sm">World Class Chef</div>
              </div>
              <div className="bg-[#f2f5d0]/50 p-4 rounded-lg text-center">
                <div className="text-blacktext-xl font-bold mb-2">50k+</div>
                <div className="text-black/100 text-sm">Best Recipes</div>
              </div>
              <div className="bg-[#f2f5d0]/50 p-4 rounded-lg text-center">
                <div className="text-black text-xl font-bold mb-2">99%</div>
                <div className="text-black/100 text-sm">Satisfaction</div>
              </div>
            </div>
          </div>

          {/* Background pattern */}
          <div className="absolute inset-0 z-0 opacity-10">
            <div className="absolute inset-0 bg-repeat" style={{
              backgroundImage: `url("https://img.freepik.com/free-photo/sandwich-with-cheese-black-bread_140725-5443.jpg?t=st=1746514589~exp=1746518189~hmac=72fb7f84b1b0f0ea4b67b13ab59b7f4c28cf17c1f75f295f5dddd7b31cfef87a&w=826")`,
              backgroundSize: '60px 60px'
            }}></div>
          </div>
        </div>

        {/* Right side - Login Form */}
        <div className="w-full md:w-1/2 flex items-center justify-center p-8 bg-white">
          <div className="w-full max-w-md">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-black mb-2">
                Welcome LITTLE CHEF.
              </h2>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="space-y-2">
                <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                >
                  Email address
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20"
                         fill="currentColor">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                    </svg>
                  </div>
                  <input
                      id="email"
                      type="email"
                      placeholder="you@example.com"
                      className={`w-full pl-10 h-12 px-4 bg-gray-900 border ${
                          errors.email ? "border-red-500" : "border-gray-700"
                      } rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors text-white`}
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: "Invalid email address",
                        },
                      })}
                  />
                </div>
                {errors.email && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.email.message}
                    </p>
                )}
              </div>

              <div className="space-y-2">
                <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20"
                         fill="currentColor">
                      <path fillRule="evenodd"
                            d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                            clipRule="evenodd"/>
                    </svg>
                  </div>
                  <input
                      id="password"
                      type="password"
                      placeholder="••••••••"
                      className={`w-full pl-10 h-12 px-4 bg-gray-900 border ${
                          errors.password ? "border-red-500" : "border-gray-700"
                      } rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors text-white`}
                      {...register("password", {
                        required: "Password is required",
                      })}
                  />
                </div>
                {errors.password && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.password.message}
                    </p>
                )}
              </div>

              <button
                  type="submit"
                  className="w-full h-12 bg-red-500 hover:bg-red-600 text-white rounded-lg font-medium transition-colors"
                  disabled={isSubmitting}
              >
                {isSubmitting ? "Signing in..." : "Sign in"}
              </button>
              <p className="text-gray-600">
                New to CuliConnect?{" "}
                <Link
                    to="/register"
                    className="text-red-500 hover:text-red-600 font-medium"
                >
                  Create an account
                </Link>
              </p>
            </form>

            <div className="mt-8">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-200"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">
                  Or continue with
                </span>
                </div>
              </div>

              <div className="mt-6 w-full">
                <button
                    type="button"
                    onClick={handleGoogleLogin}
                    className="w-full h-12 bg-gray-900 hover:bg-gray-800 text-white rounded-lg font-medium transition-colors flex items-center justify-center space-x-2"
                >
                  <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24">
                    <path
                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                        fill="#4285F4"
                    />
                    <path
                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                        fill="#34A853"
                    />
                    <path
                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                        fill="#FBBC05"
                    />
                    <path
                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                        fill="#EA4335"
                    />
                  </svg>
                  Google
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}