"use client";

import { CONTACT_INFO } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { InstagramIcon, MailIcon, MessageCircleIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

interface ContactItemProps {
  href: string;
  icon: React.ReactNode;
  label: string;
  value: string;
  external?: boolean;
}

const ContactItem = ({
  href,
  icon,
  label,
  value,
  external = false,
}: ContactItemProps): React.ReactElement => {
  return (
    <Link
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={cn(
        "group flex items-center gap-4 rounded-lg p-4 transition-all",
        "hover:bg-forge-primary/5 focus:ring-forge-primary/50 focus:ring-2 focus:outline-none",
      )}
    >
      <div className="bg-forge-primary/10 text-forge-primary group-hover:bg-forge-primary/20 flex size-12 items-center justify-center rounded-full transition-all">
        {icon}
      </div>
      <div className="flex flex-col">
        <span className="text-sm font-medium text-neutral-400">{label}</span>
        <span className="text-base font-semibold">{value}</span>
      </div>
    </Link>
  );
};

const ContactInfo = (): React.ReactElement => {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="mb-2 text-xl font-semibold">Get in touch</h3>

      <ContactItem
        href={CONTACT_INFO.whatsapp}
        icon={<MessageCircleIcon className="size-6" />}
        label="Message us"
        value={CONTACT_INFO.phone}
        external
      />

      <ContactItem
        href={`mailto:${CONTACT_INFO.email}`}
        icon={<MailIcon className="size-6" />}
        label="Email us"
        value={CONTACT_INFO.email}
      />

      <ContactItem
        href={CONTACT_INFO.instagram}
        icon={<InstagramIcon className="size-6" />}
        label="Follow us"
        value="@forging_dev"
        external
      />
    </div>
  );
};

export default ContactInfo;
