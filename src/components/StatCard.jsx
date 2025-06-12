export default function StatCard({ title, value }) {
    return (
      <div className="bg-card text-light p-4 rounded-xl shadow flex flex-col items-center justify-center">
        <p className="text-sm text-muted">{title}</p>
        <p className="text-2xl font-bold">{value}</p>
      </div>
    );
  }
  