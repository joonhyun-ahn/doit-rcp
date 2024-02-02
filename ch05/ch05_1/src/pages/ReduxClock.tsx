import { useDispatch, useSelector } from 'react-redux';
import type { AppState } from '../store';
import { Div, Subtitle, Title } from '../components';
import { useInterval } from '../hooks';

export default function ReduxClock() {
  const today = useSelector<AppState, Date>((state) => state.today);
  const dispatch = useDispatch();

  useInterval(() => {
    dispatch({ type: 'setToday', today: new Date() });
  });

  return (
    <Div className="flex flex-col justify-center items-center mt-16">
      <Title className="text-5xl">ReduxClock</Title>
      <Title className="text-3xl mt-4">{today.toLocaleTimeString()}</Title>
      <Subtitle className="text-2xl mt-4">{today.toLocaleDateString()}</Subtitle>
    </Div>
  );
}
