import "./GameOver.css";

const GameOver = ({ retry, score }) => {
  return (
    <div>
      <h1>Fim de Jogo</h1>
      <h2>
        A sua Pontação foi <span>{score}</span>
      </h2>
      <button onClick={retry}>Resetar Jogo</button>
    </div>
  );
};

export default GameOver;
