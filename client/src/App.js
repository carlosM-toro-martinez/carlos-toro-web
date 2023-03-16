import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import AppContext from "./context/AppContext";
import useInitialState from "./hooks/useInitialState";
import RouteMachine from "./routes/RouteMachine";
import Header from "./components/Header";
import Footer from "./components/Footer";
import background from "./public/background.jpg";

function App() {
  const initialState = useInitialState();

  return (
    <AppContext.Provider value={initialState}>
      <div
        style={{
          backgroundImage: `url(${background})`,
          height: "100%",
        }}
      >
        <Header />

        <div
          style={{
            padding: 20,
            background: "rgba(0, 0, 0, 0.8)",

            marginBottom: -20,
          }}
        >
          <RouteMachine />
        </div>
        <Footer id="contacts" />
      </div>
    </AppContext.Provider>
  );
}

export default App;
