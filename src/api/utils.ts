import { Answers } from "../common/hooks/types";
import { PersonalityType } from "./types";

const personalityAnswers = [
  PersonalityType.INTEROVER,
  PersonalityType.EXTROVERT,
  PersonalityType.EXTROVERT,
  PersonalityType.INTEROVER,
];

export const getPersonalityType = (answers: Answers): PersonalityType => {
  const averageAnswerNumber = Object.entries(answers).reduce(
    (previousValue, currentValue) => {
      const maxOccurencies = Math.max(previousValue[1], currentValue[1]);
      return previousValue.includes(maxOccurencies)
        ? previousValue
        : currentValue;
    },
    ["0", 0]
  )[0];

  return personalityAnswers[Number(averageAnswerNumber)];
};
