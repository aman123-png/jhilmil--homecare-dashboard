export default function Card({ children, className = "" }) {
  return (
    <div
      className={`rounded-xl shadow p-6 bg-blue dark:bg-gray-900 ${className}`}
    >
      {children}
    </div>
  );
}
