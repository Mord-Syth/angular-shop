import { InjectionToken } from '@angular/core';
import { GeneratorService } from './generator.service';

export const Token3 = new InjectionToken<number>('Token3');

export function GeneratorFactory(length: number) {
  return (generator: GeneratorService): string => generator.generate(length);
}
