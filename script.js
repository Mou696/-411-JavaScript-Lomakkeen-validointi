function validateForm() {
    var name = document.getElementById("name").value;
    var address = document.getElementById("address").value;
    var country = document.getElementById("country").value;
    var gender = document.querySelector('input[name="gender"]:checked');
    var language = document.querySelector('input[name="language"]:checked');
    var userID = document.getElementById("userID").value;
    var password = document.getElementById("password").value;
    var postalCode = document.getElementById("postalCode").value;
    var email = document.getElementById("email").value;

    var errors = [];

    // Check if required fields are empty
    if (name.trim() === "" || country.trim() === "" || !gender || !language || userID.trim() === "" || password.trim() === "" || postalCode.trim() === "" || email.trim() === "") {
        errors.push("All fields except Additional Info are required.");
    }

    // Validate User ID length
    if (userID.length < 6) {
        errors.push("User ID must be at least 6 characters long.");
    }

    // Validate password
    var passwordRegex = /^(?=.*\d)(?=.*[A-Z])(?=.*[!@£$€&%#]).{6,}$/;
    if (!password.match(passwordRegex)) {
        errors.push("Password must be at least 6 characters long and contain at least one number, one uppercase letter, and one special character from '!@£$€&%#'.");
    }

    // Validate Postal Code
    if (postalCode.length !== 5 || isNaN(postalCode)) {
        errors.push("Postal Code must be 5 digits long.");
    }

    // Validate Email
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.match(emailRegex)) {
        errors.push("Email must be in a valid email format.");
    }

    // Display errors or success message
    var errorMessages = document.getElementById("errorMessages");
    if (errors.length === 0) {
        errorMessages.innerHTML = "<p style='color: green;'>Form submitted successfully!</p>";
    } else {
        var errorMessage = "<ul>";
        errors.forEach(function(error) {
            errorMessage += "<li>" + error + "</li>";
        });
        errorMessage += "</ul>";
        errorMessages.innerHTML = errorMessage;
    }
}
