/**
 * Morfi Panchería Gourmet - POS Engine
 * Full functional state management & UI Controller
 */

// Initial Seed Data
const DEFAULT_PRODUCTS = [
  {
    id: 'prod-1',
    name: 'Clásico',
    category: 'panchos',
    price: 1200,
    inStock: true,
    badge: '',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDh1Tk0r1XWMBid8VqQvIq1Qqw6aRF2DQV0SKCkkW_5XYcZamVcziMNALKOXUoxxRYw9i9zLmcWHkIC8jeZFASw_7VcHvMb9RJJSv862bc73HgPq9r3woGKvR8PuLFkOwct-ACjqcz6P8Pq3SgqV9GhCurCb29hpc59boet6Y1_BxqI2PRewBmZvKGx5VdsxgbVeb2D1sQGQjSmT0WGkER9DG_IccNdsoACh8TXkI4LEK-fx6VuxOq7',
    description: 'Salchicha de Viena premium, mayonesa, mostaza y lluvia de papas pay.'
  },
  {
    id: 'prod-2',
    name: 'Bacon & Cheddar',
    category: 'panchos',
    price: 1800,
    inStock: true,
    badge: 'MÁS VENDIDO',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAHDbtaPeYWUxvDY9-fbiLzF4jV94PIz2HCD2liprvrNfofGek7Ot-3TiDVQnmKdTXvOG1V8N7WkeqyWXtmqeBWCrH4trCGQHjfcFaJT9slbR2jk126UTE5KMf0FF7dh4SmUPVm1whVuejZQ3UbYzLb5LSojH49huii9TsGQoyraf0r32ithuOgQGx5ow5KjBnpyf4oTW4EExdx5KN4oj6xY_RBdq2lf8bSmQxfJVcgH7fUe36cXSvQ',
    description: 'Bacon crocante picado, queso cheddar fundido y verdeo fresco.'
  },
  {
    id: 'prod-3',
    name: 'Mexicano Picante',
    category: 'panchos',
    price: 1950,
    inStock: true,
    badge: 'NUEVO',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAWJddyt4PQYdQWCrXc0PCMETjRLBwz2-O12Vigp-okqUB5SBH_eLNtnM6Ds4KwuhmeBuD7VjD9qQbZbZpLNLkd_Ub76SqnHTijQWz4kJFp6QT0hUr1uz3yu8vbNZHnBRHL9AEzunaxRFKEZUlLzOYV1fZnsmwDLT-AX7iBpFdw5BYBLsVqzussqMQkF36VKjmbH3n4xSGnlKY40leBTaoyBnFQ-YuexuUXMo2wn6WlF7uZyGwkcTtn',
    description: 'Jalapeños en rodajas, mayo picante gourmet y nachos triturados.'
  },
  {
    id: 'prod-4',
    name: 'Mega Pancho (Largo)',
    category: 'panchos',
    price: 2100,
    inStock: true,
    badge: 'XL',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB7zMmUM_9G2Hff7rYDLqGc9Y2DO1v9jjteEhopzHdWWgbQH4gAyrzGfAkS7e7x09G8njAp4FzsenMCbp-zgrn4qlY7rmFovEFJS6pER1DvhfgaZN_9mWPwRZd8S93Kcsdx_tpKxLQHfJgQWgFguP7OZeg1Nav75CaYYSJf7P4kMQ_p4F9gbNF6KcxXuvCG4CaMsi0qUbmoY3FhB4GT8xnPonalZaJ-yhotC3H-GLeK0XTQSeUv76AQ',
    description: '30cm de pura delicia con salsas a elección y pan extra suave.'
  },
  {
    id: 'prod-5',
    name: 'Combo Clásico',
    category: 'combos',
    price: 2800,
    inStock: true,
    badge: 'AHORRO',
    image: 'https://images.unsplash.com/photo-1619740455993-9e612b1af08a?auto=format&fit=crop&w=600&q=80',
    description: 'Pancho Clásico + Papas Fritas Porción + Gaseosa 500ml.'
  },
  {
    id: 'prod-6',
    name: 'Combo Bacon Madness',
    category: 'combos',
    price: 3400,
    inStock: true,
    badge: 'PROMO',
    image: 'https://images.unsplash.com/photo-1541544741938-0af808871cc0?auto=format&fit=crop&w=600&q=80',
    description: 'Pancho Bacon & Cheddar + Papas Cheddar/Bacon + Gaseosa 500ml.'
  },
  {
    id: 'prod-7',
    name: 'Coca-Cola 500ml',
    category: 'bebidas',
    price: 900,
    inStock: true,
    badge: '',
    image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=600&q=80',
    description: 'Botella 500ml bien fría.'
  },
  {
    id: 'prod-8',
    name: 'Sprite 500ml',
    category: 'bebidas',
    price: 900,
    inStock: true,
    badge: '',
    image: 'https://images.unsplash.com/photo-1625772299848-391b6a87d7b3?auto=format&fit=crop&w=600&q=80',
    description: 'Botella 500ml refrescante.'
  },
  {
    id: 'prod-9',
    name: 'Papas Fritas Porción',
    category: 'extras',
    price: 1200,
    inStock: true,
    badge: '',
    image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=600&q=80',
    description: 'Papas bastón crujientes recién saladas.'
  },
  {
    id: 'prod-10',
    name: 'Extra Cheddar / Bacon',
    category: 'extras',
    price: 500,
    inStock: true,
    badge: '',
    image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=600&q=80',
    description: 'Dip adicional de salsa cheddar tibia y panceta picada.'
  }
];

const DEFAULT_CONFIG = {
  storeName: 'Morfi Panchería Gourmet',
  cuit: '30-71234567-8',
  address: 'Av. Corrientes 1450, CABA',
  phone: '+54 9 11 4567-8900',
  terminalName: 'Terminal POS 01',
  ticketHeader: '¡Bienvenido a Morfi Panchería!',
  ticketFooter: '¡Gracias por tu compra! Conserva este ticket.',
  paperWidth: '80mm'
};

// Application State Manager
class POSApp {
  constructor() {
    this.products = this.loadStorage('morfi_products', DEFAULT_PRODUCTS);
    this.config = this.loadStorage('morfi_config', DEFAULT_CONFIG);
    this.sales = this.loadStorage('morfi_sales', []);
    this.shifts = this.loadStorage('morfi_shifts', []);
    this.currentShiftId = this.loadStorage('morfi_current_shift_id', 'SHIFT-' + Date.now());

    this.cart = [];
    this.orderType = 'comer'; // 'comer' | 'llevar'
    this.activeCategory = 'todos';
    this.searchQuery = '';
    this.activeTab = 'sales';

    // Temporary modal state
    this.selectedProductForModifiers = null;
    this.currentOrderPayment = null;

    this.initDOM();
    this.bindEvents();
    this.render();
    this.syncFromDisk();

    // Real-time synchronization loop every 3 seconds for mobile devices & managers
    setInterval(() => this.syncFromDisk(), 3000);
    this.loadNetworkInfo();
  }

  async loadNetworkInfo() {
    try {
      const res = await fetch('/api/info');
      if (res.ok) {
        this.networkInfo = await res.json();
      }
    } catch (e) {
      console.warn('Network info fetch warning:', e);
    }
  }

  openMobileModal() {
    const modal = document.getElementById('mobile-connect-modal');
    if (!modal) return;

    const urlDisplay = document.getElementById('mobile-url-display');
    const qrImg = document.getElementById('mobile-qr-img');

    const mobileUrl = (this.networkInfo && this.networkInfo.mobileUrl)
      ? this.networkInfo.mobileUrl
      : `http://${window.location.hostname}:8080/`;

    if (urlDisplay) urlDisplay.textContent = mobileUrl;
    if (qrImg) {
      qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(mobileUrl)}`;
    }

    modal.classList.remove('hidden');
  }

  closeMobileModal() {
    const modal = document.getElementById('mobile-connect-modal');
    if (modal) modal.classList.add('hidden');
  }

  loadStorage(key, fallback) {
    try {
      const data = localStorage.getItem(key);
      return data ? JSON.parse(data) : fallback;
    } catch (e) {
      console.error('Error loading storage', key, e);
      return fallback;
    }
  }

  saveStorage(key, val) {
    try {
      localStorage.setItem(key, JSON.stringify(val));
      this.syncToDisk();
    } catch (e) {
      console.error('Error saving storage', key, e);
    }
  }

  async syncToDisk() {
    try {
      const payload = {
        products: this.products,
        config: this.config,
        sales: this.sales,
        shifts: this.shifts,
        currentShiftId: this.currentShiftId
      };
      await fetch('/api/data', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
    } catch (e) {
      console.warn('Disk sync warning:', e);
    }
  }

  async syncFromDisk() {
    try {
      const res = await fetch('/api/data');
      if (!res.ok) return;
      const data = await res.json();
      if (data && data.products && data.products.length > 0) {
        this.products = data.products;
        this.config = data.config || this.config;
        this.sales = data.sales || [];
        this.shifts = data.shifts || [];
        this.currentShiftId = data.currentShiftId || this.currentShiftId;

        localStorage.setItem('morfi_products', JSON.stringify(this.products));
        localStorage.setItem('morfi_config', JSON.stringify(this.config));
        localStorage.setItem('morfi_sales', JSON.stringify(this.sales));
        localStorage.setItem('morfi_shifts', JSON.stringify(this.shifts));
        localStorage.setItem('morfi_current_shift_id', JSON.stringify(this.currentShiftId));

        this.render();
      }
    } catch (e) {
      console.warn('Disk load warning:', e);
    }
  }

  initDOM() {
    // Clock update
    setInterval(() => this.updateClock(), 1000);
    this.updateClock();
  }

  updateClock() {
    const el = document.getElementById('pos-clock');
    if (el) {
      const now = new Date();
      el.textContent = now.toLocaleTimeString('es-AR', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    }
  }

  bindEvents() {
    // Navigation Tabs
    document.querySelectorAll('[data-nav-tab]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const tab = btn.getAttribute('data-nav-tab');
        this.switchTab(tab);
      });
    });

    // Category Buttons
    document.querySelectorAll('[data-category]').forEach(btn => {
      btn.addEventListener('click', () => {
        this.activeCategory = btn.getAttribute('data-category');
        this.renderProductGrid();
        this.updateCategoryUI();
      });
    });

    // Search Bar
    const searchInput = document.getElementById('search-product-input');
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        this.searchQuery = e.target.value.toLowerCase().trim();
        this.renderProductGrid();
      });
    }

    // Order Type Toggle
    const typeComerBtn = document.getElementById('order-type-comer');
    const typeLlevarBtn = document.getElementById('order-type-llevar');
    if (typeComerBtn && typeLlevarBtn) {
      typeComerBtn.addEventListener('click', () => {
        this.orderType = 'comer';
        this.updateOrderTypeUI();
      });
      typeLlevarBtn.addEventListener('click', () => {
        this.orderType = 'llevar';
        this.updateOrderTypeUI();
      });
    }

    // Clear Cart Button
    const clearCartBtn = document.getElementById('clear-cart-btn');
    if (clearCartBtn) {
      clearCartBtn.addEventListener('click', () => {
        if (this.cart.length === 0) return;
        if (confirm('¿Vaciar todo el carrito?')) {
          this.cart = [];
          this.renderCart();
        }
      });
    }

    // Checkout Modal Open
    const checkoutBtn = document.getElementById('checkout-btn');
    if (checkoutBtn) {
      checkoutBtn.addEventListener('click', () => {
        if (this.cart.length === 0) return;
        this.openCheckoutModal();
      });
    }

    // Add Product Form Submit (Inventory)
    const addProductForm = document.getElementById('add-product-form');
    if (addProductForm) {
      addProductForm.addEventListener('submit', (e) => {
        e.preventDefault();
        this.handleCreateProduct(addProductForm);
      });
    }

    // Config Form Submit
    const configForm = document.getElementById('config-form');
    if (configForm) {
      configForm.addEventListener('submit', (e) => {
        e.preventDefault();
        this.handleSaveConfig(configForm);
      });
    }

    // Batch Close Action
    const closeBatchBtn = document.getElementById('close-batch-btn');
    if (closeBatchBtn) {
      closeBatchBtn.addEventListener('click', () => {
        this.handleCloseBatch();
      });
    }
  }

  switchTab(tab) {
    this.activeTab = tab;
    document.querySelectorAll('[data-nav-tab]').forEach(btn => {
      const isTarget = btn.getAttribute('data-nav-tab') === tab;
      if (isTarget) {
        btn.classList.add('bg-secondary-container', 'text-on-secondary-container', 'font-bold', 'shadow-sm');
        btn.classList.remove('text-on-surface-variant', 'hover:bg-surface-container-high');
      } else {
        btn.classList.remove('bg-secondary-container', 'text-on-secondary-container', 'font-bold', 'shadow-sm');
        btn.classList.add('text-on-surface-variant', 'hover:bg-surface-container-high');
      }
    });

    document.querySelectorAll('[data-view-panel]').forEach(panel => {
      if (panel.getAttribute('data-view-panel') === tab) {
        panel.classList.remove('hidden');
      } else {
        panel.classList.add('hidden');
      }
    });

    if (tab === 'inventory') this.renderInventory();
    if (tab === 'orders') this.renderOrders();
    if (tab === 'reports') this.renderReports();
    if (tab === 'config') this.renderConfigForm();
  }

  updateCategoryUI() {
    document.querySelectorAll('[data-category]').forEach(btn => {
      const cat = btn.getAttribute('data-category');
      if (cat === this.activeCategory) {
        btn.className = 'px-5 py-2 rounded-full bg-primary text-on-primary font-bold shadow-sm whitespace-nowrap active:scale-95 transition-transform text-sm';
      } else {
        btn.className = 'px-5 py-2 rounded-full bg-surface-container text-on-surface-variant border border-outline-variant font-medium hover:bg-surface-container-high whitespace-nowrap active:scale-95 transition-transform text-sm';
      }
    });
  }

  updateOrderTypeUI() {
    const comer = document.getElementById('order-type-comer');
    const llevar = document.getElementById('order-type-llevar');
    if (this.orderType === 'comer') {
      comer.className = 'flex-1 py-2 text-xs font-bold rounded-md bg-white text-primary shadow-sm border border-outline-variant';
      llevar.className = 'flex-1 py-2 text-xs font-medium rounded-md text-on-surface-variant hover:text-on-surface';
    } else {
      llevar.className = 'flex-1 py-2 text-xs font-bold rounded-md bg-white text-primary shadow-sm border border-outline-variant';
      comer.className = 'flex-1 py-2 text-xs font-medium rounded-md text-on-surface-variant hover:text-on-surface';
    }
  }

  // --- CART OPERATIONS ---
  addToCart(product) {
    if (!product.inStock) {
      alert('Este producto no tiene stock disponible.');
      return;
    }

    const key = product.id;

    const existing = this.cart.find(i => i.key === key);
    if (existing) {
      existing.quantity += 1;
    } else {
      this.cart.push({
        key,
        product,
        quantity: 1,
        unitPrice: product.price
      });
    }

    this.renderCart();
  }

  updateCartQty(key, delta) {
    const item = this.cart.find(i => i.key === key);
    if (!item) return;
    item.quantity += delta;
    if (item.quantity <= 0) {
      this.cart = this.cart.filter(i => i.key !== key);
    }
    this.renderCart();
  }

  removeFromCart(key) {
    this.cart = this.cart.filter(i => i.key !== key);
    this.renderCart();
  }

  calculateCartTotals() {
    const subtotal = this.cart.reduce((sum, i) => sum + (i.unitPrice * i.quantity), 0);
    const discount = 0;
    const total = Math.max(0, subtotal - discount);
    return { subtotal, discount, total };
  }

  renderCart() {
    const container = document.getElementById('cart-items-container');
    const badgeCount = document.getElementById('cart-badge-count');
    const subtotalEl = document.getElementById('cart-subtotal');
    const totalEl = document.getElementById('cart-total');
    const checkoutBtn = document.getElementById('checkout-btn');

    const { subtotal, total } = this.calculateCartTotals();

    if (subtotalEl) subtotalEl.textContent = `$${subtotal.toLocaleString('es-AR')}`;
    if (totalEl) totalEl.textContent = `$${total.toLocaleString('es-AR')}`;

    const totalQty = this.cart.reduce((sum, i) => sum + i.quantity, 0);
    if (badgeCount) badgeCount.textContent = totalQty;

    if (checkoutBtn) {
      const btnText = document.getElementById('checkout-btn-text');
      if (btnText) btnText.textContent = `COBRAR $${total.toLocaleString('es-AR')}`;
      checkoutBtn.disabled = this.cart.length === 0;
      if (this.cart.length === 0) {
        checkoutBtn.classList.add('opacity-50', 'cursor-not-allowed');
      } else {
        checkoutBtn.classList.remove('opacity-50', 'cursor-not-allowed');
      }
    }

    if (!container) return;

    if (this.cart.length === 0) {
      container.innerHTML = `
        <div class="h-full flex flex-col items-center justify-center text-center p-6 text-on-surface-variant">
          <span class="material-symbols-outlined text-5xl mb-2 opacity-30">shopping_cart</span>
          <p class="font-bold text-base">El carrito está vacío</p>
          <p class="text-xs text-outline mt-1">Toca un producto de la izquierda para agregarlo a la orden.</p>
        </div>
      `;
      return;
    }

    container.innerHTML = this.cart.map(item => {
      const itemPrice = (item.unitPrice * item.quantity).toLocaleString('es-AR');

      return `
        <div class="bg-surface-container-lowest p-3 rounded-lg border border-outline-variant flex gap-3 items-center shadow-xs">
          <div class="flex-1 min-w-0">
            <h4 class="font-bold text-sm text-on-surface leading-tight truncate">${item.product.name}</h4>
            <div class="text-xs text-on-surface-variant mt-0.5">$${item.unitPrice.toLocaleString('es-AR')} c/u</div>
          </div>
          <div class="flex items-center gap-1.5 bg-surface-container px-2 py-1 rounded-md border border-outline-variant">
            <button onclick="app.updateCartQty('${item.key}', -1)" class="w-6 h-6 rounded flex items-center justify-center hover:bg-surface-container-high text-on-surface font-bold text-base active:scale-95">-</button>
            <span class="font-bold text-xs w-5 text-center">${item.quantity}</span>
            <button onclick="app.updateCartQty('${item.key}', 1)" class="w-6 h-6 rounded flex items-center justify-center hover:bg-surface-container-high text-on-surface font-bold text-base active:scale-95">+</button>
          </div>
          <div class="font-bold text-sm text-primary w-16 text-right">$${itemPrice}</div>
          <button onclick="app.removeFromCart('${item.key}')" class="text-outline hover:text-error transition-colors p-1">
            <span class="material-symbols-outlined text-lg">delete</span>
          </button>
        </div>
      `;
    }).join('');
  }

  // --- RENDERING VIEWS ---
  renderProductGrid() {
    const grid = document.getElementById('products-grid');
    if (!grid) return;

    let list = this.products;

    if (this.activeCategory !== 'todos') {
      list = list.filter(p => p.category === this.activeCategory);
    }

    if (this.searchQuery) {
      list = list.filter(p => p.name.toLowerCase().includes(this.searchQuery) || p.description.toLowerCase().includes(this.searchQuery));
    }

    if (list.length === 0) {
      grid.innerHTML = `
        <div class="col-span-full py-16 flex flex-col items-center justify-center text-center text-on-surface-variant">
          <span class="material-symbols-outlined text-5xl mb-2 opacity-30">search_off</span>
          <p class="font-bold text-lg">No se encontraron productos</p>
          <p class="text-sm text-outline">Prueba cambiando el filtro de categoría o la búsqueda.</p>
        </div>
      `;
      return;
    }

    grid.innerHTML = list.map(p => {
      const stockBadge = !p.inStock ? `
        <div class="absolute inset-0 bg-background/70 z-20 flex items-center justify-center backdrop-blur-[1px]">
          <span class="bg-inverse-surface text-inverse-on-surface px-3 py-1 rounded font-mono text-xs font-bold shadow-md tracking-wider">AGOTADO</span>
        </div>
      ` : '';

      const topBadge = p.badge && p.inStock ? `
        <div class="absolute top-2 right-2 bg-secondary-container text-on-secondary-container px-2 py-0.5 rounded font-mono text-[10px] font-bold z-10 shadow-xs">
          ${p.badge}
        </div>
      ` : '';

      return `
        <button onclick="app.handleProductClick('${p.id}')" ${!p.inStock ? 'disabled' : ''} class="bg-surface-container-lowest rounded-xl overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col active:scale-[0.98] border-2 border-transparent hover:border-primary/40 focus:border-primary relative text-left group">
          ${stockBadge}
          ${topBadge}
          <div class="h-32 w-full bg-surface-container relative overflow-hidden">
            <img class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" src="${p.image}" alt="${p.name}">
          </div>
          <div class="p-3 flex flex-col flex-1 w-full">
            <span class="font-bold text-base text-on-surface leading-tight mb-1 line-clamp-1">${p.name}</span>
            <span class="text-xs text-on-surface-variant line-clamp-2 mb-2 font-normal">${p.description}</span>
            <div class="mt-auto flex items-center justify-between">
              <span class="font-bold text-lg text-primary">$${p.price.toLocaleString('es-AR')}</span>
              <span class="material-symbols-outlined text-primary bg-primary-container p-1 rounded-full text-base opacity-0 group-hover:opacity-100 transition-opacity">add</span>
            </div>
          </div>
        </button>
      `;
    }).join('');
  }

  handleProductClick(productId) {
    const product = this.products.find(p => p.id === productId);
    if (!product || !product.inStock) return;
    this.addToCart(product);
  }

  openModifierModal(product) {
    this.selectedProductForModifiers = product;
    const modal = document.getElementById('modifier-modal');
    if (!modal) return;

    document.getElementById('mod-product-name').textContent = product.name;
    document.getElementById('mod-product-price').textContent = `$${product.price.toLocaleString('es-AR')}`;
    document.getElementById('mod-product-img').src = product.image;
    document.getElementById('mod-note-input').value = '';

    // Clear checkboxes
    document.querySelectorAll('.mod-checkbox').forEach(cb => cb.checked = false);

    modal.classList.remove('hidden');
  }

  closeModifierModal() {
    const modal = document.getElementById('modifier-modal');
    if (modal) modal.classList.add('hidden');
    this.selectedProductForModifiers = null;
  }

  confirmModifiers() {
    if (!this.selectedProductForModifiers) return;

    const selectedMods = [];
    document.querySelectorAll('.mod-checkbox:checked').forEach(cb => {
      selectedMods.push({
        name: cb.getAttribute('data-mod-name'),
        price: parseInt(cb.getAttribute('data-mod-price') || '0', 10)
      });
    });

    const note = document.getElementById('mod-note-input').value.trim();

    this.addToCart(this.selectedProductForModifiers, { modifiers: selectedMods, note });
    this.closeModifierModal();
  }

  // --- CHECKOUT & PAYMENT ---
  openCheckoutModal() {
    const modal = document.getElementById('checkout-modal');
    if (!modal) return;

    const { subtotal, discount, total } = this.calculateCartTotals();

    document.getElementById('checkout-modal-subtotal').textContent = `$${subtotal.toLocaleString('es-AR')}`;
    document.getElementById('checkout-modal-total').textContent = `$${total.toLocaleString('es-AR')}`;
    
    const cashInput = document.getElementById('cash-given-input');
    if (cashInput) {
      cashInput.value = total;
      this.calculateCashChange();
    }

    // Default to Cash payment tab
    this.setPaymentMethod('efectivo');

    modal.classList.remove('hidden');
  }

  closeCheckoutModal() {
    const modal = document.getElementById('checkout-modal');
    if (modal) modal.classList.add('hidden');
  }

  setPaymentMethod(method) {
    this.currentPaymentMethod = method; // 'efectivo' | 'tarjeta' | 'qr'
    
    document.querySelectorAll('[data-pay-tab]').forEach(btn => {
      if (btn.getAttribute('data-pay-tab') === method) {
        btn.className = 'flex-1 py-3 border-b-2 border-primary text-primary font-bold flex items-center justify-center gap-2 text-sm';
      } else {
        btn.className = 'flex-1 py-3 border-b-2 border-transparent text-on-surface-variant hover:text-on-surface font-medium flex items-center justify-center gap-2 text-sm';
      }
    });

    document.querySelectorAll('[data-pay-panel]').forEach(panel => {
      if (panel.getAttribute('data-pay-panel') === method) {
        panel.classList.remove('hidden');
      } else {
        panel.classList.add('hidden');
      }
    });
  }

  setQuickCash(amount) {
    const input = document.getElementById('cash-given-input');
    if (input) {
      input.value = amount;
      this.calculateCashChange();
    }
  }

  calculateCashChange() {
    const { total } = this.calculateCartTotals();
    const input = document.getElementById('cash-given-input');
    const changeEl = document.getElementById('cash-change-display');
    const confirmBtn = document.getElementById('confirm-pay-btn');

    const given = parseFloat(input.value) || 0;
    const change = given - total;

    if (changeEl) {
      if (change >= 0) {
        changeEl.textContent = `$${change.toLocaleString('es-AR')}`;
        changeEl.className = 'font-mono text-2xl font-bold text-emerald-600';
        if (confirmBtn) confirmBtn.disabled = false;
      } else {
        changeEl.textContent = `Faltan $${Math.abs(change).toLocaleString('es-AR')}`;
        changeEl.className = 'font-mono text-xl font-bold text-rose-600';
        if (confirmBtn && this.currentPaymentMethod === 'efectivo') confirmBtn.disabled = true;
      }
    }
  }

  processPayment() {
    const { subtotal, discount, total } = this.calculateCartTotals();
    const cashInput = document.getElementById('cash-given-input');
    const given = this.currentPaymentMethod === 'efectivo' ? (parseFloat(cashInput.value) || total) : total;
    const change = Math.max(0, given - total);

    const orderNum = (this.sales.length + 1).toString().padStart(4, '0');

    const saleRecord = {
      id: 'ORD-' + Date.now(),
      orderNumber: orderNum,
      timestamp: new Date().toISOString(),
      items: [...this.cart],
      subtotal,
      discount,
      total,
      orderType: this.orderType,
      paymentMethod: this.currentPaymentMethod,
      cashReceived: given,
      changeGiven: change,
      shiftId: this.currentShiftId
    };

    this.sales.unshift(saleRecord);
    this.saveStorage('morfi_sales', this.sales);

    this.closeCheckoutModal();
    this.cart = [];
    this.renderCart();

    // Show Receipt Modal
    this.openReceiptModal(saleRecord);
  }

  // --- THERMAL RECEIPT ---
  openReceiptModal(saleRecord) {
    this.currentOrderPayment = saleRecord;
    const modal = document.getElementById('receipt-modal');
    if (!modal) return;

    this.renderThermalReceipt('modal-receipt-content', saleRecord);
    modal.classList.remove('hidden');
  }

  closeReceiptModal() {
    const modal = document.getElementById('receipt-modal');
    if (modal) modal.classList.add('hidden');
    this.currentOrderPayment = null;
  }

  renderThermalReceipt(containerId, sale) {
    const container = document.getElementById(containerId);
    if (!container) return;

    const dateStr = new Date(sale.timestamp).toLocaleString('es-AR');
    const methodNames = { efectivo: 'EFECTIVO', tarjeta: 'TARJETA DE CRÉDITO/DÉBITO', qr: 'MERCADOPAGO QR' };

    const itemsHTML = sale.items.map(item => `
      <div class="flex justify-between font-bold text-xs">
        <span>${item.quantity}x ${item.product.name}</span>
        <span>$${(item.unitPrice * item.quantity).toLocaleString('es-AR')}</span>
      </div>
    `).join('');

    container.innerHTML = `
      <div class="text-center border-b border-dashed border-gray-400 pb-3 mb-3">
        <h2 class="font-extrabold text-base tracking-tight">${this.config.storeName}</h2>
        <p class="text-[11px] text-gray-700">${this.config.address}</p>
        <p class="text-[11px] text-gray-700">CUIT: ${this.config.cuit} | Tel: ${this.config.phone}</p>
        <p class="text-[11px] font-bold mt-1 text-gray-800">${this.config.ticketHeader}</p>
      </div>

      <div class="text-[11px] border-b border-dashed border-gray-400 pb-2 mb-3">
        <div class="flex justify-between"><span>Comanda #:</span><span class="font-bold">#${sale.orderNumber}</span></div>
        <div class="flex justify-between"><span>Fecha:</span><span>${dateStr}</span></div>
        <div class="flex justify-between"><span>Tipo:</span><span class="font-bold">${sale.orderType === 'comer' ? 'PARA COMER ACÁ' : 'PARA LLEVAR'}</span></div>
        <div class="flex justify-between"><span>Caja:</span><span>${this.config.terminalName}</span></div>
      </div>

      <div class="space-y-2 border-b border-dashed border-gray-400 pb-3 mb-3">
        ${itemsHTML}
      </div>

      <div class="space-y-1 text-xs border-b border-dashed border-gray-400 pb-3 mb-3">
        <div class="flex justify-between text-gray-600"><span>Subtotal:</span><span>$${sale.subtotal.toLocaleString('es-AR')}</span></div>
        <div class="flex justify-between font-extrabold text-sm pt-1"><span>TOTAL:</span><span>$${sale.total.toLocaleString('es-AR')}</span></div>
        <div class="flex justify-between text-[11px] text-gray-700 pt-1"><span>Forma de Pago:</span><span>${methodNames[sale.paymentMethod]}</span></div>
        ${sale.paymentMethod === 'efectivo' ? `
          <div class="flex justify-between text-[11px]"><span>Pagó con:</span><span>$${sale.cashReceived.toLocaleString('es-AR')}</span></div>
          <div class="flex justify-between text-[11px] font-bold"><span>Vuelto:</span><span>$${sale.changeGiven.toLocaleString('es-AR')}</span></div>
        ` : ''}
      </div>

      <div class="text-center text-[10px] text-gray-600 space-y-1">
        <p class="font-bold text-gray-800">${this.config.ticketFooter}</p>
        <p class="italic">Software Morfi POS v1.0 - Sistema Homologado</p>
      </div>
    `;
  }

  printThermalReceipt() {
    if (!this.currentOrderPayment) return;
    this.renderThermalReceipt('thermal-receipt-print-area', this.currentOrderPayment);
    window.print();
  }

  // --- ORDERS HISTORY VIEW ---
  renderOrders() {
    const container = document.getElementById('orders-list-container');
    if (!container) return;

    if (this.sales.length === 0) {
      container.innerHTML = `
        <div class="p-12 text-center text-on-surface-variant">
          <span class="material-symbols-outlined text-5xl mb-2 opacity-30">receipt_long</span>
          <p class="font-bold text-base">No hay pedidos registrados hoy</p>
          <p class="text-xs text-outline mt-1">Los pedidos realizados en la caja aparecerán aquí.</p>
        </div>
      `;
      return;
    }

    container.innerHTML = this.sales.map(sale => {
      const timeStr = new Date(sale.timestamp).toLocaleTimeString('es-AR', { hour: '2-digit', minute: '2-digit' });
      const methodBadge = {
        efectivo: '<span class="bg-emerald-100 text-emerald-800 text-[10px] px-2 py-0.5 rounded font-bold">EFECTIVO</span>',
        tarjeta: '<span class="bg-blue-100 text-blue-800 text-[10px] px-2 py-0.5 rounded font-bold">TARJETA</span>',
        qr: '<span class="bg-cyan-100 text-cyan-800 text-[10px] px-2 py-0.5 rounded font-bold">MERCADOPAGO</span>'
      }[sale.paymentMethod];

      return `
        <div class="bg-surface-container-lowest p-4 rounded-xl border border-outline-variant flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-xs hover:border-primary/40 transition-colors">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-full bg-primary-container text-on-primary-container font-mono font-bold flex items-center justify-center text-sm">
              #${sale.orderNumber}
            </div>
            <div>
              <div class="flex items-center gap-2">
                <h4 class="font-bold text-base text-on-surface">${sale.orderType === 'comer' ? 'Para Comer Acá' : 'Para Llevar'}</h4>
                ${methodBadge}
              </div>
              <p class="text-xs text-on-surface-variant mt-0.5">${timeStr} • ${sale.items.length} productos</p>
            </div>
          </div>
          <div class="flex items-center justify-between md:justify-end gap-2">
            <span class="font-bold text-lg text-primary mr-2">$${sale.total.toLocaleString('es-AR')}</span>
            <button onclick="app.openEditOrderModal('${sale.id}')" class="px-3 py-1.5 text-xs font-bold text-on-surface bg-surface-container border border-outline-variant rounded-lg hover:bg-surface-container-high transition-colors flex items-center gap-1">
              <span class="material-symbols-outlined text-base">edit</span> Editar
            </button>
            <button onclick="app.reprintOrder('${sale.id}')" class="px-3 py-1.5 text-xs font-bold text-primary bg-primary-container rounded-lg hover:bg-primary-container/80 transition-colors flex items-center gap-1">
              <span class="material-symbols-outlined text-base">print</span> Ticket
            </button>
            <button onclick="app.deleteOrder('${sale.id}')" class="px-3 py-1.5 text-xs font-bold text-rose-700 bg-rose-50 border border-rose-200 rounded-lg hover:bg-rose-100 transition-colors flex items-center gap-1">
              <span class="material-symbols-outlined text-base">delete</span> Anular
            </button>
          </div>
        </div>
      `;
    }).join('');
  }

  reprintOrder(saleId) {
    const sale = this.sales.find(s => s.id === saleId);
    if (!sale) return;
    this.openReceiptModal(sale);
  }

  deleteOrder(saleId) {
    const sale = this.sales.find(s => s.id === saleId);
    if (!sale) return;

    if (confirm(`¿Estás seguro de anular/eliminar el pedido #${sale.orderNumber} por $${sale.total.toLocaleString('es-AR')}?\nEsta acción actualizará los reportes y caja.`)) {
      this.sales = this.sales.filter(s => s.id !== saleId);
      this.saveStorage('morfi_sales', this.sales);
      this.renderOrders();
      this.renderReports();
      alert(`El pedido #${sale.orderNumber} ha sido eliminado.`);
    }
  }

  openEditOrderModal(saleId) {
    const sale = this.sales.find(s => s.id === saleId);
    if (!sale) return;

    this.editingSale = JSON.parse(JSON.stringify(sale)); // Clone for editing

    const modal = document.getElementById('edit-order-modal');
    if (!modal) return;

    document.getElementById('edit-order-title').textContent = `Editar Pedido #${sale.orderNumber}`;
    document.getElementById('edit-order-type').value = sale.orderType;
    document.getElementById('edit-order-payment').value = sale.paymentMethod;

    this.renderEditOrderItems();
    modal.classList.remove('hidden');
  }

  closeEditOrderModal() {
    const modal = document.getElementById('edit-order-modal');
    if (modal) modal.classList.add('hidden');
    this.editingSale = null;
  }

  updateEditItemQty(index, delta) {
    if (!this.editingSale) return;
    const item = this.editingSale.items[index];
    if (!item) return;
    item.quantity += delta;
    if (item.quantity <= 0) {
      this.editingSale.items.splice(index, 1);
    }
    this.recalculateEditingSale();
    this.renderEditOrderItems();
  }

  removeEditItem(index) {
    if (!this.editingSale) return;
    this.editingSale.items.splice(index, 1);
    this.recalculateEditingSale();
    this.renderEditOrderItems();
  }

  recalculateEditingSale() {
    if (!this.editingSale) return;
    const subtotal = this.editingSale.items.reduce((sum, i) => sum + (i.unitPrice * i.quantity), 0);
    this.editingSale.subtotal = subtotal;
    this.editingSale.total = subtotal;
  }

  renderEditOrderItems() {
    if (!this.editingSale) return;
    const container = document.getElementById('edit-order-items-list');
    const totalEl = document.getElementById('edit-order-total-display');

    if (totalEl) totalEl.textContent = `$${this.editingSale.total.toLocaleString('es-AR')}`;

    if (!container) return;

    if (this.editingSale.items.length === 0) {
      container.innerHTML = `<p class="text-xs text-rose-600 font-bold py-4 text-center">Sin productos. Si guardas, el pedido se eliminará.</p>`;
      return;
    }

    container.innerHTML = this.editingSale.items.map((item, idx) => `
      <div class="flex items-center justify-between p-2.5 bg-surface-container rounded-lg border border-outline-variant text-xs">
        <span class="font-bold text-on-surface flex-1">${item.product.name}</span>
        <div class="flex items-center gap-2">
          <button onclick="app.updateEditItemQty(${idx}, -1)" class="w-6 h-6 rounded bg-white border border-outline-variant font-bold">-</button>
          <span class="font-bold w-4 text-center">${item.quantity}</span>
          <button onclick="app.updateEditItemQty(${idx}, 1)" class="w-6 h-6 rounded bg-white border border-outline-variant font-bold">+</button>
        </div>
        <span class="font-bold text-primary w-20 text-right">$${(item.unitPrice * item.quantity).toLocaleString('es-AR')}</span>
        <button onclick="app.removeEditItem(${idx})" class="text-outline hover:text-error ml-2">
          <span class="material-symbols-outlined text-base">delete</span>
        </button>
      </div>
    `).join('');
  }

  saveEditedOrder() {
    if (!this.editingSale) return;

    if (this.editingSale.items.length === 0) {
      if (confirm('El pedido no tiene productos. ¿Deseas eliminarlo completamente?')) {
        this.deleteOrder(this.editingSale.id);
        this.closeEditOrderModal();
      }
      return;
    }

    const typeSelect = document.getElementById('edit-order-type');
    const paySelect = document.getElementById('edit-order-payment');

    this.editingSale.orderType = typeSelect.value;
    this.editingSale.paymentMethod = paySelect.value;

    const index = this.sales.findIndex(s => s.id === this.editingSale.id);
    if (index !== -1) {
      this.sales[index] = this.editingSale;
      this.saveStorage('morfi_sales', this.sales);
      this.renderOrders();
      this.renderReports();
      alert(`¡Pedido #${this.editingSale.orderNumber} actualizado correctamente!`);
    }

    this.closeEditOrderModal();
  }

  // --- INVENTORY VIEW ---
  renderInventory() {
    const container = document.getElementById('inventory-items-container');
    if (!container) return;

    container.innerHTML = this.products.map(p => `
      <div class="bg-surface-container-lowest p-4 rounded-xl border border-outline-variant flex items-center justify-between gap-4 shadow-xs">
        <div class="flex items-center gap-3">
          <img src="${p.image}" alt="${p.name}" class="w-14 h-14 rounded-lg object-cover bg-surface-container">
          <div>
            <h4 class="font-bold text-base text-on-surface flex items-center gap-2">
              ${p.name}
              ${p.badge ? `<span class="bg-secondary-container text-on-secondary-container px-2 py-0.5 rounded text-[10px] font-mono font-bold">${p.badge}</span>` : ''}
            </h4>
            <p class="text-xs text-on-surface-variant uppercase font-mono tracking-wider">${p.category} • $${p.price.toLocaleString('es-AR')}</p>
          </div>
        </div>
        <div class="flex items-center gap-3">
          <label class="relative inline-flex items-center cursor-pointer mr-2">
            <input type="checkbox" ${p.inStock ? 'checked' : ''} onchange="app.toggleStock('${p.id}')" class="sr-only peer">
            <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
            <span class="ml-2 text-xs font-bold ${p.inStock ? 'text-emerald-700' : 'text-rose-600'}">${p.inStock ? 'EN STOCK' : 'AGOTADO'}</span>
          </label>
          <button onclick="app.openEditProductModal('${p.id}')" class="px-3 py-1.5 text-xs font-bold text-on-surface bg-surface-container border border-outline-variant rounded-lg hover:bg-surface-container-high transition-colors flex items-center gap-1">
            <span class="material-symbols-outlined text-base">edit</span> Editar
          </button>
          <button onclick="app.deleteProduct('${p.id}')" class="text-outline hover:text-error transition-colors p-2">
            <span class="material-symbols-outlined">delete</span>
          </button>
        </div>
      </div>
    `).join('');
  }

  openEditProductModal(productId) {
    const product = this.products.find(p => p.id === productId);
    if (!product) return;

    const modal = document.getElementById('edit-product-modal');
    if (!modal) return;

    document.getElementById('edit-prod-id').value = product.id;
    document.getElementById('edit-prod-name').value = product.name;
    document.getElementById('edit-prod-category').value = product.category;
    document.getElementById('edit-prod-price').value = product.price;
    document.getElementById('edit-prod-badge').value = product.badge || '';
    document.getElementById('edit-prod-image').value = product.image;
    document.getElementById('edit-prod-description').value = product.description || '';

    modal.classList.remove('hidden');
  }

  closeEditProductModal() {
    const modal = document.getElementById('edit-product-modal');
    if (modal) modal.classList.add('hidden');
  }

  saveEditedProduct(event, form) {
    if (event) event.preventDefault();

    const id = form.elements['productId'].value;
    const product = this.products.find(p => p.id === id);
    if (!product) return;

    product.name = form.elements['name'].value.trim();
    product.category = form.elements['category'].value;
    product.price = parseFloat(form.elements['price'].value) || 0;
    product.badge = form.elements['badge'].value.trim();
    product.image = form.elements['image'].value.trim();
    product.description = form.elements['description'].value.trim();

    this.saveStorage('morfi_products', this.products);
    this.renderProductGrid();
    this.renderInventory();
    this.closeEditProductModal();

    alert(`¡Producto "${product.name}" actualizado correctamente!`);
  }

  toggleStock(productId) {
    const p = this.products.find(item => item.id === productId);
    if (p) {
      p.inStock = !p.inStock;
      this.saveStorage('morfi_products', this.products);
      this.renderProductGrid();
      this.renderInventory();
    }
  }

  deleteProduct(productId) {
    if (confirm('¿Eliminar este producto del catálogo?')) {
      this.products = this.products.filter(p => p.id !== productId);
      this.saveStorage('morfi_products', this.products);
      this.renderProductGrid();
      this.renderInventory();
    }
  }

  handleCreateProduct(form) {
    const name = form.elements['name'].value.trim();
    const category = form.elements['category'].value;
    const price = parseFloat(form.elements['price'].value) || 0;
    const description = form.elements['description'].value.trim();
    const image = form.elements['image'].value.trim() || 'https://images.unsplash.com/photo-1619740455993-9e612b1af08a?auto=format&fit=crop&w=600&q=80';

    if (!name || price <= 0) {
      alert('Ingresa un nombre y precio válido.');
      return;
    }

    const newProd = {
      id: 'prod-' + Date.now(),
      name,
      category,
      price,
      inStock: true,
      badge: '',
      image,
      description
    };

    this.products.push(newProd);
    this.saveStorage('morfi_products', this.products);
    this.renderProductGrid();
    this.renderInventory();
    form.reset();

    alert('¡Producto creado exitosamente!');
  }

  // --- REPORTS & BATCH CLOSE ---
  renderReports() {
    const shiftSales = this.sales.filter(s => s.shiftId === this.currentShiftId);
    
    const totalVentas = shiftSales.reduce((sum, s) => sum + s.total, 0);
    const cantOrders = shiftSales.length;
    const ticketProm = cantOrders > 0 ? Math.round(totalVentas / cantOrders) : 0;

    const efectivo = shiftSales.filter(s => s.paymentMethod === 'efectivo').reduce((sum, s) => sum + s.total, 0);
    const tarjeta = shiftSales.filter(s => s.paymentMethod === 'tarjeta').reduce((sum, s) => sum + s.total, 0);
    const qr = shiftSales.filter(s => s.paymentMethod === 'qr').reduce((sum, s) => sum + s.total, 0);

    document.getElementById('rep-total-ventas').textContent = `$${totalVentas.toLocaleString('es-AR')}`;
    document.getElementById('rep-cant-pedidos').textContent = cantOrders;
    document.getElementById('rep-ticket-promedio').textContent = `$${ticketProm.toLocaleString('es-AR')}`;

    document.getElementById('rep-efectivo').textContent = `$${efectivo.toLocaleString('es-AR')}`;
    document.getElementById('rep-tarjeta').textContent = `$${tarjeta.toLocaleString('es-AR')}`;
    document.getElementById('rep-qr').textContent = `$${qr.toLocaleString('es-AR')}`;
  }

  handleCloseBatch() {
    const shiftSales = this.sales.filter(s => s.shiftId === this.currentShiftId);
    if (shiftSales.length === 0) {
      alert('No hay ventas registradas en el lote actual para cerrar.');
      return;
    }

    const totalVentas = shiftSales.reduce((sum, s) => sum + s.total, 0);
    if (!confirm(`¿Confirmar Cierre de Caja / Lote?\nTotal acumulado: $${totalVentas.toLocaleString('es-AR')} en ${shiftSales.length} pedidos.`)) {
      return;
    }

    const closedShift = {
      shiftId: this.currentShiftId,
      closedAt: new Date().toISOString(),
      totalSales: totalVentas,
      totalOrders: shiftSales.length,
      cashTotal: shiftSales.filter(s => s.paymentMethod === 'efectivo').reduce((sum, s) => sum + s.total, 0),
      cardTotal: shiftSales.filter(s => s.paymentMethod === 'tarjeta').reduce((sum, s) => sum + s.total, 0),
      qrTotal: shiftSales.filter(s => s.paymentMethod === 'qr').reduce((sum, s) => sum + s.total, 0)
    };

    this.shifts.unshift(closedShift);
    this.saveStorage('morfi_shifts', this.shifts);

    // Create new shift ID
    this.currentShiftId = 'SHIFT-' + Date.now();
    this.saveStorage('morfi_current_shift_id', this.currentShiftId);

    alert('¡Cierre de Lote realizado exitosamente! La caja ha sido reiniciada para el nuevo turno.');
    this.renderReports();
  }

  // --- CONFIG VIEW ---
  renderConfigForm() {
    const form = document.getElementById('config-form');
    if (!form) return;

    form.elements['storeName'].value = this.config.storeName;
    form.elements['cuit'].value = this.config.cuit;
    form.elements['address'].value = this.config.address;
    form.elements['phone'].value = this.config.phone;
    form.elements['ticketHeader'].value = this.config.ticketHeader;
    form.elements['ticketFooter'].value = this.config.ticketFooter;

    this.renderConfigPreview();
  }

  renderConfigPreview() {
    const dummySale = {
      orderNumber: '0042',
      timestamp: new Date().toISOString(),
      items: [{ quantity: 1, product: { name: 'Pancho Bacon & Cheddar' }, unitPrice: 1800, modifiers: [] }],
      subtotal: 1800,
      total: 1800,
      orderType: 'comer',
      paymentMethod: 'efectivo',
      cashReceived: 2000,
      changeGiven: 200
    };
    this.renderThermalReceipt('config-receipt-preview', dummySale);
  }

  handleSaveConfig(form) {
    this.config = {
      storeName: form.elements['storeName'].value.trim(),
      cuit: form.elements['cuit'].value.trim(),
      address: form.elements['address'].value.trim(),
      phone: form.elements['phone'].value.trim(),
      terminalName: 'Terminal POS 01',
      ticketHeader: form.elements['ticketHeader'].value.trim(),
      ticketFooter: form.elements['ticketFooter'].value.trim(),
      paperWidth: '80mm'
    };

    this.saveStorage('morfi_config', this.config);
    this.renderConfigPreview();
    alert('¡Configuración guardada exitosamente!');
  }

  render() {
    this.renderProductGrid();
    this.renderCart();
    this.updateCategoryUI();
    this.updateOrderTypeUI();
  }
}

// Initialize Application Globals
let app;
document.addEventListener('DOMContentLoaded', () => {
  app = new POSApp();
});
