$(document).ready(function() {
    $('a[href^="#"]').on('click', function(event) {
        var target = $($(this).attr('href'));
        if (target.length) {
            event.preventDefault();
            $('html, body').animate({
                scrollTop: target.offset().top - $('.navbar').outerHeight()
            }, 1000);
        }
    });
});

// Form validation function
function validateForm() {
    var name = document.forms["contactForm"]["name"].value;
    var email = document.forms["contactForm"]["email"].value;
    var message = document.forms["contactForm"]["message"].value;

    if (name == "" || email == "" || message == "") {
        alert("Please fill in all fields");
        return false;
    }

    // Validate email format
    var emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(email)) {
        alert("Please enter a valid email address");
        return false;
    }
}

// Form submission function
function submitForm() {
    if (validateForm()) {
        // Simulate form submission (replace with actual submission code)
        setTimeout(function() {
            alert("Form submitted successfully!");
            // Clear form fields
            document.getElementById("contactForm").reset();
        }, 1000);
    }
}

// Attach form submission handler to submit button
document.getElementById("submitButton").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent default form submission
    submitForm();
});
