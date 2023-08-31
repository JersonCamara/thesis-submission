'use client'

import Image from "next/image";
import Link from "next/link";
import Logo from '@/public/logo.svg'

const Header = () => {
    return (
        <header className="py-4">

            <div className="flex justify-between items-center mx-8">
                <div>
                    <Link href={'/'}>
                        <Image alt="logo" src={Logo} />
                    </Link>
                </div>
                <nav className="flex gap-4">

                    <Link className="border p-2 px-4 rounded-full bg-primary text-white hover:bg-primary-hover" href={'/login'}>Entrar</Link>

                    <div className="flex gap-2 justify-end items-center">
                        <div className="h-[41.6px] w-[41.6px] bg-primary rounded-full"></div>
                        <div>
                            <div className="text-sm">Nome do usuario</div>
                            <div className="text-xs font-semibold text-primary">Papel</div>
                        </div>
                    </div>

                </nav>
            </div>

        </header>
    )
}

export default Header;