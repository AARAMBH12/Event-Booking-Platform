const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const mongoose = require("mongoose");
const authRoutes = require("./routes/auth");
const eventRoutes = require("./routes/events");
const bookingRoutes = require("./routes/booking");


dotenv.config();


const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use('/api/events', eventRoutes);
app.use('/api/bookings',bookingRoutes);





const mongoUri = process.env.MONGO_URI;

if (!mongoUri) {
    console.error("MONGO_URI is missing in .env");
    process.exit(1);
}

mongoose.connect(mongoUri)
.then(() => {
    console.log("Connected to MongoDB");

    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
})
.catch((error) => {
    console.error("MongoDB connection failed:", error.message);
});












