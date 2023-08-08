
import './App.css'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import ItemGrid from './components/item-grid/ItemGrid'

const App: React.FC = () => {

  return (
    <div className='App'>
      <h1 className='Main-Title'>Filamation</h1>
      <Header />
      <ItemGrid />
      <Footer />
    </div>
  )
}

export default App
