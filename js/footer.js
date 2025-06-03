document.getElementById('footer-container').innerHTML = `
    <footer class="bg-gray-800/50 border-t border-gray-800 py-8">  <!-- Reduced py-12 to py-8 -->
        <div class="max-w-7xl mx-auto px-6">
            <div class="flex flex-col md:flex-row justify-between items-center">
                <div class="mb-4 md:mb-0">  <!-- Reduced mb-6 to mb-4 -->
                    <a href="#" class="flex items-center space-x-2">
                        <div class="w-6 h-6 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">  <!-- Reduced size from w-8/h-8 to w-6/h-6 -->
                            <span class="text-white font-bold text-sm">Y</span>  <!-- Reduced text-lg to text-sm -->
                        </div>
                        <span class="text-lg font-bold">Sangam Shrestha</span>  <!-- Reduced text-xl to text-lg -->
                    </a>
                    <p class="mt-1 text-sm text-gray-400">Designer • Developer • Prompt Engineer</p>  <!-- Added text-sm -->
                </div>
                
                <div class="flex space-x-4">  <!-- Reduced space-x-6 to space-x-4 -->
                    
                    <a href="https://github.com/sangam369shrestha" target="_blank" class="text-gray-400 hover:text-white transition">
                        <i class="fab fa-github text-lg"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/sangam-shrestha-2110612b3/" target="_blank" class="text-gray-400 hover:text-white transition">
                        <i class="fab fa-linkedin text-lg"></i>
                    </a>
                    <a href="https://dribbble.com/sangam_01" target="_blank" class="text-gray-400 hover:text-white transition">
                        <i class="fab fa-dribbble text-lg"></i>
                    </a>
                </div>
            </div>
            
            <div class="mt-6 pt-6 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center">  <!-- Reduced mt-8 to mt-6 and pt-8 to pt-6 -->
                <p class="text-gray-500 text-xs">© ${new Date().getFullYear()} Sangam Shrestha. All rights reserved.</p>  <!-- Reduced text-sm to text-xs -->
                <div class="mt-2 md:mt-0 flex space-x-4">  <!-- Reduced mt-4 to mt-2 and space-x-6 to space-x-4 -->
                    <a href="#" class="text-gray-500 hover:text-gray-300 text-xs">Privacy Policy</a>  <!-- Reduced text-sm to text-xs -->
                    <a href="#" class="text-gray-500 hover:text-gray-300 text-xs">Terms of Service</a>
                </div>
            </div>
        </div>
    </footer>
`;