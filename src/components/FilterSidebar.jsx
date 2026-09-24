import { SlidersHorizontal, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function FilterSidebar({
  open,
  onClose,
  categories,
  brands,
  filters,
  setFilters,
}) {
  const update = (key, value) => {
    setFilters((current) => ({
      ...current,
      [key]: value,
    }));
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="
              fixed inset-0 z-40
              bg-black/50
              lg:hidden
            "
          />

          <motion.aside
            initial={{
              x: -350,
            }}
            animate={{
              x: 0,
            }}
            exit={{
              x: -350,
            }}
            transition={{
              type: "spring",
              damping: 25,
            }}
            className="
              fixed left-0 top-0 z-50
              h-full w-[310px]
              overflow-y-auto
              bg-white p-6
              shadow-2xl
              dark:bg-slate-900
              lg:sticky lg:top-28
              lg:z-auto lg:block
              lg:h-auto lg:w-auto
              lg:rounded-3xl
              lg:shadow-none
            "
          >
            <div className="
              flex items-center
              justify-between
            ">
              <h2 className="
                flex items-center gap-2
                text-lg font-black
              ">
                <SlidersHorizontal
                  size={19}
                />
                Filters
              </h2>

              <button
                onClick={onClose}
                className="lg:hidden"
              >
                <X />
              </button>
            </div>

            <FilterGroup title="Category">
              {categories.map((category) => (
                <label
                  key={category}
                  className="filter-option"
                >
                  <input
                    type="radio"
                    name="category"
                    checked={
                      filters.category === category
                    }
                    onChange={() =>
                      update(
                        "category",
                        category
                      )
                    }
                  />
                  {category}
                </label>
              ))}
            </FilterGroup>

            <FilterGroup title="Brand">
              {brands.map((brand) => (
                <label
                  key={brand}
                  className="filter-option"
                >
                  <input
                    type="radio"
                    name="brand"
                    checked={
                      filters.brand === brand
                    }
                    onChange={() =>
                      update("brand", brand)
                    }
                  />
                  {brand}
                </label>
              ))}
            </FilterGroup>

            <FilterGroup title="Price">
              <input
                type="range"
                min="0"
                max="1000"
                value={filters.maxPrice}
                onChange={(event) =>
                  update(
                    "maxPrice",
                    Number(event.target.value)
                  )
                }
                className="w-full accent-green-600"
              />

              <div className="
                mt-2 flex justify-between
                text-sm font-semibold
              ">
                <span>₹0</span>
                <span>
                  ₹{filters.maxPrice}
                </span>
              </div>
            </FilterGroup>

            <FilterGroup title="Rating">
              {[4, 3, 2].map((rating) => (
                <label
                  key={rating}
                  className="filter-option"
                >
                  <input
                    type="radio"
                    name="rating"
                    checked={
                      filters.rating === rating
                    }
                    onChange={() =>
                      update("rating", rating)
                    }
                  />

                  {rating}★ & above
                </label>
              ))}
            </FilterGroup>

            <button
              onClick={() =>
                setFilters({
                  category: "All",
                  brand: "All",
                  maxPrice: 1000,
                  rating: 0,
                })
              }
              className="
                mt-6 w-full rounded-xl
                border border-slate-200
                py-3 text-sm font-bold
                dark:border-slate-700
              "
            >
              Reset Filters
            </button>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}

function FilterGroup({
  title,
  children,
}) {
  return (
    <div className="
      mt-7 border-t
      border-slate-200 pt-6
      dark:border-slate-800
    ">
      <h3 className="
        mb-4 font-black
      ">
        {title}
      </h3>

      <div className="space-y-3">
        {children}
      </div>
    </div>
  );
}