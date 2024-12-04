import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Test.css';

const TicketDashboard = () => {
  const [tickets, setTickets] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [newTicket, setNewTicket] = useState({
    title: '',
    priority: '',
    category: '',
    assignedTo: '',
    status: 'Open',
  });
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTicket({ ...newTicket, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTickets([...tickets, { ...newTicket, id: tickets.length + 1, lastUpdated: new Date().toLocaleDateString() }]);
    setShowForm(false);
    setNewTicket({ title: '', priority: '', category: '', assignedTo: '', status: 'Open' });
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleDelete = (id) => {
    setTickets(tickets.filter(ticket => ticket.id !== id));
  };


  const filteredTickets = tickets.filter(ticket =>
    ticket.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    ticket.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
    ticket.assignedTo.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container-fluid pt-2" style={{ background: 'rgb(240, 249, 252)', overflow: 'auto', height: '600px' }}>
      <div className="ticket-header d-flex justify-content-between align-items-center">
        <div>
          <h2>Open Tickets</h2>
          <p>These are your tickets that are yet to be addressed.</p>
        </div>
        <button className="btn btn-warning" onClick={() => setShowForm(true)}>
          + New Ticket
        </button>
      </div>

      <div className="container-fluid mb-2 bg-white" style={{ height: '50px' }}>
        <div className="container d-flex justify-content-end pt-1">
          <div className="custom-div p-1">
            <i className="fas fa-search" style={{ opacity: '0.6' }}></i>
            <input
              className="form-control search-input ml-1"
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={searchTerm}
              onChange={handleSearchChange}
            />
          </div>
        </div>
      </div>

      {showForm && (
        <div className="modal fade show" style={{ display: 'block' }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">New Ticket</h5>
                <button type="button" className="close" aria-label="Close" onClick={() => setShowForm(false)}>
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input
                      type="text"
                      className="form-control"
                      name="title"
                      value={newTicket.title}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="priority">Priority</label>
                    <select
                      className="form-control"
                      name="priority"
                      value={newTicket.priority}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="">Select Priority</option>
                      <option value="Low">Low</option>
                      <option value="Medium">Medium</option>
                      <option value="High">High</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="category">Category</label>
                    <input
                      type="text"
                      className="form-control"
                      name="category"
                      value={newTicket.category}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="assignedTo">Assigned To</label>
                    <input
                      type="text"
                      className="form-control"
                      name="assignedTo"
                      value={newTicket.assignedTo}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="modal-footer">
                    <button type="submit" className="btn btn-success">
                      Submit Ticket
                    </button>
                    <button
                      type="button"
                      className="btn btn-secondary"
                      onClick={() => setShowForm(false)}
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="ticket-list">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Ticket #</th>
              <th scope="col">Title</th>
              <th scope="col">Raised On</th>
              <th scope="col">Priority</th>
              <th scope="col">Category</th>
              <th scope="col" colSpan={2} className='text-center'>Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredTickets.length === 0 ? (
              <tr className='bg-white'>
                <td colSpan="8" className="text-center" style={{ height: '400px', background: 'white' }}>
                  No records found
                </td>
              </tr>
            ) : (
              filteredTickets.map((ticket) => (
                <tr key={ticket.id}>
                  <td>{ticket.id}</td>
                  <td>{ticket.title}</td>
                  <td>{ticket.lastUpdated}</td>
                  <td>{ticket.priority}</td>
                  <td>{ticket.category}</td>
                  <td className='text-end'>
                    <button className='btn btn-info text-white '>Edit</button>
                  </td>
                  <td>
                    <button className='btn btn-danger' onClick={() => handleDelete(ticket.id)}>Delete</button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TicketDashboard;
