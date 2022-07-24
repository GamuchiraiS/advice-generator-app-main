//variables
let adviceId = document.getElementById('adviceId')
let adviceText = document.getElementById('advice')
let generateBtn = document.getElementById('btn')  

//function to randomly generate advice on btn click
async function generateAdvice(){

    //constant URL value for Advice Slip 
    const url = "https://api.adviceslip.com/advice"

    try{
        //fetch response using url
        const response = await fetch(url, {cache: 'no-cache'})
        //assign received data object from response and format to JSON
        const data = await response.json()
        console.log(data)
        //asign id, advice to contents in data object
        const { id, advice } = data.slip
        //assign id to element
        adviceId.innerHTML = "Advice #" + id
        //assign advice to element
        adviceText.innerHTML = '"' + advice + '"'
    } catch(error){
        console.log(error)
    }
}

//call generateAdvice when the button is clicked
generateBtn.addEventListener('click', function(){
    generateAdvice()
})