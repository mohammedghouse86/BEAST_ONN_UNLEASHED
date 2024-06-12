import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Dropdown from 'react-bootstrap/Dropdown';
import { useDispatch, useSelector } from 'react-redux';
import { add_rep } from '../store/wortOutRoutineSlice';
import { useState, useEffect } from 'react';

function Daily_workout_timer() {
  const [workout_routine, setWorkout_routine] = useState([]);

  useEffect(() => {
    console.log(workout_routine);
  }, [workout_routine]);

  const handleSelect = async(eventKey, event) => {
    const work = await JSON.parse(eventKey)
    setWorkout_routine(work);
    console.log('workout_routine=',workout_routine);
  };
  const dispatch = useDispatch();

  const fun_workout_rep_end = () => {
    if(workout_routine.id){
      console.log('sending this workout routine=',workout_routine)
      dispatch(add_rep(workout_routine));
    }
  }


  return (
<>
<Dropdown onSelect={handleSelect}>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
      Workout Routine
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item eventKey={JSON.stringify({"id":101,"type":"right arm curls","reps" : 0})} href="#/action-1">Right Arm curls reps</Dropdown.Item>
        <Dropdown.Item eventKey={JSON.stringify({"id":102,"type":"left arm curls","reps" : 0})} href="#/action-2">Left Arm curls reps</Dropdown.Item>
        </Dropdown.Menu>
    </Dropdown>
    <Card style={{ width: '16rem' }}>
      <Card.Body>
        <Card.Title className="mx-3">Excercise Repetition</Card.Title>
        <Button variant="primary" onClick={() => fun_workout_rep_end()}>REP End</Button>
      </Card.Body>
    </Card>

    </>
  );
}

export default Daily_workout_timer;