import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Homepage } from "./pages";
import CodeOfConduct from "./pages/secondary/CodeOfConduct";
import ContactUs from "./pages/secondary/ContactUs";
import FrequentlyAskedQuestions from "./pages/secondary/FrequentlyAskedQuestions";
import MeetTheTeam from "./pages/secondary/MeetTheTeam";
import Research from "./pages/secondary/Research";
import SignUp from "./pages/secondary/SignUp";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/faqs" element={<FrequentlyAskedQuestions />} />
        <Route path="/team" element={<MeetTheTeam />} />
        <Route path="/research" element={<Research />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/code-of-conduct" element={ <CodeOfConduct />} />
      </Routes>
    </div>
  );
}

export default App;
