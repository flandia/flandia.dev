"use client";

import { sample } from "es-toolkit/array";
import { startTransition, useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const AVATARS = ["/avatar.jpg", "/avatar2.jpg"] as const;

let selectedAvatar: (typeof AVATARS)[number] | undefined;

const selectAvatar = () => {
  selectedAvatar ??= sample(AVATARS);
  return selectedAvatar;
};

const TheAvatar = ({ className }: { className?: string }) => {
  const [avatar, setAvatar] = useState<(typeof AVATARS)[number]>(AVATARS[0]);

  useEffect(() => {
    startTransition(() => {
      setAvatar(selectAvatar());
    });
  }, []);

  return (
    <Avatar className={twMerge("ml-2 size-32 rounded-xl", className)}>
      <AvatarImage
        alt="Portrait of Harry Li"
        src={avatar}
        width={128}
        height={128}
        fetchPriority="high"
      />
      <AvatarFallback />
    </Avatar>
  );
};

export default TheAvatar;
