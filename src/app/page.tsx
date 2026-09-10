import { Comments } from "@/components/Comments";
import Body from "@/data/Body";
import Head from "@/data/Head";

export default function Page() {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:rounded focus:bg-background focus:p-2"
      >
        Skip to content
      </a>
      <main
        id="main-content"
        tabIndex={-1}
        className="relative container mx-auto w-full max-w-4xl space-y-7 p-5 sm:p-6 lg:p-16"
      >
        <Head />
        <Body />
        <Comments />
      </main>
    </>
  );
}
