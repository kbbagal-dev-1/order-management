import React from 'react';
import '../styles/App.css';

function OrderDetails({ order, onDeleteOrder, onUpdateStatus }) {
  const statusOptions = ['Pending', 'Processing', 'Shipped', 'Delivered', 'Cancelled'];

  const handleStatusChange = (e) => {
    onUpdateStatus(order.id, e.target.value);
  };

  return (
    <div className="order-details">
      <div className="details-header">
        <h2>Order #{order.id}</h2>
        <button 
          className="btn btn-danger"
          onClick={() => {
            if (window.confirm('Are you sure you want to delete this order?')) {
              onDeleteOrder(order.id);
            }
          }}
        >
          Delete
        </button>
      </div>

      <div className="details-content">
        <div className="detail-row">
          <span className="label">Customer Name:</span>
          <span className="value">{order.customerName}</span>
        </div>

        <div className="detail-row">
          <span className="label">Order Date:</span>
          <span className="value">{order.date}</span>
        </div>

        <div className="detail-row">
          <span className="label">Number of Items:</span>
          <span className="value">{order.items}</span>
        </div>

        <div className="detail-row">
          <span className="label">Order Total:</span>
          <span className="value">${order.total.toFixed(2)}</span>
        </div>

        <div className="detail-row">
          <span className="label">Status:</span>
          <select 
            className="status-select"
            value={order.status}
            onChange={handleStatusChange}
          >
            {statusOptions.map(status => (
              <option key={status} value={status}>
                {status}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}

export default OrderDetails;
