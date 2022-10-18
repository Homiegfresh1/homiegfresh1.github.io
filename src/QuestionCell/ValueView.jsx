import { useContext } from "react";
import { QuestionWindowContext } from "../QuestionBoard";

const ValueView = ({ value, question, answer }) => {
    const windowContext = useContext(QuestionWindowContext);

    const onClickFunc = () => {
        windowContext.setWindowVisible(true);
        windowContext.setWindowQuestion(question);
        windowContext.setWindowAnswer(answer);
    }

    return (
        <div onClick={() => onClickFunc()}>${value}</div>
    );
}

export default ValueView;