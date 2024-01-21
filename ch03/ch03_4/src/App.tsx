import AlignTest from './pages/AlignTest';
import CardContainer from './pages/CardContainer';
import DirectionTest from './pages/DirectionTest';
import JustifyCenterTest from './pages/JustifyCenterTest';
import MinMaxTest from './pages/MinMaxTest';
import UserContainer from './pages/UserContainer';
import WrapTest from './pages/WrapTest';

function App() {
  return (
    <main>
      <CardContainer />
      <UserContainer />
      <AlignTest />
      <JustifyCenterTest />
      <MinMaxTest />
      <WrapTest />
      <DirectionTest />
    </main>
  );
}

export default App;
