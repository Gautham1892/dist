import { useStepperContext } from "../../contexts/StepperContext";

export default function Account() {
  const { userData, setUserData } = useStepperContext();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  return (
    <fieldset>
      <h3>Research Supervisor ID</h3>
      <h3 align="left">Supervisor ID</h3>
      
      <div class="form-row"> 
 
        <div class="form-group col-md-6"> 
          <input type="text" class="form-control" placeholder="Name" name="research_supervisor_name"/>
        </div> 
      </div> 
      <h3 align="left">Name of the Research Supervisor</h3>
      
      <div class="form-row"> 
 
        <div class="form-group col-md-6"> 
          <input type="text" class="form-control" placeholder="Name" name="research_supervisor_name"/>
        </div> 
      </div> 
      <h3 align="left">Communication Address</h3>
      
      <div class="form-row"> 
 
        <div class="form-group col-md-6"> 
          <input type="text" class="form-control" placeholder="Address" name="research_supervisor_address"/>
        </div> 
      </div> 
      <h3 align="left">Phone number</h3>
      
      <div class="form-row"> 
 
        <div class="form-group col-md-6"> 
          <input type="tel" id="phone" class="form-control" placeholder="Research topic" name="research_supervisor_number"/>
        </div> 
      </div> 
      <h3 align="left">Email Address</h3>
      
      <div class="form-row"> 
 
        <div class="form-group col-md-6"> 
          <input type="text" class="form-control" placeholder="Research topic" name="research_supervisor_email"/>
        </div> 
      </div> 
      
      
    </fieldset>
  );
}
