import { Link, NavLink, Outlet } from "react-router-dom";

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  `text-sm font-medium transition-colors ${
    isActive ? "text-emerald-600" : "text-slate-600 hover:text-slate-900"
  }`;

export const MarketingLayout = () => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/80 backdrop-blur">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
          <Link to="/" className="flex items-center gap-2 text-lg font-semibold">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-500 text-white">
              PP
            </span>
            PersonaPlex
          </Link>
          <nav className="hidden items-center gap-6 md:flex">
            <NavLink to="/prices" className={navLinkClass}>
              Prices
            </NavLink>
            <NavLink to="/about" className={navLinkClass}>
              About Us
            </NavLink>
            <NavLink to="/privacy" className={navLinkClass}>
              Privacy Policy
            </NavLink>
            <NavLink to="/agreement" className={navLinkClass}>
              User Agreement
            </NavLink>
          </nav>
          <div className="flex items-center gap-3">
            <NavLink
              to="/login"
              className="hidden rounded-full border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-slate-400 hover:text-slate-900 md:inline-flex"
            >
              Войти
            </NavLink>
            <Link
              to="/app"
              className="inline-flex items-center justify-center rounded-full bg-emerald-500 px-5 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-600"
            >
              Выговориться
            </Link>
          </div>
        </div>
      </header>

      <main className="mx-auto w-full max-w-6xl px-6 py-12">
        <Outlet />
      </main>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-start justify-between gap-6 px-6 py-8 md:flex-row md:items-center">
          <div>
            <p className="text-sm font-semibold text-slate-900">PersonaPlex</p>
            <p className="text-sm text-slate-500">
              Пространство, где голос, текст и эмоции встречаются безопасно.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500">
            <Link to="/privacy" className="hover:text-slate-900">
              Privacy Policy
            </Link>
            <Link to="/agreement" className="hover:text-slate-900">
              User Agreement
            </Link>
            <Link to="/prices" className="hover:text-slate-900">
              Prices
            </Link>
            <Link to="/about" className="hover:text-slate-900">
              About Us
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};
