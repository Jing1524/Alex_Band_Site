import Link from "next/link";
import Layout from "../components/Layout";

import Landing from "../components/Landing";
import MusicPlayers from "../components/MusicPlayers";
import tracks from "../utils/tracks";
const IndexPage = () => (
  <Layout title="Home | Album Title">
    <Landing />
    <MusicPlayers tracks={tracks} />
    <h1>Hello Next.js 👋</h1>
    <p>
      <Link href="/about">
        <a>About</a>
      </Link>
    </p>
  </Layout>
);

export default IndexPage;
