'use client'
import { useSession } from 'next-auth/react'
import Link from 'next/link'
import React from 'react'

const NavBar = () => {
  const { status, data: session } = useSession()

  return (
    <nav className='flex bg-slate-200 p-3 space-x-3'>
        <Link href='/' className='mr-5'>NEXT.JS</Link>
        <Link className='mr-5' href='/users'>Users</Link>
        { status === 'loading' && <div>Loading...</div> }
        { status === 'authenticated' && 
          <div>
            { session.user.name }
            <Link href='/api/auth/signout' className='ml-3'>Signout</Link>
          </div>}
        { status === 'unauthenticated' && <Link href='/api/auth/signin'>Signin</Link> }
    </nav>
  )
}

export default NavBar