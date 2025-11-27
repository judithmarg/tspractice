import React, { useState } from 'react'
import type { User } from '../types/User';
import { useNavigate } from 'react-router-dom';

export const UserList = () => {
    const users = JSON.parse(localStorage.getItem("users") || "[]") as User[] || [] as User[];
    const [search, setSearch] = useState<string>("");
    const [isSearching, setIsSearching] = useState<boolean>(false);
    const [usersF, setUsersF] = useState<User[]>([]);

    const navigate = useNavigate();

    const goToCreate = () => {
        navigate("/create")
    }

    const handleSearchInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(event.target.value)
        setSearch(event.target.value)
    }

    const handleSearch = () => {
        const usersFound = users.filter(user => user.name === search);
        setUsersF(usersFound)
        setIsSearching(true)
    }

    return (
        <>
            <div>UserList</div>
            <label htmlFor="">Search by name </label>
            <input type="text" name='search' value={search} onChange={handleSearchInput} />
            <button onClick={handleSearch} type="button">Search</button>
            {isSearching && (
                <div style={{marginBottom:"12px"}}>
                    <div>Results</div>
                    {usersF.map((user, index )=> (
                        <div key={index} style={{ display: 'flex', gap: '12px', border: "1px solid lavender", padding: '0px 12px' }}>
                            <p>{user.name}</p>
                            <p>{user.role}</p>
                            <p>{user.email}</p>
                            <p>{user.department}</p>
                        </div>
                    ))}
                </div>
            )}
            {users.map(user => (
                <div key={user.id} style={{ display: 'flex', gap: '12px', border: "1px solid lavender", padding: '0px 12px' }}>
                    <p>{user.name}</p>
                    <p>{user.role}</p>
                    <p>{user.email}</p>
                    <p>{user.department}</p>
                </div>
            ))}
            <button onClick={goToCreate}>Create new user</button>
        </>
    )
}
