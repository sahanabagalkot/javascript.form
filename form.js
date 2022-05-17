$(document).ready(function(){

    $("#btn_submit").click(function(){
        if($("#txtname").val()==""){
            alert("please enter your name");
            return false;
        }
        if($("#txtEmail").val()==""){
            alert("please enter your Email");
            return false;
        }
        if($("#txtphone").val()==""){
            alert("please enter your phone no");
            return false;
        }
        if($("#txtAddress").val()==""){
            alert("please enter your Address");
            return false;
        }
        if($("#txtpassword").val()==""){
            alert("please enter your password");
            return false;
        }
        if($("#txtconfirmpassword").val()==""){
            alert("please confirmpassword");
            return false;
        }
        if($("#txtpassword").val() != $("#txtconfirmpassword").val()){
            alert("password and confirnpasssword not match");
            return false
        }
        if($("#txtEmail").val() != $("#txtconfirmEmail").val()){
            alert("Email and confirmEmail not match");
            return false
        }
        
    });


});