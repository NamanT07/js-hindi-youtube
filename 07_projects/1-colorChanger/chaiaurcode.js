const buttons=document.querySelectorAll('.button');
const body=document.querySelectorAll('body');//
console.log(buttons);

console.log(body);

buttons.forEach((function(button){
    button.addEventListener('click',function(e){
        // console.log(e)
        console.log(e.target)
        switch (e.target.id) {
            case "grey":
                body[0].style.backgroundColor="grey"
                break;
        
            case "yellow":
                body[0].style.backgroundColor="yellow"
                break;
        
            case "blue":
                body[0].style.backgroundColor="blue"
                break;
        
            case "white":
                body[0].style.backgroundColor="white"
                break;

        }
    })
}))
