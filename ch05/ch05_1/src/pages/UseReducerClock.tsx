import { useDispatch, useSelector } from 'react-redux';
import type { AppState } from '../store';
import type { SetTodayAction } from '../store/actions';
import { Div, Subtitle, Title } from '../components';
import { useInterval } from '../hooks';
import { useReducer } from 'react';

export default function UseReducerClock() {
  const [{ today }, dispatch] = useReducer(
    (state: AppState, action: SetTodayAction) => {
      switch (action.type) {
        case 'setToday':
          return { ...state, today: new Date() };
      }
    },
    { today: new Date() }
  );

  useInterval(() => {
    dispatch({ type: 'setToday', today: new Date() });
  });

  return (
    <Div className="flex flex-col justify-center items-center mt-16">
      <Title className="text-5xl">UseReducerClock</Title>
      <Title className="text-3xl mt-4">{today.toLocaleTimeString()}</Title>
      <Subtitle className="text-2xl mt-4">{today.toLocaleDateString()}</Subtitle>
    </Div>
  );
}
