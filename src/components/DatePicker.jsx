export default function DatePicker({ date, setDate }) {
	return (
	  <div className="mb-4">
		<label className="block text-sm text-muted mb-1" htmlFor="date-picker">
		  Select Date
		</label>
		<input
		  id="date-picker"
		  type="date"
		  value={date}
		  onChange={(e) => setDate(e.target.value)}
		  className="bg-[--color-card] text-[--color-light] border border-[--color-muted] p-2 rounded-lg w-full outline-none focus:ring-2 focus:ring-[--color-accent] transition"
		/>
	  </div>
	);
  }
  