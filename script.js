// Toggle Sidebar Open/Close
const toggleSidebar = document.getElementById('toggleSidebar');
const closeSidebar = document.getElementById('closeSidebar');
const sidebar = document.getElementById('sidebar');

toggleSidebar.addEventListener('click', () => {
    sidebar.classList.add('active'); // Open the sidebar
});

closeSidebar.addEventListener('click', () => {
    sidebar.classList.remove('active'); // Close the sidebar
});

// Toggle Dropdowns Open/Close
const dropdownToggles = document.querySelectorAll('.dropdown-toggle');

dropdownToggles.forEach(toggle => {
    toggle.addEventListener('click', (e) => {
        e.preventDefault();  // Prevent link behavior
        const parent = toggle.parentElement;
        parent.classList.toggle('active');  // Toggle the active class for dropdown
    });
});