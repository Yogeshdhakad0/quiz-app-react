// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { QuizProvider } from './Compontet/context/quizcontext.jsx'

createRoot(document.getElementById('root')).render(

<QuizProvider> 

 {/* <StrictMode> */}
    <App />
  {/* </StrictMode>, */}
  </QuizProvider>

)
