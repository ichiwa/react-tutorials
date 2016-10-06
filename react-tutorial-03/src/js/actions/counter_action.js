export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';

export const inc = () => {
  return { type: INCREMENT };
}

export const dec = () => {
  return { type: DECREMENT };
}