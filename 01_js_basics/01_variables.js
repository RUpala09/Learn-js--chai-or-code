const accountId = 112233;
let accountEmail = "rajU@gmail.com";
var accountPassword = "12345";
accountCity = "Ahmedabad";
let accountState;  // it's called Undefined means not assign the value...

console.log(accountId); // This way take too much time and lines....

// accountId = 11111; // In const we can't changed it one we define or use it...
accountEmail = "r123@gmail.com";
accountPassword = "12121212";
accountCity = "Surat";

/*
Don't use var because
issuse come in Block scope {} & Functional scope (learn soon about this topics...)
*/


console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);

