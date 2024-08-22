const express = require('express');
const { marked } = require('marked'); // Use this for marked version 4.x+
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.post('/convert', (req, res) => {
  const markdownText = req.body.markdown;
  if (!markdownText) {
    return res.status(400).json({ error: 'Markdown text is required' });
  }
  const html = marked(markdownText);
  res.json({ html });
});

app.listen(3001, () => {
  console.log('Backend server is running on port 3001');
});
