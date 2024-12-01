const toggleSidebar = document.getElementById('toggleSidebar');
const closeSidebar = document.getElementById('closeSidebar');
const sidebar = document.getElementById('sidebar');
const links = document.querySelectorAll('.sidebar-link');

// Toggle sidebar open
toggleSidebar.addEventListener('click', () => {
    sidebar.classList.add('active'); // Open the sidebar
});

// Close sidebar on clicking close button
closeSidebar.addEventListener('click', () => {
    sidebar.classList.remove('active'); // Close the sidebar
});

// Close sidebar on clicking any link
links.forEach(link => {
    link.addEventListener('click', () => {
        sidebar.classList.remove('active');
    });
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

// Get all elements with the class "content"
        const contentElements = document.querySelectorAll('.content');
        
        // Loop through each element
        contentElements.forEach(element => {
            // Replace '(' and ')' with a styled span
            element.innerHTML = element.innerHTML.replace(
                /[()]/g, // Match any '(' or ')'
                (match) => `<span class="colored-bracket">${match}</span>`
            );
        });
