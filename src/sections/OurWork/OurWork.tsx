import Device from '@components/Device/Device';

import desktopPhoto from '@images/beetrade-desktop.svg';
import mobilePhoto from '@images/menu-mobile.svg';
import tabletPhoto from '@images/libira-tablet.svg';

export default function OurWork() {
  return (
    <section>
      <Device size={'desktop'} image={desktopPhoto} />
      <Device size={'mobile'} image={mobilePhoto} />
      <Device size={'tablet'} image={tabletPhoto} />
    </section>
  );
}
