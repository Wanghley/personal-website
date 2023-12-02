import Head from "next/head";
import Navigation from "./Navigation";
import config from "../lib/config";

type Props = {
  children: React.ReactNode;
};
export default function Layout({ children }: Props) {
  return (
    <div className="root">
      <Head>
        <meta charSet="utf-8" />
        <title>{config.site_title}</title>
        <meta name="description" content={config.site_description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <meta property="og:title" content={config.site_title} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={config.url} />
        <meta property="og:image" content={config.url + "/og_image.png"} />

        <link rel="manifest" href="/site.webmanifest" />
        <link rel="apple-touch-icon" href="/icon.png" />

        <meta name="theme-color" content="#fff" />
      </Head>
      <nav>
        <Navigation />
      </nav>
      <main>{children}</main>
      <style jsx>
        {`
          .root {
            display: block;
            padding: 4rem 0;
            box-sizing: border-box;
            height: 100%;
          }
          main {
            display: flex;
            min-height: 100%;
          }
          @media (min-width: 769px) {
            .root {
              display: flex;
              flex: 1;
            }
            main {
              flex: 1;
            }
          }
        `}
      </style>
    </div>
  );
}
