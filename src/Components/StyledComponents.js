import styled from 'styled-components';

export const Main = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const WrapperCol = styled(Wrapper)`
  flex-direction: column;
`;


export const WrapperRow = styled(Wrapper)`
  flex-direction: row;
`;

export const Title = styled.h1`
  color: palevioletred;
  text-align: center;
  font-size: 30px;
  max-width: 400px;
  width: 100%;
  padding: 0 15px;
  box-sizing: border-box;
  margin: 10px auto;
`;

export const SubTitle = styled.h3`
  color: black;
  text-align: center;
  width: 100%;
  max-width: 500px;
  padding: 0 15px;
  box-sizing: border-box;
  margin: 10px auto 30px;
`;

export const Input = styled.input`
  height: 20px;
  border: 3px solid palevioletred;
  margin-left: 10px;
  padding: 5px;
  font-size: 16px;
`;

export const Board = styled.div`
  margin: 20px auto;
  display: flex;
  flex-wrap: wrap;
  height: 300px;
  max-width: 500px;
  width: 95%;
  border: 2px solid black;
  padding: 5px;
`;

export const Button = styled.button`
  border: 1px solid black;
  padding: 5px;
  font-size: 16px;
`;

export const BoxWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  box-sizing: border-box;
  height: ${props => props.rows && 100/props.rows}%;
  width: ${props => props.cols && 100/props.cols}%;
  padding: 3px;
  opacity: ${props => props.value > 0 ? 1 : 0};
`;

export const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  width: 100%;
  height: 100%;
  background: palevioletred;
  border-radius: 10px;
  font-size: ${props => 500/props.amount}px;
  color: white;
  pointer-events: none;
`;
