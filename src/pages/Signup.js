import './Signup.css';
function Signup() {
  return (
    <div className="signup-background">
      <div className="signup-card">
        <h1>Create Account</h1>
        <p>Sign up to get started!</p>

        <form>
          <input type="text" placeholder="Full Name" />
          <input type="email" placeholder="Email Address" />
          <input type="password" placeholder="Password" />
          <input type="password" placeholder="Confirm Password" />

          <button type="submit">Create Account</button>
        </form>
        <div>
          <p>
          Already have an account? <a href="/login">Log In</a>
        </p>

        </div>

        
      </div>
    </div>
  );
}

export default Signup;