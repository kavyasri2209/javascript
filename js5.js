let age= 98;
try {
  if(isNaN(age)){
    throw "Age must be a number";
  }

  if(age<0){
    throw "Age cannot be negative";
  }
  console.log("Age is valid.");
}
catch(err){
    console.log("error:",err)
}
