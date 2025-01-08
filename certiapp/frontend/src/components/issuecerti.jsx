import React ,{useState}from 'react'
import {Link} from 'react-router-dom'
import ABI from '../assets/Cert.json'
import address from '../assets/deployed_addresses.json'
const issuecerti = () => {
   async function issuecerti(event){
       event.preventDefault();
       const coursename =document.getElementById("coursename").value;
       const candidateid = document.getElementById("candidateid").value;
       const candidatename = document.getElementById("candidatename").value;
       const selectgrade = document.getElementById("selectgrade").value;
       const issuedate = document.getElementById("issuedate").value;
      
    //    console.log(coursename, candidateid,candidatename,selectgrade,issuedate);

       const response = await fetch("/api/issuecerti",{
           method:"POST",
           credentials:'include',
           headers:{
               'Content-Type':'application/json'
           },
           body:JSON.stringify(
           {
               coursename: coursename,
               candidateid:candidateid,
               candidatename:candidatename,
               selectgrade:selectgrade,
               issuedate:issuedate
           })
       });
       console.log(response.status);
       if(response.status ==200)
       {
        window.location.href="frontpage.html";
        alert("you don't have permission to issue certificate")
       }
       else if(response.status == 201){
        window.location.href="frontpage.html";
       //get the existing courses from localstorage 
       let certificate = JSON.parse(localStorage.getItem('certificate')) || [];
       //create a new object 
       const newcerti = {
               coursename: coursename,
               candidateid:candidateid,
               candidatename:candidatename,
               selectgrade:selectgrade,
               issuedate:issuedate
       };
       // add the new course to the array

       certificate.push(newcerti);
       localStorage.setItem('certificate',JSON.stringify(certificate));

       console.log("course added successfully")
       alert("course added successfully")
       }
       else if(response.status == 400){
        console.log("username already exist")
           alert("course already exist")
          
       }

   }
  return (<>
       <div className='p-8'><Link to="/" className="bg-sky-500 rounded w-[200px] h-10 p-4 mt-12 mr-4 text-justify text-slate-100">Home</Link></div>
    <div className=" bg-gray-400  border border-slate-500 h-4/5 w-4/5 ml-20 mt-8 h-4/5">

<p className="ml-12 mt-10 text-2xl">Issue New Certificate</p><br />
<form onSubmit={handleSubmit} >
        <label className='ml-16'  htmlFor="">ID:</label>
        <input type="number" id="candidateid" name="id" onChange={handleChange}/><br /><br />
        <label htmlFor=""  className='ml-16'>name</label>
        <input type="text" id="candidatename" name="name" onChange={handleChange}/><br /><br />
        <label htmlFor=""  className='ml-16'>course</label>
        <input type="text" id="coursename" name="course" onChange={handleChange}/><br /><br />
        <label htmlFor=""  className='ml-16'>grade</label>
        <input type="text" id="selectgrade" name="grade"onChange={handleChange} /><br /><br />
        <label htmlFor=""  className='ml-16'>Date</label>
        <input type="date" id="issuedate" name="date"onChange={handleChange} /><br /><br />
        <div className='p-8 text-justify '><input className="bg-sky-500 rounded w-[200px] h-10 p-2 pl-6 mr-4 text-justify text-slate-100" type="submit" value='Submit'/></div>
        </form>
</div>

</>
  )
}

export default issuecerti