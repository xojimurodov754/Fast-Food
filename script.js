
// script.js fayli

// Mobile menyu funksiyalari
function initMobileMenu() {
  const headerContent = document.querySelector('.header-content');
  const nav = document.querySelector('.nav');

  // Mobile menyu tugmasini yaratish
  const mobileMenuBtn = document.createElement('div');
  mobileMenuBtn.className = 'mobile-menu-btn';
  mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
  headerContent.appendChild(mobileMenuBtn);

  // Mobile menyu stilini qo'shish
  const style = document.createElement('style');
  style.textContent = `
        .mobile-menu-btn {
            display: none;
            font-size: 24px;
            cursor: pointer;
            color: white;
        }
        
        @media (max-width: 768px) {
            .mobile-menu-btn {
                display: block;
                position: absolute;
                right: 20px;
                top: 20px;
            }
            
            .nav {
                display: none;
                position: absolute;
                top: 100%;
                left: 0;
                width: 100%;
                background: linear-gradient(135deg, #ff6b35, #f7931e);
                padding: 20px 0;
                z-index: 1000;
            }
            
            .nav.active {
                display: block;
            }
            
            .nav-list {
                flex-direction: column;
                align-items: center;
            }
            
            .nav-item {
                margin: 15px 0;
            }
        }
    `;
  document.head.appendChild(style);

  // Mobile menyu ochish/yopish
  mobileMenuBtn.addEventListener('click', function () {
    nav.classList.toggle('active');
  });

  // Ekran o'lchami o'zgarganda menyuni yopish
  window.addEventListener('resize', function () {
    if (window.innerWidth > 768) {
      nav.classList.remove('active');
    }
  });
}

// Buyurtma berish modal oynasi
function createOrderModal() {
  // Modal HTML strukturasi
  const modalHTML = `
        <div class="modal-overlay" id="orderModal">
            <div class="modal-content">
                <div class="modal-header">
                    <h2>Buyurtma berish</h2>
                    <span class="modal-close">&times;</span>
                </div>
                <div class="modal-body">
                    <p>Buyurtma berish uchun quyidagi usullardan birini tanlang:</p>
                    <div class="order-options">
                        <button class="order-option-btn telegram-btn" onclick="orderViaTelegram()">
                            <i class="fab fa-telegram"></i> Telegram orqali
                        </button>
                        <button class="order-option-btn phone-btn" onclick="orderViaPhone()">
                            <i class="fas fa-phone"></i> Telefon orqali
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;

  // Modalni DOMga qo'shish
  document.body.insertAdjacentHTML('beforeend', modalHTML);

  // Modal uchun stil qo'shish
  const style = document.createElement('style');
  style.textContent = `
        .modal-overlay {
            display: none;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.7);
            z-index: 1000;
            align-items: center;
            justify-content: center;
        }
        
        .modal-overlay.active {
            display: flex;
        }
        
        .modal-content {
            background-color: white;
            border-radius: 12px;
            width: 90%;
            max-width: 400px;
            overflow: hidden;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        }
        
        .modal-header {
            background: linear-gradient(135deg, #ff6b35, #f7931e);
            color: white;
            padding: 20px;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        
        .modal-header h2 {
            margin: 0;
            font-size: 24px;
        }
        
        .modal-close {
            font-size: 28px;
            cursor: pointer;
            font-weight: bold;
        }
        
        .modal-body {
            padding: 25px;
        }
        
        .modal-body p {
            margin-bottom: 20px;
            text-align: center;
            font-size: 16px;
        }
        
        .order-options {
            display: flex;
            flex-direction: column;
            gap: 15px;
        }
        
        .order-option-btn {
            padding: 15px;
            border: none;
            border-radius: 8px;
            font-size: 16px;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
        }
        
        .telegram-btn {
            background-color: #0088cc;
            color: white;
        }
        
        .telegram-btn:hover {
            background-color: #006da3;
        }
        
        .phone-btn {
            background-color: #25D366;
            color: white;
        }
        
        .phone-btn:hover {
            background-color: #1da851;
        }
    `;
  document.head.appendChild(style);

  // Modalni yopish funksiyalari
  const modalOverlay = document.getElementById('orderModal');
  const closeBtn = document.querySelector('.modal-close');

  closeBtn.addEventListener('click', function () {
    modalOverlay.classList.remove('active');
  });

  modalOverlay.addEventListener('click', function (e) {
    if (e.target === modalOverlay) {
      modalOverlay.classList.remove('active');
    }
  });

  // ESC tugmasi bilan modalni yopish
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && modalOverlay.classList.contains('active')) {
      modalOverlay.classList.remove('active');
    }
  });
}

// Telegram orqali buyurtma berish
function orderViaTelegram() {
  window.open('https://t.me/dilshod_sayfiddinov', '_blank');
}

// Telefon orqali buyurtma berish
function orderViaPhone() {
  window.location.href = 'tel:+998990953018';
}

// Buyurtma berish so'rovi
function requestOrder() {
  const modal = document.getElementById('orderModal');
  modal.classList.add('active');
}

// Hamma funksiyalarni ishga tushirish
document.addEventListener('DOMContentLoaded', function () {
  initMobileMenu();
  createOrderModal();
});
