function verifyPassword() {
    const password1 = document.getElementById('password1').value;
    const password2 = document.getElementById('password2').value;

    // Check if passwords are at least 8 characters long and match
    if (password1.length < 8 || password2.length < 8 || password1 !== password2) {
        alert("Passwords do not match or are not at least 8 characters long. Please try again.");
    } else {
        alert("Passwords match!");
    }
}
