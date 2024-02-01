import { useCallback, useEffect, useRef } from 'react';
import { Title } from '../components';

export default function InputValueTest() {
  const inputRef = useRef<HTMLInputElement>(null);
  const getValue = useCallback(() => alert(`input value: ${inputRef.current?.value}`), []);

  useEffect(() => inputRef.current?.focus(), []);

  return (
    <section className="mt-4">
      <Title>InputValueTest</Title>
      <div className="flex justify-center mt-4">
        <div className="flex flex-col w-1/3 p-2">
          <input ref={inputRef} className="input input-primary" />
          <button onClick={getValue} className="btn btn-primary mt-4">
            get value
          </button>
        </div>
      </div>
    </section>
  );
}
