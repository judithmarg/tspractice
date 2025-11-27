import React, { useState } from 'react'
import type { User } from '../types/User'
import { TextField } from '@mui/material';
import { replace, useNavigate } from 'react-router-dom';
// { id: '1', name: 'María González', email: 'maria@empresa.com', role: 'Admin', department: 'TI' }

const initForm: User = {
    id: crypto.randomUUID(),
    name: "",
    email: "",
    role: "",
    department: ""
}
export const UserForm = () => {
    const [form, setForm] = useState<User>(initForm);
    const { id, name, email, role, department } = form;
    const navigate = useNavigate();

    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setForm(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const submit = () => {
        const usersAll = JSON.parse(localStorage.getItem("users") || "[]" ) as User[] || [] as User[];
        usersAll.push(form)
        localStorage.setItem("users", JSON.stringify(usersAll));
    }
    const returnBack = () => {
        navigate("/")
    }

    return (
        <>
        <button onClick={returnBack} type="button">Go back</button>
        <div style={{display:'flex', flexDirection:'column'}}>
            <div>UserForm</div>
            <label>name</label>
            <input type='text' name="name" value={name} onChange={handleOnChange} />
            <label>email</label>
            <input type='text' name="email" value={email} onChange={handleOnChange} />
            <label>role</label>
            <input type='text' name="role" value={role} onChange={handleOnChange} />
            <label>depart</label>
            <input type='text' name="department" value={department} onChange={handleOnChange} />
            <button type="button" onClick={submit}>Send</button>
        </div>
        </>
    )
}
