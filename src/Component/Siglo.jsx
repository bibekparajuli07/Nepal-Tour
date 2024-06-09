 import {useState} from 'react'
import "./Siglo.css"
import log from "../assets/log.png"
const Siglo = () => {
  const [isSignUp, setIsSignUp] = useState(true);

  const toggleForm = () => {
    setIsSignUp(!isSignUp);
  };

  return (
    <div className="simg">
      <img src={log} alt="" />
        <div className="form-container">
              
          {isSignUp ? (
            <div className="form-content">
              <h2>Sign Up</h2>
              <form>
                <div>
                  <label>Username:</label>
                  <input type="text" name="username" required />
                </div>
                <div>
                  <label>Email:</label>
                  <input type="email" name="email" required />
                </div>
                <div>
                  <label>Password:</label>
                  <input type="password" name="password" required />
                </div>
                <button type="submit">Register</button>
              </form>
              <p>
                Already have an account? <button onClick={toggleForm}>Login</button>
              </p>
            </div>
            
          ) : (
            <div className="form-content">
              <h2>Login</h2>
              <form>
                <div>
                  <label>Username:</label>
                  <input type="text" name="username" required />
                </div>
                <div>
                  <label>Password:</label>
                  <input type="password" name="password" required />
                </div>
                <button type="submit">Login</button>
              </form>
              <p>
                Donot have an account? <button onClick={toggleForm}>Sign Up</button>
              </p>
              
            </div>
          )}
    </div>
    
    </div>
  );
};

export default Siglo