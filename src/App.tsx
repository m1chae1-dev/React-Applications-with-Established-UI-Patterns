import Payment from './components/Payment'
import './App.css'

const App: React.FC = () => {
  const productAmount = 3312
  const currentCountry = "JP"

  return (
    <div className="App">
      <Payment amount={productAmount} countryCode={currentCountry} />
    </div>
  )
}

export default App
