'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { SidebarRoutes } from './sidebar-routes'
import { SidebarItem } from './sidebar-item'
import { Settings } from 'lucide-react'

const Sidebar = () => {
    return (
        <div className='p-3 text-white bg-blueprimary h-screen m-5 rounded-xl shadow-lg flex flex-col justify-between'>
            <div className='flex flex-col gap-5'>
                <div className=''>
                    <div className='flex items-center justify-center mt-5 mb-5 w-[80%] mx-auto'>
                        <Image
                            src='/images/logo/logo-white.png'
                            width={200}
                            height={100}
                            alt=''
                        />
                    </div>
                </div>
                <SidebarRoutes />
            </div>

            <SidebarItem href='/settings' icon={Settings} label='Settings' />
        </div>
    )
}

export default Sidebar
