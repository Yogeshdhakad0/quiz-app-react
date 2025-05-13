export const Quizreduscer=(state,action)=>{

    switch (action.type) {
        case "QUESTION_ADD":
            return {
                ...state,
                quiz:{ ...action.payload }    
            };
       
        case "COUNTER":
            return {
                ...state,
                counter:state.counter+1 
            };
       

    default:
     return state;
}




}