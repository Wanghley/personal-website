import Layout from "../components/Layout";
import { SocialList } from "../components/SocialList";

export default function Index() {
  return (
    <Layout>
      <div className="container">
        <div>
          <h1>
            Hi, We're Next.js & Netlify<span className="fancy">.</span>
          </h1>
          <span className="handle">@nextjs-netlify-blog</span>
          <h2>A blog template with Next.js and Netlify.</h2>
          <SocialList />
        </div>
      </div>
      <style jsx>{`
        .container {
          display: flex;
          align-items: center;
          justify-content: center;
          flex: 1;
        }
        h1 {
          font-size: 3em;
          margin: 0;
          font-weight: 500;
        }
        h2 {
          font-size: 2.25em;
          font-weight: 400;
          line-height: 1.25;
          max-width: 22em;
          letter-spacing: -0.03em;
        }
        .fancy {
          color: #15847d;
        }
        .handle {
          display: inline-block;
          margin-top: 0.275em;
          color: #9b9b9b;
          letter-spacing: 0.5px;
        }
      `}</style>
    </Layout>
  );
}
