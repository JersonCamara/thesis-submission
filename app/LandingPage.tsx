'use client'

import TCC from '@/components/tcc/TCC'

export default function LandingPage() {
    return (
        <main className="mx-8 my-4">

            <div className='grid grid-cols-[auto_400px] items-start gap-8   '>
                <div className='grid gap-4'>
                    <TCC />
                    <TCC />
                    <TCC />
                    <TCC />
                </div>
                <div className='border rounded-2xl p-4 '>olas</div>
            </div>

        </main>
    )
}
