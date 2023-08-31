'use cliente'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { IconHome } from '@tabler/icons-react';
// import Logomin from '@/public/logo.svg'


const Sidebar = () => {

    const pathname = usePathname()

    return (<>
        <div className='grid gap-2'>
            <Link
                href={'/dashboard'}
                className='bg-primary flex items-center gap-2 w-full p-3 ps-8 text-white rounded-e-full hover:bg-primary-hover'
            >
                <IconHome color='#fff' stroke={2} size={22} />
                Dashboard
            </Link>
            <Link
                href={''}
                className='flex items-center gap-2 w-full p-3 ps-8 rounded-e-full hover:bg-gray-300'
            ><IconHome stroke={2} size={22} />Dashboard</Link>
        </div>
    </>)
}

export default Sidebar