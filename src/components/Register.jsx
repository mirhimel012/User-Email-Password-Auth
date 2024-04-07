import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../firebase/firebase.config";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Register = () => {

    const[registerError, setRegisterError] = useState('');
    const[success, setSuccess] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleRegister = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const accepted = e.target.terms.checked;
        console.log(email, password, accepted);

        // reset error and success
        setRegisterError('');
        setSuccess('');

        // password must be up to 6 character
        if(password.length < 6){
            setRegisterError('Password should be at least 6 characters')
            setTimeout(() => {
                setRegisterError('');
            }, 4000);
            return;
        }
        // Password should have at least one uppercase character
        else if(!/[A-Z]/.test(password)){
            setRegisterError('Password should have at least one uppercase character')
            setTimeout(() => {
                setRegisterError('');
            }, 4000);
            return;
        }
        // Terms and condition
        else if(!accepted){
          setRegisterError('Plese accept our terms and condition')
            setTimeout(() => {
                setRegisterError('');
            }, 4000);
          return;
        }

        // Remove success toast after 3 seconds
        setTimeout(() => {
            setSuccess('');
        }, 3000);
        // Remove error toast after 3 seconds
        setTimeout(() => {
            setRegisterError('');
        }, 3000);


        //create user
        createUserWithEmailAndPassword(auth, email, password)
        .then(result => {
            console.log(result.user);
            setSuccess('User Created Successfully');
        })
        .catch(error => {
            console.error(error);
            setRegisterError(error.message);
        })
    }
    return (
        <div>
            <div className="hero min-h-[calc(100vh-116px)] bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Register now!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleRegister} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered hover:shadow-green-400 shadow-md" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type={showPassword ? "text" : "password"} name="password" placeholder="password"  className="relative input input-bordered hover:shadow-green-400 shadow-md" required /> 
          <span className="absolute mt-14 ml-72" onClick={()=> setShowPassword(!showPassword)}>
            {
              showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
            }
            </span>
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div>
          <input className="mr-2" type="checkbox" name="terms" id="terms" />
          <label htmlFor="terms">Accept our <a className="text-green-700" href="">Terms and Conditions</a></label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary hover:bg-blue-700 hover:text-xl">Register</button>
        </div>
      </form>

      {/* Success and Error message */}
      {
        registerError && <div className="toast toast-center toast-middle bg-red-500 rounded-3xl">
        <div className="alert alert-info">
          <span>{registerError}</span>
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
        </div>
    );
};

export default Register;