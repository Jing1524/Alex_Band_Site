import Link from "next/link";
import Layout from "../components/Layout";

import Landing from "../components/Landing";

const IndexPage = () => (
  <Layout title="Home | Album Title">
    <Landing />
    <h1>Hello Next.js 👋</h1>
    <p>
      <Link href="/about">
        <a>About</a>
      </Link>
    </p>
  </Layout>
);

export default IndexPage;
