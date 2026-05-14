// ================= LOGIN FORM =================

document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("loginForm");

    // If form does not exist stop
    if (!loginForm) return;

    loginForm.addEventListener("submit", (e) => {
        e.preventDefault();

        // ===== INPUTS =====
        const username = document.getElementById("username").value.trim();

        const password = document.getElementById("password").value.trim();

        const rememberMe = document.querySelector('input[type="checkbox"]').checked;

        // ===== VALIDATION =====

        if (username === "") {
            alert("مهرباني وکړئ یوزرنوم ولیکئ");
            return;
        }

        if (password === "") {
            alert("مهرباني وکړئ پاسورډ ولیکئ");
            return;
        }

        if (password.length < 4) {
            alert("پاسورډ باید لږ تر لږه 4 توري ولري");
            return;
        }

        // ===== USERS FROM LOCAL STORAGE =====

        const users = JSON.parse(localStorage.getItem("users")) || [];

        // ===== FIND USER =====

        const validUser = users.find((user) => {
            return user.username === username && user.password === password;
        });

        // ===== LOGIN CHECK =====

        if (validUser) {
            // Save current logged user
            localStorage.setItem("currentUser", JSON.stringify(validUser));

            // Remember me
            if (rememberMe) {
                localStorage.setItem("rememberUser", username);
            } else {
                localStorage.removeItem("rememberUser");
            }

            alert("په بریالیتوب سره ننوتل ترسره شول");

            // Redirect
            window.location.href = "index.html";
        } else {
            alert("یوزرنوم یا پاسورډ ناسم دی");
        }
    });

    // ===== AUTO FILL REMEMBER USER =====

    const rememberedUser = localStorage.getItem("rememberUser");

    if (rememberedUser) {
        document.getElementById("username").value = rememberedUser;
    }
});