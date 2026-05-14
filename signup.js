document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("signupForm");

    if (!form) return;

    // ================= INIT USERS =================
    if (!localStorage.getItem("users")) {
        localStorage.setItem("users", JSON.stringify([]));
    }

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const username = document.getElementById("username").value.trim();
        const password = document.getElementById("password").value.trim();
        const confirmPassword = document
            .getElementById("confirmPassword")
            .value.trim();

        // ================= VALIDATION =================

        if (!username || !password || !confirmPassword) {
            alert("مهرباني وکړئ ټول معلومات بشپړ کړئ!");
            return;
        }

        if (username.length < 3) {
            alert("د کارن نوم باید لږ تر لږه ۳ توري ولري!");
            return;
        }

        if (password.length < 4) {
            alert("پټنوم باید لږ تر لږه ۴ توري ولري!");
            return;
        }

        if (password !== confirmPassword) {
            alert("پټنومونه سره برابر نه دي!");
            return;
        }

        // ================= GET USERS =================
        let users = [];

        try {
            users = JSON.parse(localStorage.getItem("users")) || [];
        } catch (err) {
            users = [];
        }

        // ================= CHECK DUPLICATE USER =================
        const exists = users.find((u) => u.username === username);

        if (exists) {
            alert("دا کارن نوم مخکې ثبت شوی دی!");
            return;
        }

        // ================= SAVE USER =================
        users.push({
            username,
            password,
        });

        localStorage.setItem("users", JSON.stringify(users));

        alert("حساب په بریالیتوب جوړ شو ✔ اوس ننوتل وکړئ");

        window.location.href = "login.html";
    });
});