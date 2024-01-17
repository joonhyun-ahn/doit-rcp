import type { FC, CSSProperties, DetailedHTMLProps, HTMLAttributes } from 'react';

// export type IconProps = {
//   name: string;
//   style?: CSSProperties;
// };

type ReactSpanProps = DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>;

export type IconProps = ReactSpanProps & {
  name: string;
};

export const Icon: FC<IconProps> = ({ name, className: _className, ...props }) => {
  const className = ['material-icons', _className].join(' ');
  return (
    <span {...props} className={className}>
      {name}
    </span>
  );
};
