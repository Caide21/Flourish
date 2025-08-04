// components/FlourishCard.jsx

export default function FlourishCard({ title, description }) {
  return (
    <div className="bg-white border border-gray-300 rounded-sm shadow-sm p-6 hover:shadow-md transition duration-300">
      <h3 className="text-lg font-serif font-semibold mb-2 text-gray-900">{title}</h3>
      <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
}
