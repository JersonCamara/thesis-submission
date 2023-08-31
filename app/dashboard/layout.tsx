'use client'

import Sidebar from "@/components/sidebar/Sidebar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="h-[calc(100vh-73.6px)] grid grid-cols-[250px_auto]">

            <div className="h-full me-8 pt-8">
                <Sidebar />
            </div>

            <div className="h-full bg-white border-l border-t p-8 rounded-ss-[32px]">{children}</div>

        </div>
    )
}

export default DashboardLayout;