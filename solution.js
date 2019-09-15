const wave = (string) => [...string]
  .map(
    (char, i) => `${string.slice(0, i)}${char.toUpperCase()}${string.slice(
      i + 1,
      string.length,
    )}`,
  )
  .filter((space) => /[A-Z]/.test(space));
wave('this is a demonstration');
