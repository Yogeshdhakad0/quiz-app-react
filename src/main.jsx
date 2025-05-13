// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { QuizProvider } from './Component/quizcontext.jsx'
createRoot(document.getElementById('root')).render(
<QuizProvider> 
 {/* <StrictMode> */}
    <App />
  {/* </StrictMode>, */}
  </QuizProvider>

)
