import styles from './TabSwitcher.module.scss';

type TabSwitcherProps = {
  tabsNames: string[];
};

export default function TabSwitcher(props: TabSwitcherProps) {
  const { tabsNames } = props;

  return (
    <div className={styles.tabSwitcher}>
      <div
        className={styles.switcher}
        style={{ width: `${100 / tabsNames?.length}%` }}
      />
      {tabsNames.map((tab) => {
        return <h4>{tab}</h4>;
      })}
    </div>
  );
}
