import * as React from "react";

import { cn } from "@/lib/utils";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: string;
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, error, ...props }, ref) => {
    return (
      <div className="w-full space-y-1.5">
        <textarea
          className={cn(
            "focus-visible:border-b-forge-primary flex min-h-28 w-full border-0 border-b border-b-neutral-700/30 bg-transparent px-3 py-2 text-sm transition-colors placeholder:text-neutral-400 hover:border-b-neutral-500 focus-visible:outline-none",
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

Textarea.displayName = "Textarea";

export { Textarea };
