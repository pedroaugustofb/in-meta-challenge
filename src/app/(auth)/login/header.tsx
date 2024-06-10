import GoToHome from "@/components/buttons/go-back-home";

export default function LoginHeader() {
  return (
    <div className="grid">
      <GoToHome />
      <h1 className="text-2xl leading-10">Welcome back!</h1>
      <div>
        <p className="text-base text-gray-800">
          Do not have an account?{" "}
          <a href="/register" className="text-blue-700 duration-300 font-semibold hover:text-blue-800 border-b-2 border-blue-800">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
}
