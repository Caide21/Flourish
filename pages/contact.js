// pages/contact.js

import Layout from '@/components/Layout';

export default function Contact() {
  return (
    <Layout title="Contact – Flourish">
      <section className="max-w-2xl mx-auto space-y-8">
        <h1 className="text-3xl font-serif font-semibold">Contact Us</h1>

        <p className="text-base leading-relaxed">
          Ready to take the first step? Whether you’re seeking a quote or want to join a structured program, we’d love to hear from you.
          Fill out the form below and we’ll be in touch shortly.
        </p>

        <form className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              required
              className="mt-1 block w-full rounded-md border border-gray-300 bg-gray-50 shadow-sm focus:border-theme-accent focus:ring-theme-accent"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              required
              className="mt-1 block w-full rounded-md border border-gray-300 bg-gray-50 shadow-sm focus:border-theme-accent focus:ring-theme-accent"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Message</label>
            <textarea
              name="message"
              rows="5"
              required
              className="mt-1 block w-full rounded-md border border-gray-300 bg-gray-50 shadow-sm focus:border-theme-accent focus:ring-theme-accent"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-primary text-white px-6 py-2 rounded-sm hover:bg-black/80 transition"
          >
            Send Message
          </button>
        </form>

        <div className="pt-6 text-sm text-theme-muted">
          📩 Prefer email? Reach out at: <span className="underline">[insert-email@domain.com]</span>
        </div>
      </section>
    </Layout>
  );
}
