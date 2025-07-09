import React from 'react';
import Home from '../pages/Home.jsx';
import About from '../pages/About.jsx';
import Project from '../pages/Project.jsx';
import Contact from '../pages/Contact.jsx';
import ProjectAll from '../pages/projects/ProjectAll.jsx';
import ProjectCondoAll from '../pages/projects/project-pages/project-condo/ProjectCondoAll.jsx';
import ProjectCondoLowRise from '../pages/projects/project-pages/project-condo/ProjectCondoLowRise.jsx';
import ProjectCondoHighRise from '../pages/projects/project-pages/project-condo/ProjectCondoHighRise.jsx';
import ProjectHouseAll from '../pages/projects/project-pages/project-house/ProjectHouseAll.jsx';
import ProjectHousing from '../pages/projects/project-pages/project-house/ProjectHousing.jsx';
import ProjectHousePool from '../pages/projects/project-pages/project-house/ProjectHousePool.jsx';
import ProjectHotelAll from '../pages/projects/project-pages/project-hotel/ProjectHotelAll.jsx';

import AstraSkyRiver from '../pages/projects/condominium/high-rise/AstraSkyRiver.jsx';
import AriseCharoenmuang from '../pages/projects/condominium/high-rise/AriseCharoenmuang.jsx';
import WolfHouse from '../pages/projects/house/single-house/WolfHouse.jsx';
import TheAstra from '../pages/projects/condominium/high-rise/TheAstra.jsx';
import AriseMahidol from '../pages/projects/condominium/low-rise/AriseMahidol.jsx';
import PoolVillaSamui from '../pages/projects/house/pool-villa/PoolVillaSamui.jsx';
import BeliveSansai from '../pages/projects/house/housing-project/BeliveSansai.jsx';
import TheNextJedYod from '../pages/projects/condominium/low-rise/TheNextJedYod.jsx';
import TheNextJedYod2 from '../pages/projects/condominium/low-rise/TheNextJedYod2.jsx';
import TheNextRuamChok from '../pages/projects/condominium/low-rise/TheNextRuamChok.jsx';
import Moda from '../pages/projects/condominium/low-rise/Moda.jsx';
import TheRachawong from '../pages/projects/hotel/TheRachawong.jsx';
import SuandokKaew from '../pages/projects/hotel/SuandokKaew.jsx';
import B2Samoeng from '../pages/projects/hotel/B2Samoeng.jsx';

import { createBrowserRouter, RouterProvider } from "react-router"



const router = createBrowserRouter([
      {path: "/",element: <Home />},
      {path: "about", element: <About />},
      {path: "project", element: <Project />},
      {path: "contact", element: <Contact />},
      {path: "projectall", element: <ProjectAll />},
      {path: "projectcondoall", element: <ProjectCondoAll />},
      {path: "projectcondolowrise", element: <ProjectCondoLowRise />},
      {path: "projectcondohighrise", element: <ProjectCondoHighRise />},
      {path: "projecthouseall", element: <ProjectHouseAll />},
      {path: "projecthouse-housing-project", element: <ProjectHousing />},
      {path: "projecthouse-pool-villa", element: <ProjectHousePool />},
      {path: "projecthotelall", element: <ProjectHotelAll />},

      {path: "astra-sky-river", element: <AstraSkyRiver />},
      {path: "arise-charoenmuang", element: <AriseCharoenmuang />},
      {path: "wolf-house", element: <WolfHouse />},
      {path: "the-astra", element: <TheAstra />},
      {path: "arise-mahidol", element: <AriseMahidol />},
      {path: "pool-villa-samui", element: <PoolVillaSamui />},
      {path: "belive-sansai", element: <BeliveSansai />},
      {path: "the-next-jedyod", element: <TheNextJedYod />},
      {path: "the-next-jedyod-2", element: <TheNextJedYod2 />},
      {path: "the-next-ruamchok", element: <TheNextRuamChok />},
      {path: "moda", element: <Moda />},
      {path: "the-rachawong", element: <TheRachawong />},
      {path: "suandok-kaew", element: <SuandokKaew />},
      {path: "b2-samoeng", element: <B2Samoeng />},
    ])

const AppRoutes = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default AppRoutes;