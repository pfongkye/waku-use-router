"use client";
import { Link, useRouter_UNSTABLE as useRouter } from "waku";

export default function HomePage() {
  const router = useRouter();

  return (
    <div>
      <title>Waku</title>
      <h1 className="text-4xl font-bold tracking-tight">Waku</h1>

      <div className="flex flex-col">
        <button
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
          onClick={() => {
            router.push("/about");
          }}
        >
          Use router to change page
        </button>

        <Link to="/about" className="mt-4 inline-block underline">
          About page
        </Link>
      </div>
    </div>
  );
}
