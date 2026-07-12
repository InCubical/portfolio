import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page Not Found",
};

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-start justify-center bg-[#ECEFF1] px-4 text-black/[0.87]">
      <div className="mx-auto mb-4 mt-[100px] w-full max-w-[360px] rounded-[3px] bg-white px-6 pb-4 pt-8 shadow-[0_1px_3px_rgba(0,0,0,0.12),0_1px_2px_rgba(0,0,0,0.24)]">
        <h2 className="mb-2 text-base font-bold text-[#ffa100]">404</h2>
        <h1 className="mb-4 text-[22px] font-light text-black/60">
          Page Not Found
        </h1>
        <p className="my-4 text-sm leading-[140%]">
          The specified file was not found on this website. Please check the URL
          for mistakes and try again.
        </p>
        <h3 className="mb-3 mt-4 text-base font-normal text-[#888]">
          Why am I seeing this?
        </h3>
        <p className="mb-6 mt-4 text-sm leading-[140%]">
          This page does not exist. Head back to the homepage to keep exploring.
        </p>
        <Link
          href="/"
          className="block rounded-[4px] bg-[#039be5] p-4 text-center uppercase text-white no-underline shadow-[0_1px_3px_rgba(0,0,0,0.12),0_1px_2px_rgba(0,0,0,0.24)]"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
}
