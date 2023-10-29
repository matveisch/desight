import styles from './CompleteSolution.module.scss';
import CompleteDescription from '@components/CompleteDescription/CompleteDescription';
import { SpinAnimation } from '@components/SpinAnimation/SpinAnimation';
import OneStep from '@components/OneStep/OneStep';
import OneStepMobile from '@components/OneStepMobile/OneStepMobile';
import Image from 'next/image';
import arrow from '@images/arrow-link.svg';
import Link from 'next/link';
import { SiteContent } from '@/utils/types';

export default function CompleteSolution({
  dict,
  lang,
}: {
  dict: SiteContent;
  lang: 'he' | 'en' | 'ru';
}) {
  const steps = [
    {
      header: 'Wireframe',
      description: dict.completeSolution.steps.wireframe.description,
    },
    {
      header: 'Design',
      description: dict.completeSolution.steps.design.description,
    },
    {
      header: 'Development',
      description: dict.completeSolution.steps.development.description,
    },
    {
      header: 'Optimisation',
      description: dict.completeSolution.steps.optimisation.description,
    },
  ];

  return (
    <section className={styles.completeSolution} id="about">
      <div className={styles.header}>
        <CompleteDescription>
          <h3>{dict.completeSolution.description.from}</h3>
          <h2>{dict.completeSolution.description.completeSolution}</h2>
          <p className={styles.text}>{dict.completeSolution.description.ourPackage}</p>
          <Link href="#contact">
            <button style={{ width: '100%' }}>
              <p>{dict.completeSolution.description.getDetails}</p>
              <Image src={arrow} alt={'arrow'} />
            </button>
          </Link>
        </CompleteDescription>
        <SpinAnimation />
      </div>
      <div className={styles.stepsContainer}>
        {steps.map((step, index) => (
          <OneStep
            key={`${step.header}-${index}-step`}
            num={index + 1}
            header={step.header}
            description={step.description}
            first={index === 0}
            last={index === steps.length - 1}
            lang={lang}
          />
        ))}
      </div>
      <div className={styles.stepsContainerMobile}>
        <div className={styles.innerContainer}>
          {steps.map((step, index) => (
            <OneStepMobile
              key={`${step.header}-${index}-stepMobile`}
              num={index + 1}
              header={step.header}
              description={step.description}
              last={index === steps.length - 1}
            />
          ))}
        </div>
        <div className={styles.dashedRectangle} />
      </div>
    </section>
  );
}
