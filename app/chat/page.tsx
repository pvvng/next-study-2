"use client";

import ChatInput from "@/components/chat-input";
import useChat from "@/lib/useChat";

export default function Chat() {
  const { data, payloads, loading, inputRef, clickHandler } = useChat();

  return (
    <>
      <div className="w-full min-h-[calc(100vh-128px)] h-auto p-10 relative">
        <div className="flex flex-col gap-10 items-end">
          {[...Array(payloads.length)].map((_, i) => (
            <div key={i}>
              <div className="max-w-96 bg-neutral-200 rounded-xl p-3">
                {payloads[i]}
              </div>
              {/* {data[i]} */}
            </div>
          ))}
        </div>
      </div>
      <div className="w-full p-10 sticky bottom-0 bg-white/80">
        <ChatInput clickHandler={clickHandler} inputRef={inputRef} />
      </div>
    </>
  );
}
