// Number('0x77') === 0x77 ==> true
// Number('077') === 077 ==> false
// Number(' 12') ==> 12
// isNaN(' ') ==> false
// +'' ==> 0
// .1 + .2 == .3 ==> false
// 9007199254740992 + 1 == 9007199254740992 ==> true
// 9007199254740992 + 2 == 9007199254740992 ==> false
// 0 === +0 ==> true
// +0 === -0 ==> true
// 1 / '2' ==> 0.5
// 1 / 0 ==> Infinity
// 1 / -0 ==> -Infinity
// Infinity / 6 ==> Infinity
// Infinity / -256 ==> -Infinity
// Infinity / Infinity ==> NaN
// 0 / 0 ==> NaN
// +true ==> 1
// +false ==> 0
// +null ==> 0
// +undefined ==> NaN
// parseInt('.2') ==> NaN
// parseInt('077a') ==> 77
// parseInt('0x77a') ==> 1914
// parseInt('I’m the best value - said Infinity.') ==> NaN
// parseFloat('I’m the best value - said Infinity.') ==> NaN
// parseInt('Infinity is the best value!') ==> NaN
// parseFloat('Infinity is the best value!') ==> Infinity
// parseFloat('12.78ff') ==> 12.78



// "" + 1 + 0 === "10"
// The "+" operator, when adding a string and a number, converts the number to a string.
// Also performs actions one by one. First "" + 1 got "1", then "1" + 0 got "10"


// "" - 1 + 0 === -1
// The "-" operator converts a string to a number. So " " it converts to 0 and performs math.


// true + false === 1
// Boolean will convert operators to numbers. true - 1, false - 0. 1 + 0 === 1


// 6 / "3" === 2
// When divided, converts a string to a number


// "2" * "3" === 6
// When multiplied, the string converts to a number


// 4 + 5 + "px" === "9px"
// Performs actions in stages. 4 + 5 will be 9, then when added to the string, the number 9 will be converted to a string and will receive "9px"


// "$" + 4 + 5 === "$45"
// Performs actions in stages. The string "$" when added to a number, the type of the number will change to a string, received "$4", will perform the same actions with "$4" + 5 and received "$45"


// "4" - 2 === 2
// When minus, the string converts to a number


// "4px" - 2 ==> NaN
// with a minus, it will try to turn the string into a number, get NaN, NaN - 2 === NaN


// 7 / 0 === Infinity
// JavaScripts logic:)


// "-9 " + 5 === "-95"
// "-9" is a string. The + operator in this case converts the number to a string.


// " -9 " - 5 === -13
// When minus, the string converts to a number


// null + 1 === 1
// When converting to number null === 0


// undefined + 1 ==> NaN
// Math action with undefined gives the answer NaN
