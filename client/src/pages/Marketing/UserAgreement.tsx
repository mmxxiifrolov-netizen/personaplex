export const UserAgreement = () => {
  return (
    <div className="mx-auto max-w-3xl space-y-6">
      <div>
        <h1 className="text-3xl font-semibold text-slate-900">
          User Agreement
        </h1>
        <p className="mt-2 text-sm text-slate-500">
          Актуально для всех пользователей PersonaPlex.
        </p>
      </div>

      <section className="space-y-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-slate-900">
          1. Назначение сервиса
        </h2>
        <p className="text-sm text-slate-600">
          PersonaPlex предоставляет инструменты для голосовых и текстовых
          разговоров. Сервис не заменяет профессиональную медицинскую или
          психологическую помощь.
        </p>
      </section>

      <section className="space-y-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-slate-900">
          2. Ответственность пользователя
        </h2>
        <ul className="space-y-2 text-sm text-slate-600">
          <li>• Используйте сервис этично и уважительно.</li>
          <li>• Не передавайте конфиденциальные данные третьих лиц.</li>
          <li>• Соблюдайте требования законодательства.</li>
        </ul>
      </section>

      <section className="space-y-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-slate-900">
          3. Обновления условий
        </h2>
        <p className="text-sm text-slate-600">
          Мы можем обновлять условия соглашения. О существенных изменениях
          сообщаем заранее через интерфейс и email.
        </p>
      </section>
    </div>
  );
};
