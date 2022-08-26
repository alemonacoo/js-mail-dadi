console.log("Js Ok!")

// Variables: arrays and wins counters
let userArray = [];
let computerArray = [];
let userWinsCounter = 0; 
let computerWinsCounter = 0;


for(let i=0; i < 10; i++){
    //Genera due valori random tra 1 e 6 e li inserisce in posizione 'i' all'interno dei due array
    userArray.push(Math.floor(Math.random() * (7 - 1) + 1));
    computerArray.push(Math.floor(Math.random() * (7 - 1) + 1));

    //Mostra in console il risultato
    console.log(`User:${userArray[i]}`, `Computer:${computerArray[i]}`);

    //Contatori aumentano di 1 ogni vittoria (in caso di parità non succede nulla)
    if (userArray[i] > computerArray[i]){
        userWinsCounter += 1;
        console.log('User Wins!');
    }else if(userArray[i] < computerArray[i]){
        computerWinsCounter += 1;
        console.log('Computer Wins!');
    } else{
        console.log('Draw!!');
    }
}

//Mostra risultati alla fine.
console.log(`RESULTS: User won ${userWinsCounter} times, Computer won ${computerWinsCounter} times!`);






