import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import storyRoutes from "./routes/stories.js";
const app = express();

app.use(bodyParser.json({ limit: "32mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "32mb", extended: true }));
app.use(cors());

app.use("/stories", storyRoutes);	

const MONGO_URI =
  "mongodb+srv://SociaLite:9462036135@cluster0.6zhnt.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const PORT = process.env.PORT || 5001;

const connectDB = async () => {
  try {
    mongoose.connect(MONGO_URI);
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (err) {
    console.error(err.message);
  }
};

connectDB();

mongoose.connection.on("open", () => {
  console.log("MongoDB connected");
});

mongoose.connection.on("error", (err) => {
  console.log(err);
});
