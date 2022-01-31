import React from 'react';

function Mapli() {
  let tasks = ['Buy lemonade', 'Make toasts', 'Repair car', 'Play games', 'Pet a cat']
  return(
    <>
    {
      tasks.map(item => <ul>
        <li className='task'>{item}</li>
      </ul>)
    }
    </>
  );
}

export default Mapli;
