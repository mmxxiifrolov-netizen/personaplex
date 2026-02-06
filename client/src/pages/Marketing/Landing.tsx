import { Link } from "react-router-dom";

const featureList = [
  {
    title: "Разговор в реальном времени",
    description:
      "Подключайтесь к голосовой модели и ведите диалог без задержек и неловких пауз.",
  },
  {
    title: "Сценарии под настроение",
    description:
      "Выбирайте тон, стиль и голос. PersonaPlex поддерживает разные роли и темпы общения.",
  },
  {
    title: "Безопасное пространство",
    description:
      "Мы проектируем опыт так, чтобы вы чувствовали заботу и конфиденциальность.",
  },
];

const steps = [
  {
    title: "Создайте сценарий",
    description:
      "Опишите, о чем хотите поговорить, или выберите один из пресетов.",
  },
  {
    title: "Подключите микрофон",
    description:
      "Дайте доступ, и PersonaPlex мгновенно начнет слушать и отвечать.",
  },
  {
    title: "Проговорите важное",
    description:
      "Получите поддержку, ясность мыслей и мягкую обратную связь.",
  },
];

export const Landing = () => {
  return (
    <div className="flex flex-col gap-16">
      <section className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="space-y-6">
          <span className="inline-flex w-fit items-center rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-emerald-700">
            Новая версия PersonaPlex
          </span>
          <h1 className="text-4xl font-semibold leading-tight text-slate-900 md:text-5xl">
            Говорите свободно. Мы сохраним смысл, ритм и теплую поддержку.
          </h1>
          <p className="text-lg text-slate-600">
            PersonaPlex — это пространство для доверительных разговоров. Голосовые
            и текстовые диалоги, мягкие подсказки, гибкая настройка персонажа и
            безопасная среда.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/app"
              className="inline-flex items-center justify-center rounded-full bg-emerald-500 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-600"
            >
              Выговориться
            </Link>
            <Link
              to="/login"
              className="inline-flex items-center justify-center rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:text-slate-900"
            >
              Войти в кабинет
            </Link>
          </div>
          <div className="flex flex-wrap gap-6 text-sm text-slate-500">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              24/7 поддержка разговора
            </div>
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              Гибкие голоса и пресеты
            </div>
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              Конфиденциальные сессии
            </div>
          </div>
        </div>

        <div className="rounded-3xl border border-emerald-200 bg-white p-6 shadow-sm">
          <div className="space-y-4">
            <div className="rounded-2xl bg-emerald-50 p-4">
              <p className="text-sm font-semibold text-emerald-700">
                Быстрая сессия
              </p>
              <p className="text-sm text-slate-600">
                «Сегодня хочу проговорить, как устал и чего жду от недели».
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-4">
              <p className="text-sm font-semibold text-slate-900">
                PersonaPlex ответит
              </p>
              <p className="text-sm text-slate-600">
                «Я рядом. Давайте разберем, где источник напряжения и что можно
                упростить прямо сейчас».
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-4">
              <p className="text-sm font-semibold text-slate-900">
                Выберите голос
              </p>
              <div className="mt-2 flex flex-wrap gap-2 text-xs">
                {["NATURAL", "VARIETY", "CALM", "BRIGHT"].map((voice) => (
                  <span
                    key={voice}
                    className="rounded-full bg-slate-100 px-3 py-1 text-slate-600"
                  >
                    {voice}
                  </span>
                ))}
              </div>
            </div>
            <Link
              to="/app"
              className="inline-flex w-full items-center justify-center rounded-2xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              Запустить сессию
            </Link>
          </div>
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        {featureList.map((feature) => (
          <div
            key={feature.title}
            className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
          >
            <h3 className="text-lg font-semibold text-slate-900">
              {feature.title}
            </h3>
            <p className="mt-3 text-sm text-slate-600">{feature.description}</p>
          </div>
        ))}
      </section>

      <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <div className="flex flex-col gap-6">
          <div>
            <h2 className="text-2xl font-semibold text-slate-900">
              Как работает PersonaPlex
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Три шага, чтобы начать разговор и получить поддержку.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {steps.map((step, index) => (
              <div key={step.title} className="rounded-2xl bg-slate-50 p-5">
                <span className="text-xs font-semibold uppercase text-emerald-600">
                  Шаг {index + 1}
                </span>
                <h3 className="mt-2 text-lg font-semibold text-slate-900">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
