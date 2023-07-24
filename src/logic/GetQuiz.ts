import { ChangeEvent } from "react";

function GetQuiz(e: ChangeEvent<HTMLInputElement>, setQuiz: (arg0: object) => void): object {
    if (!e.target.files) return {};
    const file = e.target.files[0];

    if (file === undefined) return {};

    const reader = new FileReader();

    reader.onload = (event) => {
    if (event.target === null) return;
    setQuiz( JSON.parse(event.target.result as string));
    };

    reader.readAsText(file);

    return {};
}

export default GetQuiz;