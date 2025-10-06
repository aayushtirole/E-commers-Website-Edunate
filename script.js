
const CURRENCY_SYMBOL = '₹';

// Global product dataset (25 items)
const products = [
    { id: 1, name: "Premium Smart Phone Display", category: "Electronics", price: 65999.00, image: "https://images.unsplash.com/photo-1758186366128-b7f4588ac75f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDU1fHx8ZW58MHx8fHx8", description: "Ultra-high resolution display for immersive viewing and professional-grade performance." },
    { id: 2, name: "Retro Red Sneakers", category: "Fashion", price: 2990.00, image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c25lYWtlcnxlbnwwfHwwfHx8MA%3D%3D", description: "Classic sports sneakers with vibrant red accents and superior comfort." },
    { id: 3, name: "Minimalist Wood Chair", category: "Furniture", price: 4200.00, image: "https://images.unsplash.com/photo-1750306956117-460a9fd3f1b8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8TWluaW1hbGlzdCUyMFdvb2QlMjBDaGFpcnxlbnwwfHwwfHx8MA%3D%3D", description: "Elegant, simple wooden chair, ideal for dining or as an accent piece." },
    { id: 4, name: "Modern Graphic Design Book", category: "Books", price: 1199.00, image: "https://images.unsplash.com/photo-1695634621121-691d54259d37?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8TW9kZXJuJTIwR3JhcGhpYyUyMERlc2lnbiUyMEJvb2t8ZW58MHx8MHx8fDA%3D", description: "A beautifully designed book exploring modern trends in graphic and UI design." },
    { id: 5, name: "Classic Analog Wristwatch", category: "Accessories", price: 6500.00, image: "https://images.unsplash.com/photo-1684823026928-a4c4e160bec2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Q2xhc3NpYyUyMEFuYWxvZyUyMFdyaXN0d2F0Y2h8ZW58MHx8MHx8fDA%3D", description: "Sophisticated stainless steel watch with a minimalist face and leather strap." },
    { id: 6, name: "Aura Noise-Cancelling Headphones", category: "Electronics", price: 3999.00, image: "https://plus.unsplash.com/premium_photo-1677838847804-4054143fb91a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8QXVyYSUyME5vaXNlLUNhbmNlbGxpbmclMjBIZWFkcGhvbmVzfGVufDB8fDB8fHww", description: "Premium Bluetooth headphones with industry-leading noise cancellation and plush earcups." },
    { id: 7, name: "Minimalist Silver Bracelet", category: "Accessories", price: 2999.00, image: "https://plus.unsplash.com/premium_photo-1673285097459-2d980192ce04?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8TWluaW1hbGlzdCUyMFNpbHZlciUyMEJyYWNlbGV0fGVufDB8fDB8fHww", description: "Elegant sterling silver bracelet with a simple, comfortable clasp. Perfect for daily wear." },
    { id: 8, name: "Ultra-Slim Business Laptop", category: "Electronics", price: 54999.00, image: "https://images.unsplash.com/photo-1663354027456-ce6a7e07d212?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fFVsdHJhLVNsaW0lMjBCdXNpbmVzcyUyMExhcHRvcHxlbnwwfHwwfHx8MA%3D%3D", description: "Lightweight and powerful laptop with a 13-inch display and all-day battery life." },
    { id: 9, name: "Signature Eau De Parfum", category: "Fashion", price: 3500.00, image: "https://plus.unsplash.com/premium_photo-1752485892414-6656876bf49b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8U2lnbmF0dXJlJTIwRWF1JTIwRGUlMjBQYXJmdW18ZW58MHx8MHx8fDA%3D", description: "A complex, long-lasting fragrance with notes of cedarwood and jasmine." },
    { id: 10, name: "Instant Film Camera", category: "Electronics", price: 4999.00, image: "https://images.unsplash.com/photo-1613600143671-234a54c236eb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8SW5zdGFudCUyMEZpbG0lMjBDYW1lcmF8ZW58MHx8MHx8fDA%3D", description: "Capture and print moments instantly with this retro-style camera." },

    { id: 11, name: "Minimalist Ceramic Vase", category: "Home Essentials", price: 799.00, image: "https://images.unsplash.com/photo-1588874133473-d6d9c9dd4f31?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8TWluaW1hbGlzdCUyMENlcmFtaWMlMjBWYXNlfGVufDB8fDB8fHww", description: "Hand-crafted ceramic vase with a matte finish. Ideal for single stems." },
    { id: 12, name: "Portable Power Bank (20000mAh)", category: "Accessories", price: 1599.00, image: "https://images.unsplash.com/photo-1706275400998-7fc21c8cd8ed?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fFBvd2VyJTIwQmFua3xlbnwwfHwwfHx8MA%3D%3D", description: "20,000mAh capacity power bank, fast charging compatible." },
    { id: 13, name: "Modular Side Table", category: "Furniture", price: 2200.00, image: "https://plus.unsplash.com/premium_photo-1664392242935-f22e728a4667?", description: "Versatile, lightweight wooden side table that requires no tools for assembly." },
    { id: 14, name: "Smart Home Hub", category: "Electronics", price: 5999.00, image: "https://images.unsplash.com/photo-1571251455684-2eb131fdb294?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", description: "Central hub for connecting all your smart home devices seamlessly." },
    { id: 15, name: "Silk Scarf", category: "Fashion", price: 1800.00, image: "https://images.unsplash.com/photo-1677478863154-55ecce8c7536?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8U2lsayUyMFNjYXJmfGVufDB8fDB8fHww", description: "100% pure silk scarf with a hand-rolled hem." },
    { id: 16, name: "Microfiber Cleaning Cloth Set", category: "Home Essentials", price: 350.00, image: "https://plus.unsplash.com/premium_photo-1678718604563-5268de669666?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fE1pY3JvZmliZXIlMjBDbGVhbmluZyUyMENsb3RoJTIwU2V0fGVufDB8fDB8fHww", description: "Highly absorbent and lint-free cloths for streak-free cleaning." },
    { id: 17, name: "Classic Bangle Watch", category: "Accessories", price: 4500.00, image: "https://images.unsplash.com/photo-1759406069569-efb854b3410b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fENsYXNzaWMlMjBCYW5nbGUlMjBXYXRjaHxlbnwwfHwwfHx8MA%3D%3D", description: "Elegant stainless steel watch with a minimalist face and bangle strap." },
    { id: 18, name: "Digital Art Fundamentals (Book)", category: "Books", price: 850.00, image: "https://images.unsplash.com/photo-1555117389-402de1d1470b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fERpZ2l0YWwlMjBBcnQlMjBGdW5kYW1lbnRhbHMlMjAoQm9vayl8ZW58MHx8MHx8fDA%3D", description: "A guide for beginners to master digital painting and illustration techniques." },
    { id: 19, name: "Premium Rubber Yoga Mat", category: "Home Essentials", price: 1199.00, image: "https://images.unsplash.com/photo-1591291621164-2c6367723315?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8WW9nYSUyME1hdHxlbnwwfHwwfHx8MA%3D%3D", description: "Non-slip, extra-thick mat perfect for yoga, Pilates, and general fitness." },
    { id: 20, name: "Wireless Mechanical Keyboard", category: "Electronics", price: 4500.00, image: "https://images.unsplash.com/photo-1694405156884-dea1ffb40ede?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8V2lyZWxlc3MlMjBNZWNoYW5pY2FsJTIwS2V5Ym9hcmR8ZW58MHx8MHx8fDA%3D", description: "Tactile brown switches with RGB backlighting and multi-device connectivity." },
    { id: 21, name: "Anti-Theft Travel Backpack", category: "Accessories", price: 2900.00, image: "https://images.unsplash.com/photo-1681334921874-5bafe8acf433?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8QW50aS1UaGVmdCUyMFRyYXZlbCUyMEJhY2twYWNrfGVufDB8fDB8fHww", description: "Water-resistant backpack with hidden zippers and dedicated laptop sleeve." }
];


// Slider Images
const heroImages = [
    "https://plus.unsplash.com/premium_photo-1708271138231-e3ce0cd6ff84?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTY5fHxwcm9kdWN0fGVufDB8fDB8fHww", 
    "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D", 
    "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D", 
    "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D", 
];

// Global Variables
let currentSlideIndex = 0;
let sliderInterval;

// Reference to the main content area
const appContainer = document.getElementById('app-container');

/**
 * Utility function to format price with INR symbol and Indian locale.
 */
const formatPrice = (price) => {
    // Format price using Indian locale (e.g., 3,999.00)
    return CURRENCY_SYMBOL + price.toLocaleString('en-IN', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });
}

// --- LocalStorage and Utility Functions ---

/**
 * Gets the current cart array from LocalStorage, or returns an empty array.
 */
const getCart = () => {
    try {
        const cart = localStorage.getItem('cart');
        return cart ? JSON.parse(cart) : [];
    } catch (e) {
        console.error("Error reading cart from LocalStorage:", e);
        return [];
    }
};

/**
 * Saves the current cart array to LocalStorage and updates the badge.
 */
const saveCart = (cart) => {
    try {
        localStorage.setItem('cart', JSON.stringify(cart));
        renderCartBadge();
    } catch (e) {
        console.error("Error saving cart to LocalStorage:", e);
    }
};

/**
 * Updates the item count badge in the navigation bar.
 */
const renderCartBadge = () => {
    const cart = getCart();
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const badge = document.getElementById('cart-count');
    if (badge) {
        badge.textContent = totalItems;
    }
};

/**
 * Toggles the Dark/Light mode and saves preference to LocalStorage.
 */
const toggleTheme = () => {
    const isDark = document.body.classList.toggle('dark-mode');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    
    // Update the icon
    const themeButton = document.getElementById('theme-toggle');
    if (themeButton) {
        const isDarkNow = document.body.classList.contains('dark-mode');
        themeButton.textContent = isDarkNow ? '☀️' : '🌙';
    }
};

/**
 * Displays a custom modal/message box (since alert() is forbidden).
 * @param {string} title - Modal title.
 * @param {string} message - Modal body message.
 * @param {Array} actions - Array of { text, callback } objects for buttons.
 */
const showModal = (title, message, actions = [{ text: "OK", callback: () => {} }]) => {
    const modal = document.getElementById('custom-modal');
    if (!modal) {
        console.error("Modal element not found.");
        return;
    }

    // Construct the prominent title and the detailed message inside the single .modal-message element.
    modal.querySelector('.modal-message').innerHTML = `
        <div style="font-weight: 800; font-size: 1.5rem; margin-bottom: 0.5rem; color: var(--primary);">${title}</div>
        <div style="font-weight: 400; font-size: 1rem; opacity: 0.9; color: var(--text);">${message}</div>
    `;

    const actionContainer = modal.querySelector('.modal-actions');
    actionContainer.innerHTML = '';
    
    actions.forEach(action => {
        const button = document.createElement('button');
        button.className = action.text === "Cancel" ? 'btn btn-secondary' : 'btn btn-primary';
        button.textContent = action.text;
        button.addEventListener('click', () => {
            modal.classList.add('hidden');
            action.callback();
        });
        actionContainer.appendChild(button);
    });

    modal.classList.remove('hidden');
};

// --- Cart Operations ---

/**
 * Adds a product to the cart or increases its quantity.
 */
const addToCart = (productId, quantity = 1) => {
    if (typeof quantity !== 'number' || quantity <= 0) {
        quantity = 1; 
    }
    
    const product = products.find(p => p.id === productId);
    if (!product) {
        console.error("Product not found:", productId);
        return;
    }

    let cart = getCart();
    const existingItemIndex = cart.findIndex(item => item.id === productId);

    if (existingItemIndex > -1) {
        cart[existingItemIndex].quantity += quantity;
    } else {
        cart.push({
            id: productId,
            name: product.name,
            price: product.price,
            image: product.image,
            quantity: quantity
        });
    }

    saveCart(cart);

    showModal("Item Added", `Successfully added **${quantity} x ${product.name}** to your cart.`, [
        {
        text: "Continue Shopping", 
        callback: () => {}
    }, {
        text: "View Cart", 
        callback: () => window.location.hash = 'cart'
    }]);
};

/**
 * Updates the quantity of a specific item in the cart and re-renders the cart view.
 */
const updateCartItemQuantity = (productId, newQuantity) => {
    let cart = getCart();
    const index = cart.findIndex(item => item.id === productId);

    if (index > -1) {
        if (newQuantity <= 0) {
            cart.splice(index, 1);
        } else {
            cart[index].quantity = newQuantity;
        }
        saveCart(cart);
        renderCartPage();
    }
};

/**
 * Removes a product from the cart and re-renders the cart view.
 */
const removeFromCart = (productId) => {
    let cart = getCart();
    cart = cart.filter(item => item.id !== productId);
    saveCart(cart);
    renderCartPage();
};

/**
 * Clears all items from the cart, with confirmation.
 */
const clearCart = () => {
    showModal("Confirm Clear Cart", "Are you sure you want to remove **all** items from your cart? This action cannot be undone.", [
        {
        text: "Cancel", 
        callback: () => {}
    }, {
        text: "Yes, Clear Cart", 
        callback: () => { 
            saveCart([]);
            renderCartPage();
            showModal("Cart Cleared", "Your shopping cart is now empty.", [{ text: "OK", callback: () => {} }]);
        }
    }]);
};

/**
 * Handles the final checkout process.
 */
const handleCheckout = () => {
    if (getCart().length === 0) {
        showModal("Checkout Failed", "Your cart is empty! Please add items before checking out.", [{ text: "OK", callback: () => {} }]);
        return;
    }
    
    showModal("Checkout Success!", "Thank you for shopping at ShopEase. Your order has been placed.", [{ 
        text: "Done",
        callback: () => {
            saveCart([]);
            window.location.hash = 'home';
        }
    }]);
};


// --- Hero Slider Logic ---

/**
 * Moves the slider track to show the next image.
 */
const moveSlider = () => {
    currentSlideIndex = (currentSlideIndex + 1) % heroImages.length;
    const track = document.getElementById('slider-track');
    if (track) {
        // Shift the track to show the next slide
        const offset = currentSlideIndex * -25; 
        track.style.transform = `translateX(${offset}%)`;
    }
};

/**
 * Initializes the hero background slider.
 */
const initHeroSlider = () => {
    // Clear any existing interval to prevent duplicates.
    if (sliderInterval) clearInterval(sliderInterval);

    const slider = document.getElementById('hero-slider');
    if (!slider) return;

    // 1. Build the slide track HTML
    let trackHTML = '<div id="slider-track" class="slider-track">';
    heroImages.forEach(url => {
        trackHTML += `<div class="slide" style="background-image: url('${url}');"></div>`;
    });
    trackHTML += '</div>';
    slider.innerHTML = trackHTML;

    // 2. Start the automatic sliding
    currentSlideIndex = 0; // Reset index
    sliderInterval = setInterval(moveSlider, 5000); // Slide every 5 seconds
};

// --- View Rendering Functions ---

/**
 * Renders the Home Page content including new sections.
 */
const renderHomePage = () => {
    appContainer.innerHTML = `
        <div class="container">
            <!-- Hero Banner Wrapper -->
            <div class="hero-wrapper">
                <div id="hero-slider">
                    <!-- Slider images injected by JS -->
                </div>
                <div class="hero-content">
                    <div class="hero-text">
                        <!-- ENHANCEMENT: Applied animation and delay -->
                        <h1 class="animate-fade-in" style="animation-delay: 0.1s;">Discover <span style="color: #ffeb3b;">Quality</span>, Simplify Life.</h1>
                        <p class="animate-fade-in" style="opacity: 0.9; animation-delay: 0.3s;">Explore our carefully curated collection of minimalist essentials for modern living.</p>
                        <a href="#shop" class="btn btn-primary btn-lg animate-fade-in" style="margin-top: 1.5rem; animation-delay: 0.5s;">
                            <i class="fas fa-shopping-bag"></i> Shop Now
                        </a>
                    </div>
                </div>
            </div>
            
            <!-- Deal of the Day / Signature Feature Product -->
            <section class="p-section" style="padding: 2rem 0;">
                <h2 class="text-center" style="font-size: 2rem; font-weight: 700; margin-bottom: 2rem; color: var(--primary);">🔥 Deal of the Day</h2>
                <div id="deal-of-the-day-container" class="container">
                    <!-- Deal content will be injected -->
                </div>
            </section>

            <!-- Featured Products Grid (Now showing 8 products) -->
            <section class="p-section" style="padding-top: 0;">
                <h2 class="text-center" style="font-size: 2rem; font-weight: 700; margin-bottom: 2rem;">Trending Products</h2>
                <div id="featured-products-container" class="product-grid-display">
                    <!-- Featured products will be dynamically loaded here -->
                </div>
            </section>
        </div>

        <!-- Customer Reviews Section -->
        <section class="p-section reviews-section">
            <div class="container">
                <h2 class="text-center" style="font-size: 2rem; font-weight: 700; margin-bottom: 3rem;">Trusted by Our Customers</h2>
                <div class="reviews-grid">
                    <div class="review-card">
                        <div class="rating"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></div>
                        <p>"The best quality products I've found online. The delivery was incredibly fast across India!"</p>
                        <span class="author">— Priya Sharma, Mumbai</span>
                    </div>
                    <div class="review-card">
                        <div class="rating"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star-half-alt"></i></div>
                        <p>"Excellent customer service and the pricing is very competitive. Highly recommend the electronics category."</p>
                        <span class="author">— Rohan Varma, Delhi</span>
                    </div>
                    <div class="review-card">
                        <div class="rating"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></div>
                        <p>"The wooden chair I bought is elegant and sturdy. Perfect addition to my home office in Bengaluru."</p>
                        <span class="author">— Neha Kulkarni, Bengaluru</span>
                    </div>
                </div>
            </div>
        </section>
    `;
    // Initialize hero slider
    initHeroSlider(); 
    
    // Render dynamic sections
    renderDealOfTheDay();
    displayFeaturedProducts();
};

/**
 * Renders a single featured deal prominently.
 */
const renderDealOfTheDay = () => {
    const container = document.getElementById('deal-of-the-day-container');
    if (!container) return;

    const product = products.find(p => p.id === 14); // Smart Home Hub as the deal
    const originalPrice = 7500.00; // Mock higher original price

    container.innerHTML = `
        <div class="deal-card">
            <div class="deal-image">
                <img src="${product.image}" alt="${product.name}">
            </div>
            <div class="deal-info">
                <h3>${product.name}</h3>
                <p>Simplify your life with centralized control. Limited time offer!</p>
                <div>
                    <!-- Price display improved -->
                    <span class="old-price">${formatPrice(originalPrice)}</span>
                    <span class="new-price">${formatPrice(product.price)}</span>
                </div>
                <!-- Button style updated to primary for prominence and hover effect maintained -->
                <button onclick="addToCart(${product.id})" class="btn btn-primary btn-lg" style="margin-top: 1.5rem;">
                    <i class="fas fa-tags"></i> Grab the Deal!
                </button>
            </div>
        </div>
    `;
}


/**
 * Renders random featured products (now 8 items) into the Home Page container.
 */
const displayFeaturedProducts = () => {
    const container = document.getElementById('featured-products-container');
    if (!container) return;

    container.innerHTML = '';

    // Shuffle array and pick first 8 products
    const shuffled = [...products].sort(() => 0.5 - Math.random());
    const featured = shuffled.slice(0, 8); 

    featured.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <a href="#product?id=${product.id}" class="card-image-link">
                <div class="card-image-wrapper">
                    <img src="${product.image}" alt="${product.name}" class="card-image">
                </div>
            </a>
            <div class="card-content">
                <span class="card-category">${product.category}</span>
                <h3 class="card-title">
                    <a href="#product?id=${product.id}">${product.name}</a>
                </h3>
                <div class="card-footer">
                    <span class="card-price">${formatPrice(product.price)}</span>
                    <button onclick="addToCart(${product.id})" class="btn-primary btn-sm">
                        <i class="fas fa-cart-plus"></i> Add to Cart
                    </button>
                </div>
            </div>
        `;
        container.appendChild(card);
    });
};

/**
 * Renders the Shop Page structure and initializes filters.
 */
const renderShopPage = () => {
    // Clear the slider interval when leaving the home page
    if (sliderInterval) clearInterval(sliderInterval); 

    appContainer.innerHTML = `
        <div class="container">
            <h1 class="text-center" style="font-size: 2.5rem; font-weight: 900; margin-bottom: 2rem;">Shop Our Collection</h1>

            <!-- Search and Filters -->
            <div class="filters-bar">
                <!-- Search Input with updated styling -->
                <input type="text" id="search-input" placeholder="Search by product name..." />
                
                <!-- Category Filters -->
                <div style="display: flex; flex-wrap: wrap; gap: 0.5rem; margin: 0.5rem 0;">
                    <button data-category="All" class="category-filter active">All</button>
                    <button data-category="Electronics" class="category-filter">Electronics</button>
                    <button data-category="Fashion" class="category-filter">Fashion</button>
                    <button data-category="Books" class="category-filter">Books</button>
                    <button data-category="Furniture" class="category-filter">Furniture</button>
                    <button data-category="Home Essentials" class="category-filter">Home Essentials</button>
                    <button data-category="Accessories" class="category-filter">Accessories</button>
                </div>
            </div>

            <!-- Product Listing Grid -->
            <div id="product-list" class="product-grid-display">
                <!-- Product cards will be dynamically loaded here -->
            </div>
        </div>
    `;
    // Must re-initialize filters after HTML injection
    initShopFilters(); 
};

/**
 * Renders product cards based on filters and search terms (used by Shop Page).
 */
const displayProducts = (productsToDisplay = products) => {
    const container = document.getElementById('product-list');
    if (!container) return;

    container.innerHTML = ''; // Clear previous products

    if (productsToDisplay.length === 0) {
        container.innerHTML = '<p class="text-center py-10" style="color: var(--text); opacity: 0.6;">No products found matching your criteria.</p>';
        return;
    }

    productsToDisplay.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <a href="#product?id=${product.id}" class="card-image-link">
                <div class="card-image-wrapper">
                    <img src="${product.image}" alt="${product.name}" class="card-image">
                </div>
            </a>
            <div class="card-content">
                <span class="card-category">${product.category}</span>
                <h3 class="card-title">
                    <a href="#product?id=${product.id}">${product.name}</a>
                </h3>
                <div class="card-footer">
                    <span class="card-price">${formatPrice(product.price)}</span>
                    <button onclick="addToCart(${product.id})" class="btn-primary btn-sm">
                        <i class="fas fa-cart-plus"></i> Add to Cart
                    </button>
                </div>
            </div>
        `;
        container.appendChild(card);
    });
};

/**
 * Handles search and category filtering for the shop page.
 */
const filterProducts = () => {
    const searchTerm = document.getElementById('search-input')?.value.toLowerCase() || '';
    const activeFilter = document.querySelector('.category-filter.active')?.dataset.category || 'All';

    const filtered = products.filter(product => {
        const matchesSearch = product.name.toLowerCase().includes(searchTerm);
        const matchesCategory = activeFilter === 'All' || product.category === activeFilter;
        return matchesSearch && matchesCategory;
    });

    displayProducts(filtered);
};

/**
 * Initializes filter buttons and search input on the shop page.
 */
const initShopFilters = () => {
    const filters = document.querySelectorAll('.category-filter');
    filters.forEach(filter => {
        // Ensure event listeners are attached correctly to dynamic elements
        filter.addEventListener('click', (e) => {
            filters.forEach(f => f.classList.remove('active'));
            e.currentTarget.classList.add('active');
            filterProducts();
        });
    });

    // Ensure keyup listener is attached to the dynamic search input
    document.getElementById('search-input')?.addEventListener('keyup', filterProducts);

    // Initial load
    filterProducts();
};

/**
 * Renders the Product Details Page content.
 */
const renderProductPage = (productId) => {
    // Clear the slider interval when leaving the home page
    if (sliderInterval) clearInterval(sliderInterval); 
    
    const product = products.find(p => p.id === productId);
    
    if (!product) {
        appContainer.innerHTML = `<div class="container"><div class="product-error" style="text-align: center; padding: 5rem 0; color: #ef4444;">Product not found. <a href="#shop">Back to Shop</a></div></div>`;
        return;
    }

    appContainer.innerHTML = `
        <div class="container">
            <div id="product-details-container" class="product-detail-layout">
                <div class="product-image-area">
                    <img src="${product.image}" alt="${product.name}" class="product-image-detail">
                </div>

                <div class="product-info-area">
                    <span class="product-category">${product.category}</span>
                    <h1 class="product-title">${product.name}</h1>
                    <p class="product-price">${formatPrice(product.price)}</p>
                    
                    <p class="product-description">${product.description}</p>
                    
                    <div class="product-actions">
                        <div class="quantity-input-group">
                            <label for="product-quantity">Quantity:</label>
                            <input type="number" id="product-quantity" value="1" min="1" class="quantity-input">
                        </div>
                        <button onclick="addToCart(${product.id}, parseInt(document.getElementById('product-quantity').value))" class="btn-primary btn-lg">
                            <i class="fas fa-cart-plus"></i> Add to Cart
                        </button>
                    </div>

                    <a href="#shop" class="back-to-shop-link"><i class="fas fa-arrow-left"></i> Back to Shop</a>
                </div>
            </div>
        </div>
    `;
};


/**
 * Renders the Cart Page content.
 */
const renderCartPage = () => {
    // Clear the slider interval when leaving the home page
    if (sliderInterval) clearInterval(sliderInterval); 

    const cart = getCart();
    
    let cartContent = '';
    let totalsContent = '';

    if (cart.length === 0) {
        cartContent = '<div class="empty-cart-message" style="text-align: center; padding: 5rem 0;"><h2>Your Cart is Empty</h2><p>Looks like you haven\'t added anything yet.</p><a href="#shop" class="btn btn-primary" style="margin-top: 1rem;">Start Shopping</a></div>';
    } else {
        // Build Cart Table HTML
        let cartListHTML = `
            <table class="cart-table">
                <thead>
                    <tr>
                        <th>Product</th>
                        <th class="text-center">Price</th>
                        <th class="text-center">Quantity</th>
                        <th class="text-right">Subtotal</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
        `;

        let subtotal = 0;

        cart.forEach(item => {
            const productSubtotal = item.price * item.quantity;
            subtotal += productSubtotal;

            cartListHTML += `
                <tr class="cart-item">
                    <td class="item-product">
                        <img src="${item.image}" alt="${item.name}" class="item-image">
                        <a href="#product?id=${item.id}" class="item-name">${item.name}</a>
                    </td>
                    <td class="item-price text-center">${formatPrice(item.price)}</td>
                    <td class="item-quantity text-center">
                        <button onclick="updateCartItemQuantity(${item.id}, ${item.quantity - 1})" class="quantity-btn">-</button>
                        <span class="quantity-display">${item.quantity}</span>
                        <button onclick="updateCartItemQuantity(${item.id}, ${item.quantity + 1})" class="quantity-btn">+</button>
                    </td>
                    <td class="item-subtotal text-right">${formatPrice(productSubtotal)}</td>
                    <td class="item-remove">
                        <button onclick="removeFromCart(${item.id})" class="remove-btn"><i class="fas fa-times"></i></button>
                    </td>
                </tr>
            `;
        });

        cartListHTML += `</tbody></table>`;
        cartContent = cartListHTML;
        
        // Calculate Totals for Summary Box
        const taxRate = 0.05; // Using 5% GST mock rate
        const shipping = subtotal >= 5000 ? 0 : 250;
        const tax = subtotal * taxRate;
        const total = subtotal + shipping + tax;

        totalsContent = `
            <div class="cart-summary-box">
                <h3>Order Summary</h3>
                <div class="summary-line">
                    <span>Subtotal:</span>
                    <span>${formatPrice(subtotal)}</span>
                </div>
                <div class="summary-line">
                    <span>GST (5%):</span>
                    <span>${formatPrice(tax)}</span>
                </div>
                <div class="summary-line ${shipping === 0 ? 'free-shipping' : ''}">
                    <span>Shipping:</span>
                    <span>${shipping > 0 ? formatPrice(shipping) : 'FREE'}</span>
                </div>
                <div class="summary-line total">
                    <strong>Order Total:</strong>
                    <strong>${formatPrice(total)}</strong>
                </div>
                <div class="summary-actions">
                    <button onclick="handleCheckout()" class="btn-primary btn-lg"><i class="fas fa-credit-card"></i> Checkout</button>
                    <button onclick="clearCart()" class="btn-secondary"><i class="fas fa-trash-alt"></i> Clear Cart</button>
                </div>
            </div>
        `;
    }

    appContainer.innerHTML = `
        <div class="container">
            <h1 class="text-center" style="font-size: 2.5rem; font-weight: 900; margin-bottom: 2rem;">Your Shopping Cart</h1>
            <div class="cart-layout">
                <div id="cart-container-inner">${cartContent}</div>
                <div id="cart-totals-inner">${totalsContent}</div>
            </div>
        </div>
    `;
};


// --- SPA Routing Logic ---

/**
 * Handles routing based on the URL hash.
 */
const handleRouting = () => {
    let hash = window.location.hash.substring(1); // Remove '#'
    if (!hash) {
        hash = 'home'; // Default route
    }
    
    const [route, paramsString] = hash.split('?');
    const params = new URLSearchParams(paramsString);

    if (route === 'shop') {
        renderShopPage();
    } else if (route === 'cart') {
        renderCartPage();
    } else if (route === 'product' && params.has('id')) {
        renderProductPage(parseInt(params.get('id')));
    } else {
        renderHomePage();
    }
    window.scrollTo(0, 0); // Scroll to top on navigation
};


// --- Initialization ---

/**
 * Initializes the application: loads theme, sets up theme toggle, and renders cart badge.
 */
const initApp = () => {
    // 1. Load Theme Preference
    const storedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (storedTheme === 'dark' || (!storedTheme && prefersDark)) {
        document.body.classList.add('dark-mode');
    }
    
    // 2. Setup Theme Toggle Button
    const themeButton = document.getElementById('theme-toggle');
    if (themeButton) {
        const isDark = document.body.classList.contains('dark-mode');
        themeButton.textContent = isDark ? '☀️' : '🌙';
        themeButton.addEventListener('click', toggleTheme);
    }

    // 3. Render Cart Badge
    renderCartBadge();
    
    // 4. Initial Routing
    handleRouting();
};

// FIX: Run initialization on DOMContentLoaded to ensure DOM is ready when script loads, especially in local environments.
document.addEventListener('DOMContentLoaded', initApp);

// Event listener to listen for hash changes to navigate
window.addEventListener('hashchange', handleRouting);

// Expose functions globally for HTML attributes (onclick)
window.addToCart = addToCart;
window.updateCartItemQuantity = updateCartItemQuantity;
window.removeFromCart = removeFromCart;
window.clearCart = clearCart;
window.handleCheckout = handleCheckout;
window.filterProducts = filterProducts;
window.formatPrice = formatPrice; 
    