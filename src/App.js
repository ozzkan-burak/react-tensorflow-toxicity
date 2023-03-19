import React, { useRef } from "react";
require('@tensorflow/tfjs')
const toxicity = require("@tensorflow-models/toxicity");

function App() {

  const textRef = useRef();

  const onValidate = async () => {
    
    const treshold = 0.9;
    const result = await toxicity.load(treshold);
    const response =await result.classify(textRef.current.value);
    console.log('Dönüş değeri', response);

  }

  return (
    <div className="App">
      <header className="App-header">
        TensorFlow text detect
        <textarea ref={textRef}>

        </textarea>
      </header>
      <button onClick={()=> onValidate()}>Tıkla ve kotrol et</button>
    </div>
  );
}

export default App;
