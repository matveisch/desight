import Device from '@components/Device/Device';
import styles from './WorkGrid.module.scss';
import desktopPhoto from '@images/beetrade-desktop.svg';
import mobilePhoto from '@images/menu-mobile.svg';
import tabletPhoto from '@images/libira-tablet.svg';
import beetradeDc1 from '@images/beetradeDc1.jpg';
import beetradeDc2 from '@images/beetradeDc2.jpg';
import beetradeMob1 from '@images/beetradeMob1.jpg';
import beetradeMob2 from '@images/beetradeMob2.jpg';
import beetradeMob3 from '@images/beetradeMob3.jpg';
import beetradeHor1 from '@images/beetradeHor1.jpg';
import beetradeHor2 from '@images/beetradeHor2.jpg';
import beetradeHor3 from '@images/beetradeHor3.jpg';

import radarDc1 from '@images/radarDc1.jpg';
import radarDc2 from '@images/radarDc2.jpg';
import radarMob1 from '@images/radarMob1.jpg';
import radarMob2 from '@images/radarMob2.jpg';
import radarMob3 from '@images/radarMob3.jpg';
import radarHor1 from '@images/radarHor1.jpg';
import radarHor2 from '@images/radarHor2.jpg';
import radarHor3 from '@images/radarHor3.jpg';

import libiraDc1 from '@images/libiraDc1.jpg';
import libiraDc2 from '@images/libiraDc2.jpg';
import libiraMob1 from '@images/libiraMob1.jpg';
import libiraMob2 from '@images/libiraMob2.jpg';
import libiraMob3 from '@images/libiraMob3.jpg';
import libiraHor1 from '@images/libiraHor1.jpg';
import libiraHor2 from '@images/libiraHor2.jpg';
import libiraHor3 from '@images/libiraHor3.jpg';

import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { useRef } from 'react';

type Props = {
  title: string;
};

export default function WorkGrid(props: Props) {
  const ref = useRef(null);
  const imagesObject =
    props.title == 'Libira'
      ? {
          dc1: libiraDc2,
          dc2: libiraDc1,
          mob1: libiraMob1,
          mob2: libiraMob2,
          mob3: libiraMob3,
          hor1: libiraHor1,
          hor2: libiraHor2,
          hor3: libiraHor3,
        }
      : props.title == 'Radar Digitaly'
      ? {
          dc1: radarDc2,
          dc2: radarDc1,
          mob1: radarMob2,
          mob2: radarMob3,
          mob3: radarMob1,
          hor1: radarHor3,
          hor2: radarHor1,
          hor3: radarHor2,
        }
      : {
          dc1: beetradeDc2,
          dc2: beetradeDc1,
          mob1: beetradeMob1,
          mob2: beetradeMob2,
          mob3: beetradeMob3,
          hor1: beetradeHor1,
          hor2: beetradeHor2,
          hor3: beetradeHor3,
        };
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
