import './App.css'
import LookerStudioEmbed from './components/Lookerstudio'

function App() {
  const lookerStudioUrl = 'https://lookerstudio.google.com/embed/reporting/d8e00f8f-0d7b-4be3-8fb4-079882f1d145/page/6zXD';

  return (
    <>
    <div className="App">
      <header className="App-header">
        <h1>Looker Studio Report</h1>
      </header>
      <LookerStudioEmbed embedUrl={lookerStudioUrl} />
    </div>
    </>
  )
}

export default App
