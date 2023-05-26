import { useStepperContext } from "../../contexts/StepperContext";

export default function Details() {
  const { userData, setUserData } = useStepperContext();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };
  return (
    <fieldset>




    <h3 align="left">Details of award received any (attach proof)</h3>
    
    <div class="form-row"> 
      <div class="form-group col-md-6">  
        <input type="text" class="form-control" placeholder="Name" name="awards_received"/> 
      </div>  
      <div class="form-group col-md-6"> 
        <input type="text" class="form-control" placeholder="Awarded" name="awards_received_awarded"/>
      </div> 


      <div class="input-group"> 
        <div class="custom-file">
          <input type="file" class="custom-file-input" id="upload" multiple/>
          <label class="custom-file-label" for="upload"><i class="ion-android-cloud-outline"></i>Choose file</label>
        </div>
      </div>
      <ul class="file_added">
        <li>File Added:</li>
        <li><a href="#"><i class="ion-paperclip"></i>national_id_card.png</a></li>
        <li><a href="#"><i class="ion-paperclip"></i>national_id_card_back.png</a></li>
      </ul>

    </div> 




    <h3 align="left">Details of Research Fellowships/Scholarships (attach proof)</h3>
    
    <div class="form-row"> 
      <div class="form-group col-md-6">  
        <input type="text" class="form-control" placeholder="Name" name="research_fellowships"/> 
      </div>  
      <div class="form-group col-md-6"> 
        <input type="text" class="form-control" placeholder="Awarded" name="research_fellowships_awarded"/>
      </div> 


      <div class="input-group"> 
        <div class="custom-file">
          <input type="file" class="custom-file-input" id="upload" multiple/>
          <label class="custom-file-label" for="upload"><i class="ion-android-cloud-outline"></i>Choose file</label>
        </div>
      </div>

      <ul class="file_added">
        <li>File Added:</li>
        <li><a href="#"><i class="ion-paperclip"></i>national_id_card.png</a></li>
        <li><a href="#"><i class="ion-paperclip"></i>national_id_card_back.png</a></li>
      </ul>

    </div>



    <h3 align="left">Publications during research period (attach proof)</h3>
    
    <div class="form-row"> 
      <div class="form-group col-md-6">  
        <input type="text" class="form-control" placeholder="Name" name="research_publications"/> 
      </div>  
      <div class="form-group col-md-6"> 
        <input type="text" class="form-control" placeholder="period" name="research_publications_period"/>
      </div> 


      <div class="input-group"> 
        <div class="custom-file">
          <input type="file" class="custom-file-input" id="upload" multiple/>
          <label class="custom-file-label" for="upload"><i class="ion-android-cloud-outline"></i>Choose file</label>
        </div>
      </div>

      <ul class="file_added">
        <li>File Added:</li>
        <li><a href="#"><i class="ion-paperclip"></i>national_id_card.png</a></li>
        <li><a href="#"><i class="ion-paperclip"></i>national_id_card_back.png</a></li>
      </ul>

    </div>




    <h3 align="left">Placement details if any (attach proof)</h3>
    
    <div class="form-row"> 
      <div class="form-group col-md-6">  
        <input type="text" class="form-control" placeholder="Name" name="placement"/> 
      </div>  
      <div class="form-group col-md-6"> 
        <input type="text" class="form-control" placeholder="period" name="placement_period"/>
      </div> 


      <div class="input-group"> 
        <div class="custom-file">
          <input type="file" class="custom-file-input" id="upload" multiple/>
          <label class="custom-file-label" for="upload"><i class="ion-android-cloud-outline"></i>Choose file</label>
        </div>
      </div>

      <ul class="file_added">
        <li>File Added:</li>
        <li><a href="#"><i class="ion-paperclip"></i>national_id_card.png</a></li>
        <li><a href="#"><i class="ion-paperclip"></i>national_id_card_back.png</a></li>
      </ul>

    </div>



    <h3 align="left">DC Meeting Details (Leave if not applicable)</h3>
    
    <div class="form-row"> 
      <div class="form-group col-md-6">  
        <input type="text" class="form-control" placeholder="Number" name="dc_meeting"/> 
      </div>  
      <div class="form-group col-md-6"> 
        <input type="text" class="form-control" placeholder="Status" name="dc_meeting_status"/>
      </div> 
      <div class="form-group col-md-6"> 
        <input type="date" class="form-control" placeholder="Status" name="dc_meeting_date"/>
      </div> 


      <div class="input-group"> 
        <div class="custom-file">
          <input type="file" class="custom-file-input" id="upload" multiple/>
          <label class="custom-file-label" for="upload"><i class="ion-android-cloud-outline"></i>Choose file</label>
        </div>
      </div>

      <ul class="file_added">
        <li>File Added:</li>
        <li><a href="#"><i class="ion-paperclip"></i>national_id_card.png</a></li>
        <li><a href="#"><i class="ion-paperclip"></i>national_id_card_back.png</a></li>
      </ul>

    </div>


    <h3 align="left">Coirce Work Status (Leave if not applicable)</h3>
    
    <div class="form-row"> 
      <div class="form-group col-md-6">  
        <input type="text" class="form-control" placeholder="Status" name="dc_meeting"/> 
      </div>  
      <div class="form-group col-md-6"> 
        <input type="range" class="form-control" placeholder="Progress" name="dc_meeting_status"/>
      </div> 
      <div class="form-group col-md-6"> 
        <input type="date" class="form-control" placeholder="Submission Date" name="dc_meeting_date"/>
      </div> 


      <div class="input-group"> 
        <div class="custom-file">
          <input type="file" class="custom-file-input" id="upload" multiple/>
          <label class="custom-file-label" for="upload"><i class="ion-android-cloud-outline"></i>Choose file</label>
        </div>
      </div>

      <ul class="file_added">
        <li>File Added:</li>
        <li><a href="#"><i class="ion-paperclip"></i>national_id_card.png</a></li>
        <li><a href="#"><i class="ion-paperclip"></i>national_id_card_back.png</a></li>
      </ul>

    </div>






    
   
  </fieldset>  
  );
}
