"use client";

import { useFormStatus } from "react-dom";

export default function Button({ text }: { text: string }) {
  const { pending } = useFormStatus();

  return (
    <button
      disabled={pending}
      className="w-full h-10 mt-3 cursor-pointer bg-slate-300 hover:bg-slate-200 text-black transition-colors 
    font-semibold rounded-lg shadow-md disabled:bg-neutral-500 dark:bg-neutral-100 dark:hover:bg-neutral-50 dark:text-black"
    >
      {!pending ? text : "로딩 중"}
    </button>
  );
}
