import "dotenv/config";
import express from "express";
import cors from "cors";
import morgan from "morgan";
import http from "http";

import { dbConnet } from "./config/mongoose.js";

import users from "./routes/user.routes.js";
import panels from "./routes/panel.routes.js";
import batteryes from "./routes/battery.routes.js";
import inverters from "./routes/inverter.routes.js";
import consultas from "./routes/consulta.routes.js";
import auth from "./routes/auth.routes.js";
const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
// Routes
app.use("/api", users);
app.use("/api", panels);
app.use("/api", batteryes);
app.use("/api", inverters);
app.use("/api", consultas);
app.use("/api", auth);

const server = http.createServer(app);

// MongoDB
console.log("Connecting to database");
try {
  await dbConnet();
  console.log("MongoDB connect");

  // solo debe ejecutar una sola vez esta funcion de seeders(),
  // seeders();
} catch (error) {
  console.log("Error MongoDB", error);
}

const PORT = process.env.PORT || 3000;
// server.listen(PORT, () => console.log(`Server on port ${PORT}`));
server.listen(PORT, () => console.log(`Server on port ${PORT}`));

//, "192.168.0.58"
// app.listen(PORT, () => console.log(`Server on port ${PORT}`));
