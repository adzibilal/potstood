'use client'

import {
    Layout,
    Coffee,
    Calculator,
    ShoppingBasket,
    Box,
    FileBoxIcon,
    BarChart,
    Building,
    User2,
    Coins,
} from 'lucide-react'
import { SidebarItem } from './sidebar-item'
import { usePathname, useRouter } from 'next/navigation'

const adminRoutes = [
    {
        icon: Layout,
        label: 'Dashboard',
        href: '/dashboard'
    },
    {
        icon: User2,
        label: 'User',
        href: '/user'
    },
    {
        icon: Building,
        label: 'Platform',
        href: '/platform'
    },
    {
        icon: Coins,
        label: 'Subscription',
        href: '/subscription'
    },
    {
        icon: BarChart,
        label: 'Level',
        href: '/level'
    }
]

const staffRoutes = [
    {
        icon: Layout,
        label: 'Dashboard',
        href: '/'
    },
]

export const SidebarRoutes = () => {
    const pathname = usePathname()

    const isAdmin = 'admin' === 'admin'

    const routes = isAdmin ? adminRoutes : staffRoutes
    return (
        <div className='flex flex-col w-full'>
            {routes.map(route => (
                <SidebarItem
                    key={route.href}
                    icon={route.icon}
                    label={route.label}
                    href={route.href}
                />
            ))}
        </div>
    )
}
