import RegisterForm from "./form";
import RegisterHeader from "./header";

export default function Register() {
  return (
    <div className="flex w-full flex-col gap-5 lg:max-w-[700px]">
      <div className="grid lg:gap-5">
        <RegisterHeader />
        <RegisterForm />
      </div>
    </div>
  );
}
