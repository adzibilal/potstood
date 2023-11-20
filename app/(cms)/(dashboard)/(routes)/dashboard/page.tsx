'use client'
import { useSession } from 'next-auth/react'
import Image from 'next/image'
import React, { useEffect } from 'react'

const DashboardPage = () => {
    const { data: session } = useSession()

    useEffect(() => console.debug(session, 'session'), [session])
    return (
        <div className='bg-white max-xl:ml-5 mr-5 rounded-xl'>
            {session && (
                <div className='text-center'>
                    <h1 className='text-2xl font-bold'>
                        Welcome to your dashboard
                    </h1>
                    <div className='text-zinc-600 text-sm'>
                        You are logged in as {session?.user?.email}
                    </div>

                    <div className='text-zinc-600 text-sm'>
                        {session?.user?.name}
                    </div>
                </div>
            )}
        </div>
    )
}

export default DashboardPage
