import React from 'react';
import Home from '../pages/Home.jsx';
import About from '../pages/About.jsx';
import Project from '../pages/Project.jsx';
import Contact from '../pages/Contact.jsx';
import ProjectAll from '../pages/projects/ProjectAll.jsx';
import ProjectCondo from '../pages/projects/ProjectCondo.jsx';
import ProjectHouse from '../pages/projects/ProjectHouse.jsx';
import AstraSkyRiver from '../pages/projects/condominium/high-rise/AstraSkyRiver.jsx';
import { createBrowserRouter, RouterProvider } from "react-router"



const router = createBrowserRouter([
      {path: "/",element: <Home />},
      {path: "about", element: <About />},
      {path: "project", element: <Project />},
      {path: "contact", element: <Contact />},
      {path: "projectall", element: <ProjectAll />},
      {path: "projectcondo", element: <ProjectCondo />},
      {path: "projecthouse", element: <ProjectHouse />},
      {path: "astra-sky-river", element: <AstraSkyRiver />},
    ])

const AppRoutes = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default AppRoutes;