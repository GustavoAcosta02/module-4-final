const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

app.use(bodyParser.json());

const db = mysql.createConnection({
  host: process.env.host,
  user: process.env.user,
  password: process.env.password,
  database: process.env.database,
});

db.connect(err => {
    if (err) {
        console.error('Database connection failed: ' + err.stack);
        return;
    }
    console.log('Connected to the database');
});

app.get("/api/tickets", (req, res) => {
    db.query("SELECT * FROM ticket", (err, results) => {
        if (err) {
            console.error(err);
            res.status(500).json({ error: 'Internal Server Error' });
            return;
        }
        res.json({ tickets: results });
    });
});

app.post("/api/tickets", (req, res) => {
    const { subject, status, open_date } = req.body;
    if (!subject || !status || !open_date) {
        res.status(400).json({ error: 'Subject, status, and open_date are required' });
        return;
    }
    db.query("INSERT INTO ticket (subject, status, open_date) VALUES (?, ?, ?)", [subject, status, open_date], (err, results) => {
        if (err) {
            console.error(err);
            res.status(500).json({ error: 'Internal Server Error' });
            return;
        }
        res.json({ message: 'Ticket created successfully' });
    });
});

app.put("/api/tickets/:id", (req, res) => {
    const { id } = req.params;
    const { subject, status, open_date } = req.body;
    if (!subject || !status || !open_date) {
        res.status(400).json({ error: 'Subject, status, and open_date are required' });
        return;
    }
    db.query("UPDATE ticket SET subject = ?, status = ?, open_date = ? WHERE id = ?", [subject, status, open_date, id], (err, results) => {
        if (err) {
            console.error(err);
            res.status(500).json({ error: 'Internal Server Error' });
            return;
        }
        res.json({ message: 'Ticket updated successfully' });
    });
});

app.delete("/api/tickets/:id", (req, res) => {
    const { id } = req.params;

    db.query("UPDATE ticket SET status = 'closed' WHERE id = ?", [id], (err, results) => {
        if (err) {
            console.error(err);
            res.status(500).json({ error: 'Internal Server Error' });
            return;
        }
        res.json({ message: 'Ticket closed successfully' });
    });
});




app.listen(3001, () => console.log(`Server started on 3001`));
