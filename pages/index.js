import Head from "next/head";
import Applications from "../Components/Applications";
import FooterNavigation from "../Components/FooterNavigation";
import Navbar from "../Components/Navbar";
import SectionHeading from "../Components/SectionHeading";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Application Management</title>
      </Head>
      <header>
        <Navbar />
      </header>
      <main>
        <SectionHeading />
        <Applications />
      </main>
      <footer>
        <FooterNavigation />
      </footer>
    </div>
  );
}
