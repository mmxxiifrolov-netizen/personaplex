const values = [
  {
    title: "Эмпатия",
    description:
      "Мы проектируем сценарии и интерфейсы так, чтобы разговор был теплым и бережным.",
  },
  {
    title: "Технологичность",
    description:
      "Сильная инженерная база позволяет поддерживать голосовые диалоги без задержек.",
  },
  {
    title: "Прозрачность",
    description:
      "Пользователь всегда понимает, как работают данные и какие есть настройки.",
  },
];

export const AboutUs = () => {
  return (
    <div className="space-y-10">
      <div className="max-w-2xl">
        <h1 className="text-3xl font-semibold text-slate-900">About Us</h1>
        <p className="mt-2 text-sm text-slate-600">
          PersonaPlex — команда инженеров и исследователей, создающих пространство
          для доверительных разговоров с искусственным интеллектом.
        </p>
      </div>

      <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <h2 className="text-2xl font-semibold text-slate-900">
          Наша миссия
        </h2>
        <p className="mt-3 text-sm text-slate-600">
          Мы хотим, чтобы каждый человек мог безопасно проговорить важное, найти
          поддержку и ясность. Поэтому мы соединяем голос, текст и внимательные
          сценарии в едином опыте.
        </p>
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        {values.map((value) => (
          <div
            key={value.title}
            className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
          >
            <h3 className="text-lg font-semibold text-slate-900">
              {value.title}
            </h3>
            <p className="mt-3 text-sm text-slate-600">{value.description}</p>
          </div>
        ))}
      </section>
    </div>
  );
};
