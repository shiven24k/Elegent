import React, { useState } from "react";
import homeImage from "../Assets/Pasteimg.png";
import eye from "../Assets/eye.svg";
import eyeoff from "../Assets/eye-off.svg";
import axios from "axios";
import { useNavigate } from "react-router-dom";


function SignupSignin() {

  const navigate = useNavigate();

  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [usernameEmail, setUsernameEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignup, setIsSignup] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  const toggleAction = () => {
    setIsSignup(!isSignup);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSignin = () => {
    console.log(usernameEmail, password);
    setFullName("");
    setUsername("");
    setEmail("");
    setPassword("");
    const data = {
      email: usernameEmail,
      password : password
    }
    axios.post('https://reqres.in/api/login',data)
    .then((res)=>{
      console.log("Success");
      if(res.data.token){
        console.log("Login Success");
        localStorage.setItem('token',res.data.token);
        navigate('/home')
      }
    })
    .catch((err)=>{
      console.log(err);
    })
  };

  const handleSignup = () => {
    console.log(fullName, username, email, password);
    setFullName("");
    setUsername("");
    setEmail("");
    setPassword("");
  };

  return (
    <div className="flex relative space-x-40 ">
        {/* image */}
        <div className="left-side flex flex-col justify-start items-start w-[456px] gap-8 bg-auto">
          <p className="z-10 text-black text-2xl font-bold mb-4 absolute left-[15%] ">3legent
          <span className="text-2xl font-medium text-center text-[#6c7275]">
                .
              </span></p>
           
          <img src={homeImage} className="absolute top-0 left-0 w-[35%] h-screen bg-cover" />
        </div>
        {/* form */}
        <div className=" flex items-center justify-center p-20 ">
          <div className="  flex flex-col justify-start items-end w-[456px] gap-8 bg-[#fefefe]">
            <Header isSignup={isSignup} toggleAction={toggleAction} />
            <Form
              isSignup={isSignup}
              showPassword={showPassword}
              togglePasswordVisibility={togglePasswordVisibility}
              fullName={fullName}
              setFullName={setFullName}
              username={username}
              setUsername={setUsername}
              email={email}
              setEmail={setEmail}
              usernameEmail={usernameEmail}
              setUsernameEmail={setUsernameEmail}
              password={password}
              setPassword={setPassword}
            />
            <SubmitButton isSignup={isSignup} handleSignin={handleSignin} handleSignup={handleSignup} />
          </div>
        </div>
      </div>
    
  );
}

const Header = ({ isSignup, toggleAction }) => (
  <div className="flex flex-col justify-start items-start relative gap-6">
    <div className="flex justify-start items-start self-stretch  ">
      <div className="flex justify-start items-start flex-grow relative gap-4">
        <p className="flex-grow w-[456px] text-[40px] font-medium text-left text-[#141718]">
          {isSignup ? "Sign Up" : "Sign In"}
        </p>
      </div>
    </div>
    <p className="self-stretch   w-[456px] text-base text-left">
      <span className="self-stretch   w-[456px] text-base text-left text-[#6c7275]">
        {isSignup ? "Already have an account?" : "Don't have an account?"}
      </span>
      <span className="self-stretch   w-[456px] text-base text-left text-[#141718]"> </span>
      <a
        className="cursor-pointer self-stretch   w-[456px] text-base font-semibold text-left text-[#38cb89]"
        onClick={toggleAction}
      >
        {isSignup ? "Sign in" : "Sign up"}
      </a>
    </p>
  </div>
);

const Form = ({
  isSignup,
  showPassword,
  togglePasswordVisibility,
  fullName,
  setFullName,
  username,
  setUsername,
  email,
  setEmail,
  usernameEmail,
  setUsernameEmail,
  password,
  setPassword,
}) => (
  <div className="flex flex-col justify-start items-start self-stretch   gap-6">
    <div className="flex flex-col justify-start items-start self-stretch   gap-8">
      {isSignup && <InputField placeholder="Your name" value={fullName} onChange={(e) => setFullName(e.target.value)} />}
      {isSignup ? (
        <>
          <InputField placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
          <InputField placeholder="Email address" value={email} onChange={(e) => setEmail(e.target.value)} />
        </>
      ) : (
        <InputField placeholder="Username or Email address" value={usernameEmail} onChange={(e) => setUsernameEmail(e.target.value)} />
      )}
      <PasswordField showPassword={showPassword} value={password} onChange={(e) => setPassword(e.target.value)} togglePasswordVisibility={togglePasswordVisibility} />
      {isSignup && <Agreement />}
      {!isSignup && <RememberMe />}
    </div>
  </div>
);

const InputField = ({ placeholder, value, onChange }) => (
  <div className="flex flex-col justify-start items-start   h-10 w-[456px] gap-2.5 pb-2 border-t-0 border-r-0 border-b border-l-0 border-[#e8ecef]">
    <div className="flex justify-start items-center self-stretch   relative gap-4 pb-2 border-t-0 border-r-0 border-b border-l-0 border-[#e8ecef]">
      <div className="flex-grow h-8 relative">
        <input
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className="custom-input w-[456px] absolute left-0 top-0 text-base text-left placeholder-[#6c7275] border-none bg-transparent"
        />
      </div>
    </div>
  </div>
);

const PasswordField = ({ showPassword, value, onChange, togglePasswordVisibility }) => (
  <div className="flex flex-col justify-start items-start   h-10 w-[456px] gap-2.5 pb-2 border-t-0 border-r-0 border-b border-l-0 border-[#e8ecef]">
    <div className="flex justify-start items-center self-stretch   relative gap-4 pb-2 border-t-0 border-r-0 border-b border-l-0 border-[#e8ecef]">
      <div className="flex-grow h-8 relative">
        <input
          type={showPassword ? "text" : "password"}
          placeholder="Password"
          value={value}
          onChange={onChange}
          className="custom-input w-[456px] absolute left-0 top-0 text-base text-left placeholder-[#6c7275] border-none bg-transparent"
        />
        <img
          src={showPassword ? eyeoff : eye}
          className="cursor-pointer absolute right-0 top-0 h-7 w-7"
          onClick={togglePasswordVisibility}
        />
      </div>
    </div>
  </div>
);

const Agreement = () => (
  <div className="flex justify-start items-center self-stretch   relative gap-3">
    <input
      id="link-checkbox"
      type="checkbox"
      value=""
      className="cursor-pointer w-4 h-4 accent-slate-50 bg"
    />
    <label htmlFor="link-checkbox" className="flex-grow w-[420px] text-base text-left">
      <span className="flex-grow w-[420px] text-base text-left text-[#6c7275]">
        I agree with{" "}
      </span>
      <span className="cursor-pointer flex-grow w-[420px] text-base font-semibold text-left text-[#141718]">
        Privacy Policy
      </span>
      <span className="flex-grow w-[420px] text-base text-left text-[#6c7275]"> and </span>
      <span className="cursor-pointer flex-grow w-[420px] text-base font-semibold text-left text-[#141718]">
        Terms of Use
      </span>
    </label>
  </div>
);

const RememberMe = () => (
  <div className="flex justify-between items-center self-stretch   w-[456px]">
    <div className="flex items-center gap-2">
      <input
        id="remember-me"
        type="checkbox"
        className="w-4 h-4 accent-slate-50 bg"
      />
      <label htmlFor="remember-me" className="text-base text-left text-[#6c7275]">
        Remember Me
      </label>
    </div>
    <a href="#" className="text-base font-semibold text-left text-[#000000]">
      Forgot Password?
    </a>
  </div>
);

const SubmitButton = ({ isSignup, handleSignin, handleSignup }) => (
  <div className="cursor-pointer flex justify-center items-center   w-[456px] relative gap-2 px-10 py-2.5 rounded-lg bg-[#141718]">
    <button onClick={isSignup ? handleSignup : handleSignin} className="  text-base font-medium text-center text-white">
      {isSignup ? "Sign Up" : "Sign In"}
    </button>
  </div>
);

export default SignupSignin;