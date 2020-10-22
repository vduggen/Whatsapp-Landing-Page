import Header from "../components/Header";
import Banner from "../components/Banner";
import About from "../components/About";
import Download from "../components/Download";
import Security from "../components/Security";
import * as S from "../styles/pages/home";
import Questions from "../components/Questions";
import Footer from "../components/Footer";
import Head from "next/head";

function Home() {
  return (
    <>
      <Head>
        <title>Whatsapp Landing Page</title>
      </Head>

      <S.Container>
        <Header />

        <Banner />

        <About />

        <S.Divisor />

        <Download />

        <S.Divisor />

        <Security />

        <S.Divisor />

        <Questions />
      </S.Container>

      <Footer />
    </>
  );
}

export default Home;
