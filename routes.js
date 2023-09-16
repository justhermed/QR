const express = require('express');
const router = express.Router();

// Get all files
router.get('/files', (req, res) => {
  db.query('SELECT * FROM files', (err, results) => {
    if (err) {
      console.error('Error fetching files:', err);
      res.status(500).json({ error: 'Error fetching files' });
    } else {
      res.status(200).json(results);
    }
  });
});

// Add a new file
router.post('/files', (req, res) => {
  const { clientName, fileName, author, comment, date } = req.body;
  db.query(
    'INSERT INTO files (clientName, fileName, author, comment, date) VALUES (?, ?, ?, ?, ?)',
    [clientName, fileName, author, comment, date],
    (err, results) => {
      if (err) {
        console.error('Error adding a file:', err);
        res.status(500).json({ error: 'Error adding a file' });
      } else {
        res.status(201).json({ message: 'File added successfully' });
      }
    }
  );
});

// Update a file
router.put('/files/:id', (req, res) => {
  const { id } = req.params;
  const { clientName, fileName, author, comment, date } = req.body;
  db.query(
    'UPDATE files SET clientName = ?, fileName = ?, author = ?, comment = ?, date = ? WHERE id = ?',
    [clientName, fileName, author, comment, date, id],
    (err, results) => {
      if (err) {
        console.error('Error updating a file:', err);
        res.status(500).json({ error: 'Error updating a file' });
      } else {
        res.status(200).json({ message: 'File updated successfully' });
      }
    }
  );
});

// Delete a file
router.delete('/files/:id', (req, res) => {
  const { id } = req.params;
  db.query('DELETE FROM files WHERE id = ?', [id], (err, results) => {
    if (err) {
      console.error('Error deleting a file:', err);
      res.status(500).json({ error: 'Error deleting a file' });
    } else {
      res.status(200).json({ message: 'File deleted successfully' });
    }
  });
});

module.exports = router;
