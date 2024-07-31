import styles from './styles/page.module.css';
import Logo from '../public/icons/midway-logo.png';

export default function Home() {
  return (
    <main>
      {/* <img src={Logo} alt="Midway Logo" /> */}

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
        <button className={styles.primary_button}>Start</button>
      </div>

      <p className={styles.homepage_midway}>Midway</p>
    </main>
  );
}
