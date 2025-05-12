export const addquiz= async()=>{

try {
    
const  response = await fetch('https://opentdb.com/api.php?amount=10&category=18')
const  data= await  response.json()
console.log(data)
return data
} catch (error) {
    console.log('errorr')
    
}




}