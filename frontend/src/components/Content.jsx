import { useState } from "react";

export const Content = () => {
  const [recommendation, setRecommendation] = useState("");
  const [genre, setGenre] = useState("Rock");
  const [mood, setMood] = useState("Happy");
  const [timeOfDay, setTimeOfDay] = useState("Morning");
  const [activity, setActivity] = useState("Working Out");
  const [loading, setLoading] = useState(false);

  const fetchRecommendation = () => {
    setLoading(true);
    fetch(
      `https://musicai-server.vercel.app/api/music?inputs=${encodeURIComponent(
        JSON.stringify({ genre, mood, timeOfDay, activity })
      )}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.aiResponse) {
          setRecommendation(data.aiResponse);
        } else if (data.error) {
          setRecommendation("Error fetching recommendation.");
          console.error(data.error);
        } else {
          setRecommendation("Unexpected response format.");
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching AI text: ", error);
        setRecommendation("Error fetching recommendation.");
        setLoading(false);
      });
  };

  return (
    <div className="flex flex-col max-w-sm overflow-hidden shadow-lg bg-white p-4 border rounded-lg mx-auto mt-4">
      <div className="mb-4">
        <label
          htmlFor="genre"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Genre
        </label>
        <select
          id="genre"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
          className="select"
        >
          <option value="Rock">Rock</option>
          <option value="Pop">Pop</option>
          <option value="Jazz">Jazz</option>
          <option value="Classical">Classical</option>
          <option value="Hip Hop">Hip Hop</option>
          <option value="Electronic">Electronic</option>
        </select>

        <label
          htmlFor="mood"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Mood
        </label>
        <select
          id="mood"
          value={mood}
          onChange={(e) => setMood(e.target.value)}
          className="select"
        >
          <option value="Happy">Happy</option>
          <option value="Sad">Sad</option>
          <option value="Energetic">Energetic</option>
          <option value="Calm">Calm</option>
          <option value="Romantic">Romantic</option>
          <option value="Uplifting">Uplifting</option>
          <option value="Motivational">Motivational</option>
        </select>

        <label
          htmlFor="timeofday"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Time of Day
        </label>
        <select
          id="timeofday"
          value={timeOfDay}
          onChange={(e) => setTimeOfDay(e.target.value)}
          className="select"
        >
          <option value="Morning">Morning</option>
          <option value="Afternoon">Afternoon</option>
          <option value="Evening">Evening</option>
          <option value="Night">Night</option>
        </select>

        <label
          htmlFor="activity"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Activity
        </label>
        <select
          id="activity"
          value={activity}
          onChange={(e) => setActivity(e.target.value)}
          className="select"
        >
          <option value="Working Out">Working Out</option>
          <option value="Studying">Studying</option>
          <option value="Driving">Driving</option>
          <option value="Relaxing">Relaxing</option>
          <option value="Cooking">Cooking</option>
          <option value="Partying">Partying</option>
          <option value="Working">Working</option>
          <option value="Reading">Reading</option>
        </select>
      </div>

      <div className="flex items-center justify-between">
        <button
          disabled={loading}
          onClick={fetchRecommendation}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Recommend
        </button>
      </div>

      <div>{loading ? "Loading recommendation..." : recommendation}</div>
    </div>
  );
};
