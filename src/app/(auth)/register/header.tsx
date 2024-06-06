import GoToHome from "@/components/ui/buttons/go-back-home";

export default function RegisterHeader() {
  return (
    <div className="grid">
      <GoToHome />
      <h1 className="text-2xl leading-10">Register</h1>
      <div>
        <p className="text-base text-gray-800">
          Already have an account?{" "}
          <a href="/login" className="text-blue-700 duration-300 font-semibold hover:text-blue-800 border-b-2 border-blue-800">
            Sign in
          </a>
        </p>
      </div>
    </div>
  );
}
