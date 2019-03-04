function bankAccount(firstName,lastName,middleName,accountType,balance){ 
    this.firstName = firstName;
    this.lastName = lastName; 
    this.middleName = middleName;
    this.accountType = accountType;
    this.balance = balance
    this.status = "open";    
    if(this.balance<100){
        console.log("Sorry, you need at least 100 dollars to open a bank account. This account will be closed until funds are deposited.")
        this.status = "closed";
    }    

}
bankAccount.prototype.viewAccount = function(){
    console.log(this.firstName, this.lastName, this.middleName, this.accountType, this.balance, this.status)
}


bankAccount.prototype.depositMoney = function(deposit){
    this.balance = this.balance + deposit; 
    console.log("Your new balance is " + this.balance);
    if(this.balance>0){
        this.status = "open";
    } 
}

bankAccount.prototype.withdrawMoney = function(withdraw){
    this.balance = this.balance - withdraw;
    if(this.balance>0){
        this.status = "open";
    } 
    if(this.balance<0){
        this.balance -= 35; 
        this.status = "frozen"
    }
    console.log("Your new balance is " + this.balance);
}

function Transfer(withdrawAccount, depositAccount, amount){
    withdrawAccount.withdrawMoney(10);
    depositAccount.depositMoney(10);
    console.log(amount + " dollars have been transferred from " + withdrawAccount.firstName + withdrawAccount.lastName + withdrawAccount.accountType +
    "to " + depositAccount.firstName + depositAccount.lastName + depositAccount.accountType)
}
user1Checking = new bankAccount("Paul","Wu","Guppy", 'Checking', 300.43);
user1Checking.viewAccount();
user1Saving = new bankAccount("Paul","Wu","Guppy", 'Saving', 90);
user1Saving.depositMoney(12);
user1Saving.viewAccount();
Transfer(user1Checking, user1Saving,10);
user1Checking.viewAccount();
user1Saving.viewAccount();
