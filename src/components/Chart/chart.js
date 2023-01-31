import React from 'react';
import { VictoryAxis, VictoryBar, VictoryChart } from 'victory';

export default function chart() {
  const data = [
    { quarter: 1, earnings: 13000 },
    { quarter: 2, earnings: 16500 },
    { quarter: 3, earnings: 14250 },
    { quarter: 4, earnings: 19000 },
  ];

  return (
    <VictoryChart domainPadding={20}>
      <VictoryAxis tickValues={[1, 2, 3, 4]} tickFormat={['Q1', 'Q2', 'Q3', 'Q4']} />
      <VictoryAxis dependentAxis tickFormat={(x) => `$${x / 1000}k`} />
      <VictoryBar data={data} x="quarter" y="earnings" />
    </VictoryChart>
  );
}
