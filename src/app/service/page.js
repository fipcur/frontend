import Link from 'next/link'

export default function Service() {
  return (
    <div>
        <center><Link href="/">Home</Link> | <Link href="/about">About</Link> | <Link href="/contact">Contact</Link> | <Link href="/service">Service</Link> </center>
        <center><h1>About Page</h1></center>
        <p>This is the about page content.</p>
    </div>
  );
}
