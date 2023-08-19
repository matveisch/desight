'use client';
import styles from './Desighted.module.scss';
import { motion } from 'framer-motion';
import React, { useRef, useState, useEffect } from 'react';

export default function Desighted() {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const [buttonSize, setButtonSize] = useState({
    width: 1,
    height: 1,
  });

  const [mousePosition, setMousePosition] = useState({
    x: null,
    y: null,
  });

  const constraintsRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    setButtonSize({
      width: buttonRef.current?.clientWidth,
      height: buttonRef.current?.clientHeight,
    });
    console.log(buttonSize);
  }, [buttonRef]);

  useEffect(() => {
    const updateButtonPosition = (ev: object) => {
      setMousePosition({
        x: ev.screenX - constraintsRef.current?.offsetLeft,
        y: ev.pageY - constraintsRef.current?.offsetTop,
      });
    };

    isHovered
      ? window.addEventListener('mousemove', updateButtonPosition)
      : window.removeEventListener('mousemove', updateButtonPosition);
    return () => {
      window.removeEventListener('mousemove', updateButtonPosition);
    };
  }, [isHovered]);

  return (
    <>
      <motion.div
        className={styles.main}
        ref={constraintsRef}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <motion.button
          //   initial={{
          //     left: 0,
          //     top: 0,
          //     right: 0,
          //     bottom: 0,
          //   }}
          //   animate={buttonPosition}
          dragConstraints={constraintsRef}
          animate={{
            left: mousePosition.x - buttonSize.width / 2,
            top: mousePosition.y - buttonSize.height / 2,
          }}
          transition={{ type: 'tween' }}
          className={styles.button}
          ref={buttonRef}
        >
          Desighted?
        </motion.button>
      </motion.div>
    </>
  );
}
