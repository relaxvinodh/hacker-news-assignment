import React, { useState, useRef, useEffect } from 'react';
import { styled } from '../../../theme';
import { SvgContext, SvgContextValue } from '../contexts';

export const PositionedSvg = styled.svg`
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
`;

const SvgContainer: React.FC = ({ children }) => {
  const [sizes, setSizes] = useState<SvgContextValue>({ width: 0, height: 0 });
  const svgRef = useRef<SVGSVGElement>();
  const updateSvgWH = () => {
    if (svgRef.current) {
      const svg = window.getComputedStyle(svgRef.current);
      setSizes({ width: parseFloat(svg.width), height: parseFloat(svg.height) });
    }
  };

  useEffect(() => {
    updateSvgWH();
    window.addEventListener('resize', updateSvgWH, false);
    return () => window.removeEventListener('resize', updateSvgWH, false);
  }, []);

  return (
    <SvgContext.Provider value={sizes}>
      <PositionedSvg preserveAspectRatio="none" ref={svgRef as any}>
        {children}
      </PositionedSvg>
    </SvgContext.Provider>
  );
};
export default SvgContainer;
