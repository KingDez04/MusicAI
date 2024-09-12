// Load environment variables from .env file
require("dotenv").config();

// Import necessary modules
const express = require("express");
const OpenAI = require("openai");
const cors = require("cors");

// Initialize an Express application
const app = express();

// Define the port, using the environment variable if available or default to 3001
const PORT = process.env.PORT || 3001;

// Initialize the OpenAI API with the provided API key from environment variables
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
const aiModel = "gpt-3.5-turbo";

// Middleware to parse incoming JSON requests
app.use(express.json());

// Middleware to enable Cross-Origin Resource Sharing (CORS) for API requests
app.use(cors());

// Define a GET route for fetching music recommendations
app.get("/api/music", async (req, res) => {
  // Extract the 'inputs' parameter from the query string
  const { inputs } = req.query;

  // Check if the 'inputs' parameter is provided
  if (inputs) {
    // Create a prompt string for the AI to generate a recommendation
    const prompt = [
      "You are an expert in recommending music.",
      "Based on the following inputs, suggest me a good song to listen.",
      inputs,
    ].join(" ");

     // Construct the messages array for the AI chat completion
    const messages = [{ role: "system", content: prompt }];

    try {
      // Make a request to the OpenAI API for a completion
      const completion = await openai.chat.completions.create({
        model: aiModel,
        messages,
      });

      // Extract the response from the AI and send it back as JSON
      const aiResponse = completion.choices[0].message.content;
      return res.json({ aiResponse });
    } catch (error) {
      // Log any errors and return a 500 status with an error message
      console.error("Error with OpenAI API:", error);
      return res.status(500).json({ error: "Error fetching recommendation." });
    }
  } else {
    // If 'inputs' is not provided, return a 400 status with an error message
    return res.status(400).json({ message: "No input provided" });
  }
});

// Start the server and listen on the defined port
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
