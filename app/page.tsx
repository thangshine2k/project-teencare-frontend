import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h2>Dashboard</h2>

      <ul>
        <li><Link href="/students">Students</Link></li>
        <li><Link href="/classes">Classes</Link></li>
      </ul>
    </div>
  );
}