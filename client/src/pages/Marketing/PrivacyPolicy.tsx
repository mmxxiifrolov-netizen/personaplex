export const PrivacyPolicy = () => {
  return (
    <div className="mx-auto max-w-3xl space-y-6">
      <div>
        <h1 className="text-3xl font-semibold text-slate-900">
          Privacy Policy
        </h1>
        <p className="mt-2 text-sm text-slate-500">
          Последнее обновление: 20 марта 2025
        </p>
      </div>

      <section className="space-y-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-slate-900">
          1. Какие данные мы собираем
        </h2>
        <p className="text-sm text-slate-600">
          PersonaPlex обрабатывает минимальный набор данных, необходимых для
          работы сервиса: данные сессии, техническую информацию о браузере и
          выбранные пользователем настройки.
        </p>
      </section>

      <section className="space-y-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-slate-900">
          2. Как мы используем информацию
        </h2>
        <ul className="space-y-2 text-sm text-slate-600">
          <li>• Улучшаем качество диалогов и персонализацию.</li>
          <li>• Обеспечиваем безопасность и стабильность сервиса.</li>
          <li>• Выполняем юридические обязательства и запросы поддержки.</li>
        </ul>
      </section>

      <section className="space-y-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-slate-900">
          3. Контроль и удаление
        </h2>
        <p className="text-sm text-slate-600">
          Вы можете запросить удаление истории разговоров и экспорт персональных
          данных, написав в поддержку PersonaPlex.
        </p>
      </section>
    </div>
  );
};
