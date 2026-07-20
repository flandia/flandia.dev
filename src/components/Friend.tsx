import { FC, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { RichContent } from "@/components/ui/rich-content";

import { Card } from "./ui/card";

import styles from "./Friend.module.css";

export interface FriendProps {
  href: string;
  avatar?: string;
  initials?: string;

  name: ReactNode;
  desc: ReactNode;
}

export const Friend: FC<FriendProps> = (props) => {
  const { href, avatar, name, desc } = props;

  const initials =
    props.initials ??
    name
      ?.toString()
      .split(/\W/)
      .map((it) => it.at(0) ?? "")
      .join("");

  return (
    <Card className="-m-1 flex aspect-square min-w-0 flex-col items-center justify-center gap-1 rounded-md p-2 transition-colors focus-within:bg-muted/35 hover:bg-muted/35 motion-reduce:transition-none">
      <Avatar className="size-16">
        <AvatarImage src={avatar} className="object-cover" />
        <AvatarFallback>{initials}</AvatarFallback>
      </Avatar>
      <a
        href={href}
        rel="noreferrer"
        target="_blank"
        className="inline-flex text-center font-semibold hover:underline"
      >
        {name}
      </a>
      <div className={twMerge("text-center font-mono text-xs", styles.desc)}>
        <RichContent>{desc}</RichContent>
      </div>
    </Card>
  );
};
