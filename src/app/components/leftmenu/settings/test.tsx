import * as React from "react";

export interface StandardComponentProps {
  title?: string;
  children: React.ReactNode;
}

export function StandardComponent({
  children,
  title = "Dr.",
}: StandardComponentProps) {
  return (
    <div>
      {title}: {children}
    </div>
  );
}
