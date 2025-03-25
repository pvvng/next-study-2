export default function Sidebar() {
  return (
    <div className="w-full bg-slate-50 min-h-screen p-5 sticky top-0 border-r border-slate-200 shadow-md">
      <div className="flex flex-col gap-10">
        {/* header */}
        <div className="flex justify-between items-center">
          <div className="flex gap-2 items-center">
            <div className="size-8 bg-slate-600 rounded-full" />
            <p className="text-xl font-semibold">LOGO</p>
          </div>
          <p>BTN</p>
        </div>
        {/* lists */}
        <ul className="flex flex-col gap-3">
          <li className="p-3 bg-white flex gap-3 items-center rounded-xl shadow-md">
            <p className="size-6 flex justify-center items-center text-2xl bg-blue-500 rounded-md">
              +
            </p>
            <p>AI CHAT</p>
          </li>
        </ul>
      </div>
    </div>
  );
}
