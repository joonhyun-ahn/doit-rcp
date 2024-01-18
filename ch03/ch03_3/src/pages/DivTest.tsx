import { Div, Icon, Subtitle, Title } from '../components';

export default function DivTest() {
  return (
    <section className="mt-4">
      <Title>DivTest</Title>
      {/*<Div className="text-center text-blue-100 bg-blue-600" height="6rem"> */}
      <Div className="text-center text-blue-100 bg-blue-600">
        <Icon name="home" className="text-3xl" />
        <Subtitle>Home</Subtitle>
      </Div>
      <div className="mt-4"></div>
    </section>
  );
}
