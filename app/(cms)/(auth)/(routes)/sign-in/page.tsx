import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Image from 'next/image'
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
                <div className='text-zinc-600 text-xs text-right hover:text-blue-700 mb-5'>
                    Forgot password?
                </div>
            </Link>
            <Link href='/dashboard'>
                <Button className='w-full' variant='primary'>
                    Sign In
                </Button>
            </Link>
            <Button
                className='w-full mt-3 flex items-center gap-2'
                variant='outline'>
                <Image src='/images/google.png' width={24} height={24} alt='' />
                <div className=''>Sign In with Google</div>
            </Button>

            <div className='text-sm mt-5 mb-2 text-zinc-600 text-center'>
                Kamu belum punya akun?{' '}
                <Link
                    href='/sign-up'
                    className='font-semibold hover:text-blue-600'>
                    Bikin akun sekarang!
                </Link>
            </div>
        </div>
    )
}

export default SignInPage
