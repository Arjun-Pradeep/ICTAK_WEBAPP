function validate(){
    var a=document.getElementById("pswd").value;
    var b=document.getElementById("cpswd").value;

    var m=document.getElementById("email").value;
    var n=document.getElementById("uname").value;
    
    if(a!=b){
        document.getElementById("i_cpswd").innerHTML="Invalid";
        document.getElementById("i_cpswd").style.visibility="visible";
        return false;
    }
    if(m!=n){
        document.getElementById("i_uname").innerHTML="Invalid";
        document.getElementById("i_uname").style.visibility="visible";
        return false;
    }
    else{
        return true;
    }
}

function validate_fname(fname){

    var reg_fname= /^[a-zA-Z .]{2,30}$/;

    if (!reg_fname.test(fname.value))
    {
        document.getElementById("i_fname").innerHTML="Invalid";
        document.getElementById("i_fname").style.visibility="visible";
        return false;
    }
    else{
        document.getElementById("i_fname").innerHTML=" ";
        document.getElementById("i_fname").style.visibility="visible";
        return true;

    }

}

function validate_age(age){

    var reg_age=/^[1-9]{1}[0-9]{1}$/;

    if (!reg_age.test(age.value)) 
    {
        document.getElementById("i_age").innerHTML="Invalid";
        document.getElementById("i_age").style.visibility="visible";
        return false;
    }
    else{
        document.getElementById("i_age").innerHTML=" ";
        document.getElementById("i_age").style.visibility="visible";
        return true;

    }

}

function validate_dob(dob){

    if (!(dob.value)) 
    {
        document.getElementById("i_dob").innerHTML="Invalid";
        document.getElementById("i_dob").style.visibility="visible";
        return false;
    }
    else{
        document.getElementById("i_dob").innerHTML=" ";
        document.getElementById("i_dob").style.visibility="visible";
        return true;

    }

}

function validate_email(emailField){
    var reg_email = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

    if (!reg_email.test(emailField.value)) 
    {
        document.getElementById("i_email").innerHTML="Invalid";
        document.getElementById("i_email").style.visibility="visible";
        return false;
    }
    else{
        document.getElementById("i_email").innerHTML=" ";
        document.getElementById("i_email").style.visibility="visible";
        return true;

    }

}

function validate_adrs(adrs){

    var reg_adrs=/^[a-zA-Z0-9]{1}[a-zA-Z0-9\s,. '-]*$/;

    if (!reg_adrs.test(adrs.value)) 
    {
        document.getElementById("i_adrs").innerHTML="Invalid";
        document.getElementById("i_adrs").style.visibility="visible";
        return false;
    }
    else{
        document.getElementById("i_adrs").innerHTML=" ";
        document.getElementById("i_adrs").style.visibility="visible";
        return true;

    }

}

function validate_pin(pin){

    var reg_pin=/^[1-9]{1}[0-9]{5}$/;

    if (!reg_pin.test(pin.value)) 
    {
        document.getElementById("i_pin").innerHTML="Invalid";
        document.getElementById("i_pin").style.visibility="visible";
        return false;
    }
    else{
        document.getElementById("i_pin").innerHTML=" ";
        document.getElementById("i_pin").style.visibility="visible";
        return true;

    }

}

function validate_dis(dis){

    if (!(dis.value)) 
    {
        document.getElementById("i_dis").innerHTML="Invalid";
        document.getElementById("i_dis").style.visibility="visible";
        return false;
    }
    else{
        document.getElementById("i_dis").innerHTML=" ";
        document.getElementById("i_dis").style.visibility="visible";
        return true;

    }

}

function validate_hq(hq){

    if (!(hq.value)) 
    {
        document.getElementById("i_hq").innerHTML="Invalid";
        document.getElementById("i_hq").style.visibility="visible";
        return false;
    }
    else{
        document.getElementById("i_hq").innerHTML=" ";
        document.getElementById("i_hq").style.visibility="visible";
        return true;

    }

}

function validate_ph(ph){

    var reg_ph=/^[6-9]\d{9}$/;

    if (!reg_ph.test(ph.value)) 
    {
        document.getElementById("i_ph").innerHTML="Invalid";
        document.getElementById("i_ph").style.visibility="visible";
        return false;
    }
    else{
        document.getElementById("i_ph").innerHTML=" ";
        document.getElementById("i_ph").style.visibility="visible";
        return true;

    }

}

function validate_gn(gn){

    if (!(gn.value)) 
    {
        document.getElementById("i_gn").innerHTML="Invalid";
        document.getElementById("i_gn").style.visibility="visible";
        return false;
    }
    else{
        document.getElementById("i_gn").innerHTML=" ";
        document.getElementById("i_gn").style.visibility="visible";
        return true;

    }

}

function validate_uname(uname){

    var reg_uname = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;


    if (!reg_uname.test(uname.value)) 
    {
        document.getElementById("i_uname").innerHTML="Invalid";
        document.getElementById("i_uname").style.visibility="visible";
        return false;
    }
    else{
        document.getElementById("i_uname").innerHTML=" ";
        document.getElementById("i_uname").style.visibility="visible";
        return true;

    }

}

function validate_pswd(pswd){

    var reg_pswd=/^[a-zA-Z]{5}[0-9]{3}$/;

    if (!reg_pswd.test(pswd.value)) 
    {
        document.getElementById("i_pswd").innerHTML="Invalid";
        document.getElementById("i_pswd").style.visibility="visible";
        return false;
    }
    else{
        document.getElementById("i_pswd").innerHTML=" ";
        document.getElementById("i_pswd").style.visibility="visible";
        return true;

    }

}


function validate_cpswd(cpswd){

    
    var reg_cpswd=/^[a-zA-Z]{5}[0-9]{3}$/;

    if (!reg_cpswd.test(cpswd.value)) 
    {
        document.getElementById("i_cpswd").innerHTML="Invalid";
        document.getElementById("i_cpswd").style.visibility="visible";
        return false;
    }
    else{
        document.getElementById("i_cpswd").innerHTML=" ";
        document.getElementById("i_cpswd").style.visibility="visible";
        return true;

    }

}


