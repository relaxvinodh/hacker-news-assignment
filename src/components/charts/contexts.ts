import { createContext } from 'react';

type ChartContextType = {
  data: any[],
  setHoverId: (hoverId: string | number | null | undefined) => void,
};

export const ChartContext = createContext<ChartContextType | null>(null);

export type SvgContextValue = {
  width: number;
  height: number;
};

export const SvgContext = createContext<SvgContextValue | null>(null);
