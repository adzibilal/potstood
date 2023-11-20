'use client'
import { Button } from '@/components/ui/button'
import { signIn } from 'next-auth/react'
import Image from 'next/image'

const GoogleButton = () => {
    return (
        <Button
            className='w-full mt-3 flex items-center gap-2'
            variant='outline'
            onClick={() => signIn('google')}>
            <Image src='/images/google.png' width={24} height={24} alt='' />
            <div className=''>Sign In with Google</div>
        </Button>
    )
}

export default GoogleButton
