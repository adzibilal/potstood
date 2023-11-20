'use client'
import { Button } from '@/components/ui/button'
import React from 'react'
import toast from 'react-hot-toast'
import { MobileSidebar } from './mobile-sidebar'
import { signOut, useSession } from 'next-auth/react'
import Image from 'next/image'

const Navbar = () => {
    const { data: session } = useSession()
    return (
        <nav className='text-zinc-900 p-3 flex items-center justify-between px-6 mt-5 rounded-xl bg-white'>
            <div className='flex items-center gap-3'>
                <MobileSidebar />
                <div className='flex items-center gap-2'>
                    {/* @ts-ignore */}
                    {session?.user?.userData.avatar ? (
                        <Image
                            // @ts-ignore
                            src={session.user.userData.avatar}
                            width={100}
                            height={100}
                            alt=''
                            className='w-10 h-10 rounded-full object-cover'
                        />
                    ) : (
                        <div className='w-10 h-10 rounded-full object-cover bg-zinc-300'></div>
                    )}
                    <div className='max-sm:hidden'>
                        Hello, {session?.user?.name}
                    </div>
                </div>
            </div>
            <div className='flex items-center gap-2'>
                <Button
                    variant='secondary'
                    onClick={() => {
                        signOut()
                    }}>
                    Logout
                </Button>
            </div>
        </nav>
    )
}

export default Navbar
