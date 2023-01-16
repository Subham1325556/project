function vdform2(){
    let hsc_college = document.getElementById("Hsc_college").value;
    let hsc_board = document.getElementById("hsc_board").value;
    let hsc_percent = document.getElementById("percent").value;
    let ssc_college = document.getElementById("ssc_college").value;
    let ssc_board = document.getElementById("ssc_board").value;
    let ssc_percent = document.getElementById("ssc_percent").value;
    let cs_is_name = document.getElementById("cs_is_name").value;
    let cs_course = document.getElementById("cs_course").value;
    let ovl_percent = document.getElementById("ovl_percent").value;
    let backlog = document.getElementById("backlog").value;

    if (hsc_college == ""){
      document.getElementById("HSC_COLLEGE").innerHTML = "please fill this out";
      return false;
    }

    if (hsc_board == ""){
      document.getElementById("HSC").innerHTML = "please fill this out";
      return false;
    }

    if (hsc_percent == ""){
      document.getElementById("HSC_percentage").innerHTML = "please fill this out";
      return false;
    }

    if (ssc_college == ""){
      document.getElementById("SSC_COLLEGE").innerHTML = "please fill this out";
      return false;
    }

    if (ssc_board == ""){
      document.getElementById("SSC_board").innerHTML = "please fill this out";
      return false;
    }

    if (ssc_percent == ""){
      document.getElementById("SSC_PERCENTAGE").innerHTML = "please fill this out";
      return false;
    }

    if (cs_is_name == ""){
      document.getElementById("CS_Course").innerHTML = "please fill this out";
      return false;
    }

    if (cs_course == ""){
      document.getElementById("CS_ins_name").innerHTML = "please fill this out";
      return false;
    }
    if (ovl_percent == ""){
      document.getElementById("OVL_PERCENTAGE").innerHTML = "please fill this out";
      return false;
    }
    if (backlog == ""){
      document.getElementById("BACKLOG").innerHTML = "please fill this out";
      return false;
    }

  }
