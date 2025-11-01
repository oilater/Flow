import { go } from "./go.js"

export const pipe = (f, ...fs) => (...as) => go(f(...as), ...fs);