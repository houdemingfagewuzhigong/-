import express from 'express';
import sqlite3 from 'sqlite3';
import { open } from 'sqlite';
import { fileURLToPath } from 'url';
import path from 'path';
import axios from 'axios';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 3000;

app.use(express.json());

// Database setup
let db;

async function setupDatabase() {
  db = await open({
    filename: path.join(__dirname, 'database.sqlite'),
    driver: sqlite3.Database
  });

  await db.exec(`
    CREATE TABLE IF NOT EXISTS messages (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      text TEXT NOT NULL,
      sender TEXT NOT NULL,
      timestamp DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `);
}

setupDatabase();

// API routes
app.post('/api/messages', async (req, res) => {
  const { text, sender } = req.body;
  try {
    const result = await db.run('INSERT INTO messages (text, sender) VALUES (?, ?)', [text, sender]);
    res.json({ id: result.lastID, text, sender });
  } catch (error) {
    console.error('Error in /api/messages:', error);
    res.status(500).json({ error: error.message });
  }
});

app.get('/api/messages', async (req, res) => {
  try {
    const messages = await db.all('SELECT * FROM messages ORDER BY timestamp DESC LIMIT 50');
    res.json(messages);
  } catch (error) {
    console.error('Error in GET /api/messages:', error);
    res.status(500).json({ error: error.message });
  }
});

// Updated route for code analysis
app.post('/api/analyze', async (req, res) => {
  console.log('Received /api/analyze request:', req.body);
  const { content } = req.body;
  try {
    const api_key = "hk-wono5g10000089806e9317350abcdce4453c2310311e2813";
    const headers = {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${api_key}`
    };
    const payload = {
      "model": "gpt-4o-mini",
      "messages": [
        {
          "role": "user",
          "content": content
        }
      ],
      "max_tokens": 150
    };
    const response = await axios.post("https://api.openai-hk.com/v1/chat/completions", payload, { headers });
    const analysis = response.data.choices[0].message.content;
    console.log('Sending analysis response:', analysis);
    res.json({ analysis });
  } catch (error) {
    console.error('Error in /api/analyze:', error);
    res.status(500).json({ error: 'Failed to analyze code. Please try again.' });
  }
});

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'dist')));

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});