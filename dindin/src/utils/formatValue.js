export function formatedValueInputBRL(value) {
  if (value.indexOf('0') === 0 && value.length >= 4) {
    value = value.replace('0', '')
  }

  if (value[value.length - 1] != Number(value[value.length - 1])) {
    return value.substring(0, value.length - 1)
  }

  const integerPart = value.slice(0, -2)
  const decimalPart = value.slice(-2)

  let formatedNumber = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, '.') + ',' + decimalPart
  while (formatedNumber.length <= 3) {
    formatedNumber = `0${formatedNumber}`
  }
  return formatedNumber
}

export function formatedDate(value) {
  const formated = value.split('-')
  return `${formated[2]}/${formated[1]}/${formated[0]}`
}
