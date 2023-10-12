import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Project from "./pages/Project"
import Layout from "./layouts/layout"

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path=":projectName/:id" element={<Project/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
