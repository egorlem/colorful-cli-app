import React from "react";
//
import { AppPages } from "./routes/approutes";
import { HeaderArea } from "./pages/appheaderArea";
import { FooterArea } from "./pages/appfooterArea";

//
function App() {
  return (
    <div className="app">
      <div className="app-header">
        <HeaderArea />
      </div>
      <div className="app-main">
        <AppPages />
      </div>
      <div className="app-footer">
        {/* APP PAGES WITH ROUTES */}
        <FooterArea />
      </div>
    </div>
  );
}
export default App;
