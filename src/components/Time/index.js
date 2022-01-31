// import React from 'react';

// const date = new Date()
// const week = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
// const numWeek = date.getDay()
// const day = week[numWeek - 1]

// class ClockFunction extends React.Component {
//   constructor() {
//       super();
//       this.state = { time: new Date() }; 
//   }

//   componentDidMount() {
//       this.update = setInterval(() => {
//           this.setState({ time: new Date() });
//       }, 1 * 1000)
//   }

//   componentWillUnmount() { 
//       clearInterval(this.update);
//   }

//   render() {
//       const { time } = this.state; 

//       return (<div>
//           <div>Today is : {day}</div>
//           <div>
//           Current time is : {time.toLocaleTimeString()}
//           </div>
//       </div>);
//   }
// }

// export default ClockFunction


import React from 'react';

function Time() {
  const [ time, setTime ] = React.useState(new Date())
  setInterval(() => {
    setTime(new Date());
  }, 1 * 1000)

  const date = new Date()
  const week = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  const numWeek = date.getDay()
  const day = week[numWeek - 1]


  return (
    <>
      <div>Today is : {day}</div>
      <div>
      Current time is : {time.toLocaleTimeString()}
      </div>
    </>
  )
}

export default Time;