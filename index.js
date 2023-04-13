FizzBuzz(9807414617);
function FizzBuzz(num){
    num = num + "";
    let val = 0;
    for(let j = 0; j < num.length; j++){
        let unit = parseInt(num[j]);
        val = val + unit;
    }

    for(let i = 1; i <= val; i++){
        if((i % 4 === 0) &&(i % 5 === 0)){
            console.log("FizzBuzz");
        }else if((i % 4 === 0) &&(i % 5 !== 0)){
            console.log("Fizz");
        }else if((i % 4 !== 0) &&(i % 5 === 0)){
            console.log("Buzz");
        }else{
            console.log(i);
        }
    }
}