import React, { useState } from 'react';
import { scaleLinear } from '@visx/scale';
import { Group } from '@visx/group';
import { LinePath } from '@visx/shape';
import { MarkerArrow, MarkerCross, MarkerX, MarkerCircle, MarkerLine } from '@visx/marker';
import { AxisBottom, AxisLeft } from '@visx/axis';
import { curveBasis } from '@visx/curve';

const series = [
  [
    // With Financing
    { step: 1, value: 0 },
    { step: 2, value: 20 },
    { step: 3, value: 25 },
    { step: 4, value: 40 },
    { step: 5, value: 65 },
  ],
  // Without
  [
    { step: 1, value: 0 },
    { step: 2, value: 5 },
    { step: 3, value: 8 },
    { step: 4, value: 20 },
    { step: 5, value: 35 },
  ],
];

const getX = (d: { step: number; value: number }) => d.step;
const getY = (d: { step: number; value: number }) => d.value;

export type CurveProps = {
  width: number;
  height: number;
  showControls?: boolean;
};

export const Chart = ({ width, height, showControls = true }: CurveProps) => {
  const [showPoints, setShowPoints] = useState(false);
  const padding = 40;

  const allData = series.flat();

  const xScale = scaleLinear({
    domain: [1, 5],
    range: [padding, width - padding],
  });

  const yScale = scaleLinear({
    domain: [0, Math.max(...allData.map(getY))],
    range: [height - padding, padding],
  });

  return (
    <div className="visx-curves-demo z-10 bg-gradient-to-b from-[#36454F] to-[#0F172A] items-center justify-center flex">
      <h3 className="mb-5 text-4xl font-bold leading-[1.2] md:mb-6 md:text-5xl lg:text-6xl text-center">
        The Asset Alley Difference
      </h3>
      <svg width={width} height={height}>
        {/* Marker definitions */}
        <MarkerCircle id="marker-circle" fill="#FFF" size={2} refX={2} />
        <MarkerArrow id="marker-arrow-odd" stroke="#FFF" size={8} strokeWidth={1} />
        <MarkerLine id="marker-line" fill="#FFF" size={16} strokeWidth={1} />
        <MarkerArrow id="marker-arrow" fill="#FFF" refX={2} size={6} />

        <rect width={width} height={height} fill="rgba(0, 0, 0, 0)" rx={14} ry={14} />

        {/* Line series */}
        {series.map((lineData, i) => {
          const even = i % 2 === 0;
          const markerStart = even ? 'url(#marker-cross)' : 'url(#marker-x)';
          const markerEnd = even ? 'url(#marker-arrow)' : 'url(#marker-arrow-odd)';

          return (
            <Group key={`line-${i}`}>
              {showPoints &&
                lineData.map((d, j) => (
                  <circle
                    key={`pt-${i}-${j}`}
                    r={3}
                    cx={xScale(getX(d))}
                    cy={yScale(getY(d))}
                    stroke={even ? "#01E194" : "#FFF"}
                    fill="transparent"
                  />
                ))}
              <LinePath
                data={lineData}
                x={(d) => xScale(getX(d))}
                y={(d) => yScale(getY(d))}
                stroke={even ? '#01E194' : '#FFF'}
                strokeWidth={even ? 3 : 2}
                strokeOpacity={even ? 0.6 : 1}
                markerStart={markerStart}
                markerMid="url(#marker-circle)"
                markerEnd={markerEnd}
                curve={curveBasis}
              />
            </Group>
          );
        })}

        {/* X Axis */}
        <Group top={height - padding}>
          <AxisBottom
            scale={xScale}
            tickFormat={() => ''} // Hide tick values
            stroke="#FFF"
            tickStroke="#FFF"
            label='Time in Business'
            tickLabelProps={() => ({
              fill: 'transparent',
              fontSize: 0,
            })}
          />
        </Group>
        {/* X Axis */}
        <Group left={padding}>
          <AxisLeft
            scale={yScale}
            tickFormat={() => ''} // Hide tick values
            stroke="#FFF"
            tickStroke="#FFF"
            label='Sales'
            tickLabelProps={() => ({
              fill: 'white',
              fontSize: 12,
            })}
          />
        </Group>

      </svg>
    </div>
  );
};
