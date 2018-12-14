export default function findAllFactors(value) {
  let result = [1];
  let searchCeil = Math.ceil(Math.sqrt(value));
  let i;

  for (i = 2; i <= searchCeil; i++) {
    if (value % i === 0) {
      result.push(Math.round(value / i));
    }
  }
  if (value !== 0)
  {
    result.push(value);
  }

  return result;
}