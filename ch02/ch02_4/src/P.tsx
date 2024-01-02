import type { FC, ReactNode, PropsWithChildren } from 'react';

// export type PProps = {
//   key: number;
//   children?: ReactNode;
//   key2?: number;
// };

// const P: FC<PProps> = props => {
//   const { children } = props;
//   console.log('children=', children, 'props=', props);
//   return <p children={children} />;
// };

export type PProps = {};
const P: FC<PropsWithChildren<PProps>> = props => {
  return <p {...props} />;
};
export default P;
