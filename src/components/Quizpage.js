import { useState } from "react";
import "./Quizpage.css";

const Quizpage = ({ category, quizdata, onFinished }) => {
  const [currentIdx, setCurrentIdx] = useState(0); // 현재 문제 인덱스
  const [score, setScore] = useState(0); // 점수
  const [move, setMove] = useState(0); // 이모티콘의 이동 거리
  
  const quizArr = quizdata.filter((data) => data.category === category);
  const currentQuiz = quizArr[currentIdx];
  
  const totalPages = quizArr.length;  // 총 문제 수
  const totalWidth = 360; // 전체 이동 가능한 너비 (360px)
  const padding = 10; // 좌우 padding 10px
  const contentWidth = totalWidth - 2 * padding; // 실제 콘텐츠 영역 (340px)
  
  // 각 문제를 넘길 때 이동할 거리
  const moveDistance = contentWidth / totalPages;

  // 답을 선택한 경우
  const handleAnswer = (answer) => {
    const result = answer === currentQuiz.correct ? score + 10 : score;
    
    // 문제를 넘길 때
    if (currentIdx + 1 < quizArr.length) {
      setScore(result);
      setCurrentIdx(currentIdx + 1);
      setMove(move + moveDistance); // 이모티콘을 이동시킴
    } else {
      // 퀴즈 종료 상태
      onFinished(result);
    }
  };

  return (
    <div className="quiz-page">
      <h2>{category} 퀴즈</h2>
      {/* <p> */}
        {/* <strong>문제 {currentIdx + 1} / {quizArr.length} </strong> */}
      {/* </p> */}

      {/* 선 영역 */}
      <div className="line-container">
        <div className="line"></div>
        
        {/* 이모티콘이 선을 따라 이동 */}
        <div 
          className="emoji-container" 
          style={{
            transform: `translateY(-50%) translateX(${move}px)`, 
            transition: 'transform 0.5s ease-in-out',
            position: 'absolute',
            top: '50%', // 이모티콘의 상단 위치
            left: '0px', // 이모티콘의 좌측 위치
            transform: `translateY(-50%) translateX(${move}px)` // 세로로 중앙 정렬 후 X축 이동
          }}
        >
          <span className="emoji"><img src="./images/cl.png"></img></span>
        </div>
      </div>

      <p>Q. {currentQuiz.question}</p>

      <div className="choices">
        {currentQuiz.choices.map((txt, idx) => {
          return (
            <button key={idx} onClick={() => handleAnswer(txt)}>
              {txt}
            </button>
          );
        })}
      </div>
      
      <p>점수 : {score}</p>
    </div>
  );
};

export default Quizpage;



// import { useState } from "react";
// import "./Quizpage.css";

// const Quizpage = ({category,quizdata,onFinished}) => {
//   const [currentIdx, setCurrentIdx] = useState(0);
//   const [score,setScore] = useState(0);
//   const quizArr = quizdata.filter( (data) => {
//     return data.category === category;
//   });
//   const currentQuiz = quizArr[currentIdx];
//   const handleAnswer = (answer)=>{
//     // if( answer === currentQuiz.correct ){
//     //   setScore( score+10 );
//     // }
//     const result = (answer === currentQuiz.correct) ? score+10 : score;
//     if( currentIdx+1 < quizArr.length) {
//       setScore(result);
//       setCurrentIdx(currentIdx+1);
//     } else {
//       // 종료상태
//       onFinished(result);
//     }
//   }
//   return (
//     <div className="quiz-page">
//       <h2>{category} 퀴즈</h2>
//        {/* 1번째 p 태그로 문제 제출, div 태그 밑에 button */}
//         <p><strong>문제 {currentIdx+1} / {quizArr.length} </strong></p>
//       <p> Q. {currentQuiz.question}</p>
//       <div className="choices">
//         {
//           currentQuiz.choices.map((txt,idx)=>{
//             return <button key={idx} onClick={()=>{handleAnswer(txt)}}>{txt}</button>
//           })
//         }
//       </div>
//       <p>점수 : {score}</p>
//     </div>
//   );
// };

// export default Quizpage;