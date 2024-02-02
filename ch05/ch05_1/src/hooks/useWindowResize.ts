import { useEffect, useState } from 'react';
import { useEventListener } from './useEventListener';

export const useWindowResize = () => {
  const [widthHeight, setWidthHeight] = useState<number[]>([0, 0]);

  useEffect(() => {
    setWidthHeight((notUsed) => [window.innerWidth, window.innerHeight]);
  }, []); // 컴포넌트 마운트 시 창 크기 설정

  useEventListener(window, 'resize', () => {
    setWidthHeight((notUsed) => [window.innerWidth, window.innerHeight]);
  }); // 창 크기 변경될 때마다 설정

  return widthHeight;
};
