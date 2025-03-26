"use client";

import Button from "@/components/button";
import ChatInput from "@/components/chat-input";
import Input from "@/components/input";

export default function Home() {
  async function submitHandler(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const formobject = {
      gu: formData.get("gu")!.toString(),
      dong: formData.get("dong")!.toString(),
      item: formData.get("item")!.toString(),
    };

    // // GET -> URL parameter로 데이터 보내기
    // const params = new URLSearchParams(formobject);
    // await fetch(`http://endpoint?${params.toString()}`);

    // // POST -> body 안에 JSON화된 데이터 보내기
    // const response = await fetch("/be-endpoint", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(formobject),
    // });
    // const data = await response.json();
  }

  return (
    <div className="bg-white border-t border-l border-slate-200 rounded-tl-2xl p-5">
      <div className="w-full min-h-screen flex justify-between items-center">
        <div className="w-full flex flex-col gap-10 max-w-screen-sm mx-auto">
          {/* header */}
          <div className="flex flex-col gap-0.5">
            <h1 className="text-2xl font-semibold">창업 상담 챗봇</h1>
            <p className="text-sm text-slate-600">
              데이터 기반 분석 + GPT 대화형 상담까지 한번에!
            </p>
          </div>
          {/* form */}
          <form onSubmit={submitHandler} className="flex flex-col gap-3">
            <Input
              id="gu"
              name="gu"
              type="text"
              labelText="자치구"
              placeholder="예시) 용산구"
              required
            />
            <Input
              id="dong"
              name="dong"
              type="text"
              labelText="행정동"
              placeholder="예시) 한남동"
              required
            />
            <Input
              id="item"
              name="item"
              type="text"
              labelText="창업 업종"
              placeholder="예시) 카페, 편의점"
              required
            />
            <Button text="분석 시작" />
          </form>
        </div>
      </div>

      <ChatInput />
    </div>
  );
}
