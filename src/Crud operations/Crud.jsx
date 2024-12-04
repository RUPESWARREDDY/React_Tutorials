import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Crud() {
    const [data, setData] = useState({
        Name: '',
        Email: '',
        Age: '',
        Collage: '',
    });
    const [store, setStore] = useState([]);
    const [editMode, setEditMode] = useState(false);
    const [editId, setEditId] = useState(null);
    const handleClick = (e) => {
        e.preventDefault();
        if (editId) {
            axios.put(`http://localhost:3000/posts/${editId}`, data)
                .then((response) => {
                    setStore(store.map(item => item.id === editId ? response.data : item));
                    setEditMode(false);
                    setEditId(null);
                    setData({ Name: '', Email: '', Age: '', Collage: '' }); 
                });
        } else {
         
            axios.post("http://localhost:3000/posts", data)
                .then((response) => {
                    setStore([...store, response.data]);
                    setData({ Name: '', Email: '', Age: '', Collage: '' });
                });
        }
    };
 
    useEffect(() => {
        axios.get("http://localhost:3000/posts")
            .then(response => {
                setStore(response.data);
            });
    }, []);
    const delete1 = (item) => {
        axios.delete(`http://localhost:3000/posts/${item.id}`)
            .then(() => {
                setStore(store.filter(st => st.id !== item.id));
            });
    };
 
    const edit = (item) => {
        setData({
            Name: item.Name,
            Email: item.Email,
            Age: item.Age,
            Collage: item.Collage,
        });
        setEditMode(true);
        setEditId(item.id);
    };
    return (
        <div style={{ textAlign: 'center' }}>
            <h1>CRUD Operations:</h1>
            <div className='container-fluid'>
                <div style={{ border: '1px solid black', width: '600px', marginLeft: '500px' }}>
                    <form onSubmit={handleClick}>
                        <div className='Head'>
                            <label>Student Name:</label>
                            <input
                                type='text'
                                name="Name"
                                value={data.Name}
                                onChange={(e) => setData({ ...data, [e.target.name]: e.target.value })}
                            />
                        </div>
                        <div className='Head1'>
                            <label>Student Email:</label>
                            <input
                                type='text'
                                name="Email"
                                value={data.Email}
                                onChange={(e) => setData({ ...data, [e.target.name]: e.target.value })}
                            />
                        </div>
                        <div>
                            <label>Student Age:</label>
                            <input
                                type='number'
                                name="Age"
                                value={data.Age}
                                onChange={(e) => setData({ ...data, [e.target.name]: e.target.value })}
                            />
                        </div>
                        <div>
                            <label>Student College:</label>
                            <input
                                type='text'
                                name="Collage"
                                value={data.Collage}
                                onChange={(e) => setData({ ...data, [e.target.name]: e.target.value })}
                            />
                        </div>
                        <div className='header' style={{ textAlign: 'center' }}>
                            <button>{editMode ? 'Update' : 'Submit'}</button>
                        </div>
                    </form>
                    <table border='2'>
                        <thead>
                            <tr>
                                <td>Name</td>
                                <td>Email</td>
                                <td>Age</td>
                                <td>College</td>
                                <td colSpan='2'>Actions</td>
                            </tr>
                        </thead>
                        <tbody>
                            {store.map((item) => (
                                <tr key={item.id}>
                                    <td>{item.Name}</td>
                                    <td>{item.Email}</td>
                                    <td>{item.Age}</td>
                                    <td>{item.Collage}</td>
                                    <td>
                                        <button onClick={() => edit(item)}>Edit</button>
                                    </td>
                                    <td>
                                        <button onClick={() => delete1(item)}>Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Crud
