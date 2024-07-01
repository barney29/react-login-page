export default function FormInput() {
  return (
    <form>
      <input className="email" placeholder="Email Address" type="text" />
      <input className="password" placeholder="Password" type="password" />

      <div className="form-desc">
        <div className="desc-remember-me">
          <input className="remember-checkbox" type="checkbox" />
          <p>Remember Me</p>
        </div>
        <a href="#">Forgot Password?</a>
      </div>
    </form>
  );
}
