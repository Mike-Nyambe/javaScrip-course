let dolphinsAverageScore = (97 + 112 + 101) / 3;
let koalasAverageScore = (109 + 95 + 106) / 3;
const minimumScore = 100;
if (
  dolphinsAverageScore > koalasAverageScore &&
  dolphinsAverageScore >= minimumScore
) {
  console.log(
    `Dolphins won with ${dolphinsAverageScore} average score over the Koala with ${koalasAverageScore} average score`
  );
} else if (
  dolphinsAverageScore < koalasAverageScore &&
  koalasAverageScore >= minimumScore
) {
  console.log(
    `Dolphins lost with ${dolphinsAverageScore} average score to the Koala with ${koalasAverageScore} average score`
  );
} else if (
  dolphinsAverageScore === koalasAverageScore &&
  koalasAverageScore >= minimumScore &&
  dolphinsAverageScore >= minimumScore
) {
  console.log(
    `There was a tie between the Dolphins with ${dolphinsAverageScore} average score and the Koalas with ${koalasAverageScore} average score`
  );
} else {
  console.log(`Seems no team had an average greater or equal to 100:`);
}
