import ValueView from "./ValueView";

const QuestionCell = ({ value, question, answer }) => {
    return (
        <ValueView value={value} question={question} answer={answer} />
    )
}

export default QuestionCell;