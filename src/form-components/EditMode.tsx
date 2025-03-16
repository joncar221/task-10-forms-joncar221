import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): React.JSX.Element {
    const [editMode, setEditMode] = useState<boolean>(false);
    const [userName, setUserName] = useState<string>("Your Name");
    const [isStudent, setIsStudent] = useState<boolean>(true);

    return (
        <div>
            <h3>Edit Mode</h3>
            <Form.Check
                type="switch"
                label="Edit Mode"
                checked={editMode}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    setEditMode(event.target.checked);
                }}
            />
            {!editMode &&
                (isStudent ?
                    <p>{userName} is a student</p>
                :   <p>{userName} is not a student</p>)}
            {editMode && (
                <Form.Group>
                    <Form.Label>User Name:</Form.Label>
                    <Form.Control
                        value={userName}
                        onChange={(
                            event: React.ChangeEvent<HTMLInputElement>,
                        ) => {
                            setUserName(event.target.value);
                        }}
                    ></Form.Control>
                    <Form.Label>
                        Student
                        <Form.Check
                            type="checkbox"
                            label="Student?"
                            name="student"
                            checked={isStudent}
                            onChange={(
                                event: React.ChangeEvent<HTMLInputElement>,
                            ) => {
                                setIsStudent(event.target.checked);
                            }}
                        />
                    </Form.Label>
                </Form.Group>
            )}
        </div>
    );
}
