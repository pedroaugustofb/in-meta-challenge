import RegisterDialog from "./dialog";
import RegisterForm from "./form";
import RegisterHeader from "./header";

export default function Register() {
  return (
    <>
      <RegisterDialog />
      <div className="flex w-full flex-col gap-5 lg:max-w-[500px]">
        <div className="grid lg:gap-5 w-full">
          <RegisterHeader />
          <RegisterForm />
        </div>
      </div>
    </>
  );
}
