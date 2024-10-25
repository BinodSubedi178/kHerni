import "./App.css";
import { Header, Footer } from "./components";
import { AllRoutes } from "./routes/AllRoutes";
import { ScrollToTop } from "./components/ScrollToTop";

function App() {
  return (
    <>
      <Header />
      <ScrollToTop />
      <AllRoutes />
      <Footer />
    </>
  );
}

export default App;
