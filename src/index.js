module.exports = function toReadable (number) {
 let answer = [];
 let unit = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
 let unitens = ['ten', 'eleven', 'twelve', 'thirteen','fourteen','fifteen', 'sixteen','seventeen','eighteen',
    'nineteen'];
let tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];


 if(number  < 10){
    if(number == 0){
        return 'zero';
    }
    else{
        return unit[number];
    }
 };

 if(number < 20){
     return unitens[number - 10];
 };

 if(number < 100){
     answer = tens[Math.floor(number/10)] + ' ' + unit[number%10];
     return answer.trim();
 }

 if(number < 1000){
    let a = unit[Math.floor(number / 100)];
    let b = '';
    let c = '';
    if(number%100 >= 10 && number%100 <20){
        b = unitens[Math.floor(number%100%10)];
    }
    else{
        b = tens[Math.floor(number%100/10)];
        c = unit[Math.floor(number%10)];
    }
    if(b == ''){
        answer = a + ' hundred ' + c;
    }
    else{
    answer = a + ' hundred ' + b + ' ' + c;
    }
    return answer.trim();
}


}
