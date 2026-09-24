import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Search, SlidersHorizontal, X } from "lucide-react";
import { useSearchParams } from "react-router-dom";

import { products } from "../data/products";
import ProductGrid from "../components/ProductGrid";
import FilterSidebar from "../components/FilterSidebar";

export default function Products() {
  const [params] = useSearchParams();

  const initialCategory = params.get("category") || "All";
  const initialSearch = params.get("search") || "";

  const [category, setCategory] = useState(initialCategory);
  const [search, setSearch] = useState(initialSearch);

  // Get unique product categories
  const categories = useMemo(() => {
    return [...new Set(products.map((product) => product.category))];
  }, []);

  // Filter products
  const filteredProducts = useMemo(() => {
    const searchText = search.trim().toLowerCase();

    return products.filter((product) => {
      const matchesCategory =
        category === "All" || product.category === category;

      const matchesSearch =
        searchText === "" ||
        product.name.toLowerCase().includes(searchText) ||
        product.category.toLowerCase().includes(searchText);

      return matchesCategory && matchesSearch;
    });
  }, [category, search]);

  const clearSearch = () => {
    setSearch("");
  };

  const clearFilters = () => {
    setCategory("All");
    setSearch("");
  };

  return (
    <main className="min-h-screen bg-white py-12 dark:bg-gray-950">
      <div className="mx-auto max-w-7xl px-5">
        {/* ================= HEADER ================= */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <p className="font-bold tracking-wider text-indigo-600">
            DINA-MART STORE
          </p>

          <h1 className="mt-2 text-4xl font-black text-gray-900 dark:text-white md:text-5xl">
            All Products
          </h1>

          <p className="mt-3 text-gray-500 dark:text-gray-400">
            Find the perfect products for your lifestyle.
          </p>
        </motion.div>

        {/* ================= SEARCH ================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-8"
        >
          <div className="flex items-center rounded-2xl border border-gray-200 bg-white px-4 py-3 shadow-sm transition focus-within:border-indigo-500 focus-within:ring-2 focus-within:ring-indigo-500/20 dark:border-gray-800 dark:bg-gray-900"
          >
            <Search
              size={20}
              className="shrink-0 text-gray-400"
            />

            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search products..."
              className="w-full bg-transparent px-3 text-gray-900 outline-none placeholder:text-gray-400 dark:text-white"
            />

            {search && (
              <button
                type="button"
                onClick={clearSearch}
                className="rounded-full p-1 text-gray-400 transition hover:bg-gray-100 hover:text-gray-700 dark:hover:bg-gray-800 dark:hover:text-white"
              >
                <X size={18} />
              </button>
            )}
          </div>
        </motion.div>

        {/* ================= MOBILE FILTER HEADER ================= */}
        <div className="mb-5 flex items-center justify-between lg:hidden">
          <div className="flex items-center gap-2 font-bold text-gray-900 dark:text-white">
            <SlidersHorizontal size={19} />
            Filters
          </div>

          {(category !== "All" || search) && (
            <button
              type="button"
              onClick={clearFilters}
              className="text-sm font-semibold text-indigo-600"
            >
              Clear All
            </button>
          )}
        </div>

        {/* ================= CONTENT ================= */}
        <div className="grid gap-8 lg:grid-cols-[250px_1fr]">
          {/* SIDEBAR */}
          <aside>
            <FilterSidebar
              category={category}
              setCategory={setCategory}
              categories={categories}
            />
          </aside>

          {/* PRODUCTS */}
          <section>
            {/* Result information */}
            <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                Showing{" "}
                <span className="font-bold text-gray-900 dark:text-white">
                  {filteredProducts.length}
                </span>{" "}
                {filteredProducts.length === 1
                  ? "product"
                  : "products"}
              </p>

              {category !== "All" && (
                <button
                  type="button"
                  onClick={() => setCategory("All")}
                  className="rounded-full bg-indigo-50 px-4 py-2 text-sm font-semibold text-indigo-600 transition hover:bg-indigo-100 dark:bg-indigo-950/40 dark:hover:bg-indigo-950/70"
                >
                  {category} ×
                </button>
              )}
            </div>

            <ProductGrid products={filteredProducts} />
          </section>
        </div>
      </div>
    </main>
  );
}