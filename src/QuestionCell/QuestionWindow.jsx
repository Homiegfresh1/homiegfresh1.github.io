import { useContext, useEffect, useRef, useState } from "react";
import { Button, Col, Row } from "reactstrap";
import { QuestionWindowContext } from "../QuestionBoard";
import "../QuestionBoard.css";

export const QuestionStateTypes = {
    Question: "Question",
    Answer: "Answer"   
}

const QuestionWindow = () => {
    const windowContext = useContext(QuestionWindowContext);
    const [questionState, setQuestionState] = useState(QuestionStateTypes.Question)

    const windowHeader = () => {
        var actions = [];

        if (questionState == QuestionStateTypes.Question) {
            actions.push(<Button onClick={() => windowContext.setWindowVisible(false)}>Back</Button>);
            actions.push(<Button onClick={() => setQuestionState(QuestionStateTypes.Answer)} style={{float: "right"}}>Answer</Button>);
        }
        else {
            actions.push(<Button onClick={() => { setQuestionState(QuestionStateTypes.Question) }}>Back</Button>);
            actions.push(<Button onClick={() => windowContext.setWindowVisible(false)} style={{float: "right"}}>Close</Button>)
        }

        return actions;
    }

    return (
        <div className="questionWindow">
            <div className="questionWindowActions">
                <Row>
                    {windowHeader().map((action) => {
                        return (
                            <Col>
                                {action}
                            </Col>
                        );
                    })}
                </Row>
            </div>
            <div className="questionWindowContent">
                {questionState == QuestionStateTypes.Question ? windowContext.windowQuestion : windowContext.windowAnswer}
            </div>
        </div>
    );
}

export default QuestionWindow;