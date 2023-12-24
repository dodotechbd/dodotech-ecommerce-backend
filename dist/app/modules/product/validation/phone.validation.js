"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PhoneSpecsSchema = void 0;
const zod_1 = require("zod");
const StorageSchema = zod_1.z.object({
    size: zod_1.z.string(),
    quantity: zod_1.z.number(),
});
// Validation schema for the Ram type
const RamSchema = zod_1.z.object({
    size: zod_1.z.string(),
    quantity: zod_1.z.number(),
});
// Validation schema for the Connectivity type
const ConnectivitySchema = zod_1.z.object({
    network: zod_1.z.string(),
    sim: zod_1.z.string(),
    wlan: zod_1.z.string().optional(),
    bluetooth: zod_1.z.string().optional(),
    gps: zod_1.z.string().optional(),
    radio: zod_1.z.string().optional(),
    usb: zod_1.z.string(),
    otg: zod_1.z.boolean().optional(),
    typeC: zod_1.z.boolean().optional(),
    nfc: zod_1.z.boolean().optional(),
    infrared: zod_1.z.boolean().optional(),
});
// Validation schema for the Body type
const BodySchema = zod_1.z.object({
    style: zod_1.z.string(),
    material: zod_1.z.string(),
    waterResistance: zod_1.z.string().optional(),
    dimensions: zod_1.z.string(),
    weight: zod_1.z.string(),
});
// Validation schema for the Display type
const DisplaySchema = zod_1.z.object({
    size: zod_1.z.string(),
    resolution: zod_1.z.string(),
    technology: zod_1.z.string(),
    protection: zod_1.z.string(),
    feature: zod_1.z.string(),
});
// Validation schema for the Camera type
const CameraSchema = zod_1.z.object({
    resolution: zod_1.z.string(),
    feature: zod_1.z.string(),
    video: zod_1.z.string(),
});
// Validation schema for the Battery type
const BatterySchema = zod_1.z.object({
    type: zod_1.z.string(),
    capacity: zod_1.z.string(),
    fastCharge: zod_1.z.string().optional(),
    wirelessCharge: zod_1.z.string().optional(),
});
// Validation schema for the Performance type
const PerformanceSchema = zod_1.z.object({
    os: zod_1.z.string(),
    chip: zod_1.z.string(),
    ram: zod_1.z.array(RamSchema),
    processor: zod_1.z.string(),
    gpu: zod_1.z.string(),
});
// Validation schema for the Sound type
const SoundSchema = zod_1.z.object({
    trrs: zod_1.z.boolean().optional(),
    feature: zod_1.z.string(),
});
// Validation schema for the Security type
const SecuritySchema = zod_1.z.object({
    fingerPrint: zod_1.z.string().optional(),
    faceUnlock: zod_1.z.string().optional(),
});
// Validation schema for the PhoneSpecs type
exports.PhoneSpecsSchema = zod_1.z.object({
    connectivity: ConnectivitySchema,
    body: BodySchema,
    display: DisplaySchema,
    backCamera: CameraSchema,
    frontCamera: CameraSchema,
    battery: BatterySchema,
    performance: PerformanceSchema,
    storage: zod_1.z.array(StorageSchema),
    sound: SoundSchema,
    security: SecuritySchema,
    sensors: zod_1.z.string(),
});
