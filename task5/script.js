// Data
const allJerseys = [
    {
        id: 1,
        name: "Manchester United Home Jersey 2025",
        team: "Manchester United",
        league: "Premier League",
        price: 89.99,
        originalPrice: 109.99,
        image: "https://footballmonk.in/wp-content/uploads/2025/06/Manchester-United-Home-Kit-25-26-1.jpg",
        rating: 4.8,
        reviews: 234,
        sizes: ["S", "M", "L", "XL", "XXL"],
        description: "The official Manchester United home jersey for the 2025 season. Featuring the iconic red color with modern design elements and premium quality fabric for ultimate comfort.",
        features: [
            "100% recycled polyester",
            "Moisture-wicking technology",
            "Official club crest",
            "Player name and number customization available"
        ],
        images: [
            "https://footballmonk.in/wp-content/uploads/2025/06/Manchester-United-Home-Kit-25-26-1.jpg",
            "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=600&fit=crop",
            "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=600&h=600&fit=crop"
        ]
    },
    {
        id: 2,
        name: "Real Madrid Away Jersey 2025",
        team: "Real Madrid",
        league: "La Liga",
        price: 94.99,
        originalPrice: 114.99,
        image: "https://footballmonk.in/wp-content/uploads/2025/06/Real-Madrid-Away-Kit-2025-26-1.jpg",
        rating: 4.9,
        reviews: 189,
        sizes: ["S", "M", "L", "XL", "XXL"],
        description: "The official Real Madrid away jersey for the 2025 season. Features a striking design with the classic white and blue colors of the royal club.",
        features: [
            "100% recycled polyester",
            "Breathable fabric technology",
            "Official club emblem",
            "Premium quality stitching"
        ],
        images: [
            "https://footballmonk.in/wp-content/uploads/2025/06/Real-Madrid-Away-Kit-2025-26-1.jpg",
            "https://images.unsplash.com/photo-1577212017308-55f445f2234d?w=600&h=600&fit=crop",
            "https://images.unsplash.com/photo-1560089000-7433a4ebbd64?w=600&h=600&fit=crop"
        ]
    },
    {
        id: 3,
        name: "Barcelona Home Jersey 2025",
        team: "Barcelona",
        league: "La Liga",
        price: 87.99,
        originalPrice: 107.99,
        image: "https://footballmonk.in/wp-content/uploads/2025/01/FC-Barcelona-Home-Raphinha-Jersey-2024-25-2.jpg",
        rating: 4.7,
        reviews: 156,
        sizes: ["S", "M", "L", "XL", "XXL"],
        description: "The official Barcelona home jersey for the 2025 season, featuring the iconic blue and garnet stripes that represent the pride of Catalonia.",
        features: [
            "100% recycled polyester",
            "Advanced sweat-wicking technology",
            "Official FC Barcelona crest",
            "Lightweight and durable fabric"
        ],
        images: [
            "https://footballmonk.in/wp-content/uploads/2025/01/FC-Barcelona-Home-Raphinha-Jersey-2024-25-2.jpg",
            "https://images.unsplash.com/photo-1580087433295-ab2600c1030e?w=600&h=600&fit=crop",
            "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6?w=600&h=600&fit=crop"
        ]
    },
    {
        id: 4,
        name: "Liverpool Home Jersey 2025",
        team: "Liverpool",
        league: "Premier League",
        price: 91.99,
        originalPrice: 111.99,
        image: "https://footballmonk.in/wp-content/uploads/2024/07/Liverpool-Home-2024-25-1.jpg",
        rating: 4.8,
        reviews: 201,
        sizes: ["S", "M", "L", "XL", "XXL"],
        description: "The official Liverpool home jersey for the 2025 season, featuring the legendary red color that represents the passion and tradition of Liverpool FC.",
        features: [
            "100% recycled polyester",
            "Dry-fit technology",
            "Official club crest",
            "Authentic player edition available"
        ],
        images: [
            "https://footballmonk.in/wp-content/uploads/2024/07/Liverpool-Home-2024-25-1.jpg",
            "https://images.unsplash.com/photo-1539185441755-769d4694c798?w=600&h=600&fit=crop",
            "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=600&h=600&fit=crop"
        ]
    },
    {
        id: 5,
        name: "Chelsea Away Jersey 2025",
        team: "Chelsea",
        league: "Premier League",
        price: 85.99,
        originalPrice: 105.99,
        image: "https://footballmonk.in/wp-content/uploads/2024/10/Chelsea-Away-Kit-24-25-1.jpg",
        rating: 4.6,
        reviews: 143,
        sizes: ["S", "M", "L", "XL", "XXL"],
        description: "The official Chelsea away jersey for the 2025 season. Designed with a modern look while honoring the club's rich history and tradition.",
        features: [
            "100% recycled polyester",
            "Breathable fabric technology",
            "Official club emblem",
            "Sleek and stylish design"
        ],
        images: [
            "https://footballmonk.in/wp-content/uploads/2024/10/Chelsea-Away-Kit-24-25-1.jpg",
            "https://images.unsplash.com/photo-1574013716313-0f6783c835f7?w=600&h=600&fit=crop",
            "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=600&fit=crop"
        ]
    },
    {
        id: 6,
        name: "Arsenal Home Jersey 2025",
        team: "Arsenal",
        league: "Premier League",
        price: 88.99,
        originalPrice: 108.99,
        image: "https://tse1.mm.bing.net/th/id/OIP.XzyIa8HzLqHwTy-Yg0usJgHaHa?r=0&cb=thvnextc1&rs=1&pid=ImgDetMain&o=7&rm=3",
        rating: 4.7,
        reviews: 167,
        sizes: ["S", "M", "L", "XL", "XXL"],
        description: "The official Arsenal home jersey for the 2025 season. Features the classic red and white colors of the Gunners in a modern design.",
        features: [
            "100% recycled polyester",
            "Moisture-wicking technology",
            "Official club crest",
            "Slim athletic fit"
        ],
        images: [
            "https://tse1.mm.bing.net/th/id/OIP.XzyIa8HzLqHwTy-Yg0usJgHaHa?r=0&cb=thvnextc1&rs=1&pid=ImgDetMain&o=7&rm=3",
            "https://images.unsplash.com/photo-1570498839593-e565b39455fc?w=600&h=600&fit=crop",
            "https://images.unsplash.com/photo-1584714268709-c3dd9c92b378?w=600&h=600&fit=crop"
        ]
    },
    {
        id: 7,
        name: "PSG Home Jersey 2025",
        team: "Paris Saint-Germain",
        league: "Ligue 1",
        price: 92.99,
        originalPrice: 112.99,
        image: "https://footballmonk.in/wp-content/uploads/2024/10/PSG-Home-Kit-24-25-1.jpg",
        rating: 4.8,
        reviews: 178,
        sizes: ["S", "M", "L", "XL", "XXL"],
        description: "The official Paris Saint-Germain home jersey for the 2025 season. A blend of traditional Parisian style with modern sportswear innovation.",
        features: [
            "100% recycled polyester",
            "Advanced cooling technology",
            "Official PSG crest",
            "Premium stitched details"
        ],
        images: [
            "https://footballmonk.in/wp-content/uploads/2024/10/PSG-Home-Kit-24-25-1.jpg",
            "https://images.unsplash.com/photo-1594469270185-048e6b15a3b3?w=600&h=600&fit=crop",
            "https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=600&h=600&fit=crop"
        ]
    },
    {
        id: 8,
        name: "Bayern Munich Home Jersey 2025",
        team: "Bayern Munich",
        league: "Bundesliga",
        price: 89.99,
        originalPrice: 109.99,
        image: "https://footballmonk.in/wp-content/uploads/2024/10/Bayern-Munich-Third-Kit-24-25-1.jpg",
        rating: 4.9,
        reviews: 223,
        sizes: ["S", "M", "L", "XL", "XXL"],
        description: "The official Bayern Munich home jersey for the 2025 season. Features the classic red color that has become synonymous with Bayern's dominance.",
        features: [
            "100% recycled polyester",
            "Temperature regulation technology",
            "Official club crest",
            "Championship stars above badge"
        ],
        images: [
            "https://footballmonk.in/wp-content/uploads/2024/10/Bayern-Munich-Third-Kit-24-25-1.jpg",
            "https://images.unsplash.com/photo-1561154464-82e9adf32764?w=600&h=600&fit=crop",
            "https://images.unsplash.com/photo-1579952363873-27d3bfad9c0d?w=600&h=600&fit=crop"
        ]
    }
];

const leagues = [
    {
        id: 1,
        name: "Premier League",
        country: "England",
        continent: "Europe",
        founded: 1992,
        teams: 20,
        image: "https://upload.wikimedia.org/wikipedia/en/f/f2/Premier_League_Logo.svg",
        description: "The most-watched football league in the world, featuring the best English clubs.",
        popularTeams: ["Manchester United", "Liverpool", "Chelsea", "Arsenal"],
        jerseyCount: 4
    },
    {
        id: 2,
        name: "La Liga",
        country: "Spain",
        continent: "Europe",
        founded: 1929,
        teams: 20,
        image: "https://upload.wikimedia.org/wikipedia/en/7/79/LaLiga_Santander.svg",
        description: "Spain's top professional football division, home to Real Madrid and Barcelona.",
        popularTeams: ["Real Madrid", "Barcelona", "Atletico Madrid"],
        jerseyCount: 2
    },
    {
        id: 3,
        name: "Bundesliga",
        country: "Germany",
        continent: "Europe",
        founded: 1963,
        teams: 18,
        image: "https://upload.wikimedia.org/wikipedia/commons/d/df/Bundesliga_logo_%282017%29.svg",
        description: "Germany's premier football league known for its passionate fans and competitive play.",
        popularTeams: ["Bayern Munich", "Borussia Dortmund", "RB Leipzig"],
        jerseyCount: 1
    },
    {
        id: 4,
        name: "Ligue 1",
        country: "France",
        continent: "Europe",
        founded: 1932,
        teams: 20,
        image: "https://upload.wikimedia.org/wikipedia/en/c/c7/Ligue1.svg",
        description: "The top level of the French football league system, featuring PSG and other top clubs.",
        popularTeams: ["Paris Saint-Germain", "Olympique de Marseille", "AS Monaco"],
        jerseyCount: 1
    }
];

// State
let cart = JSON.parse(localStorage.getItem('cart')) || [];
let currentPage = 'home';
let currentProductId = null;
let selectedSize = '';
let selectedImage = 0;
let quantity = 1;
let filteredJerseys = [...allJerseys];

// Helper Functions
function updateCartCount() {
    const cartCount = document.getElementById('cartCount');
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;
}

function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
}

function showToast(message) {
    const toast = document.getElementById('toast');
    const toastMessage = document.getElementById('toastMessage');
    toastMessage.textContent = message;
    toast.classList.add('show');
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

function generateStars(rating) {
    let stars = '';
    for (let i = 1; i <= 5; i++) {
        if (i <= Math.floor(rating)) {
            stars += '<i class="fas fa-star star"></i>';
        } else {
            stars += '<i class="far fa-star star"></i>';
        }
    }
    return stars;
}

function getQueryParams() {
    const urlParams = new URLSearchParams(window.location.search);
    return {
        team: urlParams.get('team'),
        league: urlParams.get('league')
    };
}

// Page Navigation
function showPage(pageId) {
    console.log('showPage() called with:', pageId); // Debug log
    try {
        // Hide all pages
        document.querySelectorAll('.page').forEach(page => {
            page.classList.remove('active');
        });
        
        // Show selected page
        const targetPage = document.getElementById(pageId);
        console.log('Target page element:', targetPage); // Debug log
        
        if (!targetPage) {
            console.error('Page element not found:', pageId);
            return;
        }
        
        targetPage.classList.add('active');
        currentPage = pageId;
        console.log('Page', pageId, 'is now active');
        
        // Update navigation highlights
        updateNavigation();
    } catch (error) {
        console.error('Error in showPage():', error);
    }
}

function updateNavigation() {
    document.querySelectorAll('.nav-link').forEach(link => {
        link.style.color = '#6b7280';
    });
    
    // Highlight current page
    const navMap = {
        'home': null,
        'shop': 'Shop',
        'teams': 'Teams',
        'leagues': 'Leagues'
    };
    
    if (navMap[currentPage]) {
        const activeLink = Array.from(document.querySelectorAll('.nav-link'))
            .find(link => link.textContent === navMap[currentPage]);
        if (activeLink) {
            activeLink.style.color = '#16a34a';
        }
    }
}

function showHome() {
    showPage('homePage');
    renderFeaturedJerseys();
}

function showShop() {
    showPage('shopPage');
    applyFilters();
    renderShopJerseys();
}

function showTeams() {
    showPage('teamsPage');
    renderTeams();
}

function showLeagues() {
    showPage('leaguesPage');
    renderLeagues();
}

function showSale() {
    showShop(); // For now, redirect to shop
}

function showCart() {
    console.log('showCart() called'); // Debug log
    try {
        showPage('cartPage');
        renderCart();
        console.log('showCart() completed successfully');
    } catch (error) {
        console.error('Error in showCart():', error);
    }
}

function showProduct(id) {
    currentProductId = id;
    selectedImage = 0;
    quantity = 1;
    selectedSize = '';
    showPage('productPage');
    renderProductDetail();
}

// Rendering Functions
function renderJerseyCard(jersey, showDescription = false) {
    return `
        <div class="jersey-card" onclick="showProduct(${jersey.id})">
            <div class="jersey-image-container">
                <img src="${jersey.image}" alt="${jersey.name}" class="jersey-image">
                <div class="jersey-badge">
                    Save $${(jersey.originalPrice - jersey.price).toFixed(0)}
                </div>
                <div class="jersey-rating">
                    ${generateStars(jersey.rating)}
                    <span>${jersey.rating}</span>
                </div>
            </div>
            <div class="jersey-content">
                <div class="jersey-league">${jersey.league}</div>
                <h3 class="jersey-name">${jersey.name}</h3>
                <p class="jersey-team">${jersey.team}</p>
                <div class="jersey-price">
                    <span class="jersey-current-price">$${jersey.price}</span>
                    <span class="jersey-original-price">$${jersey.originalPrice}</span>
                </div>
                <button class="btn btn-primary btn-full" onclick="event.stopPropagation(); openSizeModal(${jersey.id})">
                    Add to Cart
                </button>
            </div>
        </div>
    `;
}

function renderFeaturedJerseys() {
    const container = document.getElementById('featuredJerseys');
    const featuredJerseys = allJerseys.slice(0, 4);
    container.innerHTML = featuredJerseys.map(jersey => renderJerseyCard(jersey)).join('');
}

function renderShopJerseys() {
    const container = document.getElementById('shopJerseys');
    const resultsText = document.getElementById('resultsText');
    
    container.innerHTML = filteredJerseys.map(jersey => renderJerseyCard(jersey)).join('');
    resultsText.textContent = `Showing ${filteredJerseys.length} of ${allJerseys.length} jerseys`;
}

function renderTeams() {
    const container = document.getElementById('teamsGrid');
    const teams = [...new Set(allJerseys.map(jersey => jersey.team))];
    
    container.innerHTML = teams.map(team => `
        <div class="team-card" onclick="filterByTeam('${team}')">
            <div class="team-logo">⚽</div>
            <h3>${team}</h3>
            <p>${allJerseys.filter(j => j.team === team).length} Jerseys</p>
        </div>
    `).join('');
}

function renderLeagues() {
    const container = document.getElementById('leaguesGrid');
    
    container.innerHTML = leagues.map(league => `
        <div class="league-card" onclick="filterByLeague('${league.name}')">
            <div class="league-content">
                <div class="league-image-container">
                    <img src="${league.image}" alt="${league.name}" class="league-image">
                    <div class="jersey-badge">${league.jerseyCount} Jerseys</div>
                </div>
                <div class="league-details">
                    <div>
                        <div class="jersey-league">${league.continent}</div>
                        <h3 class="jersey-name">${league.name}</h3>
                        <p class="jersey-team">${league.description}</p>
                        
                        <div class="league-meta">
                            <div class="league-meta-item">
                                <i class="fas fa-calendar"></i>
                                <span>Founded ${league.founded}</span>
                            </div>
                            <div class="league-meta-item">
                                <i class="fas fa-users"></i>
                                <span>${league.teams} Teams</span>
                            </div>
                        </div>
                        
                        <div class="popular-teams">
                            <h4>Popular Teams:</h4>
                            <div class="teams-list">
                                ${league.popularTeams.slice(0, 3).map(team => 
                                    `<span class="team-badge">${team}</span>`
                                ).join('')}
                            </div>
                        </div>
                    </div>
                    
                    <button class="btn btn-primary btn-full">
                        <i class="fas fa-trophy"></i>
                        View Jerseys
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

function renderProductDetail() {
    const jersey = allJerseys.find(j => j.id === currentProductId);
    if (!jersey) return;
    
    const container = document.getElementById('productDetail');
    const breadcrumb = document.getElementById('productBreadcrumb');
    
    breadcrumb.textContent = jersey.name;
    
    container.innerHTML = `
        <div class="product-images">
            <div class="main-image">
                <img src="${jersey.images[selectedImage]}" alt="${jersey.name}" id="mainProductImage">
            </div>
            <div class="image-thumbnails">
                ${jersey.images.map((image, index) => `
                    <div class="thumbnail ${index === selectedImage ? 'active' : ''}" onclick="selectImage(${index})">
                        <img src="${image}" alt="${jersey.name} view ${index + 1}">
                    </div>
                `).join('')}
            </div>
        </div>
        
        <div class="product-info">
            <div>
                <div class="jersey-league">${jersey.league}</div>
                <h1>${jersey.name}</h1>
                <p class="jersey-team">${jersey.team}</p>
                
                <div class="product-rating">
                    <div class="rating-stars">
                        ${generateStars(jersey.rating)}
                    </div>
                    <span class="rating-text">${jersey.rating} (${jersey.reviews} reviews)</span>
                </div>
                
                <div class="product-price">
                    <span class="current-price">$${jersey.price}</span>
                    <span class="original-price">$${jersey.originalPrice}</span>
                    <div class="save-badge">Save $${(jersey.originalPrice - jersey.price).toFixed(0)}</div>
                </div>
            </div>
            
            <div class="size-selection">
                <h3>Size</h3>
                <div class="size-options" id="productSizeOptions">
                    ${jersey.sizes.map(size => `
                        <div class="size-option ${selectedSize === size ? 'selected' : ''}" onclick="selectSize('${size}')">
                            ${size}
                        </div>
                    `).join('')}
                </div>
            </div>
            
            <div class="quantity-selection">
                <h3>Quantity</h3>
                <div class="quantity-controls">
                    <button class="quantity-btn" onclick="changeQuantity(-1)">-</button>
                    <span class="quantity-display" id="quantityDisplay">${quantity}</span>
                    <button class="quantity-btn" onclick="changeQuantity(1)">+</button>
                </div>
            </div>
            
            <button class="btn btn-primary btn-full" onclick="addToCartFromProduct()">
                Add to Cart
            </button>
            
            <div class="product-services">
                <div class="service-item">
                    <i class="fas fa-truck"></i>
                    <span>Free Shipping</span>
                </div>
                <div class="service-item">
                    <i class="fas fa-undo"></i>
                    <span>30-Day Returns</span>
                </div>
                <div class="service-item">
                    <i class="fas fa-shield-alt"></i>
                    <span>Authentic</span>
                </div>
            </div>
            
            <div class="product-features">
                <h3>Description</h3>
                <p class="product-description">${jersey.description}</p>
                
                <h4>Features:</h4>
                <ul class="features-list">
                    ${jersey.features.map(feature => `<li>${feature}</li>`).join('')}
                </ul>
            </div>
        </div>
    `;
}

function renderCart() {
    console.log('renderCart() called, cart length:', cart.length); // Debug log
    try {
        const container = document.getElementById('cartContent');
        console.log('cartContent container:', container); // Debug log
        
        if (!container) {
            console.error('cartContent container not found!');
            return;
        }
        
        if (cart.length === 0) {
            container.innerHTML = `
                <div class="empty-cart">
                    <i class="fas fa-shopping-cart" style="font-size: 4rem; margin-bottom: 1rem; color: #d1d5db;"></i>
                    <h3>Your cart is empty</h3>
                    <p>Add some jerseys to get started!</p>
                    <button class="btn btn-primary" onclick="showShop()">Shop Now</button>
                </div>
            `;
            console.log('Rendered empty cart'); // Debug log
            return;
        }
    
    const cartItems = cart.map(item => `
        <div class="cart-item">
            <img src="${item.image}" alt="${item.name}" class="cart-item-image">
            <div class="cart-item-details">
                <div class="cart-item-name">${item.name}</div>
                <div class="cart-item-info">Size: ${item.size} • $${item.price}</div>
            </div>
            <div class="cart-item-controls">
                <div class="quantity-controls">
                    <button class="quantity-btn" onclick="updateCartItemQuantity(${item.id}, '${item.size}', -1)">-</button>
                    <span class="quantity-display">${item.quantity}</span>
                    <button class="quantity-btn" onclick="updateCartItemQuantity(${item.id}, '${item.size}', 1)">+</button>
                </div>
                <button class="btn btn-outline" onclick="removeFromCart(${item.id}, '${item.size}')">Remove</button>
            </div>
        </div>
    `).join('');
    
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    
    container.innerHTML = `
        <div class="cart-items">
            ${cartItems}
        </div>
        <div class="cart-total">
            <div class="total-price">Total: $${total.toFixed(2)}</div>
            <button class="btn btn-primary" style="margin-top: 1rem;">Proceed to Checkout</button>
        </div>
    `;
    console.log('Cart rendered successfully with', cart.length, 'items');
    } catch (error) {
        console.error('Error in renderCart():', error);
    }
}

// Filter Functions
function applyFilters() {
    const params = getQueryParams();
    const leagueFilter = document.getElementById('leagueFilter').value;
    const sortFilter = document.getElementById('sortFilter').value;
    
    // Apply URL parameters first
    filteredJerseys = allJerseys.filter(jersey => {
        const leagueMatch = (!params.league || jersey.league === params.league) && 
                           (leagueFilter === 'all' || jersey.league === leagueFilter);
        const teamMatch = !params.team || jersey.team === params.team;
        return leagueMatch && teamMatch;
    });
    
    // Apply sorting
    filteredJerseys.sort((a, b) => {
        switch (sortFilter) {
            case 'price-low':
                return a.price - b.price;
            case 'price-high':
                return b.price - a.price;
            case 'rating':
                return b.rating - a.rating;
            default:
                return 0;
        }
    });
}

function filterByTeam(team) {
    window.history.pushState({}, '', `?team=${encodeURIComponent(team)}`);
    showShop();
}

function filterByLeague(league) {
    window.history.pushState({}, '', `?league=${encodeURIComponent(league)}`);
    showShop();
}

function clearLeagueFilters() {
    document.getElementById('leagueSearch').value = '';
    document.getElementById('continentFilter').value = 'all';
    renderLeagues();
}

// Product Interaction Functions
function selectImage(index) {
    selectedImage = index;
    const mainImage = document.getElementById('mainProductImage');
    const jersey = allJerseys.find(j => j.id === currentProductId);
    if (mainImage && jersey) {
        mainImage.src = jersey.images[index];
    }
    
    // Update thumbnail active state
    document.querySelectorAll('.thumbnail').forEach((thumb, i) => {
        thumb.classList.toggle('active', i === index);
    });
}

function selectSize(size) {
    selectedSize = size;
    document.querySelectorAll('.size-option').forEach(option => {
        option.classList.toggle('selected', option.textContent.trim() === size);
    });
}

function changeQuantity(delta) {
    quantity = Math.max(1, quantity + delta);
    const display = document.getElementById('quantityDisplay');
    if (display) {
        display.textContent = quantity;
    }
}

// Cart Functions
function openSizeModal(jerseyId) {
    const jersey = allJerseys.find(j => j.id === jerseyId);
    if (!jersey) return;
    
    currentProductId = jerseyId;
    selectedSize = '';
    
    const modal = document.getElementById('sizeModal');
    const sizeOptions = document.getElementById('sizeOptions');
    
    sizeOptions.innerHTML = jersey.sizes.map(size => `
        <div class="size-option" onclick="selectModalSize('${size}')">
            ${size}
        </div>
    `).join('');
    
    modal.style.display = 'block';
}

function selectModalSize(size) {
    selectedSize = size;
    document.querySelectorAll('#sizeOptions .size-option').forEach(option => {
        option.classList.toggle('selected', option.textContent.trim() === size);
    });
}

function closeSizeModal() {
    document.getElementById('sizeModal').style.display = 'none';
}

function addToCartWithSize() {
    if (!selectedSize) {
        showToast('Please select a size');
        return;
    }
    
    const jersey = allJerseys.find(j => j.id === currentProductId);
    if (!jersey) return;
    
    addToCart(jersey, selectedSize, 1);
    closeSizeModal();
}

function addToCartFromProduct() {
    if (!selectedSize) {
        showToast('Please select a size');
        return;
    }
    
    const jersey = allJerseys.find(j => j.id === currentProductId);
    if (!jersey) return;
    
    addToCart(jersey, selectedSize, quantity);
}

function addToCart(jersey, size, qty) {
    const existingItem = cart.find(item => item.id === jersey.id && item.size === size);
    
    if (existingItem) {
        existingItem.quantity += qty;
    } else {
        cart.push({
            id: jersey.id,
            name: jersey.name,
            price: jersey.price,
            image: jersey.image,
            size: size,
            quantity: qty
        });
    }
    
    saveCart();
    showToast('Added to cart successfully!');
}

function updateCartItemQuantity(id, size, delta) {
    const item = cart.find(item => item.id === id && item.size === size);
    if (!item) return;
    
    item.quantity = Math.max(1, item.quantity + delta);
    saveCart();
    renderCart();
}

function removeFromCart(id, size) {
    cart = cart.filter(item => !(item.id === id && item.size === size));
    saveCart();
    renderCart();
    showToast('Item removed from cart');
}

// Event Listeners
document.addEventListener('DOMContentLoaded', function() {
    // Initialize cart count
    updateCartCount();
    
    // Add cart link event listener
    document.getElementById('cartLink').addEventListener('click', function(e) {
        e.preventDefault();
        console.log('Cart link clicked!');
        showCart();
    });
    
    // Set up filter event listeners
    document.getElementById('leagueFilter').addEventListener('change', () => {
        applyFilters();
        renderShopJerseys();
    });
    
    document.getElementById('sortFilter').addEventListener('change', () => {
        applyFilters();
        renderShopJerseys();
    });
    
    document.getElementById('leagueSearch').addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase();
        const filteredLeagues = leagues.filter(league => 
            league.name.toLowerCase().includes(searchTerm) ||
            league.country.toLowerCase().includes(searchTerm)
        );
        
        const container = document.getElementById('leaguesGrid');
        container.innerHTML = filteredLeagues.map(league => `
            <div class="league-card" onclick="filterByLeague('${league.name}')">
                <div class="league-content">
                    <div class="league-image-container">
                        <img src="${league.image}" alt="${league.name}" class="league-image">
                        <div class="jersey-badge">${league.jerseyCount} Jerseys</div>
                    </div>
                    <div class="league-details">
                        <div>
                            <div class="jersey-league">${league.continent}</div>
                            <h3 class="jersey-name">${league.name}</h3>
                            <p class="jersey-team">${league.description}</p>
                            
                            <div class="league-meta">
                                <div class="league-meta-item">
                                    <i class="fas fa-calendar"></i>
                                    <span>Founded ${league.founded}</span>
                                </div>
                                <div class="league-meta-item">
                                    <i class="fas fa-users"></i>
                                    <span>${league.teams} Teams</span>
                                </div>
                            </div>
                            
                            <div class="popular-teams">
                                <h4>Popular Teams:</h4>
                                <div class="teams-list">
                                    ${league.popularTeams.slice(0, 3).map(team => 
                                        `<span class="team-badge">${team}</span>`
                                    ).join('')}
                                </div>
                            </div>
                        </div>
                        
                        <button class="btn btn-primary btn-full">
                            <i class="fas fa-trophy"></i>
                            View Jerseys
                        </button>
                    </div>
                </div>
            </div>
        `).join('');
    });
    
    // Close modal when clicking outside
    window.addEventListener('click', function(event) {
        const modal = document.getElementById('sizeModal');
        if (event.target === modal) {
            closeSizeModal();
        }
    });
    
    // Handle URL parameters on page load
    const params = getQueryParams();
    if (params.team || params.league) {
        showShop();
    } else {
        showHome();
    }
});

// Handle browser back/forward buttons
window.addEventListener('popstate', function() {
    const params = getQueryParams();
    if (params.team || params.league) {
        showShop();
    } else {
        showHome();
    }
});

// Test function to help debug cart issues
function testCart() {
    console.log('Testing cart functionality...');
    console.log('Current cart:', cart);
    console.log('Cart page element:', document.getElementById('cartPage'));
    console.log('Cart content element:', document.getElementById('cartContent'));
    console.log('All pages:', document.querySelectorAll('.page'));
    console.log('Active pages:', document.querySelectorAll('.page.active'));
    
    // Add a test item to cart if empty
    if (cart.length === 0) {
        const testItem = {
            id: 1,
            name: "Test Jersey",
            image: "https://via.placeholder.com/300",
            price: 50.00,
            size: "M",
            quantity: 1
        };
        cart.push(testItem);
        saveCart();
        console.log('Added test item to cart');
    }
}

// Add test button click handler for debugging
window.testCart = testCart;
window.showCart = showCart;
window.renderCart = renderCart;
window.showPage = showPage;
