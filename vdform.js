function vdform(){

    let name = document.getElementById("name").value;
    let date = document.getElementById("date").value;
    let email = document.getElementById("email").value;
    let father_sname = document.getElementById("father_sname").value;
    let mother_sname = document.getElementById("mother_sname").value;
    let gender = document.getElementById("gender").value;
    let nationality = document.getElementById("nationality").value;
    let homeaddress = document.getElementById("homeaddress").value;
    let phone = document.getElementById("phone").value;
    //name
    
    if(name == ""){
        document.getElementById("names").innerHTML = "please fill this out";
        return false;
    }

    if ((name.length <=2) ||(name.length > 20)){
        document.getElementById("names").innerHTML = "name must be in between 2 to 20";
        return false;
    }

    if (!isNaN(name)){
        document.getElementById("names").innerHTML = "name doest not contain numbers";
        return false;
    }

    //date
    
    if(date == ""){
        document.getElementById("d_o_b").innerHTML = "please fill this out";
        return false;
    }

    //email

    if(email == ""){
        document.getElementById("emails").innerHTML = "please fill this out";
        return false;
    }

    if(email.indexOf('@') <= 0){
        document.getElementById("emails").innerHTML = "@ at invalid position";
        return false;
    }

    if((email.charAt(email.length-4)!='.') && (email.charAt(email.length-3)!='.')){
        document.getElementById("emails").innerHTML = " . at invalid position";
        return false;
    }

    //father_name

    if(father_sname == ""){
        document.getElementById("f_names").innerHTML = "please fill this out";
        return false;
    }

    if ((name.length <=2) ||(name.length > 20)){
        document.getElementById("f_names").innerHTML = "name must be in between 2 to 20";
        return false;
    }

    if (!isNaN(name)){
        document.getElementById("f_names").innerHTML = "name doest not contain numbers";
        return false;
    }

    // mother_name

    if(mother_sname == ""){
        document.getElementById("m_names").innerHTML = "please fill this out";
        return false;
    }

    if ((name.length <=2) ||(name.length > 20)){
        document.getElementById("m_names").innerHTML = "name must be in between 2 to 20";
        return false;
    }

    if (!isNaN(name)){
        document.getElementById("m_names").innerHTML = "name doest not contain numbers";
        return false;
    }

    // gender

    if(gender == ""){
        document.getElementById("genders").innerHTML = "please fill this out";
        return false;
    }

    if(nationality == ""){
        document.getElementById("nation").innerHTML = "please fill this out";
        return false;
    }

    if(homeaddress == ""){
        document.getElementById("countrys").innerHTML = "please fill this out";
        return false;
    }

    //phone

    if(phone == ""){
        document.getElementById("mobile").innerHTML = "please fill this out";
        return false;
    }

    if(isNaN(phone)){
        document.getElementById("mobile").innerHTML = "phone number must be number";
        return false;
    }

    if(phone.length!=10){
        document.getElementById("mobile").innerHTML = "number must be 10 digit";
        return false;
    }
}