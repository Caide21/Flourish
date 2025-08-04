// pages/index.js

import Layout from '@/components/Layout';
import FlourishCard from '@/components/FlourishCard';
import Link from 'next/link';

export default function Home() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-[70vh] flex flex-col justify-center items-center text-center px-4 overflow-hidden bg-gradient-radial from-white via-[#e6f2ef] to-white">
        <div className="max-w-2xl z-10">
          <h1 className="text-5xl md:text-6xl font-serif font-semibold mb-4">FLOURISH</h1>
          <p className="text-lg md:text-xl text-gray-700 font-light">
            Sensory Well-Being Coaching and Training
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="px-6 py-16 max-w-3xl mx-auto space-y-6 text-base leading-relaxed text-gray-800">
        <p>
            You were born with a sensory system — a quiet, brilliant guide running in the background of your life.
        </p>
        <p>
            When it works well, you adapt with ease. You feel grounded. You can think clearly, connect deeply, and respond to the world with calm confidence.
        </p>
        <p>
            But when that system becomes overwhelmed or out of sync, everything else feels harder — emotions, work, relationships, even daily tasks.
        </p>
        <p>
            At Flourish, we help you reconnect with your sensory strengths so you can regulate your nervous system, feel more like yourself again, and thrive in every area of life.
        </p>
      </section>


      {/* Services Preview */}
      <section className="px-6 py-12 max-w-5xl mx-auto space-y-8">
        <h2 className="text-2xl font-serif font-semibold text-center">How We Help</h2>

        <div className="grid md:grid-cols-2 gap-6">
          <FlourishCard
            title="Coaching"
            description="1-on-1 or group coaching to help you build awareness, regulate with ease, and align your sensory world with your daily life."
          />
          <FlourishCard
            title="Training Seminars"
            description="Workshops for schools, clinics, and teams looking to build regulation strategies rooted in practical sensory science."
          />
        </div>

        <div className="flex justify-center mt-6">
          <Link
            href="/services"
            className="bg-primary text-white px-6 py-3 rounded-sm text-sm font-medium hover:bg-black/80 transition"
          >
            View All Services
          </Link>
        </div>
      </section>
    </Layout>
  );
}
