import styles from './styles/page.module.css';
import Image from 'next/image';

export default function Home() {
  return (
    <main>
      <Image
        src="/icons/midway-logo.png"
        alt="Midway Logo"
        style={{ marginTop: 10 }}
        width={100}
        height={80}
      />

      <div
        style={{
          maxWidth: '100%',
          textAlign: 'right',
          lineHeight: 1.5,
          padding: 20,

          position: 'absolute',
          top: 100,
          right: 20,
        }}
      >
        <p>
          Ever wondered what lies between <br />
          you and your friends? Well, there’s <br />
          finally a way to figure it out!
        </p>
        <button className={styles.primary_button}>
          <p>Start</p>
        </button>
      </div>

      <h1 className={styles.homepage_midway}>Midway</h1>
    </main>
  );
}
