import styles from "./styles/page.module.css";
import Link from "next/link";
import Image from "next/image";
import brokenbutterfly from "../public/brokenbutterfly.svg";

export default function NotFound() {
  return (
    <div
      style={{
        maxWidth: "100%",
        height: "100vh",
        maxHeight: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Image
        src={brokenbutterfly}
        alt="broken butterfly"
        width={100}
        height={80}
      />
      <h1>Uh Oh!</h1>
      <p>Looks like there was an issue!</p>
      <Link href="/">Go Back</Link>
    </div>
  );
}
