import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import PublicLayout from "../layouts/PublicLayout";
import OwnerLayout from "../layouts/OwnerLayout";
import GuestLayout from "../layouts/GuestLayout";

import HomePage from "../pages/public/HomePage";
import NoclegiPage from "../pages/public/NoclegiPage";
import NoclegDetailPage from "../pages/public/NoclegDetailPage";

import LoginPage from "../pages/auth/LoginPage";

import DashboardPage from "../pages/owner/DashboardPage";
import ObiektyPage from "../pages/owner/ObiektyPage";
import ObiektDetailPage from "../pages/owner/ObiektDetailPage";
import KalendarzPage from "../pages/owner/KalendarzPage";
import PunktyPage from "../pages/owner/PunktyPage";
import GaleriaPage from "../pages/owner/GaleriaPage";
import ProfilPage from "../pages/owner/ProfilPage";

import GuestDashboardPage from "../pages/guest/GuestDashboardPage";
import UlubioneePage from "../pages/guest/UlubioneePage";
import GuestProfilPage from "../pages/guest/GuestProfilPage";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PublicLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/noclegi" element={<NoclegiPage />} />
          <Route path="/noclegi/:id" element={<NoclegDetailPage />} />
        </Route>

        <Route path="/login" element={<LoginPage />} />

        <Route path="/panel" element={<OwnerLayout />}>
          <Route index element={<DashboardPage />} />
          <Route path="obiekty" element={<ObiektyPage />} />
          <Route path="obiekty/:id" element={<ObiektDetailPage />} />
          <Route path="kalendarz" element={<KalendarzPage />} />
          <Route path="punkty" element={<PunktyPage />} />
          <Route path="galeria" element={<GaleriaPage />} />
          <Route path="profil" element={<ProfilPage />} />
        </Route>

        <Route path="/moje" element={<GuestLayout />}>
          <Route index element={<GuestDashboardPage />} />
          <Route path="ulubione" element={<UlubioneePage />} />
          <Route path="profil" element={<GuestProfilPage />} />
        </Route>

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
