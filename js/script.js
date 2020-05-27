// FizzBuzz
// Scrivi un programma che stampi i numeri da 1 a 100,
// ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
// Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.

// ES CON IL FOR

for (var i = 1; i <= 100; i++) {
  if (i%3==0 && i%5==0) {
    document.writeln("fizzbuzz" + "<br>");
  }else if (i%3==0) {
    document.writeln("fizz"+ "<br>");
  }else if (i%5==0) {
    document.writeln("buzz"+ "<br>");
  }else {
    document.writeln(i + "<br>");
  }
};

//ES CON WHILE
// var i = 1;
//
// while ( i <=100 ) {
//   if (i%3==0 && i%5==0) {
//     document.writeln("fizzbuzz" + "<br>");
//   }else if (i%3==0) {
//     document.writeln("fizz"+ "<br>");
//   }else if (i%5==0) {
//     document.writeln("buzz"+ "<br>");
//   }else {
//     document.writeln(i + "<br>");
//   }
//   i++;
// };
