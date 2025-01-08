import React from 'react'
import Logo from '../assets/images/course.png'

const viewcertificate = () => {
  window.onload = async () => {
    // Retrieve the candidate ID from localStorage
    const candidateid = localStorage.getItem("candidateid");
    console.log("Candidate ID from localStorage:", candidateid);

    if (!candidateid) {
        alert("No certificate ID found. Please try again.");
        window.location.href = 'frontpage.html';
        return;
    }

    try {
        // Fetch certificate details using candidate ID
        const response = await fetch(`http://127.0.0.1:8000/viewcertificate?candidateid=${candidateid}`, {
            method: "GET",
            credentials: "include",
            headers: { 'Content-Type': 'application/json' }
        });

        if (response.ok) {
            const data = await response.json();
            console.log("Fetched Certificate Data:", data);

            // Populate the certificate details in HTML elements
            document.getElementById("candidatename").textContent = data.candidatename || "Not Available";
            document.getElementById("coursename").textContent = data.coursename || "Not Available";
            document.getElementById("selectgrade").textContent = data.selectgrade || "Not Available";
            document.getElementById("issuedate").textContent = data.issuedate || "Not Available";
        } else {
            alert("Failed to fetch certificate data. Redirecting back to the search page.");
            window.location.href = 'frontpage.html';
        }
    } catch (error) {
        console.error("Error fetching certificate:", error);
        alert("An error occurred while fetching the certificate.");
        window.location.href = 'frontpage.html';
    }
};

        // const { name, course, grade, date } = output;
  return (
    <div className="border bg-slate-100 border-slate-400 w-9/12 ml-44  p-8 mt-14"> 
        
<div className="border  border-slate-400 bg-slate-100 w-9/12 ml-32  mt-10">

    <div className="text-center">
        <h2>Kerala Blockchain Academy</h2>
    </div>
    <div className=" flex justify-center items-center mt-12 ">
        <img  className="w-40 h-40" src={Logo} alt="" /> 
    </div>
    <div className="text-center mt-4">
        <p>This is certify that <b id='candidatename'></b></p>
    </div>
    <div className="text-center mt-4">
        <p> has successfully completed <b id='coursename'></b></p>
    </div>
    <div  className="text-center mt-4">
    <p>with <b id='selectgrade'></b> on <b id='issuedate'></b></p>
    </div>
</div>
    </div>

  )
}

export default viewcertificate