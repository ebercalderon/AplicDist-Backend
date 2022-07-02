const mongoose = require("mongoose");

const dbConnect = async () => {
  await mongoose
    .connect(
      "mongodb+srv://eber:Al5yNL28telrfwRb@cluster0.21ckb70.mongodb.net/?retryWrites=true&w=majority"
    )
    .then(() => {
      console.log("Conexión correcta a MongoDB");
    })
    .catch((error) => {
      console.log(error);
    });
};
dbConnect();