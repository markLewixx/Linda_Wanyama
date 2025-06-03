import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AboutPage from './AboutPage.jsx'
import WorldLifeHomepage from './WorldLifeHomepage.jsx'
import ProjectsPage from './ProjectsPage.jsx'
import ImpactsPage from './ImpactsPage.jsx'
import ContactsPage from './ContactsPage.jsx'
import DonationPage from './DonationPage.jsx'

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WorldLifeHomepage />}></Route>
        <Route path="/about" element={<AboutPage />}></Route>
        <Route path="/projects" element={<ProjectsPage />}></Route>
        <Route path="/impacts" element={<ImpactsPage />}></Route>
        <Route path="/contacts" element={<ContactsPage />}></Route>
        <Route path="/donations" element={<DonationPage />}></Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
