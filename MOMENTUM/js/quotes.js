const quotes = [
  {
    quote: "청춘은 사랑을 뜻한다.",
    author: "로버트 브라우닝",
  },
  {
    quote:
      "당신이 누구의 사랑을 받고 있다면 어떠한 희생을 치른다 해도 당신은 그 사랑에 해당하는 값을 치르지는 못한다. 그렇지만 사랑을 사려고 하는 것이라면 작은 희생이라도 할 가치가 없다.",
    author: "L.비트겐슈타인",
  },
  {
    quote: "인생은 언제 어디서나, 공적이든, 사적이든, 의무를 면할 수는 없다.",
    author: "키케로",
  },
  {
    quote:
      "부지런한 사람도 인생의 절반 동안은 게으른 사람보다 더 나은 것이 없다. 왜냐하면 잠들었을 때는 누구나 똑같기 때문이다.",
    author: "아리스토텔레스",
  },
  {
    quote: "세월보다 빠른 것은 없다.",
    author: "오비디우스",
  },
  {
    quote: "낭비는 비애를 가져오고, 슬픔은 절망을 싫어한다.",
    author: "로버트 그린",
  },
  {
    quote:
      "두려워지면 자기가 해야 할 일만 생각하면 된다. 만반의 준비가 갖추어지면 두려워할 필요는 없다.",
    author: "데일 카네기",
  },
  {
    quote:
      "사람은 총명하면 할수록 독특한 인간이 더 많이 있음을 발견하게 되며, 평범한 사람은 사람들 사이의 차이를 발견하지 못한다.",
    author: "블레즈 파스칼",
  },
  {
    quote: "평화는 웃음으로 시작한다.",
    author: "마더 테레사",
  },
  {
    quote: "슬픔이여, 절대 내 이름과 연관되지 않을지어다.",
    author: "이상민",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
