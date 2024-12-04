import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from './HandleAsync/Store1';

function User1() {
    const dispatch = useDispatch();
    const { users, status, error } = useSelector(state => state.user);

    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch]);

    return (
        <div className="container">
            <h2 className="text-primary text-center m-5">
                User Data Using Toolkit AsyncThunk
            </h2>
            {status === 'loading' && <h2>Getting data, please wait...</h2>}
            {status === 'completed' && (
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <td>ID</td>
                            <td>Name</td>
                            <td>Email</td>
                            <td>Phone</td>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map(user => (
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.phone}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
            {error && <h2 className='text-danger'>Failed to fetch: {error}</h2>}
        </div>
    );
}

export default User1;
