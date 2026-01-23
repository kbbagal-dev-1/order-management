# Order Management Application

A simple React-based order management system with features to create, view, and manage orders.

## Features

- **View Orders**: Display a list of all orders with key information (customer name, items count, total, status)
- **Create Orders**: Add new orders with customer name, number of items, and order total
- **View Order Details**: Click on an order to see detailed information
- **Update Order Status**: Change order status through multiple states (Pending, Processing, Shipped, Delivered, Cancelled)
- **Delete Orders**: Remove orders from the system
- **Responsive Design**: Works on desktop and mobile devices

## Project Structure

```
order-management/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── OrderList.js
│   │   ├── OrderForm.js
│   │   └── OrderDetails.js
│   ├── styles/
│   │   ├── App.css
│   │   └── index.css
│   ├── App.js
│   ├── index.js
│   └── App.test.js
├── package.json
└── README.md
```

## Installation

1. Navigate to the project directory:
```bash
cd order-management
```

2. Install dependencies:
```bash
npm install
```

## Running the Application

Start the development server:
```bash
npm start
```

The application will open in your browser at `http://localhost:3000`

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm build` - Builds the app for production
- `npm test` - Runs the test suite
- `npm eject` - Ejects from create-react-app (irreversible)

## Technologies Used

- React 18.2.0
- CSS3 with responsive design
- React Hooks (useState)

## Features Description

### Order List Component
Displays all orders in a scrollable list with status indicators and key metrics.

### Order Form Component
A form to create new orders with validation for customer name, item count, and total amount.

### Order Details Component
Shows detailed information about a selected order and provides options to update status or delete the order.

## License

This project is open source and available under the MIT License.
