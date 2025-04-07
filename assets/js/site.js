// write cool JS hwere!!

const mySubmitButton = document.getElementById("submitButton");
// fejlfinding
//console.log(mySubmitButton);

mySubmitButton.addEventListener("click",(eventData)=>{
    //console.log(eventData);
    eventData.preventDefault(); // stop the form from submitting

    // find værdierne i input felterne
    const myName= document.getElementById("name").value;
    const myEmail= document.getElementById("email").value;

    //console.log(myName);
   // console.log(myEmail);

    // find ud af om der er indtastet noget i felterne
let myNameTest=false;
let myEmailTest=false;

    // find ud af om der er indtastet noget i felterne
    if(myName.length>1 && myName.length<5){
// alt er godt
//console.log("Navn er ok");
myNameTest=true;

    }
 
    // email test
    // regex til at teste email
    if ( /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(myEmail) ) {
       console.log("Email er ok");
         myEmailTest=true;
    }


    // hvis begge felter er ok, så send data til serveren  
    if (myEmailTest && myNameTest) {
        // begge er true
        //alert("alt er godt");

        document.getElementById("successMessage").innerText = "tak for informationen";
        document.getElementById("errorMessage").innerText = ""; // clear error message
 
    }

     if(!myEmailTest){
        // kun email er false
        console.log("Email er ikke ok");

        document.getElementById("errorMessage").innerText = " email er forkert";
        document.getElementById("successMessage").innerText =""; // clear success message
    }

     if(!myNameTest){
        // kun navn er false
        console.log("Navn er ikke ok");

        document.getElementById("errorMessage").innerText += " navn er forkert";
        document.getElementById("successMessage").innerText =""; // clear success message
    }
   

});



//<p id="errorMessage"></p>

