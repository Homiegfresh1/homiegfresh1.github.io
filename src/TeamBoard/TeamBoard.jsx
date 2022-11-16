import { useState } from "react";
import { Button } from "reactstrap";
import TeamScoreCard from "./TeamScoreCard";

const TeamBoard = () => {
    const [teams, setTeams] = useState([]);

    function addTeam() {
        setTeams((teams) => ([...teams, `Team ${teams.length + 1}`]))
    }

    return (
        <>
            <Button onClick={() => addTeam()}>Add Team</Button>
            <br/> <br/>
            {teams.map((name) => { return <TeamScoreCard name={name} /> })}
        </>
    );
}

export default TeamBoard;