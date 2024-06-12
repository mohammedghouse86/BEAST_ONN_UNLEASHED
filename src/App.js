import Daily_workout_timer from './components/daily_workout_timer'
import Daily_workout_tracker from './components/daily_workout_tracker';
import Test from './components/test';
import { Provider } from 'react-redux';
import store from './store/store'

function App() {
  return (
    <Provider store={store}>
    <div class="d-flex flex-row mb-3">
      <div class="p-2"><Daily_workout_timer/></div>
      <div class="p-2"><Daily_workout_tracker/></div>

    </div>
    </Provider>
  );
}

export default App;
