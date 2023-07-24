import { useState } from "react";
import ListGroup from "./components/ListGroup";

type Info = {
  name: string;
  questions: number;
};

type Question = {
  question: string;
  answers: string[];
  correctAnswer: number;
};

type Quiz = {
  info: Info;
  questions: Question[];
};

interface Props {
  quiz: object;
}

function PlayQuiz({ quiz }: Props) {
  const [qIndex, setQIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(-1);
  const [correctAnswers, setCorrectAnswers] = useState(0);

  const handleClick = () => {
    if (selectedAnswer === -1) return;

    if (selectedAnswer === (quiz as Quiz).questions[qIndex].correctAnswer) {
      setCorrectAnswers(correctAnswers + 1);
    }

    setQIndex(qIndex + 1);
    setSelectedAnswer(-1);
  };

  console.log((quiz as Quiz).info.questions <= qIndex);

  return (
    <>
      <h2>{correctAnswers + "/" + (quiz as Quiz).info.questions}</h2>
      {(quiz as Quiz).info.questions > qIndex ? (
        <>
          <h1>{(quiz as Quiz).questions[qIndex].question}</h1>
          <ListGroup
            answers={(quiz as Quiz).questions[qIndex].answers}
            selectedAnswer={selectedAnswer}
            setSelectedAnswer={setSelectedAnswer}
          />
          <button
            type="button"
            onClick={() => {
              handleClick();
            }}
          >
            Next
          </button>
        </>
      ) : (
        <></>
      )}
    </>
  );
}

export default PlayQuiz;
