"use client";
import { shuffle } from "es-toolkit";
import { FC, startTransition, useEffect, useState } from "react";

import { Friend, FriendProps } from "@/components/Friend";
import { md } from "@/components/ui/rich-content";

const FriendList: FriendProps[] = [
  {
    href: "https://frankchen0205.github.io/",
    name: "Ruiping Chen",
    desc: md`
      UG in DS. @ HKUST '27
      Exchange @ ETH Zurich
      Research Interest:
      _He doesn't know either._ 😛
    `,
    avatar: "https://frankchen0205.github.io/selfie.jpg",
  },
  {
    href: "https://yzhanglp.com/",
    name: "Yuhao Zhang",
    desc: md`
      UG in CS+Math @ HKUST '25
      PhD in CS @ IC
      3D Computer Vision and Generation Model 😎
    `,
    avatar: "https://yzhanglp.com/images/profile.png",
  },
  {
    href: "https://matheart.github.io/",
    name: "Matheart",
    desc: md`
      UG in CS+Math @ HKUST '25
      PhD in CS+Stats @ UPenn
      Theory and Empirical Science of Deep Learning and LLMs 🥺
    `,
    avatar: "https://matheart.github.io/images/profile_blue.png",
  },
  {
    href: "https://galvingao.com/",
    name: "Galvin Gao",
    desc: md`
      Co-founder & Core Maintainer of [Penguin Statistics](https://penguin-stats.io/)... and more! 🥰
    `,
    avatar:
      "https://galvingao.com/content/images/2022/04/avatar-2dim-circle_512x512.png",
  },
  {
    href: "https://github.com/LeoZhu6",
    name: "Leo Zhu",
    desc: md`
      UG in ... IDK @ HKUST '29
      Funny science student who claims to be from the business school 🐽
    `,
    avatar: "https://avatars.githubusercontent.com/u/142682002?v=4",
  },
  {
    href: "https://www.markng.com/",
    name: "Mark Ng",
    desc: md`
      PhD in CS @ HKUST
      PL & Compiler. Oh no! His **_top-quality_** [lifter](https://github.com/hkust-taco/mlscript/pull/266) breaks my [PR](https://github.com/hkust-taco/mlscript/pull/343) again. 🤧
    `,
    avatar: "https://avatars.githubusercontent.com/u/55091936?v=4",
  },
  {
    href: "https://kf8311.github.io/",
    name: "Bosco Lam",
    desc: md`
      UG in COMP @ HKUST '28
      MyGO Mujica 😨.
      Also checkout [KD Workshop](https://www.facebook.com/profile.php?id=100077715879412) if you know OMSI 2. 🚍
    `,
    avatar:
      "https://avatars.githubusercontent.com/u/182246735?s=400&u=8201c15bdf1680766612714100f171e99781767c&v=4",
  },
  {
    href: "https://wyli.is-a.dev/",
    name: "Dhairya Shah",
    desc: md`
      UG in CS+ELEC @ HKUST '29
      Flandia underling 🫡.
      Trying to speedrun uni and life.
    `,
    avatar: "https://avatars.githubusercontent.com/u/44154103?v=4",
  },
  {
    href: "https://sites.google.com/view/chenyueasmsubmission/",
    name: "Frankie Chen",
    desc: md`
      UG in ECON @ HKUST '26
      MA in ECON @ UChicago '27
      My best ever roommate ❤️
    `,
    avatar:
      "https://github.com/user-attachments/assets/74cf7387-ab35-43a2-bd67-e2a2926777e0",
  },
];

export const Friends: FC = () => {
  const [friends, setFriends] = useState<typeof FriendList>([]);

  useEffect(() => {
    // Shuffle after hydration so the static HTML stays deterministic.
    startTransition(() => {
      setFriends(shuffle(FriendList));
    });
  }, []);

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 print:hidden">
      {friends.map((f) => (
        <Friend {...f} key={f.href} />
      ))}
      <Friend
        href="https://github.com/flandia/flandia.dev/pulls"
        name="Friends..."
        desc={md`
          Create a PR on this section for friendship!

          _No idea about a PR? Create an issue plz 🤡_
        `}
        initials="PR"
      />
    </div>
  );
};
