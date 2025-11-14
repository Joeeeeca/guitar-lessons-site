import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Helmet } from "react-helmet"
import { ScrollToTop } from "@/components/ScrollToTop"
import Header from "./components/header"
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Lessons from "./pages/Lessons"
import Footer from "./components/footer"

// ⭐ Global default SEO metadata
function DefaultSEO() {
  return (
    <Helmet>
      {/* Basic meta */}
      <meta name="theme-color" content="#ffffff" />

      {/* Generic fallback title/description (page-specific Helmet will override) */}
      <title>George Capon Guitar Lessons</title>
      <meta
        name="description"
        content="Online guitar lessons with George Capon. Learn acoustic or electric guitar with friendly, structured teaching."
      />

      {/* OG defaults */}
      <meta property="og:site_name" content="George Capon Guitar Lessons" />
      <meta property="og:type" content="website" />
      <meta
        property="og:image"
        content="https://georgecaponguitarlessons.com/social-card.png"
      />

      {/* Twitter defaults */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:image"
        content="https://georgecaponguitarlessons.com/social-card.png"
      />

      {/* PWA */}
      <link rel="manifest" href="/manifest.json" />
    </Helmet>
  )
}

function App() {
  return (
    <Router>
      <DefaultSEO />

      <Header />
      <ScrollToTop />

      <main className="min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/lessons" element={<Lessons />} />
        </Routes>
      </main>

      <Footer />
    </Router>
  )
}

export default App
