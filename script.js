const sidebar = document.querrySelector(".sidebar");
const toggleBtn = document.querrySelector(".toggle-btn");

toggleBtn.addEventListener("click", () => {
    sidebar.classList.toggle("active");
});