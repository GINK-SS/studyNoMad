import { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [dollar, setDollar] = useState("");
  const [amount, setAmount] = useState(0);
  const [choiceCoinName, setChoiceCoinName] = useState("");
  const [choiceCoinPrice, setChoiceCoinPrice] = useState("");

  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    // 왜 자바스크립트는 위에서부터 아래로 코드 실행하는데 amount 값이 일치하는가
    console.log("셋어마운트 전", amount);
    setAmount(dollar / choiceCoinPrice);
    console.log("셋어마운트 후", amount);
    console.log("전체", dollar, amount, choiceCoinName, choiceCoinPrice);
  }, [dollar, choiceCoinName, amount, choiceCoinPrice]);

  const selectOnChange = (event) => {
    const value = event.target.value;
    setChoiceCoinPrice(value.substring(value.indexOf("$") + 1));
    setChoiceCoinName(value.substring(value.indexOf("(") + 1, value.indexOf(")")));
    console.log("현재 입력한 달러", dollar);
    console.log("현재 바꾼 코인", choiceCoinName);
  };

  // 왜 onChange나 selectOnChange에서는 console.log 제대로 안되는데 useEffect에선 되는가
  const onChange = (event) => {
    if (event.target.value >= 0) {
      setDollar(event.target.value);
    }
  };

  return (
    <div>
      <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <>
          <select onChange={selectOnChange}>
            <option>코인을 선택해주세요!</option>
            {coins.map((coin) => (
              <option key={coin.id}>
                {coin.name} ({coin.symbol}) : ${coin.quotes.USD.price}
              </option>
            ))}
          </select>
          <h2>몇 달러 가지고 오셨어요?</h2>
          <input value={dollar} type="number" onChange={onChange}></input>
          <h2>{dollar ? `${dollar} 달러로 ${amount} ${choiceCoinName} 살 수 있습니다.` : null}</h2>
        </>
      )}
    </div>
  );
}

export default App;
