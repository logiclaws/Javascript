const accountId = 144553;
let accountEmail = "abc@google.com"
var accountPassword = "12345"
accountCity = "Manali"
let accountState
/// cannot be changed
//accountId = 2
///
accountEmail = "def@google.com"
accountPassword = 21212121
accountCity = "Kullu"

//console.log(accountId);

/*
Prefer not use var because of issue in block scope and functional scope.
 */

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
