

/*right angle triangle*/
let rows = 5; 

for (let i = 1; i <= rows; i++) {
  let stars = '';
  for (let j = 1; j <= i; j++) {
    stars += '*';
  }
  console.log(stars);
}

/*square*/

for (let i = 1; i < 6; i++) {
    for (let j = 1; j < 6; j++) {
        process.stdout.write("*");
    }
    process.stdout.write("\n");
}

/*square*/
for (let i=1;i<6;i++){
    for (let j=1;j<=i;j++){
        process.stdout.write("*");
    
    }
    process.stdout.write("\n");
}