const express = require('express');
const app = express();
app.use(express.json());

app.post('/save-location', (req, res) => {
    console.log('📍 EXACT LOCATION RECEIVED:');
    console.log(`Latitude: ${req.body.latitude}`);
    console.log(`Longitude: ${req.body.longitude}`);
    console.log(`Accuracy: ${req.body.accuracy} meters`);
    console.log('---');
    res.send('Location saved!');
});

app.listen(3000, () => console.log('Server running on port 3000'));
