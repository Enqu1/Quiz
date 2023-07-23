import React, { useState } from "react";

interface Props {
  answers: string[];
}

function ListGroup({ answers }: Props) {
  const [selectedAnswer, setSelectedAnswer] = useState(-1);

  const handleClick = (index: number) => {
    if (index === selectedAnswer) {
      setSelectedAnswer(-1);
      return;
    }
    setSelectedAnswer(index);
  };

  return (
    <ul className="list-group">
      {answers.map((answer, index) => (
        <li
          className={
            index === selectedAnswer
              ? "list-group-item active"
              : "list-group-item"
          }
          onClick={() => handleClick(index)}
        >
          {answer}
        </li>
      ))}
    </ul>
  );
}

export default ListGroup;
