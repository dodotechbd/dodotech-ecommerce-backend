export type Storage = {
  size: string;
  quantity: number;
};

export type Ram = {
  size: string;
  quantity: number;
};

export type Connectivity = {
  network: string;
  sim: string;
  wlan?: string;
  bluetooth?: string;
  gps?: string;
  radio?: string;
  usb: string;
  otg?: boolean;
  typeC?: boolean;
  nfc?: boolean;
  infrared?: boolean;
};

export type Body = {
  style: string;
  material: string;
  waterResistance?: string;
  dimensions: string;
  weight: string;
};

export type Display = {
  size: string;
  resolution: string;
  technology: string;
  protection: string;
  feature: string;
};

export type Camera = {
  resolution: string;
  feature: string;
  video: string;
};

export type Battery = {
  type: string;
  capacity: string;
  fastCharge?: string;
  wirelessCharge?: string;
};

export type Performance = {
  os: string;
  chip: string;
  ram: Ram[];
  processor: string;
  gpu: string;
};

export type Sound = {
  trrs?: boolean;
  feature: string;
};

export type Security = {
  fingerPrint?: string;
  faceUnlock?: string;
};

export type PhoneSpecs = {
  connectivity: Connectivity;
  body: Body;
  display: Display;
  backCamera: Camera;
  frontCamera: Camera;
  battery: Battery;
  performance: Performance;
  storage: Storage[];
  sound: Sound;
  security: Security;
  sensors: string;
};
