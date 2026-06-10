import { Metadata } from "next";

import { Comments } from "@/components/Comments";
import Body from "@/data/Body";
import Head from "@/data/Head";

export const metadata: Metadata = {
  title: "Harry Li | 李裕康",
  description:
    "Enthusiastic developer, learner, and researcher, passionate about learning new theories, practices and methodologies through intuition and hands-on experiences.",
};

export default function Page() {
  return (
    <main className="relative container mx-auto w-full max-w-4xl space-y-6 p-6 lg:p-16">
      <Head />
      <Body />
      <Comments />
    </main>
  );
}
