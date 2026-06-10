import {
  SiGithub,
  SiInstagram,
  SiThreads,
} from "@icons-pack/react-simple-icons";
import { GlobeIcon, MailIcon } from "lucide-react";
import { createElement, FC, PropsWithChildren } from "react";

import { Button } from "@/components/ui/button";
import TheAvatar from "@/data/TheAvatar";

const Name = ({ children }: PropsWithChildren) => (
  <h1 className="text-2xl font-bold">{children}</h1>
);

const About = ({ children }: PropsWithChildren) => (
  <div className="max-w-xl font-mono text-sm text-pretty text-muted-foreground">
    {children}
  </div>
);

const Location = ({ href, children }: PropsWithChildren<{ href: string }>) => (
  <p className="max-w-md items-center font-mono text-xs text-pretty text-muted-foreground">
    <a
      className="inline-flex gap-x-1.5 align-baseline leading-none hover:underline"
      href={href}
      rel="noreferrer"
      target="_blank"
    >
      <GlobeIcon className="h-3 w-3" />
      {children}
    </a>
  </p>
);

type SocialProps = {
  url: string;
  icon: FC<{ className?: string }>;
} & (
  | {
      label: string;
      labelPrefix?: string;
      printHidden?: false;
    }
  | {
      printHidden: true;
    }
);

const Social = (props: SocialProps) => {
  const { url, icon } = props;

  return (
    <>
      <Button
        className="h-8 w-8 print:hidden"
        variant="outline"
        size="icon"
        asChild
      >
        <a href={url} rel="noreferrer" target="_blank">
          {createElement(icon, { className: "h-4 w-4" })}
        </a>
      </Button>
      {props.printHidden || (
        <span className="hidden basis-full print:block">
          {props.labelPrefix}
          <span className="underline">{props.label}</span>
        </span>
      )}
    </>
  );
};

const Socials = ({ children }: PropsWithChildren) => (
  <div className="flex flex-row flex-wrap gap-x-1 gap-y-1 pt-1 font-mono text-sm text-muted-foreground">
    {children}
  </div>
);

const Head = () => (
  <div className="flex flex-col gap-2">
    <Name>
      Harry Y. H. Li <span className="font-normal">|</span>{" "}
      <ruby>
        李<rt>Li</rt>
      </ruby>
      <ruby>
        裕康
        <rt>Yu Hong</rt>
      </ruby>
    </Name>
    <div className="flex">
      <div className="flex flex-1 flex-col gap-2">
        <About>
          <TheAvatar className="float-end sm:hidden" />
          Enthusiastic learner and developer, passionate about learning new
          theories, practices and methodologies through intuition and hands-on
          experiences.
        </About>
        <Location href="https://maps.app.goo.gl/YZuY7rM4Mf9mvP9i8">
          HKUST, Hong Kong SAR
        </Location>
        <Socials>
          <Social
            url={"mailto:me@flandia.dev"}
            icon={MailIcon}
            label="me@flandia.dev"
          />
          <Social
            url="https://github.com/FlandiaYingman"
            icon={SiGithub}
            label="@FlandiaYingman"
            labelPrefix="GitHub: "
          />
          <Social
            url={"https://www.instagram.com/flandia_dev/"}
            icon={SiInstagram}
            printHidden
          />
          <Social
            url={"https://www.threads.net/@flandia_dev/"}
            icon={SiThreads}
            printHidden
          />
        </Socials>
      </div>
      <TheAvatar className="hidden sm:block" />
    </div>
  </div>
);

export default Head;
