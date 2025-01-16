const quizData = {
  categories: ["저축", "투자", "대출", "보험"],
  quizzes: [
    // 저축 카테고리
    {
      id: 1,
      category: "저축",
      difficulty: "쉬움",
      question: "매달 일정 금액을 정기적으로 예금하는 상품은 무엇인가요?",
      choices: ["적금", "정기예금", "펀드", "대출"],
      correct: "적금"
    },
    {
      id: 2,
      category: "저축",
      difficulty: "보통",
      question: "은행 예금의 이자를 계산할 때 주로 사용하는 기준은?",
      choices: ["복리", "단리", "변동금리", "고정금리"],
      correct: "복리"
    },
    {
      id: 3,
      category: "저축",
      difficulty: "어려움",
      question: "비상금을 예치하기에 적합한 금융 상품은?",
      choices: ["수시입출금 통장", "정기예금", "펀드", "채권"],
      correct: "수시입출금 통장"
    },
    {
      id: 4,
      category: "저축",
      difficulty: "쉬움",
      question: "은행에서 제공하는 상품 중 예금과 대출을 동시에 포함한 상품은?",
      choices: ["마이너스 통장", "적립식 펀드", "통장 정기예금", "정기 적금"],
      correct: "마이너스 통장"
    },
    {
      id: 5,
      category: "저축",
      difficulty: "보통",
      question: "세금우대 저축은 무엇을 줄이기 위한 상품인가요?",
      choices: ["소득세", "부가가치세", "취득세", "재산세"],
      correct: "소득세"
    },

    // 투자 카테고리
    {
      id: 6,
      category: "투자",
      difficulty: "쉬움",
      question: "ETF는 무엇의 약자인가요?",
      choices: [
        "Exchange Traded Fund",
        "Equity Transfer Fund",
        "Economy Trade Fund",
        "Exchange Trade Finance"
      ],
      correct: "Exchange Traded Fund"
    },
    {
      id: 7,
      category: "투자",
      difficulty: "보통",
      question: "주식 시장에서 종합 주가지수를 나타내는 용어는?",
      choices: ["KOSPI", "CPI", "CD", "ETF"],
      correct: "KOSPI"
    },
    {
      id: 8,
      category: "투자",
      difficulty: "어려움",
      question: "분산 투자의 주요 목적은 무엇인가요?",
      choices: [
        "수익률 증가",
        "위험 감소",
        "거래 비용 절감",
        "세금 우대 혜택"
      ],
      correct: "위험 감소"
    },
    {
      id: 9,
      category: "투자",
      difficulty: "쉬움",
      question: "미래의 특정 가격에 매매할 수 있는 권리를 제공하는 금융 상품은?",
      choices: ["옵션", "선물", "스왑", "주식"],
      correct: "옵션"
    },
    {
      id: 10,
      category: "투자",
      difficulty: "보통",
      question: "펀드 투자에서 '매니저의 능력'에 크게 의존하는 유형은?",
      choices: ["액티브 펀드", "패시브 펀드", "ETF", "리츠(REITs)"],
      correct: "액티브 펀드"
    },

    // 대출 카테고리
    {
      id: 11,
      category: "대출",
      difficulty: "쉬움",
      question: "대출 상환 시 매달 동일한 금액을 납부하는 방식은?",
      choices: ["원리금 균등 상환", "원금 균등 상환", "만기 일시 상환", "변동 상환"],
      correct: "원리금 균등 상환"
    },
    {
      id: 12,
      category: "대출",
      difficulty: "보통",
      question: "주택담보대출에서 대출 한도를 결정하는 주요 기준은?",
      choices: ["DSR", "LTV", "DTI", "금리"],
      correct: "LTV"
    },
    {
      id: 13,
      category: "대출",
      difficulty: "어려움",
      question: "대출 금리가 시장 금리에 따라 변동하는 대출은?",
      choices: ["변동금리 대출", "고정금리 대출", "혼합금리 대출", "주택담보대출"],
      correct: "변동금리 대출"
    },
    {
      id: 14,
      category: "대출",
      difficulty: "쉬움",
      question: "소액을 자주 빌려 쓰고 갚는 데 유리한 대출 상품은?",
      choices: ["마이너스 통장 대출", "정기예금 대출", "모기지론", "주택담보대출"],
      correct: "마이너스 통장 대출"
    },
    {
      id: 15,
      category: "대출",
      difficulty: "보통",
      question: "DSR(총부채원리금상환비율)은 무엇을 측정하기 위한 지표인가요?",
      choices: [
        "대출자의 상환 능력",
        "부동산 가치",
        "금리 변동률",
        "은행 수익성"
      ],
      correct: "대출자의 상환 능력"
    },

    // 보험 카테고리
    {
      id: 16,
      category: "보험",
      difficulty: "쉬움",
      question: "자동차 사고 시 보상받을 수 있는 보험은?",
      choices: ["자동차보험", "생명보험", "화재보험", "실손보험"],
      correct: "자동차보험"
    },
    {
      id: 17,
      category: "보험",
      difficulty: "보통",
      question: "보험료를 일정 금액 이상 내지 않으면 효력이 정지되는 기간은?",
      choices: ["유예기간", "면책기간", "납입기간", "보장기간"],
      correct: "유예기간"
    },
    {
      id: 18,
      category: "보험",
      difficulty: "어려움",
      question: "질병 발생 시 치료비를 보장하는 보험은?",
      choices: ["실손보험", "연금보험", "화재보험", "자동차보험"],
      correct: "실손보험"
    },
    {
      id: 19,
      category: "보험",
      difficulty: "쉬움",
      question: "보험 계약자가 사망했을 때 보험금을 지급하는 보험은?",
      choices: ["생명보험", "화재보험", "실손보험", "연금보험"],
      correct: "생명보험"
    },
    {
      id: 20,
      category: "보험",
      difficulty: "보통",
      question: "보험료는 가입자가 어떤 요소에 따라 달라지나요?",
      choices: ["연령", "건강 상태", "보장 금액", "모두 해당"],
      correct: "모두 해당"
    }
  ]
};

export default quizData;