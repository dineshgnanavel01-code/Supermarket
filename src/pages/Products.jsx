import { useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import {
  Search,
  SlidersHorizontal,
  X,
  Sparkles,
  ArrowUpDown,
  Filter,
  PackageX,
  RotateCcw,
} from 'lucide-react';
import products from '../data/products';
import ProductGrid from '../components/ProductGrid';

export default function Products() {
  const [params, setParams] = useSearchParams();
  const [q, setQ] = useState(params.get('q') || '');
  const [brand, setBrand] = useState('All');
  const [rating, setRating] = useState('All');
  const [sort, setSort] = useState('featured');

  const category = params.get('category') || 'All';
  const brands = ['All', ...new Set(products.map((p) => p.brand))];

  const categoriesList = [
    'All',
    'Fresh Produce',
    'Fruits',
    'Grocery Essentials',
    'Dairy & Bakery',
    'Snacks & Beverages',
    'Home Care',
  ];

  // Filter & Sort Logic
  const filtered = useMemo(() => {
    let result = products.filter(
      (p) =>
        (category === 'All' || p.category === category) &&
        (brand === 'All' || p.brand === brand) &&
        (rating === 'All' || p.rating >= Number(rating)) &&
        p.name.toLowerCase().includes(q.toLowerCase().trim())
    );

    if (sort === 'low') result.sort((x, y) => x.price - y.price);
    if (sort === 'high') result.sort((x, y) => y.price - x.price);
    if (sort === 'rating') result.sort((x, y) => y.rating - x.rating);
    if (sort === 'new') result.sort((x, y) => y.id - x.id);

    return result;
  }, [q, brand, rating, sort, category]);

  const resetAllFilters = () => {
    setQ('');
    setBrand('All');
    setRating('All');
    setSort('featured');
    setParams({});
  };

  const hasActiveFilters =
    q !== '' || brand !== 'All' || rating !== 'All' || category !== 'All';

  return (
    <main className="container mx-auto px-4 py-8">
      {/* Banner Header */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-emerald-950 via-emerald-900 to-slate-900 p-8 text-white shadow-md">
        <div className="relative z-10 max-w-xl">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/20 px-3 py-1 text-[11px] font-bold text-lime-300 backdrop-blur-xs border border-lime-300/20">
            <Sparkles size={12} /> DINA MART COLLECTION
          </span>
          <h1 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
            Shop Smarter Every Day
          </h1>
          <p className="mt-2 text-xs leading-relaxed text-emerald-100/80 sm:text-sm">
            Discover handpicked fresh produce, trusted pantry staples, and everyday home essentials.
          </p>
        </div>
      </div>

      {/* Main Layout Grid */}
      <div className="mt-8 grid gap-8 lg:grid-cols-[260px_1fr]">
        {/* Sidebar Filters */}
        <aside className="h-fit rounded-3xl border border-slate-100 bg-white p-6 shadow-xs">
          <div className="flex items-center justify-between border-b border-slate-100 pb-4">
            <div className="flex items-center gap-2 text-sm font-bold text-slate-900">
              <SlidersHorizontal size={18} className="text-emerald-600" />
              <span>Filters</span>
            </div>
            {hasActiveFilters && (
              <button
                onClick={resetAllFilters}
                className="flex items-center gap-1 text-[11px] font-semibold text-rose-500 hover:text-rose-600 transition"
              >
                <RotateCcw size={12} />
                <span>Reset</span>
              </button>
            )}
          </div>

          <div className="mt-5 space-y-5">
            {/* Brand Filter */}
            <div>
              <label className="text-xs font-bold text-slate-700">Brand</label>
              <select
                value={brand}
                onChange={(e) => setBrand(e.target.value)}
                className="mt-1.5 w-full rounded-xl border border-slate-200 bg-slate-50/50 p-2.5 text-xs font-semibold text-slate-800 transition focus:border-emerald-500 focus:bg-white focus:outline-none"
              >
                {brands.map((x) => (
                  <option key={x} value={x}>
                    {x}
                  </option>
                ))}
              </select>
            </div>

            {/* Rating Filter */}
            <div>
              <label className="text-xs font-bold text-slate-700">
                Minimum Rating
              </label>
              <select
                value={rating}
                onChange={(e) => setRating(e.target.value)}
                className="mt-1.5 w-full rounded-xl border border-slate-200 bg-slate-50/50 p-2.5 text-xs font-semibold text-slate-800 transition focus:border-emerald-500 focus:bg-white focus:outline-none"
              >
                <option value="All">All Ratings</option>
                <option value="4.5">★ 4.5 and above</option>
                <option value="4.7">★ 4.7 and above</option>
                <option value="4.8">★ 4.8 and above</option>
              </select>
            </div>
          </div>
        </aside>

        {/* Products Search & List Area */}
        <section className="flex flex-col">
          {/* Top Search & Sort Controls */}
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            {/* Search Box */}
            <div className="flex flex-1 items-center gap-2 rounded-2xl border border-slate-200 bg-white px-3.5 py-2.5 shadow-xs transition focus-within:border-emerald-500 focus-within:ring-2 focus-within:ring-emerald-500/10">
              <Search size={18} className="text-slate-400" />
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Search groceries, brands..."
                className="w-full text-xs font-semibold text-slate-800 placeholder-slate-400 outline-none"
              />
              {q && (
                <button
                  onClick={() => setQ('')}
                  className="rounded-full p-1 text-slate-400 hover:bg-slate-100 hover:text-slate-600"
                >
                  <X size={14} />
                </button>
              )}
            </div>

            {/* Sort Dropdown */}
            <div className="flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-3 py-2.5 shadow-xs">
              <ArrowUpDown size={16} className="text-slate-400" />
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="bg-transparent text-xs font-bold text-slate-800 outline-none"
              >
                <option value="featured">Sort by: Featured</option>
                <option value="low">Price: Low to High</option>
                <option value="high">Price: High to Low</option>
                <option value="rating">Top Rated</option>
                <option value="new">New Arrivals</option>
              </select>
            </div>
          </div>

          {/* Category Horizontal Filter Pills */}
          <div className="my-5 flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
            {categoriesList.map((c) => {
              const active =
                c === 'All' ? category === 'All' : category === c;
              return (
                <button
                  key={c}
                  onClick={() =>
                    c === 'All' ? setParams({}) : setParams({ category: c })
                  }
                  className={`shrink-0 rounded-full px-4 py-2 text-xs font-bold transition ${
                    active
                      ? 'bg-emerald-600 text-white shadow-sm shadow-emerald-600/20'
                      : 'border border-slate-200 bg-white text-slate-600 hover:border-slate-300'
                  }`}
                >
                  {c}
                </button>
              );
            })}
          </div>

          {/* Results Summary Counter */}
          <div className="mb-4 flex items-center justify-between text-xs text-slate-500 font-medium">
            <span>
              Showing <b className="text-slate-900">{filtered.length}</b> items
            </span>
            {hasActiveFilters && (
              <span className="text-emerald-700 font-semibold">
                Filters active
              </span>
            )}
          </div>

          {/* Products Content or Empty State */}
          {filtered.length > 0 ? (
            <ProductGrid products={filtered} />
          ) : (
            <div className="my-12 flex flex-col items-center justify-center rounded-3xl border border-dashed border-slate-200 bg-white p-12 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-50 text-slate-400">
                <PackageX size={32} />
              </div>
              <h3 className="mt-4 text-base font-bold text-slate-900">
                No matching items found
              </h3>
              <p className="mt-1 text-xs text-slate-500">
                Try adjusting your search query, clearing brand selections, or picking another category.
              </p>
              <button
                onClick={resetAllFilters}
                className="mt-5 rounded-xl bg-slate-900 px-5 py-2.5 text-xs font-bold text-white transition hover:bg-slate-800"
              >
                Reset All Filters
              </button>
            </div>
          )}
        </section>
      </div>
    </main>
  );
}