import express from "express";
import axios from "axios";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

// TEMPORARY API KEY (replace later)
const YT_API_KEY = "AIzaSyAIwudMYA0r7VHvTXuh4OBc0agoH9U6I_o";

// ------------------------------------------------------
// SEARCH YOUTUBE
// ------------------------------------------------------
app.get("/api/search", async (req, res) => {
    try {
        const query = req.query.q;
        if (!query) return res.json({ error: "Missing query" });

        const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=25&q=${query}&key=${YT_API_KEY}`;

        const response = await axios.get(url);
        res.json(response.data);
    } catch (err) {
        res.json({ error: err.message });
    }
});

// ------------------------------------------------------
// GET VIDEO DETAILS
// ------------------------------------------------------
app.get("/api/video", async (req, res) => {
    try {
        const id = req.query.id;
        if (!id) return res.json({ error: "Missing video ID" });

        const url = `https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&id=${id}&key=${YT_API_KEY}`;

        const response = await axios.get(url);
        res.json(response.data);
    } catch (err) {
        res.json({ error: err.message });
    }
});

// ------------------------------------------------------
// START SERVER
// ------------------------------------------------------
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log("Backend running on port " + port);
});
