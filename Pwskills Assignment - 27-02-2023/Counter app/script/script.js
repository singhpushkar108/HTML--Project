
const decbtn=document.getElementsByClassName("dec")[0];
const incbtn=document.getElementsByClassName("inc")[0];
const rstbtn=document.getElementsByClassName("rst")[0];
const displayValue=document.getElementById("displayValue");


decbtn.addEventListener("click",()=> {
    const value=Number(displayValue.innerText);
    
    if (value>0){
        displayValue.innerText=value-1;
    }
    else{
        alert("Negative not allowed"   )
    }
});

incbtn.addEventListener("click", () =>{
    const value=Number(displayValue.innerText)
    displayValue.innerText=value+1;
});


rstbtn.addEventListener("click", () =>{
    displayValue.innerText=0;
});