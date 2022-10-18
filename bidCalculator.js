// x is defined by the chosen color
// y is defined by the amount and color of the jacks
// -> return x*y -> value that can be bid up to
// special modes : null, null ouvert null hand, null ouvert hand
//  -> return x

const bidCalculatorSkat = (color, ...jacks) => {
  let x, y;
  color = color.toLowerCase();
  jacks = jacks.map(function (item) {
    item = item.toLowerCase();
    return item;
  });

  // Defining x by the color you want to play
  if (color === "grand") {
    x = 24;
  }
  if (color === "clubs") {
    x = 12;
  }
  if (color === "spades") {
    x = 11;
  }
  if (color === "hearts") {
    x = 10;
  }
  if (color === "diamonds") {
    x = 9;
  }
  // defining specials: null, null hand, null ouvert and null ouvert hand
  if (color === "null") {
    return 23;
  }
  if (color === "null hand") {
    return 35;
  }
  if (color === "null ouvert") {
    return 46;
  }
  if (color === "null ouvert hand") {
    return 59;
  }

  // Finding y
  // with 1, play 2
  if (
    (jacks.includes("clubs") && !jacks.includes("spades"))
     ||
    // without 1, play 2
    (!jacks.includes("clubs") && jacks.includes("spades"))
  ) {
    y = 2;
    return x * y;
  }

  // with 2, play 3
  if (
    (jacks.includes("clubs") &&
      jacks.includes("spades") &&
      !jacks.includes("hearts")) 
      ||
    // without 2, play 3
    (!jacks.includes("clubs") && 
    !jacks.includes("spades")
    && jacks.includes("hearts"))
  ) {
    y = 3;
    return x * y;
  }
  // without 3, play 4
  if (
    (!jacks.includes("clubs") &&
      !jacks.includes("spades") &&
      !jacks.includes("hearts") &&
      jacks.includes("diamonds")) 
      ||
      // with 3, play 4
    (jacks.includes("clubs") &&
      jacks.includes("spades") &&
      jacks.includes("hearts") &&
      !jacks.includes("diamonds"))
  ) {
    y = 4;
    return x * y;
  }
  // without 4, play 5
  if (

    (!jacks.length)
      ||
  // with 4, play 5
    (jacks.includes("clubs") &&
      jacks.includes("spades") &&
      jacks.includes("hearts") &&
      jacks.includes("diamonds"))
  ) {
    y = 5;
    return x * y;
  }
};
// checking x
console.log(bidCalculatorSkat("clubs", "clubs", "hearts"));
console.log(bidCalculatorSkat("spades", "clubs", "hearts"));
console.log(bidCalculatorSkat("hearts", "clubs", "hearts"));
console.log(bidCalculatorSkat("diamonds", "clubs", "hearts"));

// checking special modes
console.log(bidCalculatorSkat("null"));
console.log(bidCalculatorSkat("null hand"));
console.log(bidCalculatorSkat("null ouvert", "spades", "diamonds"));
console.log(bidCalculatorSkat("null ouvert hand"));


//checking Jacks
console.log(bidCalculatorSkat("diamonds", "clubs")); 
console.log(bidCalculatorSkat("hearts", "clubs")); 
console.log(bidCalculatorSkat("clubs", "clubs", "spades")); 
console.log(bidCalculatorSkat("clubs", "clubs", "spades", "hearts")); 
console.log(bidCalculatorSkat("clubs", "hearts", "diamonds"));
console.log(bidCalculatorSkat("clubs", "clubs", "spades", "hearts"))
console.log(bidCalculatorSkat("clubs", "clubs", "spades", "hearts", "diamonds"));
console.log(bidCalculatorSkat("grand")); 
