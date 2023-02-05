import letters from '../assets/letters';

type KeyboardProps = {
  activeLetters: string[];
  inactiveLetters: string[];
  addGuessedLetter: (letter: string) => void;
  disabled?: boolean;
};

const Keyboard = ({
  activeLetters,
  inactiveLetters,
  addGuessedLetter,
  disabled = false,
}: KeyboardProps) => {
  const letterKey = letters.map((letter, index) => {
    const isActive = activeLetters.includes(letter);
    const isInActive = inactiveLetters.includes(letter);
    return (
      <button
        key={index}
        disabled={isActive || isInActive || disabled}
        className={`${isActive ? 'active' : null} ${
          isInActive ? 'inactive' : null
        }`}
        onClick={() => addGuessedLetter(letter)}
      >
        {letter}
      </button>
    );
  });

  return <div className="keyboard-container">{letterKey}</div>;
};

export default Keyboard;
