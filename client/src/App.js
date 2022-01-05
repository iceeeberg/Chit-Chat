import "./App.css";
import Messages from "./components/Messages";
import "bootstrap/dist/css/bootstrap.min.css";
import UsersSideBar from "./components/UsersSideBar";

function App() {
  return (
    <div className="App">
      <UsersSideBar />
      <Messages />
    </div>
  );
}

export default App;
