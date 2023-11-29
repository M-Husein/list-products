// import Image from 'next/image'
import { ListProducts } from '@/components/ListProducts'

export default function Home() {
  return (
    <main className="min-h-screen">
      <ListProducts />
    </main>
  )
}

/*
<Image
  className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
  src="/next.svg"
  alt="Next.js Logo"
  width={180}
  height={37}
  priority
/>
*/