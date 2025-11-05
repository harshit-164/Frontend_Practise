// Recurrsion:

function abcd(n){
    if(n === 0){
        return;
    }
    console.log(n);
    abcd(n-1);
}
abcd(5);