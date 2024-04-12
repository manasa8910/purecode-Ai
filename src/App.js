import React from "react";
import AdminLayout from "./components/AdminLayout";
import { Toaster } from "sonner";
import "./assets/css/style.css";
import AdminOrders from "./components/AdminOrders";
import AppProvidersWrapper from "./components/AppProvidersWrapper";
import BackToTop from "./components/BackToTop";

function App() {
  return (
    <AppProvidersWrapper>
      <AdminLayout>
        <AdminOrders />
      </AdminLayout>

      <BackToTop />
      <Toaster richColors />
    </AppProvidersWrapper>
  );
}

export default App;
