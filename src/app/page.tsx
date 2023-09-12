import Image from 'next/image'
import Link from 'next/link'
export default function Home() {
  return (
    <main>
      <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <Image
          src="/profile.jpeg"
          width={500}
          height={500}
          alt="Picture of the owner"
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-5xl font-bold">Alpcan KÖSE</h1>
          <p className="py-6"> Welcome to my personal website. You can learn about my projects and access my cv.</p>
          <Link className="btn btn-primary" href="/cv.pdf" locale="true">Hire Me?</Link>
        </div>
      </div>
    </div>
    </main>
  )
}
