"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation"; // for client-side navigation

const API = "http://localhost:8080";

type SampleEntity = { id: number; name: string };

export default function Home() {
  const router = useRouter();

  const [samples, setSamples] = useState<SampleEntity[]>([]);
  const [name, setName] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const fetchSamples = async () => {
    const res = await fetch(`${API}/sample`);
    const data = await res.json();
    console.log("Fetched samples:", data); // 👈 check the structure

    if (Array.isArray(data)) {
      setSamples(data);
    } else {
      console.error("Unexpected data format:", data);
      setSamples([]); // fallback to empty array
    }
  };

  const createSample = async () => {
    if (!name.trim()) return;
    await fetch(`${API}/sample`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name }),
    });
    setName("");
    fetchSamples();
  };

  useEffect(() => {
    fetchSamples();
  }, []);

  // Navigation handler for dropdown
  const handleNavigate = (path: string) => {
    setDropdownOpen(false);
    router.push(path);
  };

  return (
    <div className="p-8 font-sans max-w-4xl mx-auto">
      {/* Breadcrumbs */}
      <nav className="mb-6 text-sm text-gray-600" aria-label="Breadcrumb">
        <ol className="list-reset flex">
          <li>
            <button
              onClick={() => router.push("/")}
              className="text-blue-600 hover:underline"
            >
              Home
            </button>
          </li>
        </ol>
      </nav>

      {/* Dropdown for navigation */}
      <div className="relative mb-6 inline-block text-left">
        <button
          onClick={() => setDropdownOpen((open) => !open)}
          className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none"
          id="menu-button"
          aria-expanded={dropdownOpen}
          aria-haspopup="true"
        >
          Navigate
          <svg
            className="-mr-1 ml-2 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06.02L10 11.293l3.71-4.06a.75.75 0 111.08 1.04l-4.25 4.65a.75.75 0 01-1.08 0l-4.25-4.65a.75.75 0 01.02-1.06z"
              clipRule="evenodd"
            />
          </svg>
        </button>

        {dropdownOpen && (
          <div
            className="origin-top-left absolute left-0 mt-2 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-10"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="menu-button"
            tabIndex={-1}
          >
            <div className="py-1" role="none">
              <button
                onClick={() => handleNavigate("/medications")}
                className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100 w-full text-left"
                role="menuitem"
                tabIndex={-1}
              >
                Medications
              </button>
              <button
                onClick={() => handleNavigate("/assignments")}
                className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100 w-full text-left"
                role="menuitem"
                tabIndex={-1}
              >
                Assignments
              </button>
              <button
                onClick={() => handleNavigate("/patients")}
                className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100 w-full text-left"
                role="menuitem"
                tabIndex={-1}
              >
                Patients
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Main content */}
      <h1 className="text-2xl font-bold mb-4">Sample Entity Manager</h1>

      <div className="flex gap-2 mb-4">
        <input
          className="border px-2 py-1 rounded w-64"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button
          onClick={createSample}
          className="bg-blue-600 text-white px-4 py-1 rounded"
        >
          Add
        </button>
      </div>

      <ul className="space-y-1">
        {samples.map((s) => (
          <li key={s.id} className="border-b pb-1">
            #{s.id} - {s.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
