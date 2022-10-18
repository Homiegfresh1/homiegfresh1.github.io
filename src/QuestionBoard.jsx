import QuestionCell from "./QuestionCell/QuestionCell";
import "./QuestionBoard.css";
import { createContext, useState } from "react";
import QuestionWindow from "./QuestionCell/QuestionWindow";

export const QuestionWindowContext = createContext({ 
    windowAnswer: null,
    setWindowAnswer: null,
    windowQuestion: null,
    setWindowQuestion: null,
    setWindowVisible: null 
});

const QuestionBoard = () => {
    const [windowVisible, setWindowVisible] = useState(false);
    const [windowQuestion, setWindowQuestion] = useState("");
    const [windowAnswer, setWindowAnswer] = useState("");

    const windowContextValue = {
        windowAnswer,
        setWindowAnswer,
        windowQuestion,
        setWindowQuestion,
        setWindowVisible
    }

    return (
        <QuestionWindowContext.Provider value={windowContextValue}>
            {windowVisible ? <QuestionWindow /> : null}
            <table>
                <thead>
                    <tr>
                        <th>Category 1</th>
                        <th>Category 2</th>
                        <th>Category 3</th>
                        <th>Category 4</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><QuestionCell value={100} question={"Test Question 1"} answer={"Test Answer 1"} /></td>
                        <td><QuestionCell value={100} question={"Test Question 1"} answer={"Test Answer 1"} /></td>
                        <td><QuestionCell value={100} question={"Test Question 1"} answer={"Test Answer 1"} /></td>
                        <td><QuestionCell value={100} question={"Test Question 1"} answer={"Test Answer 1"} /></td>
                    </tr>
                    <tr>
                        <td><QuestionCell value={200} question={"Test Question 2"} answer={"Test Answer 2"} /></td>
                        <td><QuestionCell value={200} question={"Test Question 2"} answer={"Test Answer 2"} /></td>
                        <td><QuestionCell value={200} question={"Test Question 2"} answer={"Test Answer 2"} /></td>
                        <td><QuestionCell value={200} question={"Test Question 2"} answer={"Test Answer 2"} /></td>
                    </tr>
                    <tr>
                        <td><QuestionCell value={300} question={"Test Question 3"} answer={"Test Answer 3"} /></td>
                        <td><QuestionCell value={300} question={"Test Question 3"} answer={"Test Answer 3"} /></td>
                        <td><QuestionCell value={300} question={"Test Question 3"} answer={"Test Answer 3"} /></td>
                        <td><QuestionCell value={300} question={"Test Question 3"} answer={"Test Answer 3"} /></td>
                    </tr>
                    <tr>
                        <td><QuestionCell value={400} question={"Test Question 4"} answer={"Test Answer 4"} /></td>
                        <td><QuestionCell value={400} question={"Test Question 4"} answer={"Test Answer 4"} /></td>
                        <td><QuestionCell value={400} question={"Test Question 4"} answer={"Test Answer 4"} /></td>
                        <td><QuestionCell value={400} question={"Test Question 4"} answer={"Test Answer 4"} /></td>
                    </tr>
                </tbody>
            </table>
        </QuestionWindowContext.Provider>
    );
}

export default QuestionBoard;