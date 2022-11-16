import { useState } from "react";
import { Button } from "reactstrap";

const TeamScoreCard = ({ name }) => {
    const [score, setScore] = useState(0);

    return (
        <div style={{ borderRadius: "10px", border: "1px solid black", padding: "5px" }}>
            <h3>{name}</h3>
            <div>Current Score: {score}</div>
            <Button onClick={() => setScore((curScore) => (curScore - 100))}>-100</Button>
            <Button onClick={() => setScore((curScore) => (curScore + 100))}>+100</Button>
        </div>
    );
}

export default TeamScoreCard;