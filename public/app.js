function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const users = [
        { username: "gerant1", password: "1234" },
        { username: "gerant2", password: "abcd" }
    ];

    const user = users.find(u => 
        u.username === username && u.password === password
    );

    if (user) {
        // 👉 redirection vers la page menu
        window.location.href = "menu.html";
    } else {
        document.getElementById("error").innerText = "Identifiants incorrects";
    }
}
