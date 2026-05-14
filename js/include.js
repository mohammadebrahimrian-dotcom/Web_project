document.addEventListener("DOMContentLoaded", async() => {
    try {
        const header = await fetch("/components/header.html");
        document.body.insertAdjacentHTML("afterbegin", await header.text());

        const footer = await fetch("/components/footer.html");
        document.body.insertAdjacentHTML("beforeend", await footer.text());
    } catch (err) {
        console.error("Header/Footer load failed:", err);
    }
});