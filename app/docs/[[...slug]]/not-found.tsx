import React from "react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-4xl font-bold text-gray-800 text-center">
        404 - Documentation Not Found
      </h1>
      <p className="mt-3 text-base text-gray-600 text-center max-w-xl">
        The page you are looking for might have been removed, had its name
        changed, or is temporarily unavailable.
      </p>
      <Link
        href="/docs/introduction"
        className="mt-5 text-blue-500 hover:text-blue-700"
      >
        Go back to the homepage
      </Link>
    </div>
  );
}
