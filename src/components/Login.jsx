import { sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth";
import auth from "../firebase/firebase.config";
import { useRef, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";

const Login = () => {
    const[loginError, setLoginError] = useState('');
    const[success, setSuccess] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const emailRef = useRef(null);

    const handleLogin = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);

        // reset error and success
        setLoginError('');
        setSuccess('');

        // Remove success toast after 3 seconds
        setTimeout(() => {
            setSuccess('');
        }, 3000);
        // Remove error toast after 3 seconds
        setTimeout(() => {
            setLoginError('');
        }, 3000);

        // Login user
        signInWithEmailAndPassword(auth, email, password)
        .then(result => {
            console.log(result.user);
            
            if(result.user.emailVerified){
              setSuccess('Login Successfully');
            }else{
              alert("Please Varify your email");
            }
        })
        .catch(error => {
            console.error(error);
            setLoginError(error.message);
        })
    }
    const handleForgetPassword = () =>{
      const email = emailRef.current.value;
      if(!email){
        setLoginError("Please Provide an email");
        setTimeout(() => {
          setLoginError('');
      }, 3000);
      }
      else if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){
        setLoginError("Please Provide an valid email");
        setTimeout(() => {
          setLoginError('');
      }, 3000);
      }

      // send validation email
      sendPasswordResetEmail(auth, email)
      .then(() => {
          // console.log(result.user);
          setSuccess('Please Check the Email');
          setTimeout(() => {
            setSuccess('');
        }, 3000);
      })
      .catch(error => {
          console.error(error);
          setLoginError(error.message);
          setTimeout(() => {
            setLoginError('');
        }, 3000);
      })
      
    }
    return (
        <div className="hero min-h-[calc(100vh-116px)] bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleLogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input 
            type="email" 
            ref={emailRef}
            name="email" 
            placeholder="email" 
            className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type={showPassword ? "text" : "password"} name="password" placeholder="password" className="input input-bordered" required />
          <span className="absolute mt-14 ml-72" onClick={()=> setShowPassword(!showPassword)}>
	            {
	              showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
	            }
            </span>
          <label className="label">
            <a onClick={handleForgetPassword} href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
        <div className="text-center mt-2">
          <p>New to this website? Please <Link className="text-lime-600 font-bold" to="/register">Register</Link></p>
        </div>
      </form>

      {/* Success and Error message */}
      {
        loginError && <div className="toast toast-center toast-middle bg-red-500 rounded-3xl">
        <div className="alert alert-info">
          <span>{loginError}</span>
        </div>
      </div>
      }
      
      {
        success && <div className="toast toast-center toast-middle bg-blue-500 rounded-3xl">
        <div className="alert alert-info">
          <span>{success}</span>
        </div>
      </div>
      }
    </div>
  </div>
</div>
    );
};

export default Login;