const form = document.querySelector("#Registration_form");
const fullname = document.querySelector("#fullname");
const phonenumber = document.querySelector("#phonenumber");
const dob = document.querySelector("#dob");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const confirmpassword = document.querySelector("#confirmpassword");

form.addEventListener('submit', (event)=>{
    event.preventDefault();

    validateform();
});

function validateform() {
    if(fullname.value.trim() == ''){
        seterror(fullname,'Name can not be empty');
    }
    else if (fullname.value.trim().length <6 || fullname.value.trim().length >15){
        seterror(fullname,'Name must be min 6 and max 15 characters');
    }
    else{
        setsuccess(fullname);
    }
    if(dob.value.trim() == ''){
        seterror(dob,'DOB can not be empty');
    }
    else{
        setsuccess(dob);
    }
    
    if(email.value.trim() == ''){
        seterror(email,'Provide email address');
    }
    else if (isemailvaid(email.value)){
        setsuccess(email);
    }
    else{
        seterror(email, 'Provide valid email address');
    }
    if(password.value.trim() == ''){
        seterror(password,'Password can not be empty');
    }
    else if (password.value.trim().length <6 || password.value.trim().length >15){
        seterror(password,'Password must be min 6 and max 15 characters');
    }
    else{
        setsuccess(password);
    }
    if(confirmpassword.value.trim() == ''){
        seterror(confirmpassword,'Password can not be empty');
    }
    else if (confirmpassword.value !== password.value){
        seterror(confirmpassword,'Password does not match');
    }
    else{
        setsuccess(confirmpassword);
    }
    
};

function seterror(element, errormessage) {
    const parent = element.parentElement;
    if(parent.classList.contains('success')){
        parent.classList.remove('success');
    }
    parent.classList.add('error');
    const paragraph = parent.querySelector('p');
    paragraph.textContent = errormessage;
};

function setsuccess(element){
    const parent = element.parentElement;
    if(parent.classList.contains('error')){
        parent.classList.remove('error');
    }
    parent.classList.add('success');
}

function isemailvaid(email){
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return reg.test(email);
}
