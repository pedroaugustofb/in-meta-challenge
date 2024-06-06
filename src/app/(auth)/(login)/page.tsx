import LoginHeader from "./header";

export default function Login() {
  return (
    <div className="flex w-full flex-col gap-5 lg:max-w-[500px]">
      <div className="grid lg:gap-5 w-full">
        <LoginHeader />
      </div>
    </div>
  );
}
