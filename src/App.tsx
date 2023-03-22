import Payment from './components/Payment'
import './App.css'

const App: React.FC = () => {
  const productAmount = 19.80

  return (
    <div className="App">
      <Payment amount={productAmount} />
    </div>
  )
}

export default App
