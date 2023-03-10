import About from "./Main/About";
import ContactUs from "./Main/ContactUs";
import Home from "./Main/Home";
import Courses from "./Main/Courses";
import Career from "./Main/Career";
import JustContact from "./Main/JustContact";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Main/Header";
import Footer from "./Main/Footer";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./Main/GlobalStyle";
import Error from "./extra/Error";
import GoToTop from "./Main/GoToTop";
import ScrollToTop from "./ScrollToTop";
import Terms from "./components/Terms";
import Policy from "./components/Policy";



const App = () => {

  const theme = {
    colors: {
      heading: "rgb(24 24 29)",
      text: "rgb(24 24 29)",
      white: "#fff",
      black: " #212529",
      helper: "#8490ff",
      bg: "rgb(249 249 255)",
      footer_bg: "#0a1435",
      btn: "rgb(98 84 243)",
      border: "rgba(98, 84, 243, 0.5)",
      hr: "#ffffff",
      gradient:
        "linear-gradient(0deg, rgb(132 144 255) 0%, rgb(98 189 252) 100%)",
      shadow:
        "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;",
      shadowSupport: " rgba(0, 0, 0, 0.16) 0px 1px 4px",
    },
    media: { mobile: "768px", tab: "998px" },
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <GoToTop />
      <BrowserRouter>
        <Header />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/career" element={<Career />} />
          <Route path="/contactUs" element={<JustContact />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/terms&Conditions" element={<Terms />} />
          <Route path="/policy" element={<Policy />} />
          <Route path="*" element={<Error />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
