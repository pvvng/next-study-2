import { useRef, useState } from "react";

export default function useChat() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [data, setData] = useState<null>(null);
  const [payloads, setPayloads] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  async function clickHandler() {
    setLoading(true);

    if (!inputRef.current) {
      return alert("메시지 확인에 실패했습니다.");
    }

    const chatPayload = inputRef.current.value;
    setPayloads((pre) => [...pre, chatPayload]);

    // // GET -> URL parameter로 데이터 보내기
    // const params = new URLSearchParams(formobject);
    // const response = await fetch(`http://endpoint?${params.toString()}`);
    // const data: Data = await response.json();
    // setData(data);

    // // POST -> body 안에 JSON화된 데이터 보내기
    // const response = await fetch("/be-endpoint", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(formobject),
    // });
    // const data = await response.json();
    // setData(data);
    setLoading(false);
    inputRef.current.value = "";
  }

  return { data, payloads, loading, inputRef, clickHandler };
}
