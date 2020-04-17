import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import { Title, Board, Button, BoxWrapper, Box, WrapperCol} from './StyledComponents.js';

const GameBoard = (props) => {
  const [numberOfBoxes, setNumberOfBoxes] = useState(0);
  const [listOfBoxes, setListOfBoxes] = useState([])

  function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
  }

  function swap (listOfBoxes, indexA, indexB) {
    let a = indexA.dataset.index;
    let b = indexB.dataset.index;
    let list = listOfBoxes;
    var temp = list[a];
    list[a] = list[b];
    list[b] = temp;
    setListOfBoxes([...list]);
};

function checkMatch(e, listOfBoxes) {
  let target = e.target;
  let hole = document.querySelector("div[value='0']") !== null ? document.querySelector("div[value='0']") : false;
  let targetRect = target.getBoundingClientRect();
  let holeRect = hole.getBoundingClientRect();
  if (targetRect.left == holeRect.right && (targetRect.x == holeRect.x || targetRect.y == holeRect.y)) {
    swap(listOfBoxes, target, hole);
  } else if (targetRect.right == holeRect.left && (targetRect.x == holeRect.x || targetRect.y == holeRect.y)) {
    swap(listOfBoxes, target, hole);
  } else if (targetRect.top == holeRect.bottom && (targetRect.x == holeRect.x || targetRect.y == holeRect.y)) {
    swap(listOfBoxes, target, hole);
  } else if (targetRect.bottom == holeRect.top && (targetRect.x == holeRect.x || targetRect.y == holeRect.y)) {
    swap(listOfBoxes, target, hole);
  } else {
    console.log("nope");
  }

  checkIfComplete(listOfBoxes);
}

function isAscending(arr) {
  return arr.slice(1).map((e,i) => e > arr[i]).every(x => x);
}

function checkIfComplete(listOfBoxes) {
  let list = listOfBoxes;
  let lastItem = listOfBoxes[listOfBoxes.length-1];
  if (lastItem === 0) {
    list.pop();
    if (isAscending(list)) {
      setTimeout(() => {
        window.alert("YOU WON");
      }, 100)
    }
  }
}

  useEffect(() => {

    setNumberOfBoxes(props.cols*props.rows);
    let list = [...Array(props.cols*props.rows).keys()];
    shuffleArray(list);
    console.log(list);
    setListOfBoxes(list);
  }, []);

  return(
    <div className="gameboard">
    <WrapperCol>
      <Board>
        {listOfBoxes && listOfBoxes.map((box, index) => {
          return (
            <BoxWrapper
              onClick={(e) => box > 0 && !null ? checkMatch(e, listOfBoxes) : false}
              data-index={index}
              value={box}
              key={index}
              rows={props.rows}
              cols={props.cols}>
              <Box amount={props.rows*props.cols}>
                {box}
              </Box>
            </BoxWrapper>)
        })}
      </Board>
      <Button onClick={() => setListOfBoxes(() => {
        let list = [...listOfBoxes];
        shuffleArray(list);
        return list;
      })}>
        Shuffle board
      </Button>
      </WrapperCol>
    </div>
  )
}

export default GameBoard;
