import type { ChangeEvent, DragEvent } from 'react';
import { useCallback, useMemo, useRef, useState } from 'react';
import { Div, Title } from '../components';
import { useToggle } from '../hooks';
import { imageFileReaderP } from '../utils';

export default function FileDrop() {
  const [imageUrls, setImageUrls] = useState<string[]>([]);
  const [error, setError] = useState<Error | null>(null);
  const [loading, toggleLoading] = useToggle(false);

  const inputRef = useRef<HTMLInputElement>(null);
  const onDivClick = useCallback(() => inputRef.current?.click(), []);

  const makeImageUrls = useCallback(
    (files: File[]) => {
      //const promises = Array.from(files).map(imageFileReaderP); // Array.from 필요?
      const promises = files.map(imageFileReaderP);
      toggleLoading();
      Promise.all(promises)
        .then((urls) => setImageUrls((imageUrls) => [...urls, ...imageUrls]))
        .catch(setError)
        .finally(toggleLoading);
    },
    [toggleLoading]
  );

  const onInputChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setError(null);
      const files = e.target.files;
      files && makeImageUrls(Array.from(files));
    },
    [makeImageUrls]
  );

  const onDivDragOver = useCallback((e: DragEvent) => e.preventDefault(), []);
  const onDivDrop = useCallback(
    (e: DragEvent) => {
      e.preventDefault();
      setError(null);
      const files = e.dataTransfer?.files;
      files && makeImageUrls(Array.from(files));
    },
    [makeImageUrls]
  );

  const images = useMemo(
    () => imageUrls.map((url, index) => <Div key={index} src={url} className="bg-transparent bg-center bg-no-repeat bg-contain m-2" width="5rem" height="5rem" />),
    [imageUrls]
  );

  return (
    <section className="mt-4">
      <Title>FileDrop</Title>
      {error && (
        <div className="bg-red-200 p-4 mt-4">
          <p className="text-3xl text-red-500 text-bold">{error.message}</p>
        </div>
      )}

      <div onClick={onDivClick} className="w-full bg-gray-200 border border-gray-500 mt-4">
        {loading && (
          <div className="flex justify-center items-center">
            <button className="btn btn-circle loading"></button>
          </div>
        )}

        <div onDragOver={onDivDragOver} onDrop={onDivDrop} className="flex flex-col justify-center items-center h-40 cursor-pointer">
          <p className="text-3xl font-bold">drop images or click me</p>
        </div>
        <input type="file" accept="image/*" ref={inputRef} onChange={onInputChange} multiple className="hidden" />
      </div>

      <div className="flex flex-wrap justify-center">{images}</div>
    </section>
  );
}
