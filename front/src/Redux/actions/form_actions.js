import axios from "axios"

export const FORM_CANCHA = 'FORM_CANCHA';

export const formCancha = (canchaData) => {
  return {
    type: FORM_CANCHA,
    payload: canchaData,
  };
};
