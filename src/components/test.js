import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Card from 'react-bootstrap/Card';

const Test = () => {
    const workouts = useSelector(state => {
        console.log('Current state:', state.reps);
        return state.reps;
      });
    

    useEffect(()=>{
        console.log('this is the work out',workouts);
    },[workouts])
    
    return (
        <div>
            {workouts.map(WO => (
        <div key={WO.id}>
          <Card style={{ width: '400px', height: '80px' }}>
            <div className='text-center my-1'>
                <Card.Body>
                <Card.Title>{WO.type}</Card.Title>
                <Card.Title>{WO.reps}</Card.Title>
                </Card.Body>
            </div>
          </Card>         
        </div>))}
        </div>
  )
}

export default Test


