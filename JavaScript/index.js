// dapetin element jawaban di form
let form = document.getElementById("subscribe-form");

function validateName(name){ //return boolean
    return (name.length >= 4 && name.length <= 16);
}

function validatePhone(phone){ //return boolean
    if(phone.length < 12){
        return false;
    }
    else{
        // let checkNum = 0;
        for(i = 0; i < phone.length; i++){
            if(isNaN(phone[i]) == 0){
                continue;
            }
            else{
                return false;
            }
        }
        return true;
    }
}

let emailErrorMessage =[
    "Email must contain @",
    "Email must contain . (gmail.com, yahoo.co.id, etc)"
]

function validateEmail(email){ //return angka
    //email
    let split = email.split("@")
    if (split.length == 1){
        return 0 //Error code tidak ada @
    }

    let checkDot = split[split.length - 1]
    // gmail.com
    // binus.ac.id
    let checkDotSplit = checkDot.split(".");
    if(checkDotSplit.length == 1){
        return 1 //error code tidak ada . di sebelah kanan
    }

    return -1
}

function validateCountry(country) {
    //parameter merupakan sebuah object
    if(country.selectedIndex == 0){
        return false; //Errror
    }

    return true;
}

let error = document.getElementById("error");
function showError(message){
    error.style.display = "block";
    error.innerHTML = message;
}

function clearError(){
    error.style.display = "none";
}

function formSubmit() {
    let name = document.getElementById("name");
    if(!validateName(name.value)){ //panjang name kurang dari 4 atau lebih dari 16
        //kasih error
        showError("Name length must be in range 4 - 16");
        return;
    }

    let email = document.getElementById("email");
    let checkEmail = validateEmail(email.value);
    if(checkEmail != -1){
        showError(emailErrorMessage[checkEmail]);
        return;
    }

    let phone = document.getElementById("phone");
    if(!validatePhone(phone.value)){
        showError("Phone must be a set of 12 number[0-9]");
        return;
    }


    let countries = document.getElementById("country")
    if (!validateCountry(countries)){
        showError("Please select a country")
        return
    }
    let country = countries.options[countries.selectedIndex].value;

    let checkBox = document.getElementById("tos")
    if(!checkBox.checked){
        showError("Please agree to terms and condition")
        return
    }

    clearError();
    alert("Thankyou!")
    window.location.href = '../HTML/Home.html'
}

form.addEventListener("submit", (e)=> {
    e.preventDefault();
    formSubmit();
})