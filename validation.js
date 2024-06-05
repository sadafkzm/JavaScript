function validateForm() {
    let isValid = true;

    document.getElementById('nameError').innerText = "";
    document.getElementById('lastNameError').innerText = "";
    document.getElementById('emailError').innerText = "";
    document.getElementById('passwordError').innerText = "";
    document.getElementById('phoneError').innerText = "";

    // Validate name
    const name = document.getElementById('name').value;
    if (name === "") {
        document.getElementById('nameError').innerText = "First name is required.";
        isValid = false;
    }

    // Validate last name
    const lastName = document.getElementById('lastName').value;
    if (lastName === "") {
        document.getElementById('lastNameError').innerText = "Last name is required.";
        isValid = false;
    }

    // Validate email
    const email = document.getElementById('email').value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email === "") {
        document.getElementById('emailError').innerText = "Email id cannot be blank, it's required";
        isValid = false;
    } else if (!emailPattern.test(email)) {
        document.getElementById('emailError').innerText = "Please enter a valid email id";
        isValid = false;
    }

    // Validate password
    const pass = document.getElementById('pass').value;
    const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

    if (pass === "") {
        document.getElementById('passwordError').innerText = "Password cannot be blank, it's required";
        isValid = false;
    } else if (!passwordPattern.test(pass)) {
        document.getElementById('passwordError').innerText = "Password must be at least 8 characters long and include both letters and numbers.";
        isValid = false;
    }

   
    // Validate phone number
	const phoneNumber = document.getElementById('phoneNumber').value;
	const phonePattern = /^\d{10}$/;

	if (phoneNumber === "") {
    document.getElementById('phoneError').innerText = "Phone number cannot be blank, it's required";
    isValid = false;
	} else if (!phonePattern.test(phoneNumber)) {
    document.getElementById('phoneError').innerText = "Please enter a valid 10-digit phone number";
    isValid = false;
}


    return isValid;
}
