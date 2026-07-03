import { useState } from "react";

const ContactForm = ({ onSubmit, loading }) => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  const set = (field) => (e) =>
    setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const valid =
    form.firstName.trim() && form.email.trim() && form.phone.trim();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!valid || loading) return;
    onSubmit(form);
  };

  const inputClass =
    "w-full rounded-xl border border-ka-sand bg-white px-4 py-3 text-sm text-ka-primary placeholder:text-ka-muted/50 outline-none transition focus:border-ka-accent focus:ring-2 focus:ring-ka-accent/20";

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-ka-muted">
            First name *
          </label>
          <input
            type="text"
            value={form.firstName}
            onChange={set("firstName")}
            placeholder="Jane"
            required
            className={inputClass}
          />
        </div>
        <div>
          <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-ka-muted">
            Last name
          </label>
          <input
            type="text"
            value={form.lastName}
            onChange={set("lastName")}
            placeholder="Doe"
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-ka-muted">
          Email *
        </label>
        <input
          type="email"
          value={form.email}
          onChange={set("email")}
          placeholder="jane@example.com"
          required
          className={inputClass}
        />
      </div>

      <div>
        <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-ka-muted">
          Phone *
        </label>
        <input
          type="tel"
          value={form.phone}
          onChange={set("phone")}
          placeholder="(555) 123-4567"
          required
          className={inputClass}
        />
      </div>

      <button
        type="submit"
        disabled={!valid || loading}
        className="btn-primary w-full py-3.5 disabled:cursor-not-allowed disabled:opacity-50"
      >
        {loading ? "Booking…" : "Confirm Booking"}
      </button>
    </form>
  );
};

export default ContactForm;
