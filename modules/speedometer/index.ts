
// Import the native module. On web, it will be resolved to Speedometer.web.ts
// and on native platforms to Speedometer.ts
import SpeedometerModule from './src/SpeedometerModule';

export function helloWorld(): string {
  return SpeedometerModule.hello();
}
