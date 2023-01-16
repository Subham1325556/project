function vdform(){
    const cnname = document.getElementById("name");
    if (!cnname.checkValidity()){
        window.alert(document.getElementById("n_name").innerHTML = cnname.validationMessage)
        //window.alert("all fields are required")
    }
    else{
        document.getElementById("submit").submit;
    }

    var date = document.getElementById('date');
    if (!date.checkValidity()){
        window.alert(document.getElementById("date").innerHTML = cnname.validationMessage)
        //window.alert("all fields are required")
    }
    else{
        document.getElementById("submit").submit;
    }

    var date = document.getElementById('email');
    if (!date.checkValidity()){
        window.alert(document.getElementById("email").innerHTML = cnname.validationMessage)
        //window.alert("all fields are required")
    }
    else{
        document.getElementById("submit").submit;
    }

    var date = document.getElementById('father_sname');
    if (!date.checkValidity()){
        window.alert(document.getElementById("father_sname").innerHTML = cnname.validationMessage)
        //window.alert("all fields are required")
    }
    else{
        document.getElementById("submit").submit;
    }

    var date = document.getElementById('mother_sname');
    if (!date.checkValidity()){
        window.alert(document.getElementById("mother_sname").innerHTML = cnname.validationMessage)
        //window.alert("all fields are required")
    }
    else{
        document.getElementById("submit").submit;
    }

    var date = document.getElementById('inlineCheckbox1');
    if (!date.checkValidity()){
        window.alert(document.getElementById("inlineCheckbox1").innerHTML = cnname.validationMessage)
        //window.alert("all fields are required")
    }
    else{
        document.getElementById("submit").submit;
    }

    var date = document.getElementById('nationality');
    if (!date.checkValidity()){
        window.alert(document.getElementById("nationality").innerHTML = cnname.validationMessage)
        //window.alert("all fields are required")
    }
    else{
        document.getElementById("submit").submit;
    }

    var date = document.getElementById('homeaddress');
    if (!date.checkValidity()){
        window.alert(document.getElementById("homeaddress").innerHTML = cnname.validationMessage)
        //window.alert("all fields are required")
    }
    else{
        document.getElementById("submit").submit;
    }

    var date = document.getElementById('country');
    if (!date.checkValidity()){
        window.alert(document.getElementById("country").innerHTML = cnname.validationMessage)
        //window.alert("all fields are required")
    }
    else{
        document.getElementById("submit").submit;
    }

    var date = document.getElementById('phone');
    if (!date.checkValidity()){
        window.alert(document.getElementById("phone").innerHTML = cnname.validationMessage)
        //window.alert("all fields are required")
    }
    else{
        document.getElementById("submit").submit;
    }
}