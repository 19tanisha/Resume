import logo from "./logo.svg";
import "./App.css";
import SideBar from "./Components/SideBar";
import Header from "./Components/Header";

function App() {
  return (
    <div className="App-header">
      <img
        src="https://www.teahub.io/photos/full/55-559464_abstract-wallpaper-4k.jpg"
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          top: 0,
          opacity: 0.7,
        }}
      />
      <div
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          top: 0,
          backdropFilter: "blur(15px)",
        }}
      ></div>
      <Header />
      {/* <SideBar /> */}
    </div>
  );
}

export default App;
