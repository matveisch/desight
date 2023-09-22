import Device from '@components/Device/Device';
import styles from './WorkGrid.module.scss';

import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { beetradeWork, libiraWork, radarWork } from '@/utils/data/data';

type Props = {
  title: string;
};

export default function WorkGrid(props: Props) {
  const ref = useRef(null);
  const imagesObject =
    props.title === 'Libira'
      ? libiraWork
      : props.title === 'Radar Digitaly'
      ? radarWork
      : beetradeWork;
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
      <Device size={'desktop'} image={imagesObject.dc1} />
      <Device size={'tablet'} image={imagesObject.hor1} />
      <Device size={'mobile'} image={imagesObject.mob1} />

      <Device size={'mobile'} image={imagesObject.mob2} />
      <Device size={'desktop'} image={imagesObject.dc2} />
      <Device size={'tablet'} image={imagesObject.hor2} />

      <Device size={'mobile'} image={imagesObject.mob3} />
      <Device size={'tablet'} image={imagesObject.hor3} />
      <Device size={'desktop'} image={imagesObject.dc1} />
    </motion.div>
  );
}
