import inquirer from "inquirer";

let myBalance = 10000; // Dollar
let myPin = 7090; // code

let pinAnswer = await inquirer.prompt({
  name: "pin",
  message: "Enter your Pin",
  type: "number",
});

if (pinAnswer.pin === myPin) {
  console.log("your pin is correct !");

  let operationAns = await inquirer.prompt([
    {
      name: "operatins",
      message: "select the operation",
      type: "list",
      choices: ["withdraw", "fast cash", "check balance"],
    },
  ]);

  if (operationAns.operatins === "withdraw") {
    let amountAns = await inquirer.prompt([
      {
        name: "amount",
        message: "Enter your amount",
        type: "number",
      },
    ]);

    if (amountAns.amount > myBalance){console.log("insuffiient amount")}

    else {
      (myBalance -= amountAns.amount)
      console.log(`your remaining balance is ${myBalance}`);
    }
 }

 else if(operationAns.operatins === "fast cash"){
    let fast = await inquirer.prompt([{
        name:"fastCash",
        message:"select fastCash smount",
        type:"list",
        choices:["1000","2000","4000","12000"]
    }]);
    if(fast.fastCash > myBalance){
        console.log("your atm is out of reach")
    }
    else {(myBalance -= fast.fastCash)
        console.log(`you have succesfully withdrawn ${fast.fastCash}
         your remaining is ${myBalance}`)
    }
 }
  else if (operationAns.operatins === "check balance") {
    console.log(`your balance is ${myBalance}`);
  }
} else {
  console.log("your pin is incorrect");
}
