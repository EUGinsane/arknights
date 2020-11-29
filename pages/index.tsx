import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home({ fileName }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>WIP 👨‍🚒</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <img src="https://webusstatic.yo-star.com/ark_us_web/pc/img/logo02.924e2f2a.png" />
        <img src={`/characters/${fileName}`} style={{ width: "50vw" }} />
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  const res = await fetch("http://localhost:3000/api/hello");
  const data = await res.json();

  return {
    props: { fileName: data.filename }, // will be passed to the page component as props
  };
}
