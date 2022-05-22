function LoginForm() {
  return (
    <form className="form">
      <label for="username" className="form__label">Usúario:</label>
      <input className="input input--icon input--user" id="username" type={"text"} />

      <label for="password" className="form__label">Senha:</label>
      <input className="input input--icon input--password" id="password" type={"text"} />
    </form>
  );
}

export default LoginForm;
