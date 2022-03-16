import { useCallback, useEffect, useRef, useState, } from "react";
import Button from "./Button";
import Title from "./Title";
/**
 * you should use useRef, useCallback, memo, useState.
 * don't remove console logs,
 * check console before and after your chnages
 */
function App() {
  console.log("App is rendering...");
  useEffect(() => console.log("== App rendered =="),[]);

  /**
   * create two states called value1 and value 2
   */
  const [value1,setValue1] = useState('')
  const [value2,setValue2] = useState('')
  // const valueRef1 = useRef(0)
  // const valueRef2 = useRef(0)
  /**
   * create ref for each input (ref1, ref2) and pass them to input elements
   */
  const ref1 = useRef(null)
  const ref2 = useRef(null)

  const changeValue1 = useCallback(()=>{setValue1(ref1.current.value)},[])
    /**
     * get value of input from ref and set first state
     */
    //  const changeValue1 = ()=>{setValue1(ref1.current.value)}
   
  const changeValue2 = useCallback(() => {setValue2(ref2.current.value)},[])
    /**useCallback(()=>{setValue1(ref1.current.value)},[value1.current])
     * get value of input from ref and set second state
     */
    //  const changeValue2 = ()=>{setValue2(ref1.current.value)}
  return (
    <div className="App">
      <div className="value-1">
        first value: <Title>{/**pass first state */ value1}</Title>
        <br />
        change first value:
        <input ref={ref1}/>
        <Button onClick={changeValue1}> change </Button>
      </div>
      <div className="value-2">
        second value: <Title>{/**pass second state */ value2}</Title>
        <br />
        change second value:
        <input ref={ref2}/>
        <Button onClick={changeValue2}> change </Button>
      </div>
    </div>
  );
}
export default App;
