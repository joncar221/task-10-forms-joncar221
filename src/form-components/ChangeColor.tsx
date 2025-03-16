import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function ChangeColor(): React.JSX.Element {
    const colors: string[] = [
        "red",
        "blue",
        "green",
        "yellow",
        "orange",
        "purple",
        "black",
        "pink",
    ];
    const [chosenColor, setChosenColor] = useState<string>(colors[0]);
    function updateChosenColor(event: React.ChangeEvent<HTMLInputElement>) {
        setChosenColor(event.target.value);
    }

    return (
        <div>
            <h3>Change Color</h3>
            {colors.map((color: string, key) => {
                return (
                    <Form.Check
                        inline
                        key={key}
                        type="radio"
                        value={color}
                        checked={chosenColor === color}
                        onChange={updateChosenColor}
                        label={color}
                        style={{ backgroundColor: color }}
                    />
                );
            })}
            The color is{" "}
            <div
                data-testid="colored-box"
                style={{ backgroundColor: chosenColor }}
            >
                {chosenColor}
            </div>
            .
        </div>
    );
}
