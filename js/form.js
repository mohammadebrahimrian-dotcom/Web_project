document.addEventListener("DOMContentLoaded", () => {
    // ================= ELEMENTS =================
    const form = document.getElementById("loginForm");
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");
    const rememberCheckbox = document.getElementById("rememberMe"); // IMPORTANT: give your checkbox this ID

    if (!form || !usernameInput || !passwordInput) return;

    // ================= DEFAULT USERS =================
    const defaultUsers = [{ username: "admin", password: "1234" }];

    if (!localStorage.getItem("users")) {
        localStorage.setItem("users", JSON.stringify(defaultUsers));
    }

    // ================= REMEMBER USER =================
    const rememberedUser = localStorage.getItem("rememberUser");

    if (rememberedUser) {
        usernameInput.value = rememberedUser;
        if (rememberCheckbox) {
            rememberCheckbox.checked = true;
        }
    }

    // ================= SUBMIT =================
    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const username = usernameInput.value.trim();
        const password = passwordInput.value.trim();
        const rememberMe = rememberCheckbox ? rememberCheckbox.checked : false;

        // ================= VALIDATION =================
        if (!username || !password) {
            alert("ټول معلومات ډک کړئ!");
            return;
        }

        if (username.length < 3) {
            alert("یوزر نوم باید لږ تر لږه 3 حروف وي!");
            return;
        }

        if (password.length < 4) {
            alert("پټنوم باید لږ تر لږه 4 حروف وي!");
            return;
        }

        // ================= GET USERS =================
        let users = [];

        try {
            users = JSON.parse(localStorage.getItem("users")) || [];
        } catch (error) {
            console.error("Users parse error:", error);
            users = [];
        }

        // ================= FIND USER =================
        const user = users.find(
            (u) => u.username === username && u.password === password,
        );

        // ================= INVALID LOGIN =================
        if (!user) {
            alert("یوزر یا پټنوم غلط دی!");
            return;
        }

        // ================= SAVE SESSION =================
        localStorage.setItem("loggedInUser", JSON.stringify(user));

        // ================= REMEMBER ME =================
        if (rememberMe) {
            localStorage.setItem("rememberUser", username);
        } else {
            localStorage.removeItem("rememberUser");
        }

        // ================= SUCCESS =================
        alert("بریالی ننوتل ✔");

        window.location.href = "index.html";
    });
});