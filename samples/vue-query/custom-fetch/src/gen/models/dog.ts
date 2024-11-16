/**
 * Generated by orval v7.3.0 🍺
 * Do not edit manually.
 * Swagger Petstore
 * OpenAPI spec version: 1.0.0
 */
import type { Labradoodle } from './labradoodle';
import type { Dachshund } from './dachshund';
import type { DogType } from './dogType';

export type Dog =
  | (Labradoodle & {
      barksPerMinute?: number;
      type: DogType;
    })
  | (Dachshund & {
      barksPerMinute?: number;
      type: DogType;
    });
