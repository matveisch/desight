import styles from './CompleteSolution.module.scss';
import CompleteDescription from '@components/CompleteDescription/CompleteDescription';
import { SpinAnimation } from '@components/spinAnimation/SpinAnimation';
import OneStep from '@components/OneStep/OneStep';
import OneStepMobile from '@components/OneStepMobile/OneStepMobile';

export default function CompleteSolution() {
  const steps = [
    {
      header: 'Wireframe',
      description:
        'Исследование пользователей и рынка для создания прототипа продукта. ',
    },
    {
      header: 'Design',
      description:
        'На основе прототипа создается современный дизайн, чтобы клиент был рад пользоваться вашим сайтом.',
    },
    {
      header: 'Development',
      description:
        'Разработка с помощью самых совеременных технологий гарантирует долгую поддержку сайта.',
    },
    {
      header: 'Optimisation',
      description:
        'Оптимизация SEO и процессов внутри бизнеса нужна, чтобы сэкономить ваше время и деньги, при этом увеличить продажи.',
    },
  ];

  return (
    <div className={styles.completeSolution} id='about'>
      <div className={styles.header}>
        <CompleteDescription />
        <SpinAnimation />
      </div>
      <div className={styles.stepsContainer}>
        {steps.map((step, index) => (
          <OneStep
            num={index + 1}
            header={step.header}
            description={step.description}
            first={index === 0}
            last={index === steps.length - 1}
          />
        ))}
      </div>
      <div className={styles.stepsContainerMobile}>
        <div className={styles.innerContainer}>
          {steps.map((step, index) => (
            <OneStepMobile
              num={index + 1}
              header={step.header}
              description={step.description}
              last={index === steps.length - 1}
            />
          ))}
        </div>
        <div className={styles.dashedRectangle} />
      </div>
    </div>
  );
}
