import React, { useState } from "react";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): React.JSX.Element {
    const [type, setType] = useState<QuestionType>("short_answer_question");

    return (
        <div>
            <button
                onClick={() => {
                    type === "short_answer_question" ?
                        setType("multiple_choice_question")
                    :   setType("short_answer_question");
                }}
            >
                Change Type:
                {type === "multiple_choice_question" ?
                    "Multiple Choice"
                :   "Short Answer"}
            </button>
        </div>
    );
}
