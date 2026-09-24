import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  User,
  ShoppingBag,
  Heart,
  MapPin,
  LogOut,
  Mail,
  Lock,
  ArrowRight,
  CheckCircle,
  Package,
  ChevronRight,
  ShieldCheck,
} from 'lucide-react';

export default function Account() {
  const [logged, setLogged] = useState(false);
  const [activeTab, setActiveTab] = useState('profile');
  const [email, setEmail] = useState('alex.johnson@example.com');
  const [password, setPassword] = useState('••••••••');

  // Dummy user data
  const user = {
    name: 'ddinamart@example.com',
    phone: '+91 98765 43210',
    avatar:
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    ordersCount: 3,
  };

  const dummyOrders = [
    {
      id: 'ORD-9821',
      date: 'Sep 22, 2026',
      total: 847,
      status: 'Delivered',
      items: 4,
    },
    {
      id: 'ORD-9740',
      date: 'Sep 10, 2026',
      total: 1290,
      status: 'Delivered',
      items: 6,
    },
  ];

  if (!logged) {
    return (
      <main className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mx-auto max-w-md overflow-hidden rounded-3xl border border-slate-100 bg-white p-8 shadow-xl shadow-slate-200/50"
        >
          {/* Header */}
          <div className="text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600">
              <ShieldCheck size={28} />
            </div>
            <h1 className="mt-4 text-2xl font-bold text-slate-900">
              Welcome back
            </h1>
            <p className="mt-1 text-xs text-slate-500">
              Sign in to manage your orders, address & wishlist
            </p>
          </div>

          {/* Form */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setLogged(true);
            }}
            className="mt-6 flex flex-col gap-4"
          >
            <div>
              <label className="text-xs font-semibold text-slate-600">
                Email address
              </label>
              <div className="relative mt-1 flex items-center">
                <Mail className="absolute left-3.5 text-slate-400" size={18} />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-xl border border-slate-200 bg-slate-50/50 py-3 pl-10 pr-4 text-sm font-medium text-slate-800 transition focus:border-emerald-500 focus:bg-white focus:outline-none"
                  placeholder="name@example.com"
                  required
                />
              </div>
            </div>

            <div>
              <label className="text-xs font-semibold text-slate-600">
                Password
              </label>
              <div className="relative mt-1 flex items-center">
                <Lock className="absolute left-3.5 text-slate-400" size={18} />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full rounded-xl border border-slate-200 bg-slate-50/50 py-3 pl-10 pr-4 text-sm font-medium text-slate-800 transition focus:border-emerald-500 focus:bg-white focus:outline-none"
                  placeholder="••••••••"
                  required
                />
              </div>
            </div>

            <motion.button
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-emerald-600 py-3 text-sm font-bold text-white shadow-lg shadow-emerald-600/25 transition hover:bg-emerald-700"
            >
              <span>Sign In</span>
              <ArrowRight size={16} />
            </motion.button>
          </form>

          <p className="mt-6 text-center text-xs text-slate-400">
            Frontend demo mode • Click Sign In with any credentials
          </p>
        </motion.div>
      </main>
    );
  }

  return (
    <main className="container mx-auto px-4 py-10">
      <div className="grid gap-8 lg:grid-cols-[280px_1fr]">
        {/* Sidebar Navigation */}
        <aside className="h-fit rounded-3xl border border-slate-100 bg-white p-5 shadow-sm">
          {/* User Profile Card */}
          <div className="flex items-center gap-3 border-b border-slate-100 pb-5">
            <img
              src={user.avatar}
              alt={user.name}
              className="h-12 w-12 rounded-2xl object-cover ring-2 ring-emerald-500/20"
            />
            <div className="min-w-0">
              <h2 className="truncate text-sm font-bold text-slate-900">
                {user.name}
              </h2>
              <p className="truncate text-xs text-slate-400">{user.email}</p>
            </div>
          </div>

          {/* Nav Links */}
          <nav className="mt-5 flex flex-col gap-1.5 text-sm font-semibold text-slate-600">
            <button
              onClick={() => setActiveTab('profile')}
              className={`flex items-center gap-3 rounded-xl px-4 py-3 text-left transition ${
                activeTab === 'profile'
                  ? 'bg-emerald-50 text-emerald-700'
                  : 'hover:bg-slate-50 hover:text-slate-900'
              }`}
            >
              <User size={18} />
              <span>My Profile</span>
            </button>

            <button
              onClick={() => setActiveTab('orders')}
              className={`flex items-center gap-3 rounded-xl px-4 py-3 text-left transition ${
                activeTab === 'orders'
                  ? 'bg-emerald-50 text-emerald-700'
                  : 'hover:bg-slate-50 hover:text-slate-900'
              }`}
            >
              <Package size={18} />
              <span>My Orders</span>
            </button>

            <Link
              to="/wishlist"
              className="flex items-center gap-3 rounded-xl px-4 py-3 hover:bg-slate-50 hover:text-slate-900 transition"
            >
              <Heart size={18} />
              <span>Wishlist</span>
            </Link>

            <button
              onClick={() => setActiveTab('addresses')}
              className={`flex items-center gap-3 rounded-xl px-4 py-3 text-left transition ${
                activeTab === 'addresses'
                  ? 'bg-emerald-50 text-emerald-700'
                  : 'hover:bg-slate-50 hover:text-slate-900'
              }`}
            >
              <MapPin size={18} />
              <span>Saved Addresses</span>
            </button>

            <button
              onClick={() => setLogged(false)}
              className="mt-4 flex items-center gap-3 rounded-xl px-4 py-3 text-left font-semibold text-rose-500 transition hover:bg-rose-50"
            >
              <LogOut size={18} />
              <span>Logout</span>
            </button>
          </nav>
        </aside>

        {/* Content Section */}
        <section className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm sm:p-8">
          <AnimatePresence mode="wait">
            {activeTab === 'profile' && (
              <motion.div
                key="profile"
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
              >
                <div className="border-b border-slate-100 pb-5">
                  <h1 className="text-2xl font-bold text-slate-900">
                    Profile Details
                  </h1>
                  <p className="mt-1 text-xs text-slate-500">
                    Manage your contact details and preferences.
                  </p>
                </div>

                <div className="mt-6 grid max-w-xl gap-5 text-sm">
                  <div>
                    <label className="text-xs font-semibold text-slate-500">
                      Full Name
                    </label>
                    <input
                      type="text"
                      defaultValue={user.name}
                      className="mt-1 w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-2.5 font-medium text-slate-800"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-slate-500">
                      Email Address
                    </label>
                    <input
                      type="email"
                      defaultValue={user.email}
                      className="mt-1 w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-2.5 font-medium text-slate-800"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-slate-500">
                      Phone Number
                    </label>
                    <input
                      type="text"
                      defaultValue={user.phone}
                      className="mt-1 w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-2.5 font-medium text-slate-800"
                    />
                  </div>

                  <motion.button
                    whileTap={{ scale: 0.96 }}
                    className="mt-2 w-fit rounded-xl bg-emerald-600 px-6 py-2.5 text-xs font-bold text-white shadow-md transition hover:bg-emerald-700"
                  >
                    Save Changes
                  </motion.button>
                </div>
              </motion.div>
            )}

            {activeTab === 'orders' && (
              <motion.div
                key="orders"
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
              >
                <div className="border-b border-slate-100 pb-5">
                  <h1 className="text-2xl font-bold text-slate-900">
                    Order History
                  </h1>
                  <p className="mt-1 text-xs text-slate-500">
                    View and track your previous supermarket purchases.
                  </p>
                </div>

                <div className="mt-6 flex flex-col gap-4">
                  {dummyOrders.map((order) => (
                    <div
                      key={order.id}
                      className="flex items-center justify-between rounded-2xl border border-slate-100 p-4 transition hover:border-emerald-200 hover:shadow-md"
                    >
                      <div className="flex items-center gap-4">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                          <ShoppingBag size={20} />
                        </div>
                        <div>
                          <h3 className="text-sm font-bold text-slate-800">
                            {order.id}
                          </h3>
                          <p className="text-xs text-slate-400">
                            {order.date} • {order.items} items
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-4">
                        <div className="text-right">
                          <p className="text-sm font-bold text-slate-900">
                            ₹{order.total}
                          </p>
                          <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-600">
                            <CheckCircle size={12} /> {order.status}
                          </span>
                        </div>
                        <ChevronRight size={18} className="text-slate-300" />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {activeTab === 'addresses' && (
              <motion.div
                key="addresses"
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
              >
                <div className="border-b border-slate-100 pb-5">
                  <h1 className="text-2xl font-bold text-slate-900">
                    Saved Addresses
                  </h1>
                  <p className="mt-1 text-xs text-slate-500">
                    Manage your delivery locations for fast checkout.
                  </p>
                </div>

                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <div className="relative rounded-2xl border-2 border-emerald-500/20 bg-emerald-50/20 p-4">
                    <span className="rounded-md bg-emerald-600 px-2 py-0.5 text-[10px] font-bold text-white">
                      DEFAULT
                    </span>
                    <h3 className="mt-2 text-sm font-bold text-slate-800">
                      Home
                    </h3>
                    <p className="mt-1 text-xs leading-relaxed text-slate-500">
                      123 Green Park Colony, Sector 4
                      <br />
                      New Delhi, 110016
                    </p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </section>
      </div>
    </main>
  );
}