'use client';
import styles from './Desighted.module.scss';
import { motion } from 'framer-motion';
import React, { useRef, useState, useEffect } from 'react';

export default function Desighted() {
  const containerRef = useRef(null);
  const buttonRef = useRef(null);

  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [isInBounders, setInBounders] = useState<boolean>(false);
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
  //   useEffect(() => {
  //     if (
  //       mousePosition.x > buttonSize.width / 2 &&
  //       mousePosition.x < containerSize.width - buttonSize.width / 2 &&
  //       mousePosition.y > buttonSize.height / 2 &&
  //       mousePosition.y < containerSize.height - buttonSize.height / 2
  //     ) {
  //       setInBounders(true);
  //     } else {
  //       setInBounders(false);
  //     }
  //   }, [mousePosition]);

  useEffect(() => {
    setButtonSize({
      width: buttonRef.current?.clientWidth,
      height: buttonRef.current?.clientHeight,
    });
    setContainerSize({
      width: containerRef.current.clientWidth,
      height: containerRef.current.clientHeight,
    });
    console.log(containerSize);
  }, []);

  useEffect(() => {
    const updateButtonPosition = (ev: object) => {
      setMousePosition({
        x: ev.screenX - containerRef.current?.offsetLeft,
        y: ev.pageY - containerRef.current?.offsetTop,
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
        ref={containerRef}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <motion.button
          //   animate={buttonPosition}

          //   animate={{
          //     left: isHovered
          //       ? mousePosition.x > buttonSize.width / 2 &&
          //         mousePosition.x < containerSize.width - buttonSize.width / 2
          //         ? mousePosition.x - buttonSize.width / 2
          //         : mousePosition.x >= containerSize.width - buttonSize.width / 2
          //         ? containerSize.width - buttonSize.width / 2
          //         : mousePosition <= buttonSize.width / 2
          //         ? 0
          //         : 'unset'
          //       : 'unset',

          //     top: isHovered
          //       ? mousePosition.y > buttonSize.height / 2 &&
          //         mousePosition.y < containerSize.height - buttonSize.height / 2
          //         ? mousePosition.y - buttonSize.height / 2
          //         : mousePosition > buttonSize.height / 2 &&
          //           mousePosition.y >=
          //             containerSize.height - buttonSize.height / 2
          //         ? containerSize.height - buttonSize.height / 2
          //         : 0
          //       : 'unset',
          //   }}
          animate={{
            left: isHovered ? mousePosition.x - buttonSize.width / 2 : 'unset',
            top: isHovered ? mousePosition.y - buttonSize.height / 2 : 'unset',
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
