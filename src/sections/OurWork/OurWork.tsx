import WorkGrid from '@components/WorkGrid/WorkGrid';

export default function OurWork() {
  return (
    <section>
      <div
        style={{
          width: '100%',
          height: '547px',
          overflow: 'scroll',
          position: 'relative',
        }}
      >
        <WorkGrid />
      </div>
    </section>
  );
}
