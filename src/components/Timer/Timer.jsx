const Timer = ({ date }) => {
  const time = date.toLocaleTimeString();
  return <p>{time}</p>;
};

export default Timer;
