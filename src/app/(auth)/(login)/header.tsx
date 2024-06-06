export default function LoginHeader() {
  return (
    <div className="grid">
      <h1 className="text-2xl leading-10">Bem vindo de volta!</h1>
      <div>
        <p className="text-base text-gray-800">
          Ainda não tem uma conta?{" "}
          <a href="/register" className="text-blue-700 duration-300 hover:text-blue-800 border-b-2 border-blue-800">
            Cadastre-se
          </a>
        </p>
      </div>
    </div>
  );
}
