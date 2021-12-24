console.log('JS OK');

/*stampa i numeri da 1 a 100, divisibili per 3 = console.log('fizz'), 
divisibili per 5 = console.log('buzz'), 
divisibili per entrambi = console.log('fizzbuzz') */



//stampa i numeri da 1 a 100
for (let i = 1; i <= 100; i++) {
    //divisibile per tre && cinque = fizzbuzz
    if ((i % 5 == 0) && (i % 3 == 0)) {
        console.log('fizzbuzz');
        //divisibile per cinque = buzz
    } else if  (i % 5 == 0) {
        console.log('buzz');
        //divisibile per tre = fizz
    } else if (i % 3 == 0) {
        console.log('fizz')
    } else {
        console.log(i);
    }
}
