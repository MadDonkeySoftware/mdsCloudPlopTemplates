import { capitalizeFirstLetter } from '../utils/capitalize-first-letter';

/**
 *
 * @param {*} text
 * @returns
 */
export function nameToCamelCase(text) {
  const parts = text.split('-');
  return parts
    .map((val, idx) => {
      return idx === 0 ? val : capitalizeFirstLetter(val);
    })
    .join('');
}
