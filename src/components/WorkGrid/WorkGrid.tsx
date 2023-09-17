import Device from '@components/Device/Device';
import styles from './WorkGrid.module.scss';
import desktopPhoto from '@images/beetrade-desktop.svg';
import mobilePhoto from '@images/menu-mobile.svg';
import tabletPhoto from '@images/libira-tablet.svg';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function WorkGrid() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['1000px', '-500px'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const x = useTransform(scrollYProgress, [0, 1], [-50, 50]);
  const springSet = { bounce: 0, stiffness: 30, damping: 10, restDelta: 0.001 };
  const springY = useSpring(y, springSet);
  const springX = useSpring(x, springSet);

  return (
    <motion.div
      ref={ref}
      initial={{ rotate: 30 }}
      style={{ y: springY, x: springX }}
      className={styles.container}
    >
      <Device size={'desktop'} image={desktopPhoto} />
      <Device size={'tablet'} image={tabletPhoto} />
      <Device size={'mobile'} image={mobilePhoto} />

      <Device size={'mobile'} image={mobilePhoto} />
      <Device size={'desktop'} image={desktopPhoto} />
      <Device size={'tablet'} image={tabletPhoto} />

      <Device size={'mobile'} image={mobilePhoto} />
      <Device size={'tablet'} image={tabletPhoto} />
      <Device size={'desktop'} image={desktopPhoto} />
    </motion.div>
  );
}
