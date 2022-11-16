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
                        <th>Characters</th>
                        <th>Plot</th>
                        <th>Quotes</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        {/* Character 1 */}
                        <td><QuestionCell value={100} question={"Test Question 1"} answer={"Test Answer 1"} /></td>
                        {/* Plot 1 */}
                        <td><QuestionCell value={100} question={"Test Question 1"} answer={"Test Answer 1"} /></td>
                        {/* Quotes 1 */}
                        <td><QuestionCell value={100} question={"Test Question 1"} answer={"Test Answer 1"} /></td>
                    </tr>
                    <tr>
                        {/* Character 2 */}
                        <td><QuestionCell value={200} question={"Test Question 2"} answer={"Test Answer 2"} /></td>
                        {/* Plot 2 */}
                        <td><QuestionCell value={200} question={"Test Question 2"} answer={"Test Answer 2"} /></td>
                        {/* Quotes 2 */}
                        <td><QuestionCell value={200} question={"Test Question 2"} answer={"Test Answer 2"} /></td>
                    </tr>
                    <tr>
                        {/* Character 3 */}
                        <td><QuestionCell value={300} question={"Test Question 3"} answer={"Test Answer 3"} /></td>
                        {/* Plot 3 */}
                        <td><QuestionCell value={300} question={"Test Question 3"} answer={"Test Answer 3"} /></td>
                        {/* Quotes 3 */}
                        <td><QuestionCell value={300} question={"Test Question 3"} answer={"Test Answer 3"} /></td>
                    </tr>
                </tbody>
            </table>
        </QuestionWindowContext.Provider>
    );
}

export default QuestionBoard;