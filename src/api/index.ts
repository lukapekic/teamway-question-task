import { Answers } from "../common/hooks/types";
import { questions } from "./data";
import { getPersonalityType } from "./utils";

export const getQuestions = () => Promise.resolve([...questions]);
export const submitQuestions = (answers: Answers) => {
  const personality = getPersonalityType(answers);
  return Promise.resolve(
    new Response(JSON.stringify(personality), { status: 200 })
  );
};
