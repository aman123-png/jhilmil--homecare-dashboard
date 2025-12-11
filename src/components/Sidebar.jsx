import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { UserPlusIcon } from "@heroicons/react/24/outline";

import {
    HomeIcon,
    UserGroupIcon,
    BookmarkSquareIcon,
    ClipboardDocumentListIcon,
} from "@heroicons/react/24/outline";

export default function Sidebar() {
    const [open, setOpen] = useState(false);

    return (
        <div
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
            className={`fixed top-0 left-0 h-full bg-white dark:bg-gray-900 shadow-lg border-r 
        transition-all duration-300 z-50
        ${open ? "w-56" : "w-16"}`}
        >
            <div className="flex flex-col h-full p-4">

                {/* LOGO */}
                <div className="flex items-center gap-3 mb-10">
                    <HomeIcon className="h-7 w-7 text-blue-600" />
                    {open && (
                        <span className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                            Jhilmil
                        </span>
                    )}
                </div>

                {/* MENU */}
                <div className="space-y-6 flex-1">
                    <MenuItem
                        open={open}
                        icon={<HomeIcon className="h-6 w-6" />}
                        text="Dashboard"
                        to="/"
                    />
                    <MenuItem
                        open={open}
                        icon={<UserGroupIcon className="h-6 w-6" />}
                        text="Patients"
                        to="/patients"
                    />
                    <MenuItem
                        open={open}
                        icon={<ClipboardDocumentListIcon className="h-6 w-6" />}
                        text="Services"
                        to="/services"
                    />
                    <MenuItem
                        open={open}
                        icon={<BookmarkSquareIcon className="h-6 w-6" />}
                        text="Booking"
                        to="/booking"
                    />
                    <MenuItem
                        open={open}
                        icon={<ClipboardDocumentListIcon className="h-6 w-6" />}
                        text="My Bookings"
                        to="/bookings"
                    />
                    <MenuItem
                        open={open}
                        icon={<UserPlusIcon className="h-6 w-6" />}
                        text="Add Patient"
                        to="/new-patient"
                    />
                </div>

                {/* ⚠️ DARK/LIGHT MODE BUTTON REMOVED COMPLETELY */}
            </div>
        </div>
    );
}

function MenuItem({ open, icon, text, to }) {
    return (
        <NavLink
            to={to}
            className={({ isActive }) =>
                `flex items-center gap-3 p-2 rounded-lg transition 
         ${isActive ? "bg-blue-600 text-white" : "text-gray-700 dark:text-gray-200"}
         ${!isActive && "hover:bg-gray-200 dark:hover:bg-gray-700"}`
            }
        >
            {icon}
            {open && <span className="text-sm font-medium">{text}</span>}
        </NavLink>
    );
}
