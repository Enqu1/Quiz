import { useState } from "react";
import LoadQuiz from "./LoadQuiz";
import PlayQuiz from "./PlayQuiz";

function App() {
  const [quiz, setQuiz] = useState({});

  return (
    <>
      {Object.keys(quiz).length === 0 ? (
        <LoadQuiz QuizReturn={setQuiz} />
      ) : (
        <PlayQuiz quiz={quiz} />
      )}
    </>
  );
}

export default App;
