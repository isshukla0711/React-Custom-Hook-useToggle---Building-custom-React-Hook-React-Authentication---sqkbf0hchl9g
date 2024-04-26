import React from 'react';

import useToggle from './useToggle'; // make sure the path is correct based on your project structure

function App() {

const [toggled, toggle] = useToggle();

return (

<div>

<button id="button" onClick={toggle}>

{toggled ? 'Toggled' : 'Click to Toggle'}

</button>

</div>

);

}

export default App;
