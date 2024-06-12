import { DetailedHTMLProps, FC, HTMLAttributes, ReactElement } from "react";

import { twm } from "@/libs";

/* eslint-disable perfectionist/sort-union-types */
type TContainerExampleB = { className?: string } & DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;
type TIconExampleB = DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>;
type TTextExampleB = { className?: string } & DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>;
/* eslint-enable perfectionist/sort-union-types */

export const ContainerExampleB: FC<TContainerExampleB> = ({ className, ...props }): ReactElement => {
  return (
    <section className={twm("flex min-w-52 max-w-52 flex-col items-center justify-center", className)} data-testid="example-b-container" {...props}>
      {props.children}
    </section>
  );
};

export const IconExampleB: FC<TIconExampleB> = ({ ...props }): ReactElement => {
  return (
    <span data-testid="example-b-icon" {...props}>
      {props.children}
    </span>
  );
};

export const TextExampleB: FC<TTextExampleB> = ({ className, ...props }): ReactElement => {
  return (
    <span className={twm("font-semibold", className)} data-testid="example-b-text" {...props}>
      {props.children}
    </span>
  );
};
