//01 Allow only 3 attempts to enter correct password
//   If user gets it right early, stop. If not → “Account locked”.
// let attempts = 1;
// let sucess = false;
// let pass = prompt("Give the password(only 3 attempts):");
// let password = "HarshBhai";
// console.log(pass);

// if(pass === password){
//     sucess = true;
// }

//     while(pass !== password){
//         if(attempts === 3){
//             console.warn("Your Account has been locked!!!");
//             break;
//         }
//         attempts++;
//         pass = prompt(`only ${3-attempts} left; Try Again:`);
//         console.log(pass);
//         if (pass === password){
//             sucess = true;
//         }
//     }

// if (sucess === true){
//     console.log("you logged in.");
// }

//02 Ask user for words until they type “stop”. Count how many times they typed “yes”
//   Loop until "stop" is typed. Count "yes".

// let type = prompt("Give the words!")
// let count = 0;
// console.log(type);

// while(type !== "stop"){
//     type = prompt("Give the words!");
//     console.log(type);
//     if(type === "yes"){
//         count++
//         console.log(count);
//     }
// }
// if(type === "stop"){
//     console.warn("Ended!");
// }


//03 Print numbers divisible by 7 from 1 to 50
//   Use modulo % and loop.

// let min = +prompt("Give Number to start: ");
// let max = +prompt("Give Number to end: ");
// let divisor = +prompt("Give the divisor: ")
// console.log(`number divisible by ${divisor} are: `);

// while(min <= max){
//     if(min % divisor === 0){
//         console.log(min);
//     }
//     min++;
// }

//04 Sum of all odd numbers from 1 to 30
//   Add only odd numbers. Print final sum.
// let i = 1;
// let sum = 0;
// while(i <= 30){
//     if(i%2 !== 0){
//         sum += i;
//     }
//     i++;
// }
// console.log(sum);

//05 Keep asking number until user enters an even number
//   Use while loop. Stop only if input is even.

// let num = +prompt("Enter Any Digit:");
// console.log(num);
// num = Number(num);

// while(num%2 !== 0){
//     num = prompt("Enter Any Digit:");
//     console.log(num);
// }
// if(num%2 === 0){
//     console.log("You Quit!");
// }

//06 Print numbers between two user inputs
//   Input start and end using prompt() → print all between.

// let minN = +prompt("Enter Starting Value");
// let maxN = +prompt("Enter ending Value");

// while(minN <= maxN){
//     console.log(minN);
//     minN++;
// }

//07  Print only first 3 odd numbers from 1 to 20
//    Use loop. Stop with break after 3 odd prints.
// let i = 1;
// let count = 1;

// while(i<=20){
//     if(i%2 !== 0 && count<=3){
//         count++;
//         console.log(i);
//     }
//     i++;
// }

// using break:
// let i = 1;
// let count = 0;
// while(i<=20){
//     if(i%2 !== 0){
//         console.log(i);
//         count++;
//     }
//     if(count === 3) break;
//     i++;
// }

// 08  Ask user 5 numbers. Count how many are positive
//     Use loop + condition + counter.

// let i = 1;
// let count = 0;
// while(i<6){
//    let num = +prompt("give numbers");
//    if(num=>0){
//     count++;
//    }
//    console.log(num)
//    i++;
// }
// console.log(`total positive no. is ${count}`);

// 09  ATM Simulator – Allow 3 withdrawals
//     Start with ₹1000 balance. Ask withdrawal amount 3 times.
//     If enough balance → deduct
//     Else → print “Insufficient balance”

// Galati: hrr baar condition check nhi ho rhi hai sirf ek baar ho rhi hai!
// let i = 1;
// let withdraw = +prompt(`Enter The Amount To Withdraw:`);
// let balance = 1000;

// if(withdraw <= balance){
//     console.log(`₹${withdraw}, deducted`)
// }

// balance -= withdraw;
// console.log("your balance is:₹",balance);

// while(i<=2){
    
//     withdraw = +prompt(`Enter The Amount To Withdraw:`)
//     console.log(`₹${withdraw}, deducted`)
//     balance -= withdraw;
//     console.log("your balance is:₹",balance);
//     i++;
// }

let i = 1;
let balance = 1000;

while(i<=3){
    let withdraw = +prompt(`Enter The Amount To Withdraw:`);

    if(withdraw <= balance){
        balance -= withdraw;
        console.log(`₹${withdraw}, deducted`);
        console.log("your balance is:₹",balance);
    }else{
        console.warn("Insufficient Balance!");
    } 
    i++;
}

