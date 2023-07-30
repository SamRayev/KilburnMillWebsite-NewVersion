export const calculateCentroid = coords => {
    let totals = coords.reduce(
      (r, c) => {
        r.x += c.x;
        r.y += c.y;
        return r;
      },
      { x: 0, y: 0 }
    );
    return { x: totals.x / coords.length, y: totals.y / coords.length };
  };
  