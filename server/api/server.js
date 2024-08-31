require("dotenv").config();
const express = require("express");
const cors = require("cors");
const OpenAI = require("openai");

const app = express();
const PORT = process.env.PORT || 3001;

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
const aiModel = "gpt-3.5-turbo";

app.use(cors({ origin: "https://muzicai.vercel.app" }));

app.use(express.json());

app.get("/api/music", async (req, res) => {
  const { inputs } = req.query;

  if (inputs) {
    const prompt = [
      "You are an expert in recommending music.",
      "Based on the following inputs, suggest me a good song to listen.",
      inputs,
    ].join(" ");

    const messages = [{ role: "system", content: prompt }];

    try {
      const completion = await openai.chat.completions.create({
        model: aiModel,
        messages,
      });

      const aiResponse = completion.choices[0].message.content;
      return res.json({ aiResponse });
    } catch (error) {
      console.error("Error with OpenAI API:", error);
      return res.status(500).json({ error: "Error fetching recommendation." });
    }
  } else {
    return res.status(400).json({ message: "No input provided" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});