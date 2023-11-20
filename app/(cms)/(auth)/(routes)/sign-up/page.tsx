import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import GoogleButton from '../../_components/goggle-button'

const SignUpPage = () => {
    return (
        <div className='mt-3'>
            <div className='font-semibold text-2xl text-zinc-900'>Sign Up</div>
            <div className='text-zinc-600 text-sm mb-5'>
                Please provide your details.
            </div>

            <GoogleButton />

            <div className='flex items-center gap-3 text-zinc-400 mb-3 mt-5'>
                <div className='h-[1px] w-full bg-zinc-200'></div>
                <div className='text-sm'>OR</div>
                <div className='h-[1px] w-full bg-zinc-200'></div>
            </div>

            <div className='form-control mb-3'>
                <div className='text-sm mb-1'>Email address</div>
                <Input placeholder='Email' />
            </div>
            <div className='form-control mb-3'>
                <div className='text-sm mb-1'>Password</div>
                <Input placeholder='Password' type='password' />
            </div>
            <div className='form-control mb-3'>
                <div className='text-sm mb-1'>Confirm Password</div>
                <Input placeholder='Konfirmasi Password' type='password' />
            </div>
            <Button className='w-full mt-2' variant='primary'>
                Continue
            </Button>

            <div className='text-sm mt-5 mb-2 text-zinc-600 text-center'>
                Kamu udah punya akun?{' '}
                <Link
                    href='/sign-in'
                    className='font-semibold hover:text-blue-600'>
                    Login sekarang!
                </Link>
            </div>
        </div>
    )
}

export default SignUpPage
