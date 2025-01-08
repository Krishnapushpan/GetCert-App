import React from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
  async function handlesubmit(event){
    event.preventDefault();
    const firstname =document.getElementById("FirstName").value;
    const lastname = document.getElementById("LastName").value;
    const username = document.getElementById("UserName").value;
    const password = document.getElementById("Password").value;
    const userrole = document.getElementById("UserRole").value;

    console.log(firstname,lastname,username,password,userrole);

    const response = await fetch("http://127.0.0.1:8000/signup",{
        method:"POST",
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(
        {
            firstname: firstname,
            lastname:lastname,
            username:username,
            password:password,
            role:userrole
        })
    });
    console.log(response.status);
    if(response.status == 201){
    window.location.href="/login.html";
    console.log("sign up successfully")
    alert("sign up successfully")
    }
    else {
        if(response.status == 400){
     console.log("username already exist")
        alert("username already exist")
    }}

    // else{
    //     alert("server error") 
    //     console.log("server error")
    // }
}

  return (
    <div className="bg-[url('/lib.jpg')] bg-no-repeat bg-cover">
      <div className="flex">
        <div className="flex">
          <p className="text-white font-extrabold font-mono text-[150px]">Liara</p>
          <p className="text-white font-extrabold font-mono mt-24 text-2xl ml-8">
            Find Joy in Reading
          </p>
        </div>
      </div>
      <form onSubmit={handlesubmit}>
        <p className="text-white text-center text-4xl py-8 font-extrabold">Sign Up</p>

        <label
          className="text-white text-2xl ml-12 py-8 font-extrabold"
          htmlFor="username"
        >
          Username:
        </label>
        <input
          className="bg-white h-12 w-[500px] ml-12 border border-slate-300 rounded-lg hover:bg-amber-700/40 hover:placeholder:text-white"
          type="text"
          id="username"
          placeholder="Enter your username"
        />
        <br />

        <label
          className="text-white text-2xl ml-12 py-8 font-extrabold"
          htmlFor="emailid"
        >
          Email Id:
        </label>
        <input
          className="bg-white h-12 w-[500px] ml-12 border border-slate-300 rounded-lg hover:bg-amber-700/40 hover:placeholder:text-white"
          type="email"
          id="emailid"
          placeholder="Enter your Email id"
        />
        <br />

        <label
          className="text-white text-2xl ml-12 py-8 font-extrabold"
          htmlFor="password"
        >
          Password:
        </label>
        <input
          className="bg-white h-12 w-[500px] ml-12 border border-slate-300 rounded-lg hover:bg-amber-700/40 hover:placeholder:text-white"
          type="password"
          id="password"
          placeholder="Enter your Password"
        />
        <br />

        <label
          className="text-white text-2xl ml-12 py-8 font-extrabold"
          htmlFor="userrole"
        >
          Role:
        </label>
        <br />
        <select
          className="h-12 w-[500px] ml-12 border border-slate-300 rounded-lg"
          id="userrole"
        >
          <option value="admin">Admin</option>
          <option value="user">User</option>
        </select>
        <br />

        <button
          className="h-12 ml-12 mt-8 text-white text-2xl font-extrabold w-[500px] rounded-lg bg-amber-700 hover:opacity-50"
          type="submit"
        >
          Sign Up
        </button>
        <p className="mt-8 ml-20 text-white text-2xl font-extrabold">
          Already have an account?{' '}
          <Link className="hover:text-4xl" to="/login">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Signup;
