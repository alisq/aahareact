export function reviewNumber(num) {
  if (num > 0) {
    return "Positive"
  } else if (num < 0) {
    return "Negative"
  } else {
    return "Zero"
  }
}


export const noop = () => {}