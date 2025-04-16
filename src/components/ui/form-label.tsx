import * as React from "react";

import { cn } from "@/lib/utils";

export interface FormLabelProps
  extends React.LabelHTMLAttributes<HTMLLabelElement> {
  optional?: boolean;
}

const FormLabel = React.forwardRef<HTMLLabelElement, FormLabelProps>(
  ({ className, children, optional, ...props }, ref) => {
    return (
      <label
        className={cn("mb-1.5 block text-sm font-medium text-white", className)}
        ref={ref}
        {...props}
      >
        {children}
        {optional && (
          <span className="ml-1 text-xs text-neutral-400">(optional)</span>
        )}
      </label>
    );
  },
);

FormLabel.displayName = "FormLabel";

export { FormLabel };
