// pages/services.js

import Layout from '@/components/Layout';
import FlourishCard from '@/components/FlourishCard';

export default function Services() {
  return (
    <Layout title="Services – Flourish">
      <section className="max-w-4xl mx-auto space-y-10 text-base leading-relaxed">
        <h1 className="text-3xl font-serif font-semibold">Our Services</h1>

        <p>
          Flourish offers both personalized coaching and engaging training seminars designed to improve self-regulation
          through practical, evidence-informed strategies. Our approach is grounded in sensory awareness and tailored to
          your unique needs.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          <FlourishCard
            title="Coaching"
            description="Personalized coaching for individuals or groups, focusing on sensory awareness and practical regulation strategies."
          />
          <FlourishCard
            title="Training Seminars"
            description="Interactive seminars tailored for educators, corporate teams, or healthcare providers seeking to improve self-regulation."
          />
        </div>

        <p>
          We serve individuals, companies, and communities seeking to improve emotional, cognitive, and behavioral
          self-regulation. Some of our clients include:
        </p>

        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li><strong>Parents:</strong> Building emotional and behavioral regulation within the family unit.</li>
          <li><strong>Corporate Teams:</strong> Improving team performance and cognitive clarity through regulation strategies.</li>
          <li><strong>Educators:</strong> Managing classroom demands and supporting student development.</li>
          <li><strong>Neurodivergent Individuals:</strong> Including ADHD, Autism, SPD, and Dyspraxia diagnoses.</li>
          <li><strong>Clinicians:</strong> Integrating regulation tools into professional practice.</li>
        </ul>

        <div className="mt-8 p-4 bg-gray-100 border-l-4 border-black rounded-sm">
          <p className="font-medium mb-1">Interested?</p>
          <p>
            Contact us for individualized quotes or to join one of our structured programs.
          </p>
        </div>
      </section>
    </Layout>
  );
}
