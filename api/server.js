const express = require('express');
const PORT = process.env.PORT || 3000;
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const authRoute = require('./routes/authentication');

dotenv.config();
app.use(express.json());

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(console.log("Connected to MONGODB")).catch(err => console.log(err));

app.use('/api/auth', authRoute);

app.listen(PORT, () => {
    console.log(`Express server listening on port ${PORT}`)
});

app.use('/', (req, res) => {
    res.send('This is the root')
});