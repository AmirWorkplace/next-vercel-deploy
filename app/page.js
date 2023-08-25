import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <Link href="/">Home</Link>
        <br/>
      <Link href="/about">about</Link>
        <br/>
      <Link href="/contact">contact</Link>
    </main>
  )
}
