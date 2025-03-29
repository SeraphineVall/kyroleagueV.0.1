<<<<<<< HEAD
   // Show loading animation
   function showLoading() {
    document.getElementById('loading').classList.add('active');
}

// Hide loading animation
function hideLoading() {
    document.getElementById('loading').classList.remove('active');
}

// Load page
function loadPage(pageId) {
    showLoading();
    
    // Hide all pages
    document.querySelectorAll('.page').forEach(page => {
        page.style.display = 'none';
    });
    
    // Show selected page
    document.getElementById(pageId).style.display = 'block';
    
    
 // Update navbar
document.querySelectorAll('.nav-item').forEach(item => {
item.classList.remove('active');
});

setTimeout(function() {
hideLoading();
window.scrollTo(0, 0);
}, 300);
}

// Navigation change
function navChange(elem, pageId) {
document.querySelectorAll('.nav-item').forEach(item => {
item.classList.remove('active');
});
elem.classList.add('active');
loadPage(pageId);
}
// Toggle rule content
document.addEventListener('click', function(e) {
    if (e.target.closest('.rule-header')) {
        const content = e.target.closest('.rule-item').querySelector('.rule-content');
        content.classList.toggle('active');
        const icon = e.target.closest('.rule-item').querySelector('.fas');
        icon.classList.toggle('fa-chevron-down');
        icon.classList.toggle('fa-chevron-up');
    }
    
    if (e.target.closest('.faq-question')) {
        const answer = e.target.closest('.faq-item').querySelector('.faq-answer');
        answer.classList.toggle('active');
        const icon = e.target.closest('.faq-item').querySelector('.fas');
        icon.classList.toggle('fa-chevron-down');
        icon.classList.toggle('fa-chevron-up');
    }
});

// Tab switching
document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', function() {
        // Remove active class from all tabs
        document.querySelectorAll('.tab').forEach(t => {
            t.classList.remove('active');
        });
        
        // Add active class to clicked tab
        this.classList.add('active');
        
        // Hide all tab contents
        document.querySelectorAll('.tab-content').forEach(content => {
            content.classList.remove('active');
        });
        
        // Show selected tab content
        document.getElementById(this.dataset.tab).classList.add('active');
    });
});

// Category switching in FAQ
document.querySelectorAll('.faq-category').forEach(category => {
    category.addEventListener('click', function() {
        document.querySelectorAll('.faq-category').forEach(c => {
            c.classList.remove('active');
        });
        this.classList.add('active');
    });
=======
   // Show loading animation
   function showLoading() {
    document.getElementById('loading').classList.add('active');
}

// Hide loading animation
function hideLoading() {
    document.getElementById('loading').classList.remove('active');
}

// Load page
function loadPage(pageId) {
    showLoading();
    
    // Hide all pages
    document.querySelectorAll('.page').forEach(page => {
        page.style.display = 'none';
    });
    
    // Show selected page
    document.getElementById(pageId).style.display = 'block';
    
    
 // Update navbar
document.querySelectorAll('.nav-item').forEach(item => {
item.classList.remove('active');
});

setTimeout(function() {
hideLoading();
window.scrollTo(0, 0);
}, 300);
}

// Navigation change
function navChange(elem, pageId) {
document.querySelectorAll('.nav-item').forEach(item => {
item.classList.remove('active');
});
elem.classList.add('active');
loadPage(pageId);
}
// Toggle rule content
document.addEventListener('click', function(e) {
    if (e.target.closest('.rule-header')) {
        const content = e.target.closest('.rule-item').querySelector('.rule-content');
        content.classList.toggle('active');
        const icon = e.target.closest('.rule-item').querySelector('.fas');
        icon.classList.toggle('fa-chevron-down');
        icon.classList.toggle('fa-chevron-up');
    }
    
    if (e.target.closest('.faq-question')) {
        const answer = e.target.closest('.faq-item').querySelector('.faq-answer');
        answer.classList.toggle('active');
        const icon = e.target.closest('.faq-item').querySelector('.fas');
        icon.classList.toggle('fa-chevron-down');
        icon.classList.toggle('fa-chevron-up');
    }
});

// Tab switching
document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', function() {
        // Remove active class from all tabs
        document.querySelectorAll('.tab').forEach(t => {
            t.classList.remove('active');
        });
        
        // Add active class to clicked tab
        this.classList.add('active');
        
        // Hide all tab contents
        document.querySelectorAll('.tab-content').forEach(content => {
            content.classList.remove('active');
        });
        
        // Show selected tab content
        document.getElementById(this.dataset.tab).classList.add('active');
    });
});

// Category switching in FAQ
document.querySelectorAll('.faq-category').forEach(category => {
    category.addEventListener('click', function() {
        document.querySelectorAll('.faq-category').forEach(c => {
            c.classList.remove('active');
        });
        this.classList.add('active');
    });
>>>>>>> 2419f03 (all commit)
});