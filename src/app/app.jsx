import React from "react";
//
import { AppPages } from "./routes/approutes";
import { HeaderArea } from "./pages/appheaderArea";
import { FooterArea } from "./pages/appfooterArea";
//
function App() {
  return (
    <div className="global-style">
      <HeaderArea />
      <AppPages />
      {/* APP PAGES WITH ROUTES */}
      {/* <FooterArea /> */}
    </div>
  );
}
export default App;
