import mongoose from "mongoose";

const connection = async (req, res) => {
    try {
      await mongoose
        .connect(
            `mongodb+srv://Akshay:dio8366@cluster0.5tcyjvv.mongodb.net/`
        )
        .then(() => {
          console.log("Connected");
        });
    } catch (error) {
      console.log(error);
    }
  };
  connection();
