import React from "react";

type ContainerProps = {
  children: React.ReactNode;
};

export const Container: React.FC<ContainerProps> = ({ children }) => {
  return <div className="w-container mx-auto">{children}</div>;
};
