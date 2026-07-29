import { useState, FormEvent } from "react";

/**
 * KABCO — Contact Form Section (Dark)
 * Place in: src/components/contact/ContactForm.tsx
 *
 * Wire up `handleSubmit` to your backend / form service (e.g. an API
 * route, Formspree, EmailJS, etc.) — it currently just simulates a
 * submit so you can see the success state.
 *
 * Fonts (load once globally):
 * <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@500;600;700&family=Poppins:wght@300;400;500;600&display=swap" rel="stylesheet">
 */

type FormState = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  productInterest: string;
  message: string;
};

const INITIAL_STATE: FormState = {
  name: "",
  email: "",
  phone: "",
  subject: "",
  productInterest: "",
  message: "",
};

type Status = "idle" | "submitting" | "success" | "error";

export default function Contact() {
  const [form, setForm] = useState<FormState>(INITIAL_STATE);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [status, setStatus] = useState<Status>("idle");

  const update = (field: keyof FormState) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const validate = (): boolean => {
    const next: Partial<Record<keyof FormState, string>> = {};
    if (!form.name.trim()) next.name = "Full name is required.";
    if (!form.email.trim()) {
      next.email = "Email address is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      next.email = "Enter a valid email address.";
    }
    if (!form.phone.trim()) next.phone = "Phone number is required.";
    if (!form.subject.trim()) next.subject = "Subject is required.";
    if (!form.message.trim()) next.message = "Please add a message.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("submitting");
    try {
      // TODO: replace with your real submit call, e.g.
      // await fetch("/api/contact", { method: "POST", body: JSON.stringify(form) });
      await new Promise((resolve) => setTimeout(resolve, 900));
      setStatus("success");
      setForm(INITIAL_STATE);
    } catch {
      setStatus("error");
    }
  };

  return (
    <section className="kb-cform">
      <div className="kb-cform-grid" aria-hidden="true" />

      <div className="kb-cform-inner">
        <div className="kb-cform-head">
          <span className="kb-cform-eyebrow">Send an Enquiry</span>
          <h2 className="kb-cform-title">Get in Touch</h2>
          <div className="kb-cform-rule" />
          <p className="kb-cform-sub">
            Fill out the form below and our team will get back to you as
            soon as possible.
          </p>
        </div>

        <form className="kb-cform-form" onSubmit={handleSubmit} noValidate>
          <div className="kb-cform-row">
            <div className="kb-field">
              <label htmlFor="name">Full Name</label>
              <input
                id="name"
                type="text"
                value={form.name}
                onChange={update("name")}
                placeholder="Your full name"
                className={errors.name ? "kb-field-error" : ""}
              />
              {errors.name && <span className="kb-error-msg">{errors.name}</span>}
            </div>

            <div className="kb-field">
              <label htmlFor="email">Email Address</label>
              <input
                id="email"
                type="email"
                value={form.email}
                onChange={update("email")}
                placeholder="you@example.com"
                className={errors.email ? "kb-field-error" : ""}
              />
              {errors.email && <span className="kb-error-msg">{errors.email}</span>}
            </div>
          </div>

          <div className="kb-cform-row">
            <div className="kb-field">
              <label htmlFor="phone">Phone Number</label>
              <input
                id="phone"
                type="tel"
                value={form.phone}
                onChange={update("phone")}
                placeholder="+91 00000 00000"
                className={errors.phone ? "kb-field-error" : ""}
              />
              {errors.phone && <span className="kb-error-msg">{errors.phone}</span>}
            </div>

            <div className="kb-field">
              <label htmlFor="subject">Subject</label>
              <input
                id="subject"
                type="text"
                value={form.subject}
                onChange={update("subject")}
                placeholder="What's this regarding?"
                className={errors.subject ? "kb-field-error" : ""}
              />
              {errors.subject && <span className="kb-error-msg">{errors.subject}</span>}
            </div>
          </div>

          <div className="kb-field">
            <label htmlFor="productInterest">
              Product Interest <span className="kb-optional">(Optional)</span>
            </label>
            <select
              id="productInterest"
              value={form.productInterest}
              onChange={update("productInterest")}
            >
              <option value="">Select a product</option>
              <option value="starters">Submersible Pump Starters</option>
              <option value="cables">Submersible Pump Cables</option>
              <option value="both">Both / Not Sure</option>
            </select>
          </div>

          <div className="kb-field">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              rows={6}
              value={form.message}
              onChange={update("message")}
              placeholder="Tell us a bit about what you need..."
              className={errors.message ? "kb-field-error" : ""}
            />
            {errors.message && <span className="kb-error-msg">{errors.message}</span>}
          </div>

          {status === "success" && (
            <div className="kb-form-status kb-form-status--success">
              Thank you — your enquiry has been sent. We'll be in touch soon.
            </div>
          )}
          {status === "error" && (
            <div className="kb-form-status kb-form-status--error">
              Something went wrong. Please try again in a moment.
            </div>
          )}

          <button type="submit" className="kb-btn kb-btn-gold" disabled={status === "submitting"}>
            {status === "submitting" ? "Sending..." : "Send Enquiry"}
            {status !== "submitting" && (
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.2">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            )}
          </button>
        </form>
      </div>

      <style>{`
        :root {
          --kb-black:#111111;
          --kb-gold:#C8A24A;
          --kb-gold-light:#dcbd77;
          --kb-white:#FFFFFF;
        }

        .kb-cform {
          position: relative;
          background: var(--kb-black);
          font-family: 'Poppins', sans-serif;
          overflow: hidden;
        }

        .kb-cform-grid {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(200,162,74,0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(200,162,74,0.05) 1px, transparent 1px);
          background-size: 56px 56px;
          mask-image: radial-gradient(ellipse 70% 70% at 50% 20%, black 30%, transparent 80%);
          -webkit-mask-image: radial-gradient(ellipse 70% 70% at 50% 20%, black 30%, transparent 80%);
        }

        .kb-cform-inner {
          position: relative;
          z-index: 1;
          max-width: 760px;
          margin: 0 auto;
          padding: 100px 40px;
        }

        .kb-cform-head {
          text-align: center;
          margin-bottom: 50px;
        }

        .kb-cform-eyebrow {
          display: inline-block;
          font-size: 12.5px;
          font-weight: 600;
          letter-spacing: 2.4px;
          text-transform: uppercase;
          color: var(--kb-gold);
          margin-bottom: 16px;
        }

        .kb-cform-title {
          font-family: 'Cinzel', serif;
          font-weight: 600;
          font-size: 32px;
          color: var(--kb-white);
          margin: 0 0 20px;
        }

        .kb-cform-rule {
          width: 56px;
          height: 2px;
          background: var(--kb-gold);
          margin: 0 auto 22px;
        }

        .kb-cform-sub {
          font-size: 15px;
          line-height: 1.7;
          color: #999;
          font-weight: 300;
          margin: 0;
        }

        .kb-cform-form {
          display: flex;
          flex-direction: column;
          gap: 22px;
        }

        .kb-cform-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 22px;
        }

        .kb-field {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .kb-field label {
          font-size: 12.5px;
          font-weight: 600;
          letter-spacing: .6px;
          text-transform: uppercase;
          color: #ccc;
        }

        .kb-optional {
          font-weight: 400;
          text-transform: none;
          color: #777;
          letter-spacing: 0;
        }

        .kb-field input,
        .kb-field select,
        .kb-field textarea {
          font-family: 'Poppins', sans-serif;
          font-size: 14.5px;
          color: var(--kb-white);
          padding: 13px 16px;
          border: 1.5px solid #2c2c2c;
          border-radius: 2px;
          background: #1a1a1a;
          outline: none;
          transition: border-color .2s ease, box-shadow .2s ease, background .2s ease;
          resize: vertical;
        }

        .kb-field select option {
          background: #1a1a1a;
          color: var(--kb-white);
        }

        .kb-field input::placeholder,
        .kb-field textarea::placeholder {
          color: #666;
        }

        .kb-field input:focus,
        .kb-field select:focus,
        .kb-field textarea:focus {
          border-color: var(--kb-gold);
          background: #1e1c17;
          box-shadow: 0 0 0 3px rgba(200,162,74,.14);
        }

        .kb-field-error {
          border-color: #d9645f !important;
        }

        .kb-error-msg {
          font-size: 12px;
          color: #e2827d;
        }

        .kb-form-status {
          padding: 14px 18px;
          border-radius: 2px;
          font-size: 13.5px;
          font-weight: 500;
        }
        .kb-form-status--success {
          background: rgba(58,125,58,.15);
          color: #8fce8f;
          border: 1px solid rgba(58,125,58,.4);
        }
        .kb-form-status--error {
          background: rgba(177,58,58,.15);
          color: #e2827d;
          border: 1px solid rgba(177,58,58,.4);
        }

        .kb-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 16px 34px;
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 1.2px;
          text-transform: uppercase;
          border-radius: 2px;
          cursor: pointer;
          border: 1.5px solid var(--kb-gold);
          background: var(--kb-gold);
          color: var(--kb-black);
          transition: transform .25s ease, box-shadow .25s ease, background .25s ease, opacity .2s ease;
          align-self: flex-start;
        }
        .kb-btn:hover:not(:disabled) {
          background: var(--kb-gold-light);
          border-color: var(--kb-gold-light);
          transform: translateY(-2px);
          box-shadow: 0 10px 22px rgba(200,162,74,.3);
        }
        .kb-btn:disabled {
          opacity: .6;
          cursor: not-allowed;
        }

        @media (max-width: 640px) {
          .kb-cform-inner { padding: 70px 24px; }
          .kb-cform-row { grid-template-columns: 1fr; gap: 22px; }
          .kb-btn { width: 100%; }
        }
      `}</style>
    </section>
  );
}