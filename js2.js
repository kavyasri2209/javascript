let marks = 76;

switch(true) {
    case (marks >= 90 && marks <= 100):
        console.log("A");
        break;
    case (marks >= 75 && marks <= 89):
        console.log("B");
        break;
    case (marks >= 50 && marks <= 74):
        console.log("C");
        break;
    default:
        console.log("Fail");
        break; // You can use break here too
}