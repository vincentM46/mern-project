const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const authenticationRoute = require("./routes/authentication");
const usersRoute = require("./routes/users");
const postsRoute = require("./routes/posts");
const categoriesRoute = require("./routes/categories");
const multer = require('multer');
const path = require("path");


dotenv.config();
app.use(express.json());
app.use("/images", express.static(path.join(__dirname, "/images")))

const LOCAL_URI = "mongodb://127.0.0.1:27017/mernproject"

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(console.log("Connected to MONGODB")).catch(err => console.log(err));

const imageStorage = multer.diskStorage({ destination: (req, file, cb) => {
    cb(null, "images");
}, fileName: (req, file, cb) => {
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

app.listen(5000, () => {
    console.log(`Express server listening on port 5000`)
});

app.use('/', (req, res) => {
    res.send('This is the root')
});