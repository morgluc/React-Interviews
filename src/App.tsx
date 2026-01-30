import ClassComponent from './components/ClassComponent'
import HooksComponent from './components/HooksComponent'
import './App.css'

function App() {
  return (
    <div className="App">
      <h1>React Components: Class vs Hooks</h1>
      <div className="components-container">
        <ClassComponent />
        <HooksComponent />
      </div>
    </div>
  )
}

export default App
