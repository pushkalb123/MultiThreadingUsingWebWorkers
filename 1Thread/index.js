
setInterval(() => {
    const card = document.getElementById('card')
    if(card.classList.contains('flipped')) {
        card.classList.remove('flipped')
    } else {
        card.classList.add('flipped')
    }
},1000)


function calculateSum() {
    let sum = 0

    for(let i=0; i<=1000000000; i++) {
        //Generate random between 1-9 and add to sum
        sum += Math.floor(Math.random() * 9)
    }
    const element = document.getElementById('calculate')
    element.innerText = sum.toString()
}
