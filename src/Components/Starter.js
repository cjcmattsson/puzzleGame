import React, {useState} from 'react';
import GameBoard from './GameBoard.js';
import { Title, SubTitle, Button, WrapperCol, WrapperRow, Input } from './StyledComponents.js';

const Starter = () => {

  // Minimum 2 rows and 2 cols
  const [rows, setRows] = useState(3);
  const [cols, setCols] = useState(3);
  const [gameStarted, setGameStarted] = useState(false);

  return (
    <div>
    <Title>{!gameStarted ? "Setup your Gameboard!" : "Now sort the tiles!"} </Title>
    <SubTitle>{!gameStarted ? "The ammount of cols*rows must be equal to or greater than 9" : "1) They must be in ascending order. 2) The tile with number 1 must be in the top left corner, and the empty space must be in the bottom right corner"}</SubTitle>
      <WrapperCol>
      {!gameStarted &&
        <WrapperRow>
          <h3>Rows: </h3>
          <Input value={rows} onChange={(e) => setRows(e.target.value)} type="number" min="3"/>
        </WrapperRow>
      }
      {!gameStarted &&
        <WrapperRow>
          <h3>Cols: </h3>
          <Input value={cols} onChange={(e) => setCols(e.target.value)} type="number" min="3"/>
        </WrapperRow>
        }
      <Button onClick={() => setGameStarted(() => {
        if (rows*cols >= 9) {
          return !gameStarted
        } else {
          window.alert("Increase the number of tiles");
        }
      })}>
        {gameStarted ? "Change game setup" : "Start Game!"}
      </Button>
      {gameStarted && <GameBoard rows={rows} cols={cols}/>}
      </WrapperCol>
    </div>
  )
}

export default Starter;
