import * as React from "react";

import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, error, ...props }, ref) => {
    return (
      <div className="w-full space-y-1.5">
        <input
          type={type}
          className={cn(
            "ring-offset-background focus-visible:border-b-forge-primary flex h-10 w-full border-0 border-b border-b-neutral-700/30 bg-transparent px-3 py-2 text-sm transition-colors placeholder:text-neutral-400 hover:border-b-neutral-500 focus-visible:outline-none",
            error && "border-b-destructive focus-visible:border-b-destructive",
            className,
          )}
          ref={ref}
          {...props}
        />
        {error && <p className="text-destructive text-xs">{error}</p>}
      </div>
    );
  },
);

Input.displayName = "Input";

export { Input };
