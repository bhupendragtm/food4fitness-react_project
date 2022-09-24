import React from 'react';
import {add, sub, mult, div} from "./Calc";

function App(){
  return(
    <>
<ul>
<li>The sum of two no is {add(40, 4)}</li>
<li> {sub(40, 4)}</li>
<li> {mult(40, 4)}</li>
<li> {(41, 4)}</li>
</ul>
</>
);
}

export default App;