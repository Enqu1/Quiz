interface Props {
  answers: string[];
  selectedAnswer: number;
  setSelectedAnswer: (index: number) => void;
}

function ListGroup({ answers, selectedAnswer, setSelectedAnswer }: Props) {
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
          key={index}
        >
          {answer}
        </li>
      ))}
    </ul>
  );
}

export default ListGroup;
