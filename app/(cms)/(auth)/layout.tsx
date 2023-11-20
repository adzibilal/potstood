import Image from "next/image"

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className='h-screen flex items-center justify-center flex-col bg-zinc-100'>
            <div className='w-full bg-white max-w-md p-5 shadow-sm rounded-md'>
                <div className='my-8 flex items-center justify-center'>
                    <Image src='/images/logo/logo-blue.png' width={200} height={100} alt=""/>
                </div>
                {children}
            </div>
        </div>
    )
}

export default AuthLayout
