import styles from "./Social.module.scss";
import Image from "next/image";
import Link from "next/link";

function Social({ src, name, link }: {src: string, name: string, link: string}) {
  return (
    <Link className={styles.social} href={link}>
      <Image src={src} alt={name} className={styles.image} />
    </Link>
  );
}
export default Social;
