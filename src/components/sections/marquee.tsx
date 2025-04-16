"use client";

import { SERVICES } from "@/lib/constants";
import { DynamicIcon } from "lucide-react/dynamic";

const Marquee = () => {
  const renderContentBlock = (ariaHidden?: boolean) => (
    <ul
      aria-hidden={ariaHidden}
      className="m-0 flex shrink-0 list-none items-center gap-2 p-0"
    >
      {SERVICES.map((item, index: number) => (
        <li
          key={`${item}-block-${index}`}
          className="flex items-center gap-2 px-6 py-3 text-3xl font-semibold whitespace-nowrap text-neutral-400"
        >
          <DynamicIcon
            name={item.icon}
            className="h-8 w-8"
            aria-hidden="true"
            focusable="false"
          />
          <span>{item.text}</span>
        </li>
      ))}
    </ul>
  );

  return (
    <section aria-label="Our Services" className="flex overflow-hidden">
      <div className="animate-marquee-infinite">
        {renderContentBlock()}
        {renderContentBlock(true)}
      </div>
    </section>
  );
};

export default Marquee;
