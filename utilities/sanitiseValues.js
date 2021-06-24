import * as R from "ramda";

// temp fix
export const sanitiseIncreaseValues = R.pipe(
  R.values,
  R.dropLast(1),
  R.tap(R.identity),
  R.map(R.when(R.lt(R.__, 0), R.always(0))),
  R.map(R.when(R.gt(R.__, 5000000), R.always(0)))
);

// temp fix
export const sanitiseDeceasedValues = R.pipe(
  R.values,
  R.dropLast(1),
  R.tap(R.identity),
  R.map(R.when(R.lt(R.__, 0), R.always(0))),
  R.map(R.when(R.gt(R.__, 100000), R.always(0)))
);
