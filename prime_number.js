//Write a function in JS to find the prime factors of any integer. This function should take an integer as a parameter and should return a list of prime factors for that number. Suggest the time complexity of your written function.

//integer is the value for which we are finding prime factors
var integer = 13195;

var primeArray = [];

//find divisors starting with 2

for (i = 2; i < integer/2; i++) {
  if (integer % i == 0) {

    //check if divisor is prime
    for ( j = 2; j <= i / 2; j++) {
      if (i % j == 0) {
        isPrime = false;
      } else {
        isPrime = true;
      }
    }

    //if divisor is prime

    if (isPrime == true) {
      //divide integer by prime factor & factor store in array primeArray
      integer /= i
      primeArray.push(i);
    }
  }
}

for (var k = 0; k < primeArray.length; k++) {
  console.log(primeArray[k]);
}