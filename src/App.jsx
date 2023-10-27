import { useRoutes } from "react-router-dom"
import routes from "./routes"
import "./App.scss"

// components
import Topbar from "./components/Topbar/Topbar"
import Sidebar from "./components/Sidebar/Sidebar"

function App() {
  const router = useRoutes(routes)
  return (
    <div className="app">
      <Topbar />
      <main className="main">
        <Sidebar />
        {router}
      </main>
    </div>
  )
}

export default App
