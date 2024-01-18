import { FC, DetailedHTMLProps, HTMLAttributes, PropsWithChildren } from 'react';
import { WidthHeight } from './WidthHeight';

export type ReactDivProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
export type DivProps = ReactDivProps & PropsWithChildren<WidthHeight>;

export const Div: FC<DivProps> = ({ width, height, style: _style, ...props }) => {
  const style = { ..._style, width, height };

  return <div {...props} style={style} />;
};
