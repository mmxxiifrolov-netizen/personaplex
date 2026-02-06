const plans = [
  {
    name: "Starter",
    price: "0 ₽",
    description: "Для первых разговоров и знакомства с PersonaPlex.",
    perks: [
      "Базовые пресеты",
      "Ограничение по длительности сессии",
      "Поддержка по email",
    ],
  },
  {
    name: "Balance",
    price: "990 ₽ / мес",
    description: "Оптимальный выбор для регулярных разговоров.",
    perks: [
      "Неограниченные сессии",
      "Приоритетные голоса",
      "Сохранение сценариев",
    ],
  },
  {
    name: "Pro",
    price: "2 490 ₽ / мес",
    description: "Для команд и консультантов.",
    perks: [
      "Совместные сценарии",
      "Аналитика диалогов",
      "Персональный менеджер",
    ],
  },
];

export const Prices = () => {
  return (
    <div className="space-y-10">
      <div className="max-w-2xl">
        <h1 className="text-3xl font-semibold text-slate-900">Prices</h1>
        <p className="mt-2 text-sm text-slate-600">
          Прозрачные планы для личного и профессионального общения.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
          >
            <h2 className="text-lg font-semibold text-slate-900">
              {plan.name}
            </h2>
            <p className="mt-2 text-2xl font-semibold text-emerald-600">
              {plan.price}
            </p>
            <p className="mt-2 text-sm text-slate-600">{plan.description}</p>
            <ul className="mt-4 space-y-2 text-sm text-slate-600">
              {plan.perks.map((perk) => (
                <li key={perk}>• {perk}</li>
              ))}
            </ul>
            <button
              type="button"
              className="mt-6 inline-flex w-full items-center justify-center rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-700 transition hover:bg-emerald-100"
            >
              Выбрать план
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
