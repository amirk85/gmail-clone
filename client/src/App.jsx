import React, { useState } from "react";
import MainHeader from "./components/MainHeader";
import SideBar from "./components/SideBar";

export default function App() {
  const [openDrawer, setOpenDrawer] = useState(false);

  function toggleDrawer() {
    setOpenDrawer((prev) => !prev);
  }

  return (
    <div>
      <MainHeader toggleDrawer={toggleDrawer} />
      <SideBar openDrawer={openDrawer} />
    </div>
  );
}
