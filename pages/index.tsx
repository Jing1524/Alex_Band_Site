import Link from "next/link";
import Layout from "../components/Layout";

import Landing from "../components/Landing";
import MusicPlayers from "../components/MusicPlayers";
import tracks from "../utils/tracks";
import About from "../components/About";
import Contact from "../components/Contact";

const IndexPage = () => (
  <Layout title="Home | Album Title">
    <Landing />
    <MusicPlayers tracks={tracks} />
    <About />
    <Contact />
  </Layout>
);

export default IndexPage;
