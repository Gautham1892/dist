import React, { useState } from "react";
import "./LoginPage.css";
function LoginPage(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // check if the username and password are valid
    // perform the login logic here
    if (username === "admin" && password === "password") {
      // set the loggedIn state to true if the login is successful
      setLoggedIn(true);
    }
  };

  // redirect to the main page if the user is logged in
  if (loggedIn) {
    return <props.MainPage />;
  }

  return (
    <section class="ftco-section">
		<div class="container">
			<div class="row justify-content-center">
				<div class="col-md-6 text-center mb-5" >
					<h2 class="heading-section">Dist Login</h2>
				</div>
			</div>
			<div class="row justify-content-center">
				<div class="col-md-12 col-lg-10">
					<div class="wrap d-md-flex">
          <div className="img" style={{backgroundImage: "url(public\logo192.png)"}}>
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
			      			<input type="text" class="form-control" placeholder="Username" required value={username}
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
										<a href="#">Forgot Password</a>
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
