'use client'

import Link from "next/link";

const TCC = () => {
    return (
        <Link href={'tcc/1'} className="grid gap-4 relative rounded-2xl p-4 overflow-hidden bg-white border hover:drop-shadow">

            <div className="flex items-start gap-4">
                <div className="font-semibold text-primary">Titulo (Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet.)</div>
                <div className="px-8 py-2 bg-slate-200 text-sm rounded-2xl opacity-0">Estado</div>
            </div>

            <div className="flex justify-between text-sm border-t pt-3">
                <div>Curso (Nome do Curso)</div>
                <div className="flex gap-4">
                    <div className="text-primary">Autor (Nome completo)</div>
                    <div>data (publicacao)</div>
                </div>
            </div>

            <div className="absolute top-0 right-0 px-8 py-2 text-sm rounded-es-2xl bg-primary text-white">Estado</div>
        </Link>
    )
}

export default TCC;