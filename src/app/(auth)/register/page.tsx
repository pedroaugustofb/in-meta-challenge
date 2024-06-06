export default function Register() {
  return (
    <div className="flex w-full flex-col gap-5 md:max-w-[700px]">
      <div className="grid md:gap-5">
        <h1 className="text-2xl tracking-normal sm:text-3xl sm:tracking-normal md:leading-5">Venha voar conosco!</h1>
        <div>
          <p className="text-base text-gray-800 md:text-lg">
            Você já tem uma conta?{" "}
            <a href="/" className="text-blue-700 duration-300 hover:text-blue-800">
              Entrar
            </a>
          </p>
        </div>
      </div>

      <div className="flex w-full items-center gap-5">
        <p className="text-xs text-gray-900">Ou continue com</p>
        <hr className="h-0.5 flex-1 bg-gray-700" />
      </div>

      {/* Login with Social Media Buttons
  <div className="grid w-full grid-cols-3 gap-5">
    <SocialLoginButtons />
  </div> */}

      <div className="flex justify-center gap-2"></div>
    </div>
  );
}
