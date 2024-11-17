const form=document.getElementById("resume-form")as HTMLFormElement ;
const resumeDisplayElement = document.getElementById("resume-display")as HTMLDivElement;

form.addEventListener("submit",(event:Event)=> {
    event.preventDefault();
    const userName = (document.getElementById("userName")as HTMLInputElement).value
    const Name = (document.getElementById("name")as HTMLInputElement).value 
    const email= (document.getElementById("email")as HTMLInputElement).value 
    const password= (document.getElementById("password")as HTMLInputElement).value 
    const gender = (document.getElementById("male") as HTMLInputElement).checked ? "male" :
    (document.getElementById("female") as HTMLInputElement).checked ? "female" : "";
    const nationality = (document.getElementById("nationality")as HTMLInputElement).value
    const cauli = (document.getElementById("cauli")as HTMLInputElement).value
    const skill= (document.getElementById("skill")as HTMLInputElement).value
   

    const resumeHTML =`
    <h5><b>Dynamic And Editable Resume</b></h5>
    <p><b>Name:</b><span contenteditable="true">${userName}</span></p>
     <p><b> lastName:</b><span contenteditable="true">${Name}</span></p>
    <p><b>email:</b><span contenteditable="true">${email}</span></p>
    <p><b>password:</b><span contenteditable="true">${password}</span></p>
    <p><b>gender:</b><span contenteditable="true">${gender}</span></p>
     <p><b>Nationality:</b><span contenteditable="true">${nationality}</span></p>
     <p><b>Qualification:</b><span contenteditable="true">${cauli}</span></p>
     <p><b>Skills:</b><span contenteditable="true">${skill}</span></p>

   
    `;

    if (resumeDisplayElement){
        resumeDisplayElement.innerHTML =resumeHTML;
    
    }else{
        console.log("the resume display element is missing")
    }
 })