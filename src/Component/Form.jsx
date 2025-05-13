import React, { useContext, useState } from 'react'
import { useEffect } from 'react'
import { addquiz } from './Fact'
import Quizcontext from './quizcontext'

function Form() {
const {dispatch ,quiz,counter}=useContext( Quizcontext)

const [text,settext]=useState('')
const [Next,setnext]=useState('')
const  onetimeQuiz= async()=>{
  const  data = await addquiz()
  // console.log(data)
console.log(data.results[10])
const redmon = Math.floor(Math.random()*1)

  dispatch({type:'QUESTION_ADD',payload:data.results[redmon]})
  

  
  


}

useEffect(() => {
  onetimeQuiz()
}, [Next])

 console.log(quiz)
 const handleNext=()=>{
   
   
   dispatch({type:'COUNTER'})
   setnext(text)
   
   // if(quiz.correct_answer===text){
     
    // }




  }





  return (
    <div className=" w-auto md:w-130  h-124 bg-white rounded-sm p-5">

 <div className=' w-auto flex align-center justify-center  border-b-4 border-indigo-500 '>
    <h4 className='font-bold my-2'> <span>1</span> of <span>{counter}</span> Question</h4>
 </div>
 <h4>{quiz?.question || "Loading..."}</h4>
 <ul className="space-y-2">
        {quiz?.incorrect_answers?.map((incorrect_answers,index) => (

        <>    
              <li key={index}>
            <button
              onClick={() => settext(incorrect_answers)}
              className={`block w-full px-4 py-2 border rounded-lg 
                ${text === incorrect_answers ? "bg-gray-200" : "bg-white"}`
              }
            >
              {incorrect_answers}
            </button>
          </li>
          </>

        ))}
      </ul>

{/* <h1 
   className={`block w-full px-4 py-2 my-4 border rounded-lg  bg-white text-center `
  }

onClick={(e) => settext(e.target.innerText)}>
  {quiz?.correct_answer} 
</h1> */}

<button    className={`block w-full px-4 py-2 my-4 border rounded-lg  bg-white text-center `
  } onClick={() => settext(quiz?.correct_answer)}>
  {quiz?.correct_answer}
</button>



<button className='block w-full px-4 py-2 my-4 border rounded-lg  bg-amber-700 text-center' onClick={handleNext}> Next</button>

    </div>
  )
}

export default Form
