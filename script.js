// Oyuncak Tır Dünyası - JavaScript

$(document).ready(function() {
    // Global variables
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    let currentProduct = null;

    // Ürün verileri
    const products = [
        {
            id: 1,
            name: "Küçük Boy Plastik Tır",
            description: "Dayanıklı plastik malzemeden üretilmiş, küçük boyutlu oyuncak tır. Çocuklar için güvenli ve hafif.",
            price: 125.99,
            originalPrice: 159.98,
            rating: 4.6,
            reviews: 89,
            badge: "Popüler",
            images: [
                "https://i.pinimg.com/736x/c1/a4/e4/c1a4e4a48034086dd2f159ab8d5c048c.jpg",
                "https://i.pinimg.com/736x/c1/a4/e4/c1a4e4a48034086dd2f159ab8d5c048c.jpg",
                "https://i.pinimg.com/736x/c1/a4/e4/c1a4e4a48034086dd2f159ab8d5c048c.jpg",
                "https://i.pinimg.com/736x/c1/a4/e4/c1a4e4a48034086dd2f159ab8d5c048c.jpg"
            ],
            specs: {
                "Malzeme": "Güvenli Plastik",
                "Yaş Aralığı": "2-6 yaş",
                "Boyut": "18x8x6 cm",
                "Ağırlık": "280g",
                "Pil": "Gerekmez",
                "Garanti": "2 yıl"
            },
            features: [
                "Güvenli plastik malzeme",
                "Hafif ve taşınabilir",
                "Kolay temizlik",
                "CE sertifikalı"
            ]
        },
        {
            id: 2,
            name: "Orta Boy Plastik Tır",
            description: "Orta boyutlu, kaliteli plastikten üretilmiş oyuncak tır. Detaylı tasarım ve dayanıklı yapı.",
            price: 169.99,
            originalPrice: 219.98,
            rating: 4.7,
            reviews: 124,
            badge: "Yeni",
            images: [
                "https://bachaaparty.com/cdn/shop/files/DSC02950_bfc54293-d870-40a4-b536-62eff2a0c1e7.jpg?v=1690797234&width=1080",
                "https://bachaaparty.com/cdn/shop/files/DSC02950_bfc54293-d870-40a4-b536-62eff2a0c1e7.jpg?v=1690797234&width=1080",
                "https://bachaaparty.com/cdn/shop/files/DSC02950_bfc54293-d870-40a4-b536-62eff2a0c1e7.jpg?v=1690797234&width=1080",
                "https://bachaaparty.com/cdn/shop/files/DSC02950_bfc54293-d870-40a4-b536-62eff2a0c1e7.jpg?v=1690797234&width=1080"
            ],
            specs: {
                "Malzeme": "Güvenli Plastik",
                "Yaş Aralığı": "3-8 yaş",
                "Boyut": "25x12x8 cm",
                "Ağırlık": "450g",
                "Pil": "Gerekmez",
                "Garanti": "2 yıl"
            },
            features: [
                "Detaylı tasarım",
                "Dayanıklı yapı",
                "Gerçekçi görünüm",
                "Kolay kullanım"
            ]
        },
        {
            id: 3,
            name: "Büyük Boy Plastik Tır",
            description: "Büyük boyutlu, sağlam plastik malzemeden üretilmiş oyuncak tır. İmpressif boyut ve detaylar.",
            price: 249.99,
            originalPrice: 329.98,
            rating: 4.8,
            reviews: 156,
            badge: "İndirim",
            images: [
                "https://i5.walmartimages.com/asr/7b8350db-91b5-403c-bedc-c2b3b9e05a0c.4562b17c5ca291b3d04e0c8bb85b9088.jpeg",
                "https://i5.walmartimages.com/asr/7b8350db-91b5-403c-bedc-c2b3b9e05a0c.4562b17c5ca291b3d04e0c8bb85b9088.jpeg",
                "https://i5.walmartimages.com/asr/7b8350db-91b5-403c-bedc-c2b3b9e05a0c.4562b17c5ca291b3d04e0c8bb85b9088.jpeg",
                "https://i5.walmartimages.com/asr/7b8350db-91b5-403c-bedc-c2b3b9e05a0c.4562b17c5ca291b3d04e0c8bb85b9088.jpeg"
            ],
            specs: {
                "Malzeme": "Güvenli Plastik",
                "Yaş Aralığı": "4-10 yaş",
                "Boyut": "35x18x12 cm",
                "Ağırlık": "750g",
                "Pil": "Gerekmez",
                "Garanti": "2 yıl"
            },
            features: [
                "Büyük boyut",
                "Detaylı aksesuarlar",
                "Sağlam yapı",
                "Gerçekçi sesler"
            ]
        },
        {
            id: 4,
            name: "Küçük Boy Demir Tır",
            description: "Dayanıklı demir malzemeden üretilmiş, küçük boyutlu oyuncak tır. Metal yapısı ile uzun ömürlü.",
            price: 145.99,
            originalPrice: 179.98,
            rating: 4.5,
            reviews: 78,
            badge: "Premium",
            images: [
                "https://i.etsystatic.com/6765482/r/il/3b0ce7/6029450809/il_570xN.6029450809_tjzc.jpg",
                "https://i.etsystatic.com/6765482/r/il/3b0ce7/6029450809/il_570xN.6029450809_tjzc.jpg",
                "https://i.etsystatic.com/6765482/r/il/3b0ce7/6029450809/il_570xN.6029450809_tjzc.jpg",
                "https://i.etsystatic.com/6765482/r/il/3b0ce7/6029450809/il_570xN.6029450809_tjzc.jpg"
            ],
            specs: {
                "Malzeme": "Güvenli Demir",
                "Yaş Aralığı": "3-7 yaş",
                "Boyut": "20x10x7 cm",
                "Ağırlık": "420g",
                "Pil": "Gerekmez",
                "Garanti": "3 yıl"
            },
            features: [
                "Demir malzeme",
                "Uzun ömürlü",
                "Metal detaylar",
                "Klasik tasarım"
            ]
        },
        {
            id: 5,
            name: "Orta Boy Demir Tır",
            description: "Orta boyutlu, kaliteli demirden üretilmiş oyuncak tır. Metal yapısı ile dayanıklılık garantisi.",
            price: 199.99,
            originalPrice: 249.98,
            rating: 4.7,
            reviews: 112,
            badge: "Özel",
            images: [
                "https://m.media-amazon.com/images/I/81x-FauB61L._UF894,1000_QL80_.jpg",
                "https://m.media-amazon.com/images/I/81x-FauB61L._UF894,1000_QL80_.jpg",
                "https://m.media-amazon.com/images/I/81x-FauB61L._UF894,1000_QL80_.jpg",
                "https://m.media-amazon.com/images/I/81x-FauB61L._UF894,1000_QL80_.jpg"
            ],
            specs: {
                "Malzeme": "Güvenli Demir",
                "Yaş Aralığı": "4-9 yaş",
                "Boyut": "28x14x10 cm",
                "Ağırlık": "680g",
                "Pil": "Gerekmez",
                "Garanti": "3 yıl"
            },
            features: [
                "Kaliteli demir",
                "Detaylı metal işçilik",
                "Dayanıklı yapı",
                "Koleksiyon değeri"
            ]
        },
        {
            id: 6,
            name: "Büyük Boy Demir Tır",
            description: "Büyük boyutlu, sağlam demir malzemeden üretilmiş oyuncak tır. Premium kalite ve etkileyici boyut.",
            price: 329.99,
            originalPrice: 409.98,
            rating: 4.9,
            reviews: 95,
            badge: "Premium",
            images: [
                "https://cdn11.bigcommerce.com/s-bo5kvbk80m/images/stencil/1280x1280/products/3724/16639/47367_lifestyle.02_CAM-hpr__73908.1702492692.jpg?c=1",
                "https://cdn11.bigcommerce.com/s-bo5kvbk80m/images/stencil/1280x1280/products/3724/16639/47367_lifestyle.02_CAM-hpr__73908.1702492692.jpg?c=1",
                "https://cdn11.bigcommerce.com/s-bo5kvbk80m/images/stencil/1280x1280/products/3724/16639/47367_lifestyle.02_CAM-hpr__73908.1702492692.jpg?c=1",
                "https://cdn11.bigcommerce.com/s-bo5kvbk80m/images/stencil/1280x1280/products/3724/16639/47367_lifestyle.02_CAM-hpr__73908.1702492692.jpg?c=1"
            ],
            specs: {
                "Malzeme": "Güvenli Demir",
                "Yaş Aralığı": "5-12 yaş",
                "Boyut": "40x20x15 cm",
                "Ağırlık": "1200g",
                "Pil": "Gerekmez",
                "Garanti": "3 yıl"
            },
            features: [
                "Premium demir kalite",
                "Büyük boyut",
                "Detaylı metal işçilik",
                "Koleksiyon parçası"
            ]
        }
    ];

    // Initialize the application
    function init() {
        renderProducts();
        updateCartUI();
        updateFavoritesUI();
        bindEvents();
    }

    // Render products
    function renderProducts() {
        const container = $('#products-container');
        container.empty();

        products.forEach(product => {
            const productCard = createProductCard(product);
            container.append(productCard);
        });
    }

    // Create product card HTML
    function createProductCard(product) {
        const isFavorite = favorites.includes(product.id);
        const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);
        
        return $(`
            <div class="col-lg-4 col-md-6 mb-4">
                <div class="product-card" data-product-id="${product.id}">
                    <div class="product-image">
                        <img src="${product.images[0]}" alt="${product.name}" loading="lazy">
                        <div class="product-badge">${product.badge}</div>
                        <button class="product-favorite ${isFavorite ? 'active' : ''}" 
                                data-product-id="${product.id}">
                            <i class="fas fa-heart"></i>
                        </button>
                    </div>
                    <div class="product-info">
                        <h5 class="product-title">${product.name}</h5>
                        <p class="product-description">${product.description}</p>
                        <div class="product-rating">
                            <span class="stars">${generateStars(product.rating)}</span>
                            <span class="rating-text">${product.rating} (${product.reviews} değerlendirme)</span>
                        </div>
                        <div class="product-price">
                            <span class="current-price">₺${product.price}</span>
                            <span class="original-price text-muted text-decoration-line-through ms-2">₺${product.originalPrice}</span>
                            <span class="discount-badge bg-danger text-white ms-2 px-2 py-1 rounded">-%${discount}</span>
                        </div>
                        <div class="product-actions">
                            <button class="btn btn-primary btn-product" data-product-id="${product.id}">
                                <i class="fas fa-eye"></i> İncele
                            </button>
                            <button class="btn btn-success btn-product add-to-cart" data-product-id="${product.id}">
                                <i class="fas fa-shopping-cart"></i> Sepete Ekle
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `);
    }

    // Generate star rating HTML
    function generateStars(rating) {
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 !== 0;
        let stars = '';
        
        for (let i = 0; i < fullStars; i++) {
            stars += '<i class="fas fa-star"></i>';
        }
        
        if (hasHalfStar) {
            stars += '<i class="fas fa-star-half-alt"></i>';
        }
        
        const emptyStars = 5 - Math.ceil(rating);
        for (let i = 0; i < emptyStars; i++) {
            stars += '<i class="far fa-star"></i>';
        }
        
        return stars;
    }

    // Show product modal
    function showProductModal(productId) {
        const product = products.find(p => p.id === productId);
        if (!product) return;

        currentProduct = product;
        const isFavorite = favorites.includes(product.id);
        const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);

        const modalContent = `
            <div class="row">
                <div class="col-md-6">
                    <div class="product-gallery">
                        ${product.images.map(img => `
                            <img src="${img}" alt="${product.name}" class="gallery-image">
                        `).join('')}
                    </div>
                </div>
                <div class="col-md-6">
                    <h4>${product.name}</h4>
                    <div class="product-rating mb-3">
                        <span class="stars">${generateStars(product.rating)}</span>
                        <span class="rating-text ms-2">${product.rating} (${product.reviews} değerlendirme)</span>
                    </div>
                    <p class="text-muted mb-3">${product.description}</p>
                    
                    <div class="product-price mb-3">
                        <span class="current-price h3 text-success">₺${product.price}</span>
                        <span class="original-price text-muted text-decoration-line-through ms-2">₺${product.originalPrice}</span>
                        <span class="discount-badge bg-danger text-white ms-2 px-2 py-1 rounded">-%${discount}</span>
                    </div>

                    <div class="product-specs">
                        <h6><i class="fas fa-cogs"></i> Ürün Özellikleri</h6>
                        ${Object.entries(product.specs).map(([key, value]) => `
                            <div class="spec-item">
                                <span class="spec-label">${key}:</span>
                                <span class="spec-value">${value}</span>
                            </div>
                        `).join('')}
                    </div>

                    <div class="mb-3">
                        <h6><i class="fas fa-star"></i> Öne Çıkan Özellikler</h6>
                        <ul class="list-unstyled">
                            ${product.features.map(feature => `
                                <li><i class="fas fa-check text-success me-2"></i>${feature}</li>
                            `).join('')}
                        </ul>
                    </div>

                    <div class="d-flex gap-2">
                        <button class="btn btn-outline-danger" id="toggle-favorite" data-product-id="${product.id}">
                            <i class="fas fa-heart ${isFavorite ? '' : 'far'}"></i>
                            ${isFavorite ? 'Favorilerden Çıkar' : 'Favorilere Ekle'}
                        </button>
                    </div>
                </div>
            </div>
        `;

        $('#productModalTitle').text(product.name);
        $('#productModalBody').html(modalContent);
        $('#productModal').modal('show');
    }

    // Add to cart
    function addToCart(productId) {
        const product = products.find(p => p.id === productId);
        if (!product) return;

        const existingItem = cart.find(item => item.id === productId);
        
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({
                id: product.id,
                name: product.name,
                price: product.price,
                image: product.images[0],
                quantity: 1
            });
        }

        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartUI();
        
        Swal.fire({
            icon: 'success',
            title: 'Ürün Sepete Eklendi!',
            text: `${product.name} sepetinize başarıyla eklendi.`,
            timer: 2000,
            showConfirmButton: false
        });
    }

    // Toggle favorite
    function toggleFavorite(productId) {
        const index = favorites.indexOf(productId);
        
        if (index > -1) {
            favorites.splice(index, 1);
        } else {
            favorites.push(productId);
        }
        
        localStorage.setItem('favorites', JSON.stringify(favorites));
        updateFavoritesUI();
        renderProducts(); // Re-render to update favorite buttons
    }

    // Update cart UI
    function updateCartUI() {
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        $('#cart-count').text(totalItems);
        
        if (totalItems === 0) {
            $('#cart-count').hide();
        } else {
            $('#cart-count').show();
        }
    }

    // Update favorites UI
    function updateFavoritesUI() {
        const favoritesCount = favorites.length;
        // You can add a favorites counter here if needed
    }

    // Show cart sidebar
    function showCart() {
        const cartItems = cart.map(item => `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.name}" class="cart-item-image">
                <div class="cart-item-info">
                    <div class="cart-item-title">${item.name}</div>
                    <div class="cart-item-price">₺${item.price} x ${item.quantity}</div>
                </div>
                <button class="cart-item-remove" data-product-id="${item.id}">
                    <i class="fas fa-times"></i>
                </button>
            </div>
        `).join('');

        const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

        $('#cart-items').html(cartItems || '<p class="text-muted text-center">Sepetiniz boş</p>');
        $('#cart-total').text(`₺${total.toFixed(2)}`);
    }

    // Remove from cart
    function removeFromCart(productId) {
        cart = cart.filter(item => item.id !== productId);
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartUI();
        showCart();
    }

    // Bind events
    function bindEvents() {
        // Product card click event (tüm karta tıklanabilir)
        $(document).on('click', '.product-card', function(e) {
            // Eğer tıklanan element buton veya favori butonu ise, kart tıklama event'ini engelle
            if ($(e.target).closest('button').length > 0) {
                return;
            }
            
            const productId = parseInt($(this).data('product-id'));
            showProductModal(productId);
        });

        // Product card events
        $(document).on('click', '.btn-primary[data-product-id]', function() {
            const productId = parseInt($(this).data('product-id'));
            showProductModal(productId);
        });

        $(document).on('click', '.add-to-cart', function() {
            const productId = parseInt($(this).data('product-id'));
            addToCart(productId);
        });

        $(document).on('click', '.product-favorite', function() {
            const productId = parseInt($(this).data('product-id'));
            toggleFavorite(productId);
        });

        // Modal events
        $(document).on('click', '#toggle-favorite', function() {
            const productId = parseInt($(this).data('product-id'));
            toggleFavorite(productId);
            $('#productModal').modal('hide');
        });

        $(document).on('click', '#addToCartBtn', function() {
            if (currentProduct) {
                addToCart(currentProduct.id);
                $('#productModal').modal('hide');
            }
        });

        // Cart events
        $('#cart-icon').click(function(e) {
            e.preventDefault();
            showCart();
            new bootstrap.Offcanvas('#cartSidebar').show();
        });

        $(document).on('click', '.cart-item-remove', function() {
            const productId = parseInt($(this).data('product-id'));
            removeFromCart(productId);
        });

        $('#checkout-btn').click(function() {
            if (cart.length === 0) {
                Swal.fire({
                    icon: 'warning',
                    title: 'Sepet Boş!',
                    text: 'Sepetinize ürün ekleyiniz.'
                });
                return;
            }

            Swal.fire({
                icon: 'success',
                title: 'Sipariş Alındı!',
                text: 'Siparişiniz başarıyla alındı. En kısa sürede kargoya verilecektir.',
                confirmButtonText: 'Tamam'
            }).then(() => {
                cart = [];
                localStorage.setItem('cart', JSON.stringify(cart));
                updateCartUI();
                showCart();
                new bootstrap.Offcanvas('#cartSidebar').hide();
            });
        });

        // Smooth scrolling for navigation links
        $('a[href^="#"]').on('click', function(event) {
            const target = $(this.getAttribute('href'));
            if (target.length) {
                event.preventDefault();
                $('html, body').stop().animate({
                    scrollTop: target.offset().top - 80
                }, 1000);
            }
        });

        // Gallery image click events
        $(document).on('click', '.gallery-image', function() {
            const src = $(this).attr('src');
            Swal.fire({
                imageUrl: src,
                imageAlt: 'Ürün Görseli',
                showConfirmButton: false,
                showCloseButton: true,
                background: 'rgba(0,0,0,0.8)'
            });
        });

        // Navbar scroll effect
        $(window).scroll(function() {
            if ($(this).scrollTop() > 50) {
                $('.navbar').addClass('navbar-scrolled');
            } else {
                $('.navbar').removeClass('navbar-scrolled');
            }
        });

        // Animation on scroll
        $(window).scroll(function() {
            $('.product-card').each(function() {
                const elementTop = $(this).offset().top;
                const elementBottom = elementTop + $(this).outerHeight();
                const viewportTop = $(window).scrollTop();
                const viewportBottom = viewportTop + $(window).height();

                if (elementBottom > viewportTop && elementTop < viewportBottom) {
                    $(this).addClass('fade-in-up');
                }
            });
        });
    }

    // Initialize the application
    init();
});
