/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

export enum AppState {
  Capturing,
  Processing,
  Animating,
  Error,
}

export interface Frame {
  x: number;
  y: number;
  width: number;
  height: number;
}
