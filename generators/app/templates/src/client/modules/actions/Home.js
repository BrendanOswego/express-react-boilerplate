import {
  INCREASE_REQUEST,
  DECREASE_REQUEST
} from '../types/Home';

export const increase = () => ({
  type: INCREASE_REQUEST
});

export const decrease = () => ({
  type: DECREASE_REQUEST
});
