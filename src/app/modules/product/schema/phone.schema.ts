import { Schema } from 'mongoose';
import {
  Battery,
  Body,
  Camera,
  Connectivity,
  Display,
  Performance,
  PhoneSpecs,
  Ram,
  Security,
  Sound,
  Storage,
} from '../interfaces';

const StorageSchema = new Schema<Storage>({
  size: { type: String, required: true },
  quantity: { type: Number, required: true },
});

const RamSchema = new Schema<Ram>({
  size: { type: String, required: true },
  quantity: { type: Number, required: true },
});

const ConnectivitySchema = new Schema<Connectivity>({
  network: { type: String, required: true },
  sim: { type: String, required: true },
  wlan: { type: String },
  bluetooth: { type: String },
  gps: { type: String },
  radio: { type: String },
  usb: { type: String, required: true },
  otg: { type: Boolean },
  typeC: { type: Boolean },
  nfc: { type: Boolean },
  infrared: { type: Boolean },
});

const BodySchema = new Schema<Body>({
  style: { type: String, required: true },
  material: { type: String, required: true },
  waterResistance: { type: String },
  dimensions: { type: String, required: true },
  weight: { type: String, required: true },
});

const DisplaySchema = new Schema<Display>({
  size: { type: String, required: true },
  resolution: { type: String, required: true },
  technology: { type: String, required: true },
  protection: { type: String, required: true },
  feature: { type: String, required: true },
});

const CameraSchema = new Schema<Camera>({
  resolution: { type: String, required: true },
  feature: { type: String, required: true },
  video: { type: String, required: true },
});

const BatterySchema = new Schema<Battery>({
  type: { type: String, required: true },
  capacity: { type: String, required: true },
  fastCharge: { type: String },
  wirelessCharge: { type: String },
});

const PerformanceSchema = new Schema<Performance>({
  os: { type: String, required: true },
  chip: { type: String, required: true },
  ram: [{ type: RamSchema, required: true }],
  processor: { type: String, required: true },
  gpu: { type: String, required: true },
});

const SoundSchema = new Schema<Sound>({
  trrs: { type: Boolean },
  feature: { type: String, required: true },
});

const SecuritySchema = new Schema<Security>({
  fingerPrint: { type: String },
  faceUnlock: { type: String },
});

export const PhoneSpecsSchema = new Schema<PhoneSpecs>({
  connectivity: { type: ConnectivitySchema, required: true },
  body: { type: BodySchema, required: true },
  display: { type: DisplaySchema, required: true },
  backCamera: { type: CameraSchema, required: true },
  frontCamera: { type: CameraSchema, required: true },
  battery: { type: BatterySchema, required: true },
  performance: { type: PerformanceSchema, required: true },
  storage: { type: [StorageSchema], required: true },
  sound: { type: SoundSchema, required: true },
  security: { type: SecuritySchema, required: true },
  sensors: { type: String, required: true },
});
