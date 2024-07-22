import { EventEmitter, Subscription } from "expo-modules-core";

// Import the native module. On web, it will be resolved to Speedometer.web.ts
// and on native platforms to Speedometer.ts
import SpeedometerModule from './src/SpeedometerModule';

export function helloWorld(): string {
  return SpeedometerModule.hello();
}

const emitter = new EventEmitter(SpeedometerModule);

export type StepChangeEvent = {
  step: number;
};

export function requestPermissions() {
  return SpeedometerModule.requestPermissions();
}

export function startSendingData() {
  return SpeedometerModule.startSendingData();
}

export function stopSendingData() {
  return SpeedometerModule.stopSendingData();
}

export function addStepChangedListener(
  listener: (event: StepChangeEvent) => void
): Subscription {
  return emitter.addListener<StepChangeEvent>("onStepCounted", listener);
}