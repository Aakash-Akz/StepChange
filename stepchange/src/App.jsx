import { useState } from "react";
import "./App.css";
import { Outlet } from "react-router-dom";
import { Toaster, toast } from "sonner";
import Index from "./components/Index";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Toaster richColors position="top-right" />
      <Outlet />
    </>
  );
}

export default App;
