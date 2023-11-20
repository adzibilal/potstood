'use client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import GoogleButton from '../../_components/goggle-button'
import { signIn } from 'next-auth/react'
import { useParams, useRouter } from 'next/navigation'
import md5 from 'md5'
import toast from 'react-hot-toast'

const SignInPage = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const router = useRouter()
    const { error } = useParams()

    const handleSignIn = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault() // Prevents the default form submission behavior

        const hashedPass = md5(password)

        try {
            const response = await signIn('credentials', {
                redirect: false,
                email,
                password: hashedPass
            })

            if (response && response.error === 'CredentialsSignin') {
                toast.error('Email atau password salah!')
            } else {
                router.replace('/dashboard')
            }
        } catch (error) {
            toast.error('error')
            console.log('err', error)
        }
    }

    return (
        <>
            <div className='font-semibold text-2xl text-zinc-900'>Sign In</div>
            <div className='text-zinc-600 text-sm mb-5'>
                Please enter your details.
            </div>
            <form className='mt-3' onSubmit={handleSignIn}>
                <div className='form-control mb-3'>
                    <div className='text-sm mb-1'>Email address</div>
                    <Input
                        placeholder='Email'
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                </div>
                <div className='form-control mb-3'>
                    <div className='text-sm mb-1'>Password</div>
                    <Input
                        placeholder='Password'
                        type='password'
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                </div>
                <Link href='/cms/auth/forgot-password'>
                    <div className='text-zinc-600 text-xs text-right hover:text-blue-700 mb-5'>
                        Forgot password?
                    </div>
                </Link>
                <Button className='w-full' variant='primary' type='submit'>
                    Sign In
                </Button>
            </form>
            <GoogleButton />
            <div className='text-sm mt-5 mb-2 text-zinc-600 text-center'>
                Don&apos;t have an account?{' '}
                <Link
                    href='/sign-up'
                    className='font-semibold hover:text-blue-600'>
                    Create an account now!
                </Link>
            </div>
        </>
    )
}

export default SignInPage
