import Header from "./components/Header";
import Tasks from "./components/Tasks";

const App = () => {
  return (
    <>
      <div className="container">
        <Header title={"Header propTypes string example"} />
      </div>
      <div className="container">
        <Tasks />
      </div>
    </>
  );
};

export default App;
