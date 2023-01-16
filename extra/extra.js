
let input_name = document.getElementById('input_name');

save_value.onclick=function(){

    localStorage.setItem('name' , input_name.value);
}


console.log('your name is ${input_name}');