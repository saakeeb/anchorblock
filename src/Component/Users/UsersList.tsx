import React, { useEffect, useState } from 'react';
import { UserProps } from './UserProps';
import { paginationButton } from './Pagination';




const UsersList: React.FC = (): JSX.Element => {
    const [users, setUsers] = useState<UserProps[]>([]);
    const [apiPage, setApiPage] = useState<Number>(1);

    const fetchUsers = async (): Promise<void> => {
        const api = `https://reqres.in/api/users?page=${apiPage}`;
        const res = await fetch(api);
        const json = await res.json();
        setUsers(json.data);
    };

    useEffect(() => {
        fetchUsers();
    }, [apiPage]);

    return (
        <div className='px-4'>
            <h1 className='text-header-text text-xl mb-12'>Users List</h1>
            <div className="flex">

            </div>
            <table className=" w-full">
                <thead className='bg-table-bg p-4'>
                    <tr >
                        <th className='p-4 text-table-name text-sm'>#ID</th>
                        <th className='p-4 text-table-name text-sm text-left'>USER</th>
                        <th className='p-4 text-table-name text-sm text-left'>EMAIL</th>
                        <th className='p-4 text-table-name text-sm'>OPTIONS</th>
                    </tr>
                </thead>
                <tbody className='p-4 w-full overflow-hidden'>
                    {users.length > 0 &&
                        users.map((user: UserProps) => {
                            return (
                                <tr key={user.id} className='px-4 m-4'>
                                    <td className='p-4 text-sm text-table-name text-center font-semibold'>
                                        {user.id}
                                    </td>
                                    <td className='p-4 text-sm text-table-name text-center font-semibold'> 
                                        <div className='flex justify-start items-center gap-4'>
                                            <img key={user.avatar} src={user.avatar} alt={user.first_name} className='rounded-2xl w-16' />
                                            <p>
                                                {user.first_name} {user.last_name}
                                            </p>
                                        </div>
                                    </td>
                                    <td className='p-4 text-sm text-table-name font-semibold text-left'>
                                        <p>{user.email}</p>

                                    </td>
                                    <td className='p-4 text-xl text-table-name text-center font-semibold'>
                                        <button onClick={()=> console.log("Option")}>...</button>
                                    </td>
                                </tr>
                            );
                        })}

                </tbody>
            </table>

            <div className="flex justify-start mt-8">
                <nav aria-label="Page navigation example">
                    <ul className="list-style-none flex">
                        {
                            paginationButton.length > 0 &&
                            paginationButton.map(data => <li key={data.name}>
                                <button
                                    aria-label={data.name}
                                    className={`relative font-semibold block rounded py-1.5 px-3 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 ${apiPage === data.active ? 'bg-blue-500 text-white' : ''}`}
                                    onClick={() => setApiPage(data.number)}
                                >
                                    { data.name }
                                </button>
                            </li>)
                        }
                        
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default UsersList;
