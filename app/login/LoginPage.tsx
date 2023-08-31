'use client'

import Link from "next/link"
import { IconAt, IconAsterisk, IconArrowLeft } from "@tabler/icons-react"
import Image from "next/image"
import Logo from '@/public/logo.svg'

const Login = () => {
    return (
        <div className="h-screen flex justify-center items-center">

            <div className="absolute left-16 top-6">
                <Link className="text-primary flex items-center gap-2 hover:text-primary-hover" href={'/'}>
                    <IconArrowLeft
                        size={24}
                        stroke={1.5}
                        color="#902f3b"
                    />
                    Pagina inicial
                </Link>
            </div>

            <form className="grid gap-4 w-96 p-4 text-center pb-32">
                <div className="flex justify-center pb-4">
                    <Image alt="logo" src={Logo}/>
                </div>

                <div className="relative">
                    <label htmlFor="email" className="cursor-text">
                        <IconAt
                            size={26}
                            stroke={1.5}
                            color="#696969"
                            className="absolute left-3 top-1/2 -translate-y-1/2"
                        />
                    </label>
                    <input
                        type="text"
                        id="email"
                        placeholder="Email"
                        className="border w-full border-[#ccc] rounded-full px-6 py-3 ps-12 focus:outline-primary"
                    />
                </div>
                <div className="relative">
                    <label htmlFor="password" className="cursor-text">
                        <IconAsterisk
                            size={26}
                            stroke={1.5}
                            color="#696969"
                            className="absolute left-3 top-1/2 -translate-y-1/2"
                        />
                    </label>
                    <input
                        type="password"
                        id="password"
                        placeholder="Passoword"
                        className="border w-full border-[#ccc] rounded-full px-6 py-3 ps-12 focus:outline-primary"
                    />
                </div>
                <button className="border p-4 rounded-full bg-primary text-white hover:bg-primary-hover">Entrar</button>
            </form>
        </div>
    )
}

export default Login