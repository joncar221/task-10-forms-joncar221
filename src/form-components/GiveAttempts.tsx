import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): React.JSX.Element {
    const [numAttempts, setNumAttempts] = useState<number>(3);
    const [numReqAttempts, setNumReqAttempts] = useState<string>("");
    return (
        <div>
            <h3>Give Attempts</h3>
            <Form.Group>
                <Form.Label>Request Attempts:</Form.Label>
                <Form.Control
                    type="number"
                    value={numReqAttempts}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        setNumReqAttempts(event.target.value);
                    }}
                ></Form.Control>
                <div>{numAttempts}</div>
                <Button
                    onClick={() => {
                        setNumAttempts(numAttempts - 1);
                    }}
                    disabled={numAttempts > 0 ? false : true}
                >
                    Use
                </Button>
                <Button
                    onClick={() => {
                        setNumAttempts(
                            numAttempts + (parseInt(numReqAttempts) || 0),
                        );
                    }}
                >
                    Gain
                </Button>
            </Form.Group>
        </div>
    );
}
