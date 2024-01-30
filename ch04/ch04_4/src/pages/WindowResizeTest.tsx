import { Subtitle, Title } from '../components';
import { useWindowResize } from '../hooks';

export default function WindowResizeTest() {
  const [width, height] = useWindowResize();

  return (
    <section className="mt-4">
      <Title>WindowResizeTest</Title>
      <Subtitle className="mt-4">
        widht: {width}, height: {height}
      </Subtitle>
    </section>
  );
}
