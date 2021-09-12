import React, { useRef, useState } from 'react';
import Button from './Button';


function App() {
  const [count, setCount] = useState(0);

  const ref = useRef();

  return (
    <div className={'p-4'}>
      <div className={'mb-2'}>main</div>
      <Button> button </Button>
      <Button size="sm"> button </Button>
      <Button size="xs"> button </Button>
    </div>
  );
}

export default App;
