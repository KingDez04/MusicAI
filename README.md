# MusicAI

## Introduction

**MusicAI** is a music recommendation web application designed to provide personalized music suggestions based on a user's preferences like genre, mood, time of day, and activity. By leveraging OpenAI's GPT-3.5 API, MusicAI brings intelligent, curated music discovery to your fingertips, aiming to transform how you find and enjoy new tunes.

- **Deployed Site**: [MusicAI](https://musicai-client.vercel.app/)
- **Blog Article**: [Final Project Blog]([https://medium.com/your-blog-link](https://medium.com/@desmondademeso/musicai-blog-post-9df54af2c022))
- **Author LinkedIn**: [Ademola Ademeso](https://www.linkedin.com/in/ademola-ademeso)

## Inspiration

The idea for MusicAI was inspired by my passion for both music and technology. I often found myself spending hours searching for the perfect song to match my mood, time of day, or activity. I wanted to build something that could simplify this process while giving users the personalized experience they crave.

I was also motivated to challenge myself technically by integrating AI into a project and leveraging OpenAI's GPT-3.5 API to create a recommendation engine. Additionally, this project serves as a portfolio project for ALX, showcasing my ability to work on complex applications.

## Technology & Architecture

The architecture follows a typical full-stack structure, with a React-based user interface and a Node.js/Express backend that interacts with the OpenAI API.

Here are the main tools and technologies used:

- Frontend:
  - React.js for building the interactive UI
  - Vite for a fast development and build experience
  - Tailwind CSS for responsive and modern styling
- Backend:
  - Node.js and Express for server-side logic
  - Integration with OpenAI API to generate personalized music recommendations

## Core Algorithms & Code Snippet

The core functionality of MusicAI revolves around generating music recommendations based on the user's input. The recommendation engine works by sending the user's selected genre, mood, time of day, and activity to OpenAI's GPT-3.5 model, which then returns a personalized suggestion.

[Code Snippet](./server/server.js)

## Challenges

One of the toughest technical challenges I encountered was integrating OpenAI’s API and handling the token quota limit. Since the free tier had strict limitations, I had to carefully optimize the API calls and minimize token usage to avoid hitting the ceiling during testing.

## Future Iterations

For future iterations, I plan to:

- **Enhance the recommendation algorithm** by incorporating machine learning and deeper user preferences.
- **Implement user accounts** so that users can save their favorite recommendations and history.
- **Expand the music library** by integrating Spotify's API for real-time music playback and more accurate recommendations.
- **Add a social feature**, allowing users to share their favorite songs and playlists directly from MusicAI.

## Team Members

This project was a solo endeavor, developed by **Ademola Ademeso**. You can check out my work and get in touch:

- **GitHub**: [Ademola’s GitHub](https://github.com/KingDez04)
- **LinkedIn**:[ Ademola’s LinkedIn](https://www.linkedin.com/in/ademola-ademeso)
- **Twitter**: [Ademola’s Twitter](https://twitter.com/KingDez04)

## Installation

To run this project locally, follow the instructions below:

1. Clone the repository:

   ```bash
   git clone https://github.com/KingDez04/MusicAI.git

   ```

2. Navigate to the project directory:

   ```bash
   cd MusicAI

   ```

3. Install the dependencies for both the frontend and backend:

- Frontend (using Vite):

  ```bash
  cd frontend
  npm install

  ```

- Backend (using Node.js and Express):
  ```bash
  cd server
  npm install
  ```

4. Set up environment variables for the OpenAI API:

- Create a .env file in the root of the server directory.
- Add the following:
  ```bash
  OPENAI_API_KEY=your_openai_api_key
  PORT=3001
  ```

5. Run the project:

- Backend:
  ```bash
  cd server
  npm start
  ```
- Frontend:
  ```bash
  cd frontend
  npm run dev
  ```

6. Open your browser and navigate to http://localhost:5173 to view the app.

## Usage

1. Select your preferred **genre, mood, time of day**, and **activity** from the dropdown menus.
2. Click on the **"Recommend"** button to get a personalized music recommendation.
3. The AI will generate and display a song suggestion tailored to your inputs.

## Screenshot

![screenshot](https://github.com/KingDez04/MusicAI_LndnPg/blob/main/public/images/discoverNewArtists.png)

## Contributing

Contributions are always welcome! Please follow these steps if you'd like to contribute:

1. Fork the repository.
2. Create a new feature branch:
   ```bash
   git checkout -b feature/your-feature
   ```
3. Commit your changes:
   ```bash
   git commit -m "feat: add new feature"
   ```
4. Push to the branch:
   ```bash
   git push origin feature/your-feature
   ```
5. Create a pull request on GitHub.

## Related Projects

Here are some related projects that you may find interesting:

- [Spotify AI Recommendations](https://github.com/someone/spotify-ai)
- [OpenAI Music Generation](https://github.com/someoneelse/music-openai)

## License

This project is licensed under the MIT License.

## Resources

- **OpenAI API Documentation**
  Link: [OpenAI API Docs](https://platform.openai.com/docs/introduction)
  Description: Official documentation for integrating the OpenAI API, which powers the recommendation engine in your app.

- **Vite Documentation**
  Link: [Vite Docs](https://vitejs.dev/guide/)
  Description: Documentation for the Vite development tool, which you're using for the frontend.

- **React Documentation**
  Link: [React Docs](https://reactjs.org/docs/getting-started.html)
  Description: Official documentation for React, used for building the frontend of your app.

- **Express Documentation**
  Link: [Express Docs](https://expressjs.com/en/starter/installing.html)
  Description: Official documentation for Express.js, used for building the backend of your app.

- **MDN Web Docs (JavaScript)**
  Link: [MDN JavaScript Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
  Description: General resource for JavaScript, which is used across both the frontend and backend.
