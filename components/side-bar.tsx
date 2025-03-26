import {
  PlusCircleIcon,
  PresentationChartBarIcon,
} from "@heroicons/react/24/outline";

export default function Sidebar() {
  return (
    <div className="w-full min-h-screen p-5 sticky top-0 border-r border-slate-200">
      <div className="flex flex-col gap-10">
        {/* header */}
        <div className="flex gap-2 items-center">
          <div className="size-8 bg-slate-600 rounded-full" />
          <p className="text-xl font-semibold">LOGO</p>
        </div>
        {/* lists */}
        <ul className="flex flex-col gap-3">
          <li className="p-3 bg-white flex gap-3 items-center rounded-xl shadow">
            <PresentationChartBarIcon className="size-6 text-blue-500" />
            <p className="font-semibold">AI CHAT</p>
          </li>
        </ul>
      </div>
    </div>
  );
}
