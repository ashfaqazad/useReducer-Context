import './App.css'
import { CounterDisplay } from './CounterDisplay'
import { CounterProvider } from './CounterProvider'

function App() {

  return (
    <>

<CounterProvider>
  <CounterDisplay />
</CounterProvider>
    </>
  )
}

export default App
