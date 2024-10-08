/*import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import '../assets/CSS/loginPage.css';

function LoginPage() {
    // const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const navigate = useNavigate()

    axios.defaults.withCredentials = true;

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:5050/api/user/login', {email, password})
        .then(result => {
            console.log(result);
            if(result.data === "Success") {
                navigate('/home')
            }
        })
        .catch(err => console.log(err))
    };
    
    return (
        <div className="login-container">
            <div className="login-box"> 
                <h2>Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label>
                            <strong>Email</strong>
                        </label>
                        <input
                            type="email"
                            placeholder="Enter email"
                            autoCapitalize="off"
                            name="email"
                            className="form-control rounded-7"
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label>
                            <strong>Password</strong>
                        </label>
                        <input
                            type="password"
                            placeholder="Enter password"
                            autoCapitalize="off"
                            name="email"
                            className="form-control rounded-7"
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="btn btn-success w-100 rounded-7 bg-primary">
                        Login
                    </button>
                </form>
                <p>Dont have an account? <Link to="/register" className="login-link">Signup</Link></p>
                
            </div>
        </div>
    )
}

export default LoginPage;*/

import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import '../assets/CSS/loginPage.css';

function LoginPage() {
    // const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const navigate = useNavigate()

    axios.defaults.withCredentials = true;

    const handleSubmit = async(e) => {
        e.preventDefault()
        try {
            const response = await axios.post(
              "http://localhost:5050/api/user/login",
              {
                email,
                password,
              },
              { withCredentials: true, credentials: "include" }
            );
      
            if (response.status === 200) {
              navigate("/user-home"); // Redirect to main page or dashboard
            } else {
              setError("Login failed. Please check your credentials and try again.");
            }
          } catch (error) {
            if (error.response) {
              setError(
                error.response.data.message || "Login failed. Please try again."
              );
            } else if (error.request) {
              setError(
                "No response from server. Please check your network connection."
              );
            } else {
              setError("An unexpected error occurred. Please try again.");
            }
            console.log("Error during login", error);
          }
        };
    return (
        <div className="login-container">
            <div className="login-box"> 
                <h2>Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label>
                            <strong>Email</strong>
                        </label>
                        <input
                            type="email"
                            placeholder="Enter email"
                            autoCapitalize="off"
                            name="email"
                            className="form-control rounded-7"
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label>
                            <strong>Password</strong>
                        </label>
                        <input
                            type="password"
                            placeholder="Enter password"
                            autoCapitalize="off"
                            name="email"
                            className="form-control rounded-7"
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="btn btn-success w-100 rounded-7 bg-primary">
                        Login
                    </button>
                </form>
                <p>Dont have an account? <Link to="/register" className="login-link">Signup</Link></p>
                
            </div>
        </div>
    )
}

export default LoginPage;