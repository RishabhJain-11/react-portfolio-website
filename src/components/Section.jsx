import React from "react";

export default function Section({ title, items }) {
  return (
    <div className="mt-6">
      <h2 className="text-lg font-semibold">{title}</h2>
      <ul className="mt-2 space-y-2 list-disc list-inside">
        {items.map((item, index) => (
          <li key={index}>
            <a
              href={item.link}
              className="text-gray-400 hover:text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
