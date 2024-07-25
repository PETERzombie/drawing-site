// pages/gallery/2018.tsx
import Head from 'next/head';
import styles from '../../styles/Gallery.module.css';

const Gallery2018: React.FC = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Gallery 2018</title>
        <meta name="description" content="Gallery 2018" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Gallery 2018</h1>
        {/* Add your gallery content here */}
      </main>
    </div>
  );
};

export default Gallery2018;
