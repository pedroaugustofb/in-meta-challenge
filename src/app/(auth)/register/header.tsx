export default function RegisterHeader() {
  return (
    <div className="grid">
      <h1 className="text-2xl lg:text-3xl leading-10">Cadastre-se</h1>
      <div>
        <p className="text-base text-gray-800 lg:text-lg">
          Você já tem uma conta?{" "}
          <a href="/" className="text-blue-700 duration-300 hover:text-blue-800 border-b-2 border-blue-800">
            Entrar
          </a>
        </p>
      </div>
    </div>
  );
}
