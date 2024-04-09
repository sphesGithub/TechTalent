const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));

// Serve static files from the "public" directory
app.use(express.static('public'));

// Serve index.html as the main webpage
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

app.post('/addSupporter', (req, res) => {
    const { usernameValue, passwordValue } = req.body;
    
    // In a real-world application, you would save the name and surname to a database
    // For this example, we'll just render them directly on the webpage
    res.send(`<h1>Thank you for your support, ${usernameValue} ${passwordValue}!</h1>`);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
