document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let service = document.getElementById("services").value;
    let message = document.getElementById("message").value;
    let responseMessage = document.getElementById("responseMessage");

    if (name && email && service && message) {
        responseMessage.innerText = "Message Sent Successfully!";
        responseMessage.style.display = "block";
        responseMessage.style.color = "green";
        document.getElementById("contactForm").reset(); // Properly reset the form
    } else {
        responseMessage.innerText = "Please fill in all fields!";
        responseMessage.style.display = "block";
        responseMessage.style.color = "red";
    }

    // Auto-hide after 3 seconds
    setTimeout(() => {
        responseMessage.textContent = '';
        responseMessage.style.display = "none";
    }, 3000);
});

