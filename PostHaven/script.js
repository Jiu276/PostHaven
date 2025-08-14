// Sample blog articles data
const articles = [
    {
        id: 1,
        title: "The Future of Artificial Intelligence in Everyday Life",
        excerpt: "Explore how AI is transforming our daily experiences and what the future holds for human-AI collaboration in various industries.",
        category: "technology",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        date: "2024-01-15",
        readTime: "8 min read"
    },
    {
        id: 2,
        title: "Minimalist Living: A Guide to Intentional Simplicity",
        excerpt: "Discover the art of minimalist living and how reducing clutter can lead to increased focus, productivity, and overall well-being.",
        category: "lifestyle",
        image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        date: "2024-01-12",
        readTime: "6 min read"
    },
    {
        id: 3,
        title: "Building Sustainable Business Models in 2024",
        excerpt: "Learn about innovative approaches to creating environmentally conscious businesses that drive both profit and positive impact.",
        category: "business",
        image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        date: "2024-01-10",
        readTime: "12 min read"
    },
    {
        id: 4,
        title: "Digital Art Revolution: NFTs and Creative Expression",
        excerpt: "An in-depth look at how blockchain technology is reshaping the creative industry and empowering digital artists worldwide.",
        category: "creative",
        image: "https://images.unsplash.com/photo-1547891654-e66ed7ebb968?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        date: "2024-01-08",
        readTime: "10 min read"
    },
    {
        id: 5,
        title: "Remote Work Culture: Building Connection in Digital Teams",
        excerpt: "Strategies for fostering team collaboration, maintaining company culture, and ensuring productivity in distributed workforces.",
        category: "business",
        image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        date: "2024-01-05",
        readTime: "7 min read"
    },
    {
        id: 6,
        title: "Sustainable Travel: Exploring the World Responsibly",
        excerpt: "Tips and insights for eco-conscious travelers looking to minimize their environmental impact while experiencing amazing destinations.",
        category: "travel",
        image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        date: "2024-01-03",
        readTime: "9 min read"
    },
    {
        id: 7,
        title: "The Psychology of User Experience Design",
        excerpt: "Understanding human behavior and cognitive patterns to create intuitive, engaging, and accessible digital experiences.",
        category: "technology",
        image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        date: "2024-01-01",
        readTime: "11 min read"
    },
    {
        id: 8,
        title: "Mindful Morning Routines for Peak Performance",
        excerpt: "Science-backed morning rituals that can transform your productivity, mental clarity, and overall quality of life.",
        category: "lifestyle",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        date: "2023-12-28",
        readTime: "5 min read"
    },
    {
        id: 9,
        title: "Creative Writing in the Digital Age",
        excerpt: "How modern technology is changing storytelling, from interactive narratives to AI-assisted writing tools and digital publishing.",
        category: "creative",
        image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        date: "2023-12-25",
        readTime: "8 min read"
    },
    {
        id: 10,
        title: "Hidden Gems: Off-the-Beaten-Path Destinations",
        excerpt: "Discover lesser-known travel destinations that offer authentic experiences away from crowded tourist attractions.",
        category: "travel",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        date: "2023-12-22",
        readTime: "6 min read"
    },
    {
        id: 11,
        title: "Blockchain Technology Beyond Cryptocurrency",
        excerpt: "Exploring innovative applications of blockchain in supply chain, healthcare, voting systems, and digital identity verification.",
        category: "technology",
        image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        date: "2023-12-20",
        readTime: "13 min read"
    },
    {
        id: 9,
        title: "Creative Writing in the Digital Age",
        excerpt: "How modern technology is changing storytelling, from interactive narratives to AI-assisted writing tools and digital publishing.",
        category: "creative",
        image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        date: "2023-12-25",
        readTime: "8 min read"
    },
    {
        id: 10,
        title: "Hidden Gems: Off-the-Beaten-Path Destinations",
        excerpt: "Discover lesser-known travel destinations that offer authentic experiences away from crowded tourist attractions.",
        category: "travel",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        date: "2023-12-22",
        readTime: "6 min read"
    },
    {
        id: 11,
        title: "Blockchain Technology Beyond Cryptocurrency",
        excerpt: "Exploring innovative applications of blockchain in supply chain, healthcare, voting systems, and digital identity verification.",
        category: "technology",
        image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        date: "2023-12-20",
        readTime: "13 min read"
    },
    {
        id: 12,
        title: "The Art of Personal Branding for Entrepreneurs",
        excerpt: "Building a compelling personal brand that resonates with your audience and drives business growth in the digital era.",
        category: "business",
        image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        date: "2023-12-18",
        readTime: "9 min read"
    }
];

// Global variables
let currentFilter = 'all';
let searchTerm = '';

// DOM elements
const articlesGrid = document.getElementById('articlesGrid');
const searchInput = document.getElementById('searchInput');
const filterButtons = document.querySelectorAll('.filter-btn');
const noResults = document.getElementById('noResults');
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

// Initialize the website
document.addEventListener('DOMContentLoaded', function() {
    displayArticles(articles);
    setupEventListeners();
});

// Setup event listeners
function setupEventListeners() {
    // Search functionality
    searchInput.addEventListener('input', handleSearch);
    
    // Filter buttons
    filterButtons.forEach(button => {
        button.addEventListener('click', handleFilter);
    });
    
    // Mobile navigation toggle
    navToggle.addEventListener('click', toggleMobileNav);
    
    // Close mobile nav when clicking on menu items
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', closeMobileNav);
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Display articles in the grid
function displayArticles(articlesToShow) {
    if (articlesToShow.length === 0) {
        articlesGrid.style.display = 'none';
        noResults.style.display = 'block';
        return;
    }
    
    articlesGrid.style.display = 'grid';
    noResults.style.display = 'none';
    
    articlesGrid.innerHTML = articlesToShow.map(article => {
        const formattedDate = formatDate(article.date);
        return `
            <article class="article-card" data-category="${article.category}">
                <img src="${article.image}" alt="${article.title}" class="article-image" loading="lazy">
                <div class="article-content">
                    <span class="article-category">${article.category}</span>
                    <h3 class="article-title">${article.title}</h3>
                    <p class="article-excerpt">${article.excerpt}</p>
                    <div class="article-meta">
                        <span class="article-date">
                            <i class="fas fa-calendar-alt"></i>
                            ${formattedDate}
                        </span>
                        <span class="article-read-time">
                            <i class="fas fa-clock"></i>
                            ${article.readTime}
                        </span>
                    </div>
                </div>
            </article>
        `;
    }).join('');
    
    // Add click event listeners to article cards
    document.querySelectorAll('.article-card').forEach((card, index) => {
        card.addEventListener('click', function() {
            // Add a subtle animation when clicked
            this.style.transform = 'scale(0.98)';
            setTimeout(() => {
                this.style.transform = '';
                // Navigate to article detail page
                const articleId = articlesToShow[index].id;
                window.location.href = `article.html?id=${articleId}`;
            }, 150);
        });
    });
}

// Handle search input
function handleSearch(e) {
    searchTerm = e.target.value.toLowerCase();
    filterAndDisplayArticles();
}

// Handle filter button clicks
function handleFilter(e) {
    // Update active filter button
    filterButtons.forEach(btn => btn.classList.remove('active'));
    e.target.classList.add('active');
    
    currentFilter = e.target.getAttribute('data-category');
    filterAndDisplayArticles();
}

// Filter and display articles based on current filters and search term
function filterAndDisplayArticles() {
    let filteredArticles = articles;
    
    // Apply category filter
    if (currentFilter !== 'all') {
        filteredArticles = filteredArticles.filter(article => 
            article.category === currentFilter
        );
    }
    
    // Apply search filter
    if (searchTerm) {
        filteredArticles = filteredArticles.filter(article =>
            article.title.toLowerCase().includes(searchTerm) ||
            article.excerpt.toLowerCase().includes(searchTerm) ||
            article.category.toLowerCase().includes(searchTerm)
        );
    }
    
    displayArticles(filteredArticles);
}

// Format date for display
function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
}

// Toggle mobile navigation
function toggleMobileNav() {
    navMenu.classList.toggle('active');
    
    // Animate hamburger menu
    const bars = navToggle.querySelectorAll('.bar');
    bars.forEach((bar, index) => {
        bar.style.transform = navMenu.classList.contains('active') ? 
            (index === 0 ? 'rotate(-45deg) translate(-5px, 6px)' :
             index === 1 ? 'opacity(0)' :
             'rotate(45deg) translate(-5px, -6px)') : '';
    });
}

// Close mobile navigation
function closeMobileNav() {
    navMenu.classList.remove('active');
    const bars = navToggle.querySelectorAll('.bar');
    bars.forEach(bar => {
        bar.style.transform = '';
    });
}

// Add some interactive animations
function addScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe article cards for scroll animations
    document.querySelectorAll('.article-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
}

// Call scroll animations after articles are loaded
setTimeout(addScrollAnimations, 100);

// Add a loading state for better UX
function showLoadingState() {
    articlesGrid.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 40px;">
            <i class="fas fa-spinner fa-spin" style="font-size: 2rem; color: #2c5aa0;"></i>
            <p style="margin-top: 1rem; color: #666;">Loading articles...</p>
        </div>
    `;
}

// Debounce function for search to improve performance
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Update search handler to use debouncing
const debouncedSearch = debounce((e) => {
    searchTerm = e.target.value.toLowerCase();
    filterAndDisplayArticles();
}, 300);

// Replace the original search event listener
searchInput.removeEventListener('input', handleSearch);
searchInput.addEventListener('input', debouncedSearch);