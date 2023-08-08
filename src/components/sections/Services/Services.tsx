import TabSwitcher from '@components/TabSwitcher/TabSwitcher';
import ItemBlock from '@components/ItemBlock/ItemBlock';
import { designServices, servicesTabs } from '@/data/data';
import styles from './Services.module.scss';

export default function Services() {
  return (
    <div className={styles.services}>
      <TabSwitcher tabsNames={servicesTabs} />
      <div className={styles.servicesContainer}>
        {designServices.map((service, index) => (
          <ItemBlock service={service} index={index} />
        ))}
      </div>
    </div>
  );
}
