import GetQuiz from "./logic/GetQuiz";

interface Props {
  QuizReturn: (arg: object) => void;
}

function LoadQuiz({ QuizReturn }: Props) {
  return (
    <>
      <input
        type="file"
        accept=".json"
        id="json"
        onChange={(e) => {
          GetQuiz(e, QuizReturn);
        }}
      ></input>
    </>
  );
}

export default LoadQuiz;
