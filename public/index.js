


async function sendPrompt(prompt){
    console.log(prompt)
    try{
        let promesa =  await fetch(`/sendPrompt?prompt=${prompt}`)
        let response = await promesa.json()
      
        return response
    }
    catch(e){
        console.log(e)
    }
}