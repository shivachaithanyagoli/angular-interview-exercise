// your data models (no change needed)
export interface Station {
  stationIdentifier: string;
  name: string;
}

export interface Observation {
  properties: {
    temperature: { value: number | null };
    timestamp: string;
  };
}
