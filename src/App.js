import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from './components/Home/Home';
import ProjectsDetails from './components/ProjectsDetails/ProjectsDetails';
import AboutMe from './components/AboutMe/AboutMe';
import MyBlogs from './components/MyBlogs/MyBlogs';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="projectDetails/:projectId" element={<ProjectsDetails />} />
          <Route path="about" element={<AboutMe />} />
          <Route path="blogs" element={<MyBlogs />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
