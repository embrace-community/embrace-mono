import Link from "next/link";
import React from "react";

interface CallToActionProps {
  label: string;
}

export default function CallToAction({ label }: CallToActionProps) {
  return (
    <Link target={"_blank"} href={`https://airtable.com/shrI1lJQCPsAujbVc`}>
      <button className="p-4 md:p-6 drop-shadow-2xl text-white bg-gradient-to-r from-violet-600 to-indigo-500  hover:bg-gradient-to-r hover:from-violet-700 hover:to-indigo-600 rounded-md">
        {label}
      </button>
    </Link>
  );
}
