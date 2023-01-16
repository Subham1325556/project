let hsc_college = document.getElementById("Hsc_college");
let hsc_board = document.getElementById("hsc_board");
let hsc_percent = document.getElementById("percent");
let ssc_college = document.getElementById("ssc_college");
let ssc_board = document.getElementById("ssc_board");
let ssc_percent = document.getElementById("ssc_percent");
let cs_is_name = document.getElementById("cs_is_name");
let cs_course = document.getElementById("cs_course");
let ovl_percent = document.getElementById("ovl_percent");
let backlog = document.getElementById("backlog");


next_page.onclick=function(){
    localStorage.setItem("hsc_college" , hsc_college.value);
    localStorage.setItem("hsc_board" , hsc_board.value);
    localStorage.setItem("hsc_percent" , hsc_percent.value);
    localStorage.setItem("ssc_college" , ssc_college.value);
    localStorage.setItem("ssc_board" , ssc_board.value);
    localStorage.setItem("ssc_percent" , ssc_percent.value);
    localStorage.setItem("cs_is_name" , cs_is_name.value);
    localStorage.setItem("cs_course" , cs_course.value);
    localStorage.setItem("ovl_percent" , ovl_percent.value);
    localStorage.setItem("backlog" , backlog.value);
}

console.log("this is my second page")