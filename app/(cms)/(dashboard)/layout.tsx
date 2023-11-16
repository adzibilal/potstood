import Navbar from './_components/navbar'
import Sidebar from './_components/sidebar'

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className='h-screen bg-zinc-100'>
            <div className='h-[80px] pl-5 xl:pl-64 pr-5 fixed inset-y-0 w-full z-50'>
                <Navbar />
            </div>
            <div className='hidden xl:flex h-full w-64 flex-col fixed inset-y-0 z-50'>
                <Sidebar />
            </div>
            <main className='xl:pl-64 pt-[110px] h-full'>{children}</main>
        </div>
    )
}

export default DashboardLayout
