import { Routes, Route } from "react-router-dom";
import LandingPage from '../src/pages/landing_page'

const App = () => {
  return (
    <Routes>
      <Route index element={<LandingPage/>} />
      <Route path="/" element={<LandingPage/>} />
    </Routes>
  );
}

export default App;