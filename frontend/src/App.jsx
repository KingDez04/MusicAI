import { Content } from "./components/Content";

const App = () => {
  return (
    <>
      <Content />
      <div className="flex flex-row max-w-sm justify-around mx-auto mt-4">
        <a
          className="hover:text-red-700"
          href="https://github.com/KingDez04/MusicAI"
          target="_blank"
        >
          Code
        </a>
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

export default App;
