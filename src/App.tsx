import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Layout } from './components/layout/Layout'
import { Home } from './pages/HomePage'
import { ProductPage } from './pages/ProductPage'

function App() {

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="/product:id" element={<ProductPage />} />
      </Route>
    </Routes>
  )
}

export default App
