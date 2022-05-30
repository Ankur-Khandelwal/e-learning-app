export default function LoginForm(){
  return(
    <section class="login-form-container">
      <fieldset>
        <legend><h1>Login</h1></legend>
        <input type="text" name="email" placeholder="email"/>
        <input type="password" name="password" autocomplete placeholder="password"/>
        <button id="login-submit">Login</button>
        <p>Don't have an account?</p><a href="">Create one</a>
        <div class="login-variants">
          <span><a href="#">Google icon</a></span>
          <span><a href="#">Facebook icon</a></span>
          <span><a href="#">Github icon</a></span>
        </div>
      </fieldset>
    </section>
  )
}