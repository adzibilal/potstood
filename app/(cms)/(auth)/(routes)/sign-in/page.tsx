import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Link from 'next/link'
import React from 'react'

const SignInPage = () => {
    return (
        <div className='mt-3'>
            <div className='font-semibold text-2xl text-zinc-900'>Sign In</div>
            <div className='text-zinc-600 text-sm mb-5'>
                Please enter your details.
            </div>

            <div className='form-control mb-3'>
                <div className='text-sm mb-1'>Email address</div>
                <Input placeholder='Email' />
            </div>
            <div className='form-control mb-3'>
                <div className='text-sm mb-1'>Password</div>
                <Input placeholder='Password' type='password' />
            </div>
            <Link href='/cms/auth/forgot-password'>
                <div className='text-zinc-600 text-xs text-right hover:text-blue-700 mb-5'>Forgot password?</div>
            </Link>
            <Button className='w-full' variant='primary'>Sign In</Button>
        </div>
    )
}

export default SignInPage
