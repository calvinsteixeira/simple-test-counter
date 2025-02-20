import { BrowserRouter, Routes, Route } from "react-router";
import Home from "@/pages/index";

export default function RouterComponent() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
