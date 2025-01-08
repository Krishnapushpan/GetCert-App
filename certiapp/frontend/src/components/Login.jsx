import React from 'react';
import { Link ,useNavigate} from 'react-router-dom';
import { useState } from 'react';

// import { useNavigate} from 
// import frontpage from './frontpage';

const Login = () => {
  const [username,setusername]= useState('');
  const [password,setPassword]= useState('');
  const navigate=useNavigate();
  const handlesubmit =async (e) =>{
      e.preventDefault();
      const loginDetails= {
          username,
          password,
      };
      const res =await fetch('/api/login',{
          method:"POST",
          headers:{"Content-Type":"application/json"},
          body:JSON.stringify(loginDetails),
          credentials:'include',

      })
      if(res.ok){
        const data =await res.json();
        localStorage.setItem('username',username);
      alert(`logged in as  ${data.userType}`)
        navigate('/frontpage');
    }
    else{
       alert('Please check your credentials');
    }
}
  return (
    <div>
    <div className="bg-[url('/lib.jpg')] bg-no-repeat bg-cover">
      <div className="flex">
    
      </div>
      <form onSubmit={handlesubmit}>
        <div className="bg-amber-800/30 h-[490px] w-[590px] rounded-2xl ml-[600px] leading-loose">
          <p className="text-white text-center text-4xl py-8 font-extrabold">Login</p>

          <label
            className="text-white text-center text-2xl ml-12 py-8 font-extrabold"
            htmlFor="username"
          >
            Username:
          </label>
          <input
            className="bg-white h-12 w-[500px] ml-12 border border-slate-300 rounded-lg hover:bg-amber-700/40 hover:placeholder:text-white"
            type="text"
            id="username"
            value={username}
            onChange={(e) => setusername(e.target.value)}
            placeholder="Enter your username"
          />
          <br />

          <label
            className="text-white text-center text-2xl ml-12 py-8 font-extrabold"
            htmlFor="password"
          >
            Password:
          </label>
          <input
            className="bg-white h-12 w-[500px] ml-12 border border-slate-300 rounded-lg hover:bg-amber-700/40 hover:placeholder:text-white"
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your Password"
          />
          <br />

          <button
            className="h-12 ml-12 mt-8 text-white text-2xl font-extrabold w-[500px] rounded-lg bg-amber-700 hover:opacity-50"
            type="submit"
          >
            Login
          </button>
          <p className="mt-8 ml-20 text-white text-2xl font-extrabold">
            Don't have an account?{' '}
            <Link className="hover:text-4xl" to="/signup">
              Sign Up
            </Link>
          </p>
        </div>
      </form>
    </div>
    </div>
  );
};

export default Login;
