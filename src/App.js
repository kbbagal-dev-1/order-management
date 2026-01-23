import React, { useState } from 'react';
import './App.css';
import OrderList from './components/OrderList';
import OrderForm from './components/OrderForm';
import OrderDetails from './components/OrderDetails';

function App() {
  const [orders, setOrders] = useState([
    { id: 1, customerName: 'John Doe', items: 3, total: 150.00, status: 'Delivered', date: '2026-01-15' },
    { id: 2, customerName: 'Jane Smith', items: 2, total: 89.99, status: 'Processing', date: '2026-01-20' },
    { id: 3, customerName: 'Bob Johnson', items: 5, total: 245.50, status: 'Pending', date: '2026-01-22' },
  ]);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const addOrder = (orderData) => {
    const newOrder = {
      id: orders.length + 1,
      ...orderData,
      date: new Date().toISOString().split('T')[0],
      status: 'Pending'
    };
    setOrders([...orders, newOrder]);
    setShowForm(false);
  };

  const deleteOrder = (id) => {
    setOrders(orders.filter(order => order.id !== id));
    setSelectedOrder(null);
  };

  const updateOrderStatus = (id, newStatus) => {
    setOrders(orders.map(order => 
      order.id === id ? { ...order, status: newStatus } : order
    ));
    setSelectedOrder(prev => prev ? { ...prev, status: newStatus } : null);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Order Management System</h1>
      </header>
      
      <div className="container">
        <div className="main-content">
          <div className="controls">
            <button 
              className="btn btn-primary" 
              onClick={() => setShowForm(!showForm)}
            >
              {showForm ? 'Cancel' : '+ New Order'}
            </button>
          </div>

          {showForm && <OrderForm onAddOrder={addOrder} />}

          <div className="content-grid">
            <div className="list-section">
              <OrderList 
                orders={orders}
                selectedId={selectedOrder?.id}
                onSelectOrder={setSelectedOrder}
              />
            </div>

            {selectedOrder && (
              <div className="details-section">
                <OrderDetails 
                  order={selectedOrder}
                  onDeleteOrder={deleteOrder}
                  onUpdateStatus={updateOrderStatus}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
