const answer = Math.floor(Math.random() * 10 + 1);
console.log(answer);
let guesses = 0;

document.getElementById("submitButton").onclick = () => {
    let guess = document.getElementById("guessPlace").value;
    guesses += 1;
    if( guess == answer) {
        alert("Congulation!🥳🥳 You can guess the Answer"+ guess +" in " +guesses +" times.")
    }else if (guess < answer){
        alert("It too small 😫😛 Try Again")
    }
    else{
        alert("It too large 😔😜 Try Again")
    }
}