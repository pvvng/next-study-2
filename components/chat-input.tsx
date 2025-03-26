import { PaperAirplaneIcon } from "@heroicons/react/24/outline";

export default function ChatInput() {
  return (
    <div className="sticky bottom-10">
      <div className="relative mt-6 bg-white/50">
        <input
          className="block w-full rounded-2xl ring ring-blue-500 bg-transparent py-3 pl-6 pr-20 text-base/6 
          text-neutral-950 transition focus: focus:ring-3 focus:outline-none
          placeholder:text-neutral-500 focus:border-none"
          placeholder="질문을 자유롭게 입력하세요! ex) 이 지역에서 카페하면 괜찮을까?"
        />
        <div className="absolute inset-y-1 right-1 flex justify-end">
          <button
            type="submit"
            aria-label="Submit"
            className="mr-3 h-full flex justify-center items-center transition-colors hover:*:text-blue-400"
          >
            <PaperAirplaneIcon className="size-6" />
          </button>
        </div>
      </div>
    </div>
  );
}
