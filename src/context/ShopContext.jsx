import { createContext, useContext, useEffect, useMemo, useState } from 'react';

const ShopContext = createContext(null);

export const useShop = () => {
  const context = useContext(ShopContext);
  if (!context) {
    throw new Error('useShop must be used within a ShopProvider');
  }
  return context;
};

export function ShopProvider({ children }) {
  // Safe initializers from LocalStorage
  const [cart, setCart] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('dina-cart') || '[]');
    } catch {
      return [];
    }
  });

  const [wishlist, setWishlist] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('dina-wish') || '[]');
    } catch {
      return [];
    }
  });

  const [toast, setToast] = useState('');

  // Persist state changes
  useEffect(() => {
    localStorage.setItem('dina-cart', JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem('dina-wish', JSON.stringify(wishlist));
  }, [wishlist]);

  // Toast notification helper
  const notify = (msg) => {
    setToast(msg);
    const timer = setTimeout(() => setToast(''), 2500);
    return () => clearTimeout(timer);
  };

  // Helper to parse price string/number safely
  const parsePrice = (price) => {
    if (typeof price === 'number') return price;
    if (!price) return 0;
    const clean = String(price).replace(/[^0-9.]/g, '');
    return parseFloat(clean) || 0;
  };

  // Cart actions
  const add = (product) => {
    setCart((prevCart) => {
      const existing = prevCart.find((i) => i.id === product.id);
      const cleanPrice = parsePrice(product.price);

      if (existing) {
        return prevCart.map((i) =>
          i.id === product.id ? { ...i, qty: (i.qty || 1) + 1 } : i
        );
      }
      return [...prevCart, { ...product, price: cleanPrice, qty: 1 }];
    });
    notify(`Added ${product.name} to cart`);
  };

  const update = (id, delta) => {
    setCart((prevCart) =>
      prevCart
        .map((item) => {
          if (item.id === id) {
            const newQty = (item.qty || 1) + delta;
            return newQty > 0 ? { ...item, qty: newQty } : null;
          }
          return item;
        })
        .filter(Boolean)
    );
  };

  const remove = (id) => {
    setCart((prevCart) => prevCart.filter((i) => i.id !== id));
    notify('Item removed from cart');
  };

  const clearCart = () => setCart([]);

  // Wishlist toggle
  const toggleWish = (product) => {
    const isLiked = wishlist.some((x) => x.id === product.id);
    if (isLiked) {
      setWishlist((prev) => prev.filter((x) => x.id !== product.id));
      notify('Removed from wishlist');
    } else {
      setWishlist((prev) => [...prev, product]);
      notify('Added to wishlist');
    }
  };

  // Derived Values
  const cartCount = useMemo(() => {
    return cart.reduce((total, item) => total + (Number(item.qty) || 0), 0);
  }, [cart]);

  const subtotal = useMemo(() => {
    return cart.reduce((sum, item) => {
      const p = parsePrice(item.price);
      const q = Number(item.qty) || 0;
      return sum + p * q;
    }, 0);
  }, [cart]);

  const delivery = subtotal > 0 ? (subtotal >= 499 ? 0 : 40) : 0;
  const discount = subtotal >= 999 ? 100 : 0;
  const total = Math.max(0, subtotal + delivery - discount);

  return (
    <ShopContext.Provider
      value={{
        cart,
        cartCount,
        wishlist,
        toast,
        subtotal,
        delivery,
        discount,
        total,
        add,
        update,
        remove,
        clearCart,
        toggleWish,
        notify,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
}