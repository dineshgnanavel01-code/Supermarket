import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

const ShopContext = createContext();

export function ShopProvider({ children }) {
  const [cart, setCart] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("dina-cart")) || [];
    } catch {
      return [];
    }
  });

  const [wishlist, setWishlist] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("dina-wishlist")) || [];
    } catch {
      return [];
    }
  });

  const [recentlyViewed, setRecentlyViewed] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("dina-recent")) || [];
    } catch {
      return [];
    }
  });

  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("dina-theme") === "dark";
  });

  const [cartOpen, setCartOpen] = useState(false);
  const [toast, setToast] = useState(null);
  const [coupon, setCoupon] = useState("");

  const [user, setUser] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("dina-user")) || null;
    } catch {
      return null;
    }
  });

  useEffect(() => {
    localStorage.setItem("dina-cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem("dina-wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  useEffect(() => {
    localStorage.setItem(
      "dina-recent",
      JSON.stringify(recentlyViewed)
    );
  }, [recentlyViewed]);

  useEffect(() => {
    localStorage.setItem("dina-user", JSON.stringify(user));
  }, [user]);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem(
      "dina-theme",
      darkMode ? "dark" : "light"
    );
  }, [darkMode]);

  const showToast = (message, type = "success") => {
    setToast({ message, type });

    setTimeout(() => {
      setToast(null);
    }, 2500);
  };

  const addToCart = (product, quantity = 1) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);

      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity: item.quantity + quantity,
              }
            : item
        );
      }

      return [
        ...prev,
        {
          ...product,
          quantity,
        },
      ];
    });

    showToast(`${product.name} added to cart`);
    setCartOpen(true);
  };

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
    showToast("Product removed");
  };

  const updateQuantity = (id, quantity) => {
    if (quantity <= 0) {
      removeFromCart(id);
      return;
    }

    setCart((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity }
          : item
      )
    );
  };

  const toggleWishlist = (product) => {
    setWishlist((prev) => {
      const exists = prev.some((item) => item.id === product.id);

      if (exists) {
        showToast("Removed from wishlist");
        return prev.filter((item) => item.id !== product.id);
      }

      showToast("Added to wishlist ❤️");
      return [...prev, product];
    });
  };

  const isWishlisted = (id) => {
    return wishlist.some((item) => item.id === id);
  };

  const addRecentlyViewed = (product) => {
    setRecentlyViewed((prev) => {
      const filtered = prev.filter(
        (item) => item.id !== product.id
      );

      return [product, ...filtered].slice(0, 6);
    });
  };

  const clearCart = () => {
    setCart([]);
  };

  const login = (userData) => {
    setUser(userData);
    showToast("Welcome to Dina-Mart 👋");
  };

  const logout = () => {
    setUser(null);
    showToast("Logged out successfully");
  };

  const cartCount = useMemo(
    () =>
      cart.reduce(
        (total, item) => total + item.quantity,
        0
      ),
    [cart]
  );

  const subtotal = useMemo(
    () =>
      cart.reduce(
        (total, item) =>
          total + item.price * item.quantity,
        0
      ),
    [cart]
  );

  const delivery = subtotal >= 999 || subtotal === 0 ? 0 : 49;

  const discount = coupon === "DINA10" ? subtotal * 0.1 : 0;

  const grandTotal = subtotal + delivery - discount;

  const applyCoupon = (code) => {
    if (code.trim().toUpperCase() === "DINA10") {
      setCoupon("DINA10");
      showToast("10% coupon applied 🎉");
      return true;
    }

    showToast("Invalid coupon code", "error");
    return false;
  };

  const value = {
    cart,
    wishlist,
    recentlyViewed,
    darkMode,
    cartOpen,
    toast,
    user,
    coupon,

    cartCount,
    subtotal,
    delivery,
    discount,
    grandTotal,

    setDarkMode,
    setCartOpen,
    setToast,

    addToCart,
    removeFromCart,
    updateQuantity,
    toggleWishlist,
    isWishlisted,

    addRecentlyViewed,

    clearCart,
    applyCoupon,

    login,
    logout,
    showToast,
  };

  return (
    <ShopContext.Provider value={value}>
      {children}
    </ShopContext.Provider>
  );
}

export function useShop() {
  return useContext(ShopContext);
}