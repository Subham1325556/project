let input_name = document.getElementById("name");
let date = document.getElementById('date');
let email = document.getElementById('email');
let father_sname = document.getElementById('father_sname');
let mother_sname = document.getElementById('mother_sname');
let gender = document.getElementById('gender');
let nationality = document.getElementById('nationality');
let homeaddress =document.getElementById("homeaddress")
let phone =document.getElementById("phone")
let telephone =document.getElementById("telephone")

submit_value.onclick=function(){
    localStorage.setItem("name" , input_name.value);
    localStorage.setItem("date" , date.value);
    localStorage.setItem("email" , email.value);
    localStorage.setItem("father name" , father_sname.value);
    localStorage.setItem("mother name" , mother_sname.value);
    localStorage.setItem("gender" , gender.value);
    localStorage.setItem("nationality" , nationality.value);
    localStorage.setItem("home address" , homeaddress.value);
    localStorage.setItem("phone" , phone.value);
    localStorage.setItem("telephone" , telephone.value);

}

//console.log(document.getElementById("name"));

console.log("This is my 1st page")