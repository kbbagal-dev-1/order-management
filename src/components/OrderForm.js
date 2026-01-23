import React, { useState } from 'react';
import '../styles/App.css';

function OrderForm({ onAddOrder }) {
  const [formData, setFormData] = useState({
    customerName: '',
    items: 1,
    total: 0
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'items' ? parseInt(value) : name === 'total' ? parseFloat(value) : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.customerName.trim() && formData.total > 0) {
      onAddOrder(formData);
      setFormData({ customerName: '', items: 1, total: 0 });
    }
  };

  return (
    <form className="order-form" onSubmit={handleSubmit}>
      <h2>Create New Order</h2>
      
      <div className="form-group">
        <label htmlFor="customerName">Customer Name</label>
        <input
          type="text"
          id="customerName"
          name="customerName"
          value={formData.customerName}
          onChange={handleChange}
          placeholder="Enter customer name"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="items">Number of Items</label>
        <input
          type="number"
          id="items"
          name="items"
          value={formData.items}
          onChange={handleChange}
          min="1"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="total">Order Total ($)</label>
        <input
          type="number"
          id="total"
          name="total"
          value={formData.total}
          onChange={handleChange}
          step="0.01"
          min="0"
          placeholder="0.00"
          required
        />
      </div>

      <button type="submit" className="btn btn-success">Create Order</button>
    </form>
  );
}

export default OrderForm;
