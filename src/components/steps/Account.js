import { useStepperContext } from "../../contexts/StepperContext";

export default function Account() {
  const { userData, setUserData } = useStepperContext();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  return (
    <fieldset >
    <h3 align="left">Name of the research scholar</h3>
    
    <div class="form-row"> 

      <div class="form-group col-md-6"> 
        <input type="text" class="form-control" placeholder="First Name" name="first_name"/>
      </div> 
      <div class="form-group col-md-6"> 
        <input type="text" class="form-control" placeholder="Last Name" name="last_name"/>
      </div> 
    </div> 



    <h3 align="left">Registration number and date of joining</h3>
    
    <div class="form-row"> 

      <div class="form-group col-md-6"> 
        <input type="text" class="form-control" placeholder="Registration number" name="registration_no"/>
      </div> 
      <div class="form-group col-md-6"> 
        <input type="date" class="form-control" name="date_of_joining" />
      </div> 
    </div> 



    <h3 align="left">Father's/Husband's Name</h3>
    
    <div class="form-row"> 

      <div class="form-group col-md-6"> 
        <input type="text" class="form-control" placeholder="Guardian's name" name="guardian_name"/>
      </div> 
    </div> 



    <h3 align="left">Date of birth</h3>
    
    <div class="form-row"> 

      <div class="form-group col-md-6"> 
        <input type="date" class="form-control" name="date_of_birth"/>
      </div> 
    </div> 



    <h3 align="left">Education</h3>
    
    <div class="form-row"> 

      <div class="form-group col-md-6"> 
        <input type="text" class="form-control" placeholder="Education" name="education"/>
      </div> 
    </div> 






    <h3 align="left">Address</h3>
    
    <div class="form-row"> 
      <div class="form-group col-md-6">  
        <input type="text" class="form-control" placeholder="Present" name="address"/> 
      </div>  
      <div class="form-group col-md-6"> 
        <input type="text" class="form-control" placeholder="Permanent" name="permanent_address"/>
      </div> 
    </div> 




    <h3 align="left">Phone</h3>
    
    <div class="form-row"> 
      <div class="form-group col-md-6">  
        <input type="tel" id="phone" class="form-control" placeholder="+91"/> 
      </div>  
      <div class="form-group col-md-6"> 
        <input type="text" class="form-control" placeholder="1234555678" name="phone"/>
      </div> 
    </div> 




    <h3 align="left">Email</h3>
    
    <div class="form-row"> 

      <div class="form-group col-md-6"> 
        <input type="text" class="form-control" placeholder="Email" name="email_id"/>
      </div> 
    </div> 



    <h3 align="left">Research topic</h3>
    
    <div class="form-row"> 

      <div class="form-group col-md-6"> 
        <input type="text" class="form-control" placeholder="Research topic" name="research_topic"/>
      </div> 
    </div> 



    <h3 align="left">Research Abstract</h3>
    
    <div class="form-row"> 

      <div class="form-group col-md-6"> 
        <input type="text" class="form-control" placeholder="Research Abstract" name="research_abstract"/>
      </div> 
    </div> 









     
  </fieldset>
  );
}
