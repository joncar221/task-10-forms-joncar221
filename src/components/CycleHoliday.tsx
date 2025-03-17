import React, { useState } from "react";

export function CycleHoliday(): React.JSX.Element {
    type Holiday = "🎄" | "🎃" | "🦃" | "🐇" | "🎆";
    const [holiday, setHoliday] = useState<Holiday>("🎄");
    const alphabeticalHoliday = (holiday: Holiday) => {
        if (holiday === "🎄") {
            setHoliday("🐇");
        } else if (holiday === "🐇") {
            setHoliday("🎆");
        } else if (holiday === "🎆") {
            setHoliday("🎃");
        } else if (holiday === "🎃") {
            setHoliday("🦃");
        } else {
            setHoliday("🎄");
        }
    };
    const timeHoliday = (holiday: Holiday) => {
        if (holiday === "🐇") {
            setHoliday("🎆");
        } else if (holiday === "🎆") {
            setHoliday("🎃");
        } else if (holiday === "🎃") {
            setHoliday("🦃");
        } else if (holiday === "🦃") {
            setHoliday("🎄");
        } else {
            setHoliday("🐇");
        }
    };
    return (
        <div>
            <button
                onClick={() => {
                    alphabeticalHoliday(holiday);
                }}
            >
                Advance by Alphabet
            </button>
            <button
                onClick={() => {
                    timeHoliday(holiday);
                }}
            >
                Advance by Year
            </button>
            <h1>Holiday: {holiday}</h1>
        </div>
    );
}
