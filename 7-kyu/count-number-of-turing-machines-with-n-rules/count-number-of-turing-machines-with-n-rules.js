function countRuleTables(n) {
  const base = 1n + 4n * BigInt(n)
  const exponent = 2n * BigInt(n)
  return base ** exponent      
}