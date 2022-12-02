const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { getCompliment, getFortune, getAllBirds} = require('./controller')

app.get("/api/compliment", getCompliment);
app.get("/api/fortune", getFortune);
app.get("/api/birds", getAllBirds);
// app.post("/api/birds", createBirdID)
// app.put("/api/birds/:id", updateBirdID)
// app.delete("/api/birds/:id", deleteBirdID)

app.listen(4000, () => console.log("Server running on 4000"));
