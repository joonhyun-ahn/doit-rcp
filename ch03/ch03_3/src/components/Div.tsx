import { FC, DetailedHTMLProps, HTMLAttributes, PropsWithChildren } from 'react';
import { WidthHeight } from './WidthHeight';

export type ReactDivProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
export type DivProps = ReactDivProps & PropsWithChildren<WidthHeight> & { src?: string };

export const Div: FC<DivProps> = ({ width, height, style: _style, src, className: _className, ...props }) => {
  const style = { ..._style, width, height, backgroundImage: src && `url(${src})` };
  const className = ['box-sizing', src && 'bg-gray-300', _className].join(' ').trim();

  return <div {...props} className={className} style={style} />;
};
