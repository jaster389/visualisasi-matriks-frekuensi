// MIT License - Perhitungan Kepadatan Matriks Digit 0-9
export function computeDigitDensity(rows) {
  const counts = Array(10).fill(0);
  for (const r of rows) {
    for (const ch of String(r).replace(/[^0-9]/g, "")) {
      counts[Number(ch)]++;
    }
  }
  return counts;
}
