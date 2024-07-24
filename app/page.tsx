import Link from 'next/link'
import { getServerSession } from 'next-auth'
import ProductCard from './components/ProductCard'
import { authOptions } from './api/auth/authOptions'

export default async function Home() {
  const session = await getServerSession(authOptions)

  return (
    <main className='relative h-screen'>
      <h1>Hello { session && <span>{ session.user!.name }</span> }</h1>
      <Link href='/users'>Users</Link>
      <ProductCard />
    </main>
  )
}
