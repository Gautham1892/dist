import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import "./LoginPage.css";

axios.defaults.baseURL = "http://localhost:8000"

function LoginPage() {
  const navigate = useNavigate();
  const [emailid, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const handleForgotPasswordClick = () => {
    navigate("/admin");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send a POST request to the authentication server
      const response = await axios.post("/api/auth/scholar", {
        emailid,
        password,
      });
      if (response.status===200) {
        const { accessToken, message, verified }= response.data
        console.log(response.data);
        if(accessToken){
          localStorage.setItem("accessToken",accessToken);
          localStorage.setItem("VerifiedStatus",verified);
          localStorage.setItem("emailId",emailid);
        }
        // Authentication successful
        setLoggedIn(true);
        if(verified === "true"){
          navigate("/dash");
        }
        else{
          navigate("/main");
        }

      } else {
        // Authentication failed
        console.log(response.data.message);
      }
    } catch (error) {
      console.log("Error:", error.message);
    }
  };

  // Redirect to the main page if the user is already logged in
  if (loggedIn) {
    navigate("/main");
  }

  return (
    <section className="ftco-section">
      <div class="container">
			<div class="row justify-content-center">
				<div class="col-md-6 text-center mb-5" >
					<h2 class="heading-section">Dist Login</h2>
				</div>
			</div>
			<div class="row justify-content-center">
				<div class="col-md-12 col-lg-10">
					<div class="wrap d-md-flex">
          <div className="img" style={{backgroundImage: "url(./logo192.png)"}}>
			      </div>
				<div class="login-wrap p-4 p-md-5" onSubmit={handleSubmit}>
			      	<div class="d-flex">
			      		<div class="w-100">
			      			<h3 class="mb-4">Sign In</h3>
			      		</div>
								
			      	</div>
							<form action="#" class="signin-form">
			      		<div class="form-group mb-3">
			      			<label class="label" for="name">Username</label>
			      			<input type="text" class="form-control" placeholder="Username" required value={emailid}
            onChange={(e) => setUsername(e.target.value)}/>
			      		</div>
		            <div class="form-group mb-3">
		            	<label class="label" for="password">Password</label>
		              <input type="password" class="form-control" placeholder="Password" required  value={password}
            onChange={(e) => setPassword(e.target.value)}/>
		            </div>
		            <div class="form-group">
		            	<button type="submit" class="form-control btn btn-primary rounded submit px-3">Sign In</button>
		            </div>
		            <div class="form-group d-md-flex">
		            	
					<div class="w-50 text-md-right">
									<button href="#" onClick={handleForgotPasswordClick}>Admin Login</button>
									</div>
									
		            </div>
		          </form>
		           
		        </div>
		      </div>
				</div>
			</div>
		</div>
    </section>
  );
}

export default LoginPage;
