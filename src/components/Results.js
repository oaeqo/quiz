import "./Results.css";

const Results = ({score,onRestart}) => {
  return (
    <div className="results">
      <p>퀴즈 종료</p>
      <img src='./images/gray.png'></img>
      <p>최종점수 : {score}점</p>
      <button onClick={onRestart}>다시 도전하기</button>
    </div>
  );
};

export default Results;