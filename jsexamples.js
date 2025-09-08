/*Check whether a student has passed or failed based on marks*/
function checkPassOrFail(marks) {
    if(marks>=40){
        console.log('"Pass"');
    }
    else{
        console.log('"Fail"')
    }
}
let marks=30;
checkPassOrFail(marks)


/*Round off a number to specified decimal places*/
function roundOff(num, ndigits) {
   console.log(num.toFixed(ndigits));
}
let num=8.44444444666666667;
let ndigits=1;
roundOff(num, ndigits) 

/*Convert degrees to radians*/
function degreesToRadians(degrees) {
    let radians=((Math.PI)/180)*degrees
    console.log(radians);
}
let degrees=90;
degreesToRadians(degrees) 