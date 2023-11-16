'use-client'

import { cn } from '@/lib/utils'
import { LucideIcon } from 'lucide-react'
import { usePathname, useRouter } from 'next/navigation'

interface SidebarItemProps {
    icon: LucideIcon
    label: string
    href: string
}

export const SidebarItem = ({ icon: Icon, label, href }: SidebarItemProps) => {
    const pathname = usePathname()
    const router = useRouter()

    const isActive =
        (pathname === '/' && href === '/') ||
        pathname === href ||
        pathname?.startsWith(`${href}/`)

    const onClick = () => {
        router.push(href)
    }
    return (
        <button
            className={cn(
                'flex items-center gap-x-2 text-white text-sm font-[500] pl-6 transition-all hover:text-white  hover:bg-zinc-300/10 mb-2 rounded-2xl',
                isActive &&
                    'text-blueprimary bg-white hover:bg-zinc-200-200/20 hover:text-blueprimary '
            )}
            onClick={onClick}
            type='button'>
            <div className='flex items-center gap-x-2 py-3'>
                <Icon
                    size={22}
                    className={cn('text-white', isActive && 'text-blueprimary')}
                />
                {label}
            </div>
        </button>
    )
}
