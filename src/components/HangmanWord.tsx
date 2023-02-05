type HangmanWordProps = {
  guessedLetters: string[];
  wordToGuess: string;
  reveal?: boolean;
};

const HangmanWord = ({
  guessedLetters,
  wordToGuess,
  reveal = false,
}: HangmanWordProps) => {
  const puzzleWord = wordToGuess.split('').map((letter, index) => (
    <span key={index}>
      <span
        style={{
          visibility:
            guessedLetters.includes(letter) || reveal ? 'visible' : 'hidden',
          color: !guessedLetters.includes(letter) && reveal ? 'red' : 'black',
        }}
      >
        {letter}
      </span>
    </span>
  ));

  return <div className="word-container">{puzzleWord}</div>;
};

export default HangmanWord;
