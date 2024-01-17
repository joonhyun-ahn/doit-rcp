import type { ChangeEvent } from 'react';

export default function OnChange() {
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log('onChnage', e.target.value);
  };

  return <input type="text" onChange={onChange} />;
}
