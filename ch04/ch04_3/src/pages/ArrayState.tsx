import { useCallback, useMemo, useState } from 'react';
import * as D from '../data';
import { Div, Icon, Title } from '../components';

export default function ArrayState() {
  const [images, setImages] = useState<string[]>([]);
  const addImage = useCallback(() => setImages((images) => [D.randomImage(200, 100, 50), ...images]), []);
  const clearImages = useCallback(() => setImages((notUsed) => []), []);

  const children = useMemo(() => images.map((image, index) => <Div key={index} src={image} className="w-1/5 m-2" height="5rem" minHeight="5rem" />), [images]);

  return (
    <section className="mt-4">
      <Title>ArrayState</Title>
      <div className="flex justify-center mt-4">
        <div data-tip="add image" className="tooltip">
          <Icon name="add" onClick={addImage} className="btn-primary mr-12" />
        </div>
        <div data-tip="clear all" className="tooltip">
          <Icon name="clear_all" onClick={clearImages} className="btn-primary mr-12" />
        </div>
      </div>
      <div className="flex flex-wrap mt-4">{children}</div>
    </section>
  );
}
