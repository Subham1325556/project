let photo = document.getElementById("photo");
let hsc = document.getElementById("hsc");
let ssc = document.getElementById("ssc");
let pdf = document.getElementById("pdf");


submit.onclick=function(){
    localStorage.setItem('photo' , photo);
    localStorage.setItem('hsc' , hsc);
    localStorage.setItem('ssc' , ssc);
    localStorage.setItem('pdf' , pdf);
}

console.log("this this my 3rd page")