import React from "react";

type PropsType = {
  children: string;
  className?: string;
};

export const TypographyH3: React.FC<PropsType> = ({ children }) => {
  return (
    <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
      {children}
    </h3>
  );
};

export const TypographyLarge: React.FC<PropsType> = ({ children }) => {
  return <div className="text-sm font-semibold">{children}</div>;
};

export const TypographyMuted: React.FC<PropsType> = ({ children }) => {
  return <p className="text-sm text-muted-foreground">{children}</p>;
};

export const TypographyH2: React.FC<PropsType> = ({ children, className }) => {
  return (
    <h2
      className={`scroll-m-20 text-3xl font-semibold tracking-tight first:mt-0 ${className}`}
    >
      {children}
    </h2>
  );
};
