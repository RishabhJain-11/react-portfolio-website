import { useState } from 'react';

export default function Header() {
  const [title, setTitle] = useState('Rishabh Jain');

  return (
    <h1
      className="text-xl font-bold transition-all duration-300 hover:text-gray-100"
      onMouseEnter={() => setTitle('RmJ')}
      onMouseLeave={() => setTitle('Rishabh Jain')}
    >
      {title}
    </h1>
  );
}
