import { Routes, Route  } from 'react-router-dom';
import { Navbar } from "../components/ui/Navbar"
import { MarvelScreem } from '../components/marvel/MarvelScreem';
import { SearchScreem } from '../components/serach/SearchScreem';
import React from 'react';

import { DcScreen } from '../components/Dc/DcScreen';
import { HeroScreem } from '../components/hero/HeroScreem';

export const DaschboardRoutes = () => {
  return (
    <>
        <Navbar/>

        <div className="container">
          <Routes>
              <Route path="marvel" element={<MarvelScreem />} />
              <Route path="dc" element={<DcScreen />} />
              <Route path="search" element={<SearchScreem />} />
              <Route path="hero/:heroeId" element={<HeroScreem />} />

            
              <Route path="/" element={<MarvelScreem />} />
              
          </Routes> 
        </div>
        


    </>
  )
}
