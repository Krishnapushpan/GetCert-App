import React ,{useState} from 'react'
import {ethers} from 'ethers';
import {Link,useNavigate} from 'react-router-dom'
import Logo from '../assets/images/course.png'
// import ABI from '../assets/Cert.json'
// import address from '../assets/deployed_addresses.json'
const frontpage = () => {
        window.onload = async () => {
                console.log("Front page loaded.");
                try {
                    const response = await fetch("/api/viewuser", {
                        method: "GET",
                        credentials: "include"
                    });
                    const data = await response.json();
                    console.log("User data:", data);
        
                    if (data.user === "admin") {
                        document.getElementById("admin").style.display = "block";
                    }
                } catch (error) {
                    console.error("Error fetching user data:", error);
                }
            };
        
            async function searchCertificate() {
            const candidateid = document.getElementById("candidateid").value.trim();
            console.log("Entered Candidate ID:", candidateid);
        
            if (!candidateid) {
                alert("Please enter a Candidate ID.");
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
                    // Store candidate ID in localStorage for use in viewcertificate.html
                    localStorage.setItem("candidateid", candidateid);
                    window.location.href = 'viewcertificate.html';
                } else {
                    alert("Certificate not found for the entered Candidate ID.");
                }
            } catch (error) {
                console.error("Error fetching certificate:", error);
                alert("An error occurred while fetching the certificate.");
            }
        }
        
  return (
    <div>
        <div className="flex justify-end  p-2 ">
                <button className="bg-sky-500 rounded w-[200px] h-10 p-2 pl-6 mr-4 text-justify text-slate-100" onClick={connectToMetamask} >Connect to MetaMask</button>
                <Link to="issuecerti" className="rounded w-40 h-10 p-2 pl-6 text-justify ">Issue certificate</Link>
        </div>
        <div className="text-center text-4xl font-extrabold">
                <p>Certificate Dapp</p>
        </div>
        <div className=" ">
                <div className=" flex justify-center items-center mt-12 " >
                    <img className="w-40 h-40" src={Logo} alt=""/>
                </div>
        </div>
        <div className="flex justify-center items-center  mt-12 ">
                <input className="border border-sky-500"  id='candidateid'name='ID' type="number" placeholder="enter certificate ID to View"/>
                <button className="border border-sky-500 bg-sky-500 rounded w-[200px] text-slate-100 ml-4" type="button" name="" value="search" onClick={getCertificate}>Get Certificate</button>
        </div>
</div>
  )
}

export default frontpage