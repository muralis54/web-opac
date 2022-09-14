
function validateform(){
    var name=document.getElementById("name"); 
    var id=document.getElementById("id"); 
    var first=document.getElementById("first"); 
    var middle=document.getElementById("middle"); 
    var last=document.getElementById("last"); 
    var email=document.getElementById("email");
    var password=document.getElementById("password");
    var contact=document.getElementById("contact");
    var number=document.getElementById("number");
    
    if(name.value==""){
    alert("Please enter the name");
    return false;
    }
    else if(id.value==""){
    alert("Please enter the id");
    return false;
    }
    else if(first.value==""){
    alert("Please enter the valid first address");
    return false;
    }
    else if(middle.value==""){
    alert("Please enter the valid middle name");
    return false;
    }
    else if(last.value==""){
    alert("Please enter the valid last name");
    return false;
    }
    else if(email.value==""){
    alert("Please enter the valid email address");
    return false;
    }
    else if(password.value==""){
    alert("Please enter the valiid password");
    return false;
    }
    else if(contact.value==""){
    alert("Please enter the valid number");
    return false;
    }
    else if(number.value==""){
    alert("Please enter the valid number");
    return false;
    }
    else{
        alert("User Id and Password sent to your email");
    return true;
    }
    
}
