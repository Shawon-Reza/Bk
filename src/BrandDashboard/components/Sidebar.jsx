"use client"

import { NavLink } from "react-router-dom"

export function Sidebar() {
    const menuItems = [
        { name: "Dashboard", icon: "📊", path: "/brand-dashboard" },
        { name: "Micro-microinfluencerspage", icon: "👥", path: "microinfluencerspage" },
        { name: "Campaigns", icon: "📢", path: "campaigns" },
        { name: "Messages", icon: "💬", path: "messages" },
        { name: "Subscription", icon: "💳", path: "/subscription" },
        { name: "Settings", icon: "⚙️", path: "settings" },
    ]

    return (
        <div
            style={{
                boxShadow: "2px 0px 10px 0px rgba(0, 0, 0, 0.1)"
            }}
            className="w-64 bg-[#0D2F4F] text-white flex flex-col rounded-r-3xl h-screen"
        >
            {/* Logo Section */}
            <div className="p-6 border-b border-slate-700">
                <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-yellow-500 rounded-lg flex items-center justify-center">
                        <span className="text-slate-800 font-bold text-lg">S</span>
                    </div>
                    <div>
                        <h1 className="font-bold text-lg">The Social</h1>
                        <p className="text-sm text-slate-300">Market</p>
                    </div>
                </div>
            </div>

            {/* Navigation Menu */}
            <nav className="flex-1 p-4">
                <ul className="space-y-2">
                    {menuItems.map((item) => (
                        <li key={item.name}>
                            <NavLink
                                end
                                to={item.path}
                                className={({ isActive }) =>
                                    `w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors ${isActive
                                        ? "bg-yellow-500 text-slate-800 font-medium"
                                        : "text-slate-300 hover:bg-slate-700 hover:text-white"
                                    }`
                                }
                            >
                                <span className="text-lg">{item.icon}</span>
                                <span>{item.name}</span>
                                {["Campaigns", "Messages", "Subscription", "Settings"].includes(item.name) && (
                                    <span className="ml-auto text-xs">▼</span>
                                )}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </nav>

            {/* Logout Button */}
            <div className="p-4 border-t border-slate-700">
                <button className="w-full flex items-center justify-start px-4 py-3 text-slate-300 hover:text-white hover:bg-slate-700 rounded-lg transition-colors">
                    <span className="mr-3">🚪</span>
                    Logout
                </button>
            </div>
        </div>
    )
}
