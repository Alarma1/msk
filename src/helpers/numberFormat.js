export default function numberFormat(value) {
  console.log(value);
  return new Intl.NumberFormat('ru').format(value);
}
