import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "motion/react";
import SideBar from './SideBar.tsx'
import HomePage from './ToDo.tsx'
import CalendarPage from './Calendar.tsx'

function Router(){
  const location = useLocation();
  return (
    <div className="app_layout">
        <SideBar/>
      <div className="content">
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/home" element={<HomePage />} />
          <Route path="/calendar" element={<CalendarPage />} />
        </Routes>
        </AnimatePresence>
        </div>
    </div>
  );
}

export default Router;