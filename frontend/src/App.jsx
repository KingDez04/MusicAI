import { Content } from "./components/Content";

const App = () => {
  return (
    <div>
      <Content />
      <div className="flex flex-row max-w-sm justify-around mx-auto mt-4">
        <a
          className="hover:text-red-700"
          href="https://github.com/KingDez04/MusicAI"
          target="_blank"
        >
          Source Code
        </a>
        <a
          className="hover:text-red-700"
          href="https://ademolaademeso.vercel.app"
          target="_blank"
        >
          Personal Website
        </a>
      </div>
    </div>
  );
};

export default App;
