import { Comments } from "@/components/Comments";
import Body from "@/data/Body";
import Head from "@/data/Head";

export default function Page() {
  return (
    <main className="relative container mx-auto w-full max-w-4xl space-y-7 p-5 sm:p-6 lg:p-16">
      <Head />
      <Body />
      <Comments />
    </main>
  );
}
