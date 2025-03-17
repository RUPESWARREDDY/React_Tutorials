import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// No additional imports needed for inline CSS

function Pagination() {
    let [data, setData] = useState([]);
    let [currentPage, setCurrentPage] = useState(1);
    let item_page = 10;

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(json => setData(json));
    }, []);

    let pagination = data.slice((currentPage - 1) * item_page, currentPage * item_page);

    return (
        <>
        <div className="container mt-5">
            <div className="text-center mb-4">
                <h1 className="mb-3 text-primary">Pagination Example</h1>
                <table className="table table-hover border text-center">
                    <thead className="thead-dark bg-dark text-white">
                        <tr>
                            <th>ID</th>
                            <th>Title</th>
                        </tr>
                    </thead>
                    <tbody>
                        {pagination.map((item, index) => (
                            <tr key={index} className="table-row">
                                <td>{item.id}</td>
                                <td>{item.title}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="d-flex justify-content-between align-items-center">
                <button
                    onClick={() => setCurrentPage(currentPage - 1)}
                    disabled={currentPage <= 1}
                    className="btn btn-outline-primary"
                >
                    Prev
                </button>
                <span className="fs-5 text-info">Page {currentPage}</span>
                <button
                    onClick={() => setCurrentPage(currentPage + 1)}
                    disabled={currentPage * item_page >= data.length}
                    className="btn btn-outline-primary"
                >
                    Next
                </button>
            </div>
        </div>
        </>
    );
}

export default Pagination;
