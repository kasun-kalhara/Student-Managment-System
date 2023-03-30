import React,{useState} from "react";
import axios from "axios";

function Addstudent(){


         const[name,setname] = useState("");
         const[age,setage] = useState("");
         const[gender,setgender] = useState("");


         function sendData(e){
             e.preventDefault();
             
             const newstudent = {
               name,
               age,
               gender
             }
             axios.post("http://localhost:8070/student/add",newstudent).then(()=>{
               alert("Student added")
             }).catch((err)=>{
               alert("err")
             })
         }


          
  return(
    <div className = "container">
    <form onSubmit={sendData}>
         <div class="mb-3">
            <label for="Name">Student Name</label>
            <input type="text" class="form-control" id="Name" placeholder="Enter Student Name" 
                  onChange={(e)=>{
                  setname(e.target.value);
          
          }}/>
            
        </div>
        <div class="mb-3">
             <label for="Age">Student Age</label>
             <input type="text" class="form-control" id="Age" placeholder="Enter Student Age"
                    onChange={(e)=>{
                    setage(e.target.value);
            
            }}/>
        </div>

        <div class="mb-3">
             <label for="Gender">Student Gender</label>
             <input type="text" class="form-control" id="Gender" placeholder="Enter Student Gender"
                    onChange={(e)=>{
                    setgender(e.target.value);
            
            }}/>
        </div>

        <button type="submit" class="btn btn-primary">Submit</button>
    </form>
    </div>
    )
}

export default Addstudent;