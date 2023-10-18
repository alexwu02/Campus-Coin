import React, { useState, useEffect } from 'react';

// Import the TransactionContext here

function TransactionItem({ transaction }) {
  return (
    <div className='transaction'>
      <div className='left'>
        <div className='name'>{transaction.name}</div>
        <div className='description'>{transaction.description}</div>
      </div>
      <div className='right'>
        <div className={"price " + (transaction.price < 0 ? 'red' : 'green')}>
          {transaction.price}
        </div>
        <div className='datetime'>{transaction.datetime}</div>
      </div>
    </div>
  );
}

function AddTransactionForm({ onAddTransaction }) {
  const [name, setName] = useState('');
  const [datetime, setDatetime] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');

  const handleAddTransaction = () => {
    // Create a new transaction object
    const newTransaction = {
      name,
      datetime,
      description,
      price: parseFloat(price),
    };

    // Call the onAddTransaction callback with the new transaction
    onAddTransaction(newTransaction);

    // Clear the form fields
    setName('');
    setDatetime('');
    setDescription('');
    setPrice('');
  };

  return (
    <div className="add-transaction-form">
      <h2>Add New Transaction</h2>
      <form>
        {/* ... (form fields) */}
        <button type="button" onClick={handleAddTransaction}>
          Add Transaction
        </button>
      </form>
    </div>
  );
}

function BalanceDisplay({ balance }) {
  return (
    <div className="balance-display">
      <h2>Balance</h2>
      {/* ... (balance display) */}
    </div>
  );
}

function Header() {
  return (
    <header className="app-header">
      <h1>My Finance App</h1>
      <nav className="header-navigation">
        {/* ... (navigation links) */}
      </nav>
    </header>
  );
}

function Footer() {
  return (
    <footer className="app-footer">
      <p>&copy; {new Date().getFullYear()} My Finance App</p>
      <div className="footer-links">
        {/* ... (footer links) */}
      </div>
    </footer>
  );
}

function TransactionStatistics({ transactions }) {
  // Calculate statistics
  const totalTransactions = transactions.length;
  const totalAmount = transactions.reduce((sum, transaction) => sum + transaction.price, 0);
  const averageAmount = totalAmount / totalTransactions;

  return (
    <div className="transaction-statistics">
      <h2>Transaction Statistics</h2>
      <p>Total Transactions: {totalTransactions}</p>
      <p>Total Amount: ${totalAmount.toFixed(2)}</p>
      <p>Average Amount: ${averageAmount.toFixed(2)}</p>
    </div>
  );
}


function TransactionFilter({ onFilter }) {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleFilter = () => {
    // Pass the filter criteria to the parent component via the onFilter callback
    onFilter({ startDate, endDate });
  };

  return (
    <div className="transaction-filter">
      <h2>Transaction Filter</h2>
      <div className="filter-form">
        <label htmlFor="startDate">Start Date:</label>
        <input
          type="date"
          id="startDate"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />
        <label htmlFor="endDate">End Date:</label>
        <input
          type="date"
          id="endDate"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
        />
        <button onClick={handleFilter}>Apply Filter</button>
      </div>
    </div>
  );
}


function TransactionDetails({ transaction }) {
  return (
    <div className="transaction-details">
      <h2>Transaction Details</h2>
      <p>Name: {transaction.name}</p>
      <p>Description: {transaction.description}</p>
      <p>Price: {transaction.price}</p>
      <p>Date: {transaction.datetime}</p>
      {/* Add more details and styling as needed */}
    </div>
  );
}

function Settings() {
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');

  const handleSaveSettings = () => {
    // Handle saving settings, e.g., sending data to the server or updating app state
    // In this example, we'll just display an alert with the entered values
    alert(`Settings saved: Name - ${userName}, Email - ${userEmail}`);
  };

  return (
    <div className="settings">
      <h2>Settings</h2>
      <form>
        <div className="form-group">
          <label htmlFor="userName">Name:</label>
          <input
            type="text"
            id="userName"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="userEmail">Email:</label>
          <input
            type="email"
            id="userEmail"
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
          />
        </div>
        <button type="button" onClick={handleSaveSettings}>
          Save Settings
        </button>
      </form>
    </div>
  );
}

function Notifications() {
  const [notifications, setNotifications] = useState([]);
  
  useEffect(() => {
    // Simulate receiving notifications
    const newNotification = { id: 1, message: 'New transaction added!' };
    addNotification(newNotification);
  }, []);

  const addNotification = (notification) => {
    // Add a new notification to the list
    setNotifications((prevNotifications) => [notification, ...prevNotifications]);
  };

  const removeNotification = (id) => {
    // Remove a notification by its ID
    setNotifications((prevNotifications) =>
      prevNotifications.filter((notification) => notification.id !== id)
    );
  };

  return (
    <div className="notifications">
      <h2>Notifications</h2>
      <ul>
        {notifications.map((notification) => (
          <li key={notification.id}>
            {notification.message}
            <button onClick={() => removeNotification(notification.id)}>Dismiss</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

function UserAvatar() {
  const user = {
    name: 'John Doe',
    avatarUrl: 'https://example.com/avatar.jpg',
    email: 'john.doe@example.com',
  };

  return (
    <div className="user-avatar">
      <h2>User Profile</h2>
      <div className="user-profile">
        <div className="user-avatar-image">
          <img src={user.avatarUrl} alt="User Avatar" />
        </div>
        <div className="user-info">
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
        </div>
      </div>
    </div>
  );
}

function Sidebar() {
  return (
    <div className="sidebar">
      <h2>Sidebar Menu</h2>
      <ul>
        <li><a href="/dashboard">Dashboard</a></li>
        <li><a href="/transactions">Transactions</a></li>
        <li><a href="/reports">Reports</a></li>
        <li><a href="/settings">Settings</a></li>
        {/* Add more navigation links as needed */}
      </ul>
    </div>
  );
}
function App() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    getTransactions().then(setTransactions);
  }, []);

  async function getTransactions() {
    const url = process.env.REACT_APP_API_URL + '/transactions';
    const response = await fetch(url);
    return await response.json();
  }

  function handleAddTransaction(newTransaction) {
    // Add logic to handle the addition of new transactions

    // Make a copy of the current transactions array and add the new transaction
    const updatedTransactions = [...transactions, newTransaction];

    // Update the state with the new transactions array
    setTransactions(updatedTransactions);
  }

  let balance = 0;
  for (const transaction of transactions) {
    balance = balance + transaction.price;
  }

  balance = balance.toFixed(2);
  const fraction = balance.split('.')[1];
  balance = balance.split('.')[0];

  return (
    <TransactionContext.Provider value={{ transactions, setTransactions }}>
      <div className="app-container">
        <Header />
        <main>
          <BalanceDisplay balance={parseFloat(balance)} />
          <AddTransactionForm onAddTransaction={handleAddTransaction} />
          <TransactionList />
        </main>
        <Footer />
      </div>
    </TransactionContext.Provider>
  );
}

export default App;
