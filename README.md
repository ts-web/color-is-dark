[![npm version](https://img.shields.io/npm/v/color-is-dark.svg)](https://www.npmjs.com/package/color-is-dark)
[![Downloads](https://img.shields.io/npm/dm/color-is-dark.svg)](https://www.npmjs.com/package/color-is-dark)
![Uses TypeScript](https://img.shields.io/badge/Uses-Typescript-294E80.svg)


# color-is-dark

Returns whether the given rgb color array has a YIQ brightness value of less than 128 (50% brightness).

For more context see this article: [Calculating Color Contrast](https://24ways.org/2010/calculating-color-contrast/).


## Usage
```ts
import { colorIsDark } from 'color-is-dark';

colorIsDark([255, 239, 213]); // returns false
```

Optionally, pass in a brightness threshold in the range `0-255`. `colorIsDark` will return `true` if the color is less bright.
The default threshold is `128`.
```ts
colorIsDark(colorRgb, 85);
```
