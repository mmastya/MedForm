import React from "react";

interface Props {
  children: React.ReactNode;
}
export const Container: React.FC<Props> = ({ children }) => {
  return <div>{children}</div>;
};
