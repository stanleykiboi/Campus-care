const loginform = document.getElementById("loginForm");
loginform.addEventListener("submit", function(event)
{
    const username = document.getElementById("username").value;
    const admin = document.getElementById("admin").value;
    const password = document.getElementById("passwword").value;

    const message = document.getElementById("message");

    if (username === "" || admin === "" || password === "")
    {
        message.textContent = "Plaese fill in all fields.";
        message.style.color = "red";
    }

    else
    {
        message.textContent = "Login form submitted successfully!";
        message.style.color = "green";
    }
}
)