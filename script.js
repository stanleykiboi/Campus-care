const loginform = document.getElementById("loginform");
loginform.addEventListener("submit", function(event)
{
    const username = document.getElementById("username").value;
    const admin = document.getElementById("admin").value;
    const password = document.getElementById("passwword").value;

    if (username === "" || admin === "" || password === "")
    {
        MessageChannel.textContent = "Plaese fill in all fields.";
        MessageEvent.style.color = "red";
    }

    else
    {
        MessageEvent.textContent = "Login form submitted successfully";
        MessageEvent.style.color = "green";
    }
}
)