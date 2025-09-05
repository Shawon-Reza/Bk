import { Outlet } from "react-router-dom";
import { Sidebar } from "./components/Sidebar";

export default function BrandDashboard() {
    return (
        <div className="flex min-h-screen bg-[#FFFFFF]">
            {/* Sidebar fixed */}
            <aside className="w-64 fixed top-0 left-0 h-screen bg-white shadow">
                <Sidebar />
            </aside>

            {/* Main content with scroll */}
            <main className="flex-1 ml-64 p-6 overflow-y-auto h-screen ">

                <Outlet></Outlet>

            </main>
        </div>
    )
}