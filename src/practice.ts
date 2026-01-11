function calculateBmi(weight: number, height: number): string {
  const result = (weight / Math.pow(height, 2)) * 10000;
  console.log(result);

  if (result < 16.0) {
    return "Underweight (Severe thinness)";
  } else if (result > 16.0 && result < 17.0) {
    return "Underweight (Moderate thinness)";
  } else if (result > 17.0 && result < 18.5) {
    return "Underweight (Moderate thinness)";
  } else if (result > 18.5 && result < 25) {
    return "Normal range";
  }
  return "No Data Found";
}

console.log(calculateBmi(82, 164));

// Exercise calculator

/* 
If you call the function with parameters [3, 0, 2, 4.5, 0, 3, 1] and 2, it should return:

{ 
  periodLength: 7,
  trainingDays: 5,
  rating: 2,
  success: false,
  ratingDescription: 'not too bad but could be better',
  target: 2,
  average: 1.9285714285714286
}
*/
interface Exercise {
  periodLength: number;
  trainingDays: number;
  success: boolean;
  rating: number;
  ratingDescription: string;
  target: number;
  average: number;
}

function calculatePeriodLength(Periodlength: number[]) {
  return Periodlength.length;
}

console.log("Period Length: ", calculatePeriodLength([5, 2]));

function calculateTrainingDays(trainingdays: number[]) {
  let newValues: number[] = [];

  trainingdays.map((val) => {
    if (val > 0) {
      newValues.push(val);
    }
  });
  console.log(newValues);
  return newValues.length;
}
console.log("Training Days: ", calculateTrainingDays([5, 2, 0, 4, 0]));
