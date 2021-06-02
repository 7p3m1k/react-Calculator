import React, { useState } from "react";
import styled from "styled-components";

const CalcWrapper = styled.div`
  max-width: 960px;
  margin: 0 auto;
  margin-top: 100px;
`;

const Display = styled.div`
  padding: 20px;
  color: white;
  font-size: 50px;
  border: 1px solid darkblue;
  border-radius: 10px;
  background-color: darkblue;
  text-align: right;
`;

const KeysWrapper = styled.div`
  margin-top: 50px;
  background-color: darkblue;
`;

const KeyRow = styled.ul`
  display: flex;
  padding: 20px;
  font-size: 24px;
`;

const Key = styled.li`
  color: darkslateblue;
  padding: 20px;
  width: 25%;
  background-color: white;
  text-align: center;
  border: 1px solid black;
  cursor: pointer;
`;

const ResetKey = styled.li`
  width: 50%;
  text-align: center;
  border: 1px solid black;
  background-color: skyblue;
  color: white;
  cursor: pointer;
`;

const EqualSign = styled.li`
  width: 50%;
  text-align: center;
  border: 1px solid black;
  background-color: red;
  color: white;
  cursor: pointer;
`;

function Calculator() {
  const [value, setValue] = useState("");
  return (
    <>
      <CalcWrapper>
        {value === "" ? <Display>0</Display> : <Display>{value}</Display>}
        <KeysWrapper>
          <KeyRow>
            <Key onClick={() => setValue(value + "7")}>7</Key>
            <Key onClick={() => setValue(value + "8")}>8</Key>
            <Key onClick={() => setValue(value + "9")}>9</Key>
            <Key>DEL</Key>
          </KeyRow>
          <KeyRow>
            <Key onClick={() => setValue(value + "4")}>4</Key>
            <Key onClick={() => setValue(value + "5")}>5</Key>
            <Key onClick={() => setValue(value + "6")}>6</Key>
            <Key>+</Key>
          </KeyRow>
          <KeyRow>
            <Key onClick={() => setValue(value + "1")}>1</Key>
            <Key onClick={() => setValue(value + "2")}>2</Key>
            <Key onClick={() => setValue(value + "3")}>3</Key>
            <Key>-</Key>
          </KeyRow>
          <KeyRow>
            <Key>.</Key>
            <Key onClick={() => setValue(value + "0")}>0</Key>
            <Key>/</Key>
            <Key>X</Key>
          </KeyRow>
          <KeyRow>
            <ResetKey>RESET</ResetKey>
            <EqualSign>=</EqualSign>
          </KeyRow>
        </KeysWrapper>
      </CalcWrapper>
    </>
  );
}
export default Calculator;
