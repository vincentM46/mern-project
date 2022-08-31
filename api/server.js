const express = require('express');
const PORT = process.env.PORT || 3000;
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const authenticationRoute = require("./routes/authentication");
const usersRoute = require("./routes/users");
const postsRoute = require("./routes/posts");
const categoriesRoute = require("./routes/categories");
const multer = require('multer');


dotenv.config();
app.use(express.json());

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(console.log("Connected to MONGODB")).catch(err => console.log(err));

const imageStorage = multer.diskStorage({ destination: (req, file, cb) => {
    cb(null, "images");
}, filename: (req, file, cb) => {
        cb(null, req.body.name);
    },
});

const uploadImage = multer({ imageStorage: imageStorage })
app.post("/api/upload", uploadImage.single("file"), (req, res) => {
    res.status(200).json("Image uploaded sucessfully!")
});

app.use("/api/authentication", authenticationRoute);
app.use("/api/users", usersRoute);
app.use("/api/posts", postsRoute);
app.use("/api/categories", categoriesRoute);

app.listen(PORT, () => {
    console.log(`Express server listening on port ${PORT}`)
});

app.use('/', (req, res) => {
    res.send('This is the root')
});