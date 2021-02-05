import React , {useState} from 'react'
import './login.css'
import { Link , useHistory} from 'react-router-dom';
import logo from '../Pictures/amazon_logo2.png';
import { auth } from '../Firebase/firebase';
function Login() {
    const history = useHistory();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const login = (event) => {
        event.preventDefault(); //this prevents from page refresh
        
        auth.signInWithEmailAndPassword(email, password).then((auth) => {
             history.push("/");
        })
            .catch((e) => alert(e.message));
    }
     const register = (event) => {
         event.preventDefault(); //this prevents from page refresh
         
         auth.createUserWithEmailAndPassword(email, password).then((auth) => {
             history.push("/");
         })
             .catch((e) => alert(e.message));
    }
    return (
        <div className="login">
            <Link to="/">
                <img src={logo } alt="logo here" className="login_image"></img>
            </Link>
            <div className="login_container">
            <h1>Sign In</h1>
            <form>
                <h5>E-mail</h5>
                <input type="email" value={email} onChange={event=>setEmail(event.target.value)}></input>
                 <h5>Password</h5>
                <input type="password" value={password} onChange={event=>setPassword(event.target.value)}></input>
                <button onClick={login} type="submit" className="login_signinbutton">Sign In</button>

                </form>
                  <p className="login_text">
               By continuing, you agree to Amazon's <a href="#">Conditions of Use</a> and <a href="#">Privacy Notice</a>. 
            </p>
            <button onClick={register} className="login_registerbutton">Create your Amazone Account</button>
            </div>
          
        </div>
    )
}

export default Login
