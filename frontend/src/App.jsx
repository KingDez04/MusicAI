// Import the Content component from the components directory
import { Content } from "./components/Content";

// Define the main App component
const App = () => {
  return (
    <>
      {/* Render the Content component */}
      <Content />
      <div className="flex flex-row max-w-sm justify-around mx-auto mt-4">
        {/* Link to the GitHub repository */}
        <a
          className="hover:text-red-700"
          href="https://github.com/KingDez04/MusicAI"
          target="_blank"
        >
          Code
        </a>

        {/* Link to the personal portfolio */}
        <a
          className="hover:text-red-700"
          href="https://ademolaademeso.vercel.app"
          target="_blank"
        >
          Portfolio
        </a>
      </div>
    </>
  );
};

// Export the App component as the default export
export default App;
