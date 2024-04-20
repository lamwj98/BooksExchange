import { AppProvider } from "./context/AppContext";
import { Route, Routes } from 'react-router-dom';
import LandingPage from "./pages/LandingPage";
import MyProfilePage from "./pages/MyProfilePage";

function App() {

  return (
    <AppProvider>
      <div className="App">
        <Routes>
            <Route path="/" element={<LandingPage />} /> 
            <Route path="/profile" element={<MyProfilePage />} />
        </Routes>
      </div>
    </AppProvider>
  );
}

export default App;
