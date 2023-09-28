// Import required modules
const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const pool = mysql.createPool({
  host: 'your-database-host',
  user: 'your-database-username',
  password: 'your-database-password',
  database: 'your-database-name',
  connectionLimit: 10,
});

// Create an instance of Express app
const app = express();

// Use body-parser middleware to parse request bodies
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Retrieve Complaints
app.get('/complaints', (req, res) => {
  pool.query('SELECT * FROM complaints', (error, results) => {
    if (error) {
      console.error('Error retrieving complaints:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      res.json(results);
    }
  });
});

// Sorting Complaints
app.get('/complaints/sorted', (req, res) => {
  const { sortBy, sortOrder } = req.query;
  const sqlQuery = `SELECT * FROM complaints ORDER BY ${sortBy} ${sortOrder}`;

  pool.query(sqlQuery, (error, results) => {
    if (error) {
      console.error('Error retrieving complaints:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      res.json(results);
    }
  });
});

// Display Complaints
app.get('/admin', (req, res) => {
  // Retrieve complaints from the database
  const query = 'SELECT * FROM complaints';
  pool.query(query, (error, results) => {
    if (error) {
      console.error('Error retrieving complaints:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      const complaints = results;
      // Render the admin interface and display the complaints using EJS
      res.render('admin-interface', { complaints });
    }
  });
});

// Process Complaint
app.get('/admin/complaints/:id', (req, res) => {
  const { id } = req.params;

  // Retrieve complaint details by ID from the database
  const query = 'SELECT * FROM complaints WHERE id = ?';
  pool.query(query, [id], (error, results) => {
    if (error) {
      console.error('Error retrieving complaint:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      const complaint = results[0];
      // Render the complaint details on the admin interface using EJS
      res.render('complaint-details', { complaint });
    }
  });
});

// Accept Complaint
app.post('/admin/complaints/:id/accept', (req, res) => {
  const { id } = req.params;
  const { officerId, comment } = req.body;

  const query = 'UPDATE complaints SET status = ?, assigned_officer = ?, comment = ? WHERE id = ?';
  const values = ['In Progress', officerId, comment, id];

  pool.query(query, values, (error, result) => {
    if (error) {
      console.error('Error accepting the complaint:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      res.json({ message: 'Complaint accepted successfully' });
    }
  });
});

// Reject Complaint
app.post('/admin/complaints/:id/reject', (req, res) => {
  const { id } = req.params;
  const { comment } = req.body;

  const query = 'UPDATE complaints SET status = ?, comment = ? WHERE id = ?';
  const values = ['Rejected', comment, id];

  pool.query(query, values, (error, result) => {
    if (error) {
      console.error('Error rejecting the complaint:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      res.json({ message: 'Complaint rejected successfully' });
    }
  });
});

// Escalate Complaint
app.post('/admin/complaints/:id/escalate', (req, res) => {
  const { id } = req.params;
  const { comment } = req.body;

  const query = 'UPDATE complaints SET status = ?, officer = ?, comment = ? WHERE id = ?';
  const values = ['Escalated', 'Next Officer', comment, id];

  pool.query(query, values, (error, result) => {
    if (error) {
      console.error('Error escalating the complaint:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      res.json({ message: 'Complaint escalated successfully' });
    }
  });
});

// Officer Assignment
app.post('/complaints/:id/assign', (req, res) => {
  const { id } = req.params;
  const { officerId } = req.body;

  const query = 'UPDATE complaints SET assigned_officer = ? WHERE id = ?';
  const values = [officerId, id];

  pool.query(query, values, (error, result) => {
    if (error) {
      console.error('Error assigning officer to the complaint:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      res.json({ message: 'Officer assigned successfully' });
    }
  });
});

// Complaint Resolution
app.post('/complaints/:id/resolve', (req, res) => {
  const { id } = req.params;

  const query = 'UPDATE complaints SET status = "Resolved" WHERE id = ?';
  const values = [id];

  pool.query(query, values, (error, result) => {
    if (error) {
      console.error('Error resolving the complaint:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      res.json({ message: 'Complaint resolved successfully' });
    }
  });
});

// Reporting and Analytics
app.get('/reports', (req, res) => {
  // Implement the necessary logic to generate reports and analytics

  res.json({ message: 'Reports generated successfully' });
});

// Notification System
const sendNotification = (adminEmail, notificationContent) => {
  // Implement the necessary logic for sending notifications to admins

  console.log(`Notification sent to ${adminEmail}: ${notificationContent}`);
};

app.post('/complaints', (req, res) => {
  // Logic to save the new complaint in the database

  const adminEmail = 'admin1@example.com'; // Replace with the actual admin email
  const notificationContent = 'A new complaint has been received. Please review it.';
  sendNotification(adminEmail, notificationContent);

  res.status(201).json({ message: 'Complaint created successfully' });
});

// Start the server
const port = 3000; // Replace with your desired port number

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
