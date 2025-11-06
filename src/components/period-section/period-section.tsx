type PeriodSectionProps = {
  period: any;
};

export const PeriodSection = ({ period }: PeriodSectionProps) => {
  return (
    <section>
      <h2>periodo selecionado</h2>
      {period}
    </section>
  );
};
