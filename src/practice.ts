// BMI calculator
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

console.log(calculateBmi(55, 165));

// Exercise calculator

/* 
If you call the function with parameters [3, 0, 2, 4.5, 0, 3, 1] and 2, it should return:

{ 
  periodLength: 7,
  trainingDays: 5,
  target: 2,
  rating: 2,
  success: false,
  ratingDescription: 'not too bad but could be better',
  average: 1.9285714285714286
}

*/
interface Exercise {
  periodLength: number;
  trainingDays: number;
  average: number;
  rating: number;
  ratingDescription: string;
  success: boolean;
  target: number;
}

// const hours = [3, 4, 3, 2, 3, 2, 0];

function calculatePeriodLength(PeriodLength: number[]): number {
  if (PeriodLength.length > 7 || PeriodLength.length < 7) {
    throw new Error(
      "Length Error: Length should not be less than or more than 7"
    );
  }
  return PeriodLength.length;
}

// console.log("Period Length: ", calculatePeriodLength(hours));

function calculateTrainingDays(TrainingDays: number[]): number {
  let newValues: number[] = [];

  TrainingDays.map((val) => {
    if (val > 0) {
      newValues.push(val);
    }
  });
  console.log(newValues);
  return newValues.length;
}
// console.log("Training Days: ", calculateTrainingDays(hours));

function calculateAverage(Average: number[]): number {
  const result = Average.reduce((total, val) => total + val);
  return result / Average.length;
}

// console.log("Average: ", calculateAverage(hours));

export function displayResult(hours: number[], target: number): Exercise {
  if (calculateAverage(hours) >= 1 && calculateAverage(hours) < 2) {
    return {
      periodLength: calculatePeriodLength(hours),
      trainingDays: calculateTrainingDays(hours),
      target: target,
      rating: 1,
      ratingDescription: "Bad",
      success: false,
      average: calculateAverage(hours),
    };
  } else if (calculateAverage(hours) >= 2 && calculateAverage(hours) < 3) {
    return {
      periodLength: calculatePeriodLength(hours),
      trainingDays: calculateTrainingDays(hours),
      target: target,
      rating: 2,
      ratingDescription: "not too bad but could be better",
      success: false,
      average: calculateAverage(hours),
    };
  } else if (calculateAverage(hours) > 3)
    return {
      periodLength: calculatePeriodLength(hours),
      trainingDays: calculateTrainingDays(hours),
      target: target,
      rating: 3,
      ratingDescription: "Very Good",
      success: true,
      average: calculateAverage(hours),
    };

  return {
    periodLength: calculatePeriodLength(hours),
    trainingDays: calculateTrainingDays(hours),
    target: target,
    rating: 1,
    ratingDescription: "Very Bad",
    success: false,
    average: calculateAverage(hours),
  };
}

try {
  // console.log(displayResult(hours, 2));
} catch (error) {
  console.log(error);
}
