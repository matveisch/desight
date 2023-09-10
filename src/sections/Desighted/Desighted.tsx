'use client';

import styles from './Desighted.module.scss';
import { motion } from 'framer-motion';
import React, { useRef, useState, useEffect } from 'react';

export default function Desighted() {
  const containerRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  // const shadowOne = useRef(null);

  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [buttonSize, setButtonSize] = useState({
    width: 1,
    height: 1,
  });
  const [containerSize, setContainerSize] = useState({
    width: 1000,
    height: 570,
  });

  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    if (buttonRef.current) {
      setButtonSize({
        width: buttonRef.current?.clientWidth,
        height: buttonRef.current?.clientHeight,
      });
    }
    setContainerSize({
      width: containerRef.current?.clientWidth
        ? containerRef.current?.clientWidth
        : 0,
      height: containerRef.current?.clientHeight
        ? containerRef.current?.clientHeight
        : 0,
    });

    // console.log(buttonSize);
  }, []);

  useEffect(() => {
    const updateButtonPosition = (ev: MouseEvent) => {
      if (containerRef.current) {
        setMousePosition({
          x: Math.min(
            Math.max(
              Math.round((ev.clientX - containerRef.current.offsetLeft) / 10),
              buttonSize.width / 20
            ),
            (containerSize.width - buttonSize.width / 2) / 10
          ),
          y: Math.min(
            Math.max(
              Math.round((ev.pageY - containerRef.current?.offsetTop) / 10),
              buttonSize.height / 20
            ),
            (containerSize.height - buttonSize.height / 2) / 10
          ),
        });
      }
    };
    isHovered
      ? window.addEventListener('mousemove', updateButtonPosition)
      : window.removeEventListener('mousemove', updateButtonPosition);

    return () => {
      window.removeEventListener('mousemove', updateButtonPosition);
    };
  }, [isHovered]);

  const animation = {
    left: isHovered ? mousePosition.x * 10 - buttonSize.width / 2 : 'unset',
    top: isHovered ? mousePosition.y * 10 - buttonSize.height / 2 : 'unset',
  };

  return (
    <>
      <motion.div
        className={styles.main}
        ref={containerRef}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <motion.button
          animate={animation}
          transition={{ duration: 0.3, type: 'tween' }}
          className={styles.button}
          ref={buttonRef}
        >
          Desighted?
        </motion.button>
        <motion.div
          style={{
            backgroundColor: '#27A7EF',
            width: buttonSize.width - 3,
            height: buttonSize.height - 3,
            zIndex: 3,
          }}
          animate={animation}
          transition={{ duration: 0.35 }}
        ></motion.div>
        <motion.div
          style={{
            backgroundColor: '#D327EF',
            width: buttonSize.width - 7,
            height: buttonSize.height - 7,
            zIndex: 2,
          }}
          animate={animation}
          transition={{ duration: 0.4 }}
        ></motion.div>
        <motion.div
          style={{
            backgroundColor: '#EF2727',
            width: buttonSize.width - 10,
            height: buttonSize.height - 10,
            zIndex: 1,
          }}
          animate={animation}
          transition={{ duration: 0.45 }}
        ></motion.div>
      </motion.div>
      {/* <p style={{ color: '#fff' }}>x: {mousePosition.x}</p>
      <p style={{ color: '#fff' }}>y: {mousePosition.y}</p> */}
    </>
  );
}
