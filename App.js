import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Header from "./components/Header";
import StartScreen from "./screens/StartScreen";
import GameScreen from "./screens/GameScreen";
import GameOverScreen from "./screens/GameOverScreen";

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [guessRounds, setGuessRounds] = useState(0);

  function startGameHandler(selectedNumber) {
    setUserNumber(selectedNumber);
    setGuessRounds(0);
  };

  function gameOverHandler(numOfRounds) {
    setGuessRounds(numOfRounds);
  }

  let content = <StartScreen onStartGame={startGameHandler}/>;

  if(userNumber && guessRounds <= 0){ //if its not undefined
    content = <GameScreen userChoice={userNumber} onGameOver={gameOverHandler}/>
  } else if (guessRounds > 0) {
    content = <GameOverScreen numOfRounds={guessRounds} userNumber={userNumber}/>;
  }

  return (
    <View style={ styles.appContainer } >
      <Header title="Number Guess"/>
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
  }
});
