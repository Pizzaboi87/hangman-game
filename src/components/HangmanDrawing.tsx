const HEAD = <div className="gallows__hangman-head"></div>;
const BODY = <div className="gallows__hangman-body"></div>;
const ARM_RIGHT = <div className="gallows__hangman-arm-right"></div>;
const ARM_LEFT = <div className="gallows__hangman-arm-left"></div>;
const LEG_RIGHT = <div className="gallows__hangman-leg-right"></div>;
const LEG_LEFT = <div className="gallows__hangman-leg-left"></div>;
const BODY_PARTS = [HEAD, BODY, ARM_RIGHT, ARM_LEFT, LEG_RIGHT, LEG_LEFT];

type HangmanDrawingProps = {
  numberOfGuesses: number;
};

const HangmanDrawing = ({ numberOfGuesses }: HangmanDrawingProps) => {
  return (
    <div className="gallows">
      {BODY_PARTS.slice(0, numberOfGuesses)}
      <div className="gallows__hang"></div>
      <div className="gallows__top"></div>
      <div className="gallows__stand"></div>
      <div className="gallows__bottom"></div>
    </div>
  );
};

export default HangmanDrawing;
