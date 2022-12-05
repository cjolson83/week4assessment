const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { getCompliment, getFortune, saveWish, getAllBirds, deleteBirdID, updateBirdCount} = require('./controller')

app.get("/api/compliment", getCompliment);
app.get("/api/fortune", getFortune);
app.post('/api/wish', saveWish)
app.get("/api/birds", getAllBirds);
app.delete("/api/birds/:id", deleteBirdID);
app.put("/api/birds/:id", updateBirdCount);

app.listen(4000, () => console.log("Server running on 4000"));
