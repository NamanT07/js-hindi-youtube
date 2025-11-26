const form=document.querySelector('form')
//whenever form is submitted it is submitted to server by post or get method 

//  const height=parseInt(document.querySelector('#height').value)
//  const weight=parseInt(document.querySelector('#weight').value)

form.addEventListener('submit',function(e) {
    e.preventDefault();
    const height=parseInt(document.querySelector('#height').value)
    const weight=parseInt(document.querySelector('#weight').value)
    const results=document.querySelector('#results')

    if(height===""||height<0||isNaN(height))
    {
        results.innerHTML=`Please give a valid height ${height}`
    }
    else if(weight===""||weight<0||isNaN(weight))
    {
        results.innerHTML=`Please give a valid height ${weight}`
    }
    else{
        const bmi= (weight/((height*height)/1000)).toFixed(2)
        results.innerHTML=`<span>${bmi}</span>`
    }
        
})
