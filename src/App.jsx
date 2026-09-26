// import { useState } from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";

// import LoadingScreen from "./components/LoadingScreen";
// import Navbar from "./components/Navbar";
// import Certifications from "./pages/Certifications";
// import Home from "./pages/Home";
// import About from "./pages/About";
// import Projects from "./pages/Projects";
// import Contact from "./pages/Contact";
// import "./App.css";

// function App() {
//   const [isLoading, setIsLoading] = useState(true);

//   if (isLoading) {
//     return (
//       <LoadingScreen
//         onComplete={() => setIsLoading(false)}
//       />
//     );
//   }

//   return (
//     <BrowserRouter>

//       <Navbar />

//       <Routes>

//         <Route
//           path="/"
//           element={<Home />}
//         />

//         <Route
//           path="/about"
//           element={<About />}
//         />

//         <Route
//           path="/projects"
//           element={<Projects />}
//         />

//         <Route
//           path="/certifications"
//           element={<Certifications />}
//         />

//         <Route
//           path="/contact"
//           element={<Contact/>}
//         />

//       </Routes>

//     </BrowserRouter>
//   );
// }

// export default App;


import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoadingScreen from "./components/LoadingScreen";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Certifications from "./pages/Certifications";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <BrowserRouter>
      {isLoading ? (
        <LoadingScreen
          onComplete={() => setIsLoading(false)}
        />
      ) : (
        <>
          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/certifications" element={<Certifications />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>

          <Footer/>
        </>
      )}
    </BrowserRouter>
  );
}

export default App;