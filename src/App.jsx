import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

import "./App.css";
import MainLayout from "./layout/MainLayout";
import HomePage from "./pages/HomePage";
import CondRenderPage from "./pages/CondRenderPage";
import MapPage from "./pages/MapPage";
import OnClickButtonPage from "./pages/OnClickButtonPage";
import OnChangeInputPage from "./pages/OnChangeInputPage";
import NotFoundPage from "./pages/NotFoundPage";
import PracticePage from "./pages/PracticePage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path="/conditional-render" element={<CondRenderPage />} />
      <Route path="/map()" element={<MapPage />} />
      <Route path="/onclick-button" element={<OnClickButtonPage />} />
      <Route path="/onchange-input" element={<OnChangeInputPage />} />
      <Route path="*" element={<NotFoundPage />} />
      <Route path="/practice" element={<PracticePage />} />
    </Route>
  )
);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
