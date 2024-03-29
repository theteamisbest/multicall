import Countdown from "react-countdown";

// Random component
const Completionist = () => <span>You are good to go!</span>;

// Renderer callback with condition
const renderer = ({ hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a completed state
    return <Completionist />;
  } else {
    // Render a countdown
    return (
      <span>
        {hours}:{minutes}:{seconds}
      </span>
    );
  }
};

const TimeCounter = ({ time }) => {
  return (
    <Countdown date={Date.now() + time * 1000 * 60 * 60} renderer={renderer} />
  );
};
export default TimeCounter;
