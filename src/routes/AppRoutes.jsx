import React from 'react';
import Home from '../pages/Home.jsx';
import About from '../pages/About.jsx';
import Project from '../pages/Project.jsx';
import Contact from '../pages/Contact.jsx';
import ProjectAll from '../pages/projects/ProjectAll.jsx';
import ProjectCondo from '../pages/projects/ProjectCondo.jsx';
import ProjectHouse from '../pages/projects/ProjectHouse.jsx';
import AstraSkyRiver from '../pages/projects/condominium/high-rise/AstraSkyRiver.jsx';
import AriseCharoenmuang from '../pages/projects/condominium/high-rise/AriseCharoenmuang.jsx';
import WolfHouse from '../pages/projects/house/single-house/WolfHouse.jsx';
import TheAstra from '../pages/projects/condominium/high-rise/TheAstra.jsx';
import AriseMahidol from '../pages/projects/condominium/low-rise/AriseMahidol.jsx';
import PoolVillaSamui from '../pages/projects/house/pool-villa/PoolVillaSamui.jsx';
import BeliveSansai from '../pages/projects/house/housing-project/BeliveSansai.jsx';

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
      {path: "arise-charoenmuang", element: <AriseCharoenmuang />},
      {path: "wolf-house", element: <WolfHouse />},
      {path: "the-astra", element: <TheAstra />},
      {path: "arise-mahidol", element: <AriseMahidol />},
      {path: "pool-villa-samui", element: <PoolVillaSamui />},
      {path: "belive-sansai", element: <BeliveSansai />},

    ])

const AppRoutes = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default AppRoutes;