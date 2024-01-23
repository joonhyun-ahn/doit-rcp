import Basic from './Basic';
import IconTest from './IconTest';
import Size from './Size';

export default function ButtonTest() {
  return (
    <section className="mt-4">
      <h2 className="font-bold text-5xl text-center">ButtonTest</h2>
      <div className="mt-4">
        <IconTest />
        <Size />
        <Basic />
      </div>
    </section>
  );
}
