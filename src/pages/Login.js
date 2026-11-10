import "./Login.css";
import { FaEnvelope, FaLock, FaEyeSlash, FaArrowRight } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";




function LoginPage() {
  const navigate=useNavigate();
  return(
    <div className="background-container">
      <div className="card-container">
        <h2>Welcome Back!</h2>
        <p>Log in to continue to Artify AI 💙</p>
        
        <form className="login-form">
          <div className="input-group">
            <FaEnvelope className="input-icon" />
            <input type="email" placeholder="Email Address" required />
          </div>
          
          <div className="input-group">
            <FaLock className="input-icon" />
            <input type="password" placeholder="Password" required />
            <FaEyeSlash className="password-toggle-icon" />
          </div>
          
          <div className="option">
            <label>
              <input type="checkbox" />
              <span>Remember Me</span>
            </label>
            <a href="#forgot">Forgot Password?</a>
          </div>
          
          <button type="submit" className="login-btn" onClick={()=> navigate("/dashboard")}>
            Log In <FaArrowRight />
          </button>
        </form>
        
        <div className="divider">
          <span>or</span>
        </div>
        
        <button type="button" className="google-btn">
          <FcGoogle className="google-icon" />
          Continue with Google
        </button>
        
        <p className="signup-text">
          Don't have an account? <a href="/signup">Sign Up</a>
        </p>
      </div>
    </div>

  );
}

export default LoginPage;