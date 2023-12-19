function BankAccount(accountNumber, name, type, balance) {
    this.accountNumber = accountNumber;
    this.name = name;
    this.type = type;
    this.balance = balance || 0;
    this.isActive = true;
  
    this.deposit = function (amount) {
      if (amount > 0) {
        this.balance += amount;
        console.log(`Amount credited. Total balance is ${this.balance}`);
      } else {
        console.log("Please enter a valid amount.");
      }
    };
  
    this.withdraw = function (amount) {
      if (amount > 0 && this.balance >= amount) {
        this.balance -= amount;
        console.log(`${amount} withdrawn. Balance is ${this.balance}`);
      }
    };
  
    this.checkBalance = function () {
      console.log(`${this.accountNumber} has a balance of ${this.balance}`);
    };
  
    this.isActiveAccount = function () {
      return this.isActive;
    };
  }
  
  let acc1 = new BankAccount(56455, "nana", "savings", 545);
  let acc2=new BankAccount(564564,"jjkn","savings",646)
  acc1.withdraw(100)
  
  
  let al=[acc1,acc2]
  tt=0
   function get(){
     for(key of al){
       if(key.isActiveAccount()){
         tt+=key.balance
       }
     }
     return tt
   }
  console.log(get())