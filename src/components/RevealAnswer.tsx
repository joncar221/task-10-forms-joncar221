import React, { useState } from "react";

export function RevealAnswer(): React.JSX.Element {
    const [textVisible, setTextVisible] = useState<boolean>(false);
    return (
        <div>
            <button
                onClick={() => {
                    setTextVisible(!textVisible);
                }}
            >
                Reveal Answer
            </button>
            {textVisible && <p>42</p>}
        </div>
    );
}
