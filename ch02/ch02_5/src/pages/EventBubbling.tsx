import { SyntheticEvent } from 'react';

export default function EventBubbling() {
  const onDivClick = (e: SyntheticEvent) => {
    const { isTrusted, target, bubbles, currentTarget } = e;
    console.log('click event ebubbles on <div>', isTrusted, target, bubbles, currentTarget);
  };
  const onButtonClick = (e: SyntheticEvent) => {
    const { isTrusted, target, bubbles, currentTarget } = e;
    console.log('click event starts at <button>', isTrusted, target, bubbles, currentTarget);
  };

  return (
    <div onClick={onDivClick}>
      <p>EventBubbles</p>
      <button onClick={onButtonClick}>Click Me</button>
    </div>
  );
}
