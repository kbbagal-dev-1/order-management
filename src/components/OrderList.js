import React from 'react';
import '../styles/App.css';

function OrderList({ orders, selectedId, onSelectOrder }) {
  return (
    <div className="order-list">
      <h2>Orders</h2>
      {orders.length === 0 ? (
        <p className="no-orders">No orders found</p>
      ) : (
        <ul className="orders-list">
          {orders.map(order => (
            <li 
              key={order.id}
              className={`order-item ${selectedId === order.id ? 'selected' : ''}`}
              onClick={() => onSelectOrder(order)}
            >
              <div className="order-summary">
                <strong>Order #{order.id}</strong>
                <span className={`status ${order.status.toLowerCase()}`}>
                  {order.status}
                </span>
              </div>
              <p className="customer-name">{order.customerName}</p>
              <p className="order-meta">
                {order.items} items • ${order.total.toFixed(2)}
              </p>
              <p className="order-date">{order.date}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default OrderList;
