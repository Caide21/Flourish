// pages/about.js

import Layout from '@/components/Layout';

export default function About() {
  return (
    <Layout title="About – Flourish">
      <section className="space-y-8 max-w-3xl mx-auto text-base leading-relaxed text-gray-800">
        <h1 className="text-3xl font-serif font-semibold mb-4">About Flourish</h1>

        <p>
          Flourish was created to help people reconnect with their most fundamental internal system: their sensory regulation system.
        </p>

        <p>
          When our senses receive and process information effectively, we’re able to stay grounded, adjust to change, and make better decisions. But when that system is disrupted, we often feel overwhelmed, emotionally reactive, or exhausted by everyday demands.
        </p>

        <p>
          Our approach helps individuals understand their personal sensory patterns and develop strategies that promote balance, clarity, and sustainable performance.
        </p>

        <p>
          Through practical coaching and structured training, we guide clients in improving their self-regulation across four key levels:
        </p>

        <ul className="list-disc list-inside text-gray-700">
          <li>Sensory Regulation</li>
          <li>Emotional Regulation</li>
          <li>Behavioral Regulation</li>
          <li>Cognitive Regulation</li>
        </ul>

        <p>
          Whether you're an individual seeking personal tools, a parent navigating family dynamics, or a professional supporting others—Flourish provides the structure and insight to help you move forward with confidence.
        </p>

        <div className="mt-6 p-4 bg-gray-100 border-l-4 border-black rounded-sm">
          <p className="font-medium mb-1">Our philosophy is simple:</p>
          <p>Better regulation leads to better performance. And with the right tools, it becomes effortless.</p>
        </div>
      </section>
    </Layout>
  );
}
