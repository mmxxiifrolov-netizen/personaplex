import { Link } from "react-router-dom";

export const Login = () => {
  return (
    <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center">
      <div className="space-y-6">
        <span className="inline-flex w-fit items-center rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-slate-600">
          Личный кабинет
        </span>
        <h1 className="text-3xl font-semibold text-slate-900 md:text-4xl">
          С возвращением в PersonaPlex
        </h1>
        <p className="text-sm text-slate-600">
          Войдите, чтобы увидеть историю разговоров, сохраненные сценарии и
          персональные рекомендации.
        </p>
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-slate-900">
            Что внутри кабинета
          </h2>
          <ul className="mt-4 space-y-3 text-sm text-slate-600">
            <li>• Доступ к персональным пресетам и голосам.</li>
            <li>• Быстрое подключение к любимым сценариям.</li>
            <li>• Уведомления о новых функциях и обновлениях.</li>
          </ul>
        </div>
      </div>

      <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <h2 className="text-xl font-semibold text-slate-900">
          Войти в аккаунт
        </h2>
        <p className="mt-2 text-sm text-slate-500">
          Заполните форму ниже, чтобы продолжить.
        </p>
        <form className="mt-6 space-y-4">
          <label className="block text-sm font-medium text-slate-700">
            Email
            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 text-sm text-slate-900 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-200"
            />
          </label>
          <label className="block text-sm font-medium text-slate-700">
            Пароль
            <input
              type="password"
              name="password"
              placeholder="••••••••"
              className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 text-sm text-slate-900 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-200"
            />
          </label>
          <div className="flex items-center justify-between text-sm text-slate-500">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="h-4 w-4 rounded border-slate-300" />
              Запомнить меня
            </label>
            <Link to="/" className="text-emerald-600 hover:text-emerald-700">
              Забыли пароль?
            </Link>
          </div>
          <button
            type="submit"
            className="flex w-full items-center justify-center rounded-xl bg-emerald-500 px-4 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-600"
          >
            Войти
          </button>
        </form>
        <p className="mt-4 text-sm text-slate-500">
          Нет аккаунта?{" "}
          <Link to="/app" className="font-semibold text-emerald-600">
            Начать разговор
          </Link>
        </p>
      </div>
    </div>
  );
};
