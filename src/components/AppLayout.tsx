import React from 'react'
import { Outlet } from 'react-router-dom'
import type { User } from '../types/User';

export const AppLayout = () => {
    const users = JSON.parse(localStorage.getItem("users") || "[]" ) as User[] || [] as User[];
    const newList: User[] | null = []
    if (!users) localStorage.setItem("users", JSON.stringify(newList))
    return (
        <>
            <Outlet />
        </>
    )
}
