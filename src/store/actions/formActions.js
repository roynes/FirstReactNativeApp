export const LOGIN = "LOGIN";
export const UPDATE_EMAIL = "UPDATE_EMAIL";
export const TOGGLE_REMEMBER = "TOGGLE_REMEMBER";
export const UPDATE_PASSWORD = "UPDATE_PASSWORD";

export function toggleRemember(toggle = false) {
  return {
    type: TOGGLE_REMEMBER,
    payload: toggle
  }
}

export function updateEmail(text = '') {
  return {
    type: UPDATE_EMAIL,
    payload: text
  }
}

export function updatePassword(text = '') {
  return {
    type: UPDATE_PASSWORD,
    payload: text
  }
}