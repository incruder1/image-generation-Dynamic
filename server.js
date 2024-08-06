import express from "express";
import cors from "cors";
import { createCanvas, loadImage } from "canvas";
import fileUpload from "express-fileupload";
import path from "path";
import fs from "fs";
import { v4 as uuidv4 } from "uuid";
import { breakTextIntoLines } from "./utils/constant.js"
import { fileURLToPath } from 'url';
 
const PORT = 5000;

//esmoduleFix
const __filename=fileURLToPath(import.meta.url);
const __dirname=path.dirname(__filename);
 
//rest object
const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(fileUpload());

app.use(express.static(path.join(__dirname, "./client/build")));

app.get("/test", (req, res) => {
res.send("Hello Working File")
});

app.post("/generate-image", async (req, res) => {
const { title, content } = req.body;
const imageFile = req.files?.image;

const canvas = createCanvas(1200, 630);
const ctx = canvas.getContext("2d");

ctx.fillStyle = "#f3f4f6";
ctx.fillRect(0, 0, 1200, 630);
let startY = 50,
 startX = 50;
if (!imageFile) {
 startX = 100;
 startY = 250;
}

// Title
ctx.font = "bold 30px Arial";
ctx.fillStyle = "#000000";
const titleToWrite = title;
let textLines = breakTextIntoLines(titleToWrite, 50, 100);
textLines.forEach((line) => {
 ctx.fillText(line, startX, startY);
 startY += 40;
});

// Content
ctx.font = "25px Arial";
const textToWrite = content;
const lines = breakTextIntoLines(textToWrite, 70, 140);
lines.forEach((line) => {
 ctx.fillText(line, startX, startY);
 startY += 40;
});

if (imageFile) {
 const image = await loadImage(imageFile.data);
 ctx.drawImage(image, 300, 220, 500, 400);
}

// Get the buffer from the canvas
const buffer = canvas.toBuffer("image/png");
const base64Image = buffer.toString("base64");
const imageUrl = `data:image/png;base64,${base64Image}`;

res.json({ imageUrl });
});

app.use("*", function (req, res) {
res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

// Server
app.listen(PORT, () => {
console.log(`Server is running on http://localhost:${PORT}`);
});