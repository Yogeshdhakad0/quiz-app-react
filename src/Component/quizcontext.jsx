import { useReducer } from "react";
import { createContext } from "react";
import { Quizreduscer } from "./Quizrreduscer";

const quizcontext =createContext()


export const QuizProvider=( {children})=>{

const initalstate={

quiz:{},
counter:0,

}



const [state,dispatch]=useReducer(Quizreduscer,initalstate)



    return<quizcontext.Provider value={{...state,dispatch}}>
    {children}
</quizcontext.Provider>





}


export default quizcontext