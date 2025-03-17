import React, { useState } from "react";

export function StartAttempt(): React.JSX.Element {
    const [numAttempts, setNumAttempts] = useState<number>(4);
    const [inProgress, setInProgress] = useState<boolean>(false);

    return (
        <div>
            <button
                onClick={() => {
                    setInProgress(true);
                    setNumAttempts(numAttempts - 1);
                }}
                disabled={inProgress || numAttempts === 0}
            >
                Start Quiz
            </button>
            <button
                onClick={() => {
                    setInProgress(false);
                }}
                disabled={!inProgress}
            >
                Stop Quiz
            </button>
            <button
                onClick={() => {
                    setNumAttempts(numAttempts + 1);
                }}
                disabled={inProgress}
            >
                Mulligan
            </button>
            <p>{numAttempts}</p>
        </div>
    );
}
