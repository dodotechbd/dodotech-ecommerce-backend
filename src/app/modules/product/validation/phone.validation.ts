import { z } from 'zod';

const StorageSchema = z.object({
  size: z.string(),
  quantity: z.number(),
});

// Validation schema for the Ram type
const RamSchema = z.object({
  size: z.string(),
  quantity: z.number(),
});

// Validation schema for the Connectivity type
const ConnectivitySchema = z.object({
  network: z.string(),
  sim: z.string(),
  wlan: z.string().optional(),
  bluetooth: z.string().optional(),
  gps: z.string().optional(),
  radio: z.string().optional(),
  usb: z.string(),
  otg: z.boolean().optional(),
  typeC: z.boolean().optional(),
  nfc: z.boolean().optional(),
  infrared: z.boolean().optional(),
});

// Validation schema for the Body type
const BodySchema = z.object({
  style: z.string(),
  material: z.string(),
  waterResistance: z.string().optional(),
  dimensions: z.string(),
  weight: z.string(),
});

// Validation schema for the Display type
const DisplaySchema = z.object({
  size: z.string(),
  resolution: z.string(),
  technology: z.string(),
  protection: z.string(),
  feature: z.string(),
});

// Validation schema for the Camera type
const CameraSchema = z.object({
  resolution: z.string(),
  feature: z.string(),
  video: z.string(),
});

// Validation schema for the Battery type
const BatterySchema = z.object({
  type: z.string(),
  capacity: z.string(),
  fastCharge: z.string().optional(),
  wirelessCharge: z.string().optional(),
});

// Validation schema for the Performance type
const PerformanceSchema = z.object({
  os: z.string(),
  chip: z.string(),
  ram: z.array(RamSchema),
  processor: z.string(),
  gpu: z.string(),
});

// Validation schema for the Sound type
const SoundSchema = z.object({
  trrs: z.boolean().optional(),
  feature: z.string(),
});

// Validation schema for the Security type
const SecuritySchema = z.object({
  fingerPrint: z.string().optional(),
  faceUnlock: z.string().optional(),
});

// Validation schema for the PhoneSpecs type
export const PhoneSpecsSchema = z.object({
  connectivity: ConnectivitySchema,
  body: BodySchema,
  display: DisplaySchema,
  backCamera: CameraSchema,
  frontCamera: CameraSchema,
  battery: BatterySchema,
  performance: PerformanceSchema,
  storage: z.array(StorageSchema),
  sound: SoundSchema,
  security: SecuritySchema,
  sensors: z.string(),
});
