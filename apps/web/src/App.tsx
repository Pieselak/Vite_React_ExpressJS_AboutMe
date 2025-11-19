import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import { HomePage } from "@/app/modules/User/Home/Home.page.tsx";
import { AboutMePage } from "@/app/modules/User/AboutMe/AboutMe.page.tsx";
import { MyProjectsPage } from "@/app/modules/User/MyProjects/MyProjects.page.tsx";
import { MyGlucosePage } from "@/app/modules/User/MyGlucose/MyGlucose.page.tsx";
import { NotFoundPage } from "@/app/modules/NotFound/NotFound.page.tsx";

function App() {
  return (
    <Routes>
      <Route index element={<Navigate to="home" />} />
      <Route path="home" element={<HomePage />} />
      <Route path="aboutme" element={<AboutMePage />} />
      <Route path="projects">
        <Route index element={<MyProjectsPage />} />
        <Route path=":projectId" element={<MyProjectsPage />} />
      </Route>
      <Route path="sugar" element={<MyGlucosePage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
