import ArrayState from './pages/ArrayState';
import BasicForm from './pages/BasicForm';
import HigherOrderRadioInputTest from './pages/HigherOrderRadioInputTest';
import InputTest from './pages/InputTest';
import NumberState from './pages/NumberState';
import ObjectState from './pages/ObjectState';
import RadioInputTest from './pages/RadioInputTest';
import ShowHideModal from './pages/ShowHideModal';

export default function App() {
  return (
    <main>
      <ArrayState />
      <ObjectState />
      <BasicForm />
      <HigherOrderRadioInputTest />
      <RadioInputTest />
      <ShowHideModal />
      <InputTest />
      <NumberState />
    </main>
  );
}
