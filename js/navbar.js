document.getElementById('navbar-container').innerHTML = `
    <header class="fixed w-full z-50 backdrop-blur-md bg-gray-900/80 border-b border-gray-800">
        <nav class="max-w-7xl mx-auto px-6 py-4">
            <div class="flex items-center justify-between">
                <!-- Logo -->
                <a href="index.html" class="flex items-center space-x-2">
                    <div class="w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
                        <span class="text-white font-bold text-lg">S</span>
                    </div>
                    <span class="text-xl font-bold">...sanGaM</span>
                </a>
                
                <!-- Desktop Navigation -->
                <div class="hidden md:flex items-center space-x-8">
                    <a href="/index" class="nav-link text-gray-400 hover:text-white transition">Home</a>
                    <a href="/about" class="nav-link text-gray-400 hover:text-white transition">About</a>
                    <a href="/blogs" class="nav-link text-gray-400 hover:text-white transition">Blogs</a>
                    <a href="/portfolio" class="nav-link text-gray-400 hover:text-white transition">Portfolio</a>
                    <a href="/contact" class="px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-medium hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300">
                        Contact
                    </a>
                </div>
                
                <!-- Mobile menu button -->
                <button id="mobile-menu-button" class="md:hidden text-gray-400 hover:text-white focus:outline-none">
                    <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>
            </div>
            
            <!-- Mobile Navigation -->
            <div id="mobile-menu" class="md:hidden hidden mt-4 pb-4 space-y-4">
                <a href="/index" class="block nav-link text-gray-400 hover:text-white transition">Home</a>
                <a href="/about" class="block nav-link text-gray-400 hover:text-white transition">About</a>
                <a href="/portfolio" class="block nav-link text-gray-400 hover:text-white transition">Portfolio</a>
                <a href="/contact" class="block px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-medium text-center w-full">
                    Contact
                </a>
            </div>
        </nav>
    </header>
`;

// Mobile menu toggle
document.getElementById('mobile-menu-button').addEventListener('click', function() {
    const menu = document.getElementById('mobile-menu');
    menu.classList.toggle('hidden');
});

// Active link highlighting
document.addEventListener('DOMContentLoaded', function() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href');
        if (currentPage === linkPage) {
            link.classList.remove('text-gray-400');
            link.classList.add('text-pink-500', 'font-medium');
        } else {
            link.classList.remove('text-pink-500', 'font-medium');
            link.classList.add('text-gray-400');
        }
    });
});