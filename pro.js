function checkStrength(){

    let password = document.getElementById("password").value;

    let score = 0;

    // Length Check
    if(password.length >= 8){
        score++;
    }

    // Uppercase Check
    if(/[A-Z]/.test(password)){
        score++;
    }

    // Lowercase Check
    if(/[a-z]/.test(password)){
        score++;
    }

    // Number Check
    if(/[0-9]/.test(password)){
        score++;
    }

    // Special Character Check
    if(/[^A-Za-z0-9]/.test(password)){
        score++;
    }

    let result = document.getElementById("result");
    let suggestion = document.getElementById("suggestion");

    if(score <= 2){
        result.innerHTML = "Weak Password";
        result.style.color = "red";

        suggestion.innerHTML =
        "Use uppercase, lowercase, numbers, and symbols.";
    }

    else if(score <= 4){
        result.innerHTML = "Medium Password";
        result.style.color = "orange";

        suggestion.innerHTML =
        "Add more special characters and increase length.";
    }

    else{
        result.innerHTML = "Strong Password";
        result.style.color = "green";

        suggestion.innerHTML =
        "Excellent password!";
    }
}