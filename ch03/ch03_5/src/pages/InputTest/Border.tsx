import { Input } from '../../theme/daisyui';

export default function Border() {
  return (
    <section className="mt-4">
      <h2 className="font-bold text-3xl text-center">Border</h2>
      <div className="flex justify-evenly p-4 mt-4">
        <div>
          <label className="label">input-bordered</label>
          <Input className="input-bordered" />
        </div>
        <div>
          <label className="label">input-ghost</label>
          <Input className="input-ghost" />
        </div>
      </div>
    </section>
  );
}
