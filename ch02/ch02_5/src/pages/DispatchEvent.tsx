import { SyntheticEvent } from 'react';

export default function DispatchEvent() {
  const onCallDispatchEvent = (e: SyntheticEvent) => {
    console.log('onCallDispatchEvent', e);

    document.getElementById('root')?.dispatchEvent(new Event('click', { bubbles: true }));
  };

  const onCallClick = (e: SyntheticEvent) => {
    console.log('onCallClick', e);

    document.getElementById('root')?.click();
  };

  return (
    <div>
      <p>DispatchEvent</p>
      <button onClick={onCallDispatchEvent}>call dispatchEvent</button>
      <button onClick={onCallClick}>call click</button>
    </div>
  );
}
