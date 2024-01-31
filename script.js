const form=document.getElementById("form");

let first=document.getElementById("firstname");
let nameError1=document.getElementById("error1");

function fname(){
    if(first.value===''){
        nameError1.innerHTML='first name is requried.';
        nameError1.style.color="red";
        first.style.border=" 2px solid red";
        return false;

    }
   else if(first.value.length<4 || first.value.length>=15){
        nameError1.innerHTML='firstname should min 4 and max 15 characters.';
        nameError1.style.color="red";
        first.style.border=" 2px solid red";
        return false;

    }
    else{
        nameError1.innerHTML='';
        first.style.border=" 2px solid green";
        return true;

 
}
}
let second=document.getElementById("lastname");
let nameError2=document.getElementById("error2");

function lname(){
    if(second.value===''){
        nameError2.innerHTML='last name is requried.';
        nameError2.style.color="red";
        second.style.border=" 2px solid red";
        return false;

    }
   else if(second.value.length<4 || second.value.length>15){
        nameError2.innerHTML='lastname should min 4 and max 15 characters.';
        nameError2.style.color="red";
        second.style.border=" 2px solid red";
        return false;

    }
    else{
        nameError2.innerHTML='';
        second.style.border=" 2px solid green";
        return true;
}
}
let mobnum=document.getElementById("mobnum");
let mobError=document.getElementById("error3");

function phone(){
    if(mobnum.value===''){
        mobError.innerHTML='mobile number is requried ';
        mobError.style.color="red";
        mobnum.style.border=" 2px solid red";
        return false;

    }
  
    else if (isNaN(mobnum.value)){
        mobError.innerHTML='not a valid number';
        mobError.style.color="red";
        mobnum.style.border="2px solid red.";
        return false;

    }
    else if (mobnum.value.length<10 || mobnum.value.length>12){
        mobError.innerHTML='number should be 10 digit';
        mobError.style.color="red";
        mobnum.style.border="2px solid red.";
        return false;

    }
   
   
    else{
        mobError.innerHTML='';
        mobnum.style.border=" 2px solid green";
        return true; 
}
}
let four=document.getElementById("Email");
let emailError=document.getElementById("error4");



function val_email(){
    if(four.value===''){
        emailError.innerHTML='email is requried';
        emailError.style.color="red";
        four.style.border=" 2px solid red";
        return false;

    }
   else if(!four.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
        emailError.innerHTML='not a valid email';
        emailError.style.color="red";
        four.style.border=" 2px solid red";
        return false;

    }
    else{
        emailError.innerHTML='';
        four.style.border=" 2px solid green";
        return true;

 
}
}


let address=document.getElementById("five");
let addressError=document.getElementById("error-9");

function val_address(){
    if(address.value===''){
        addressError.innerHTML="address is requried.";
        addressError.style.color="red";
        address.style.border="2px solid red";
        return false;

    }
    else{
        addressError.innerHTML='';
        address.style.border="2px solid green";
        return true;

    }
}
let state=document.getElementById("state");
let stateError=document.getElementById("error-10");

function val_state(){
    if(state.value==='select'){
        stateError.innerHTML="state is requried.";
        stateError.style.color="red";
        state.style.border="2px solid red";
        return false;

    }
    else{
        stateError.innerHTML='';
        state.style.border="2px solid green";
        return true;

    }
}
let dist=document.getElementById("district");
let districtError=document.getElementById("error-11");

function val_district(){
    if(dist.value===''){
        districtError.innerHTML="district is requried.";
        districtError.style.color="red";
        dist.style.border="2px solid red";
        return false;

    }
    else{
        districtError.innerHTML='';
        district.style.border="2px solid green";
        return true;

    }
}
let pinnum=document.getElementById("pin");
let pinError=document.getElementById("error-12");

function val_pincode(){
    if(pinnum.value===''){
        pinError.innerHTML='pincode is requried ';
        pinError.style.color="red";
        pinnum.style.border=" 2px solid red";
        return false;
    }
  
    else if (isNaN(pinnum.value)){
        pinError.innerHTML='not a valid pincode';
        pinError.style.color="red";
        pinnum.style.border="2px solid red.";
        return false;

    }
    else if (pinnum.value.length<6 || pinnum.value.length>6){
        pinError.innerHTML='pincode should be 6 digit';
        pinError.style.color="red";
        pinnum.style.border="2px solid red.";
        return false;
    }
   
    else{
        pinError.innerHTML='';
        pinnum.style.border=" 2px solid green";
        return true; 
}
}
form.addEventListener('submit', e => {
    e.preventDefault();
    output();
});



function output() {
    firstName = first.value.trim();
    secondName = second.value.trim();
    mobile = mobnum.value.trim();
    emailid = four.value.trim();
    adrs = address.value.trim();
    state = state.value.trim();
    districtName = dist.value.trim();
    pinCode = pinnum.value.trim();


   
    document.write("Name: " + firstName + " " + secondName + "<br>");
document.write("Mobile: " + mobile + "<br>");
document.write("Email: " + emailid + "<br>");
document.write("Address: " + adrs + "<br>");
document.write("State: " + state + "<br>");
document.write("District: " + districtName + "<br>");
document.write("Pin Code: " + pinCode + "<br>");

}



    



