import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import ListGroup from 'react-bootstrap/ListGroup';

function Daily_workout_tracker() {
  const workouts = useSelector(state => {
    console.log('Current state:', state.reps);
    return state.reps;
  });


  useEffect(() => {
    console.log('this is the work out', workouts);
  }, [workouts])

  return (
    <div><ListGroup as="ul"><ListGroup.Item as="li" active>
    Workout Routine
  </ListGroup.Item>
      {workouts.map(WO => (
        <div key={WO.id}>          
            <ListGroup.Item as="li">{WO.type} {WO.reps} reps</ListGroup.Item>          
        </div>))}</ListGroup>
    </div>
  )
}
export default Daily_workout_tracker;