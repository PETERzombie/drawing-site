// pages/index.tsx
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

interface Album {
  year: string;
  imageUrl: string;
  link: string;
}

const albums: Album[] = [
  { year: '2018', imageUrl: '/images/2018.jpg', link: '/gallery/2018' },
  { year: '2019', imageUrl: '/images/2019.jpg', link: '/gallery/2019' },
  { year: '2020', imageUrl: '/images/2020.jpg', link: '/gallery/2020' },
  { year: '2021', imageUrl: '/images/2021.jpg', link: '/gallery/2021' },
];

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Family Photo Album</title>
        <meta name="description" content="A family photo album" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h2 className={styles.title}>Memory Manager</h2>
        <div className={styles.grid}>
          {albums.map(album => (
            <a key={album.year} href={album.link} className={styles.card}>
              <div className={styles.cardContent}>
                <h2>{album.year} &rarr;</h2>
              </div>
              <Image
                src={album.imageUrl}
                alt={album.year}
                className={styles.cardImage}
                layout="fill"
                objectFit="cover"
              />
            </a>
          ))}
        </div>
      </main>
    </div>
  );
}
