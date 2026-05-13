import { isPossiblePhoneNumber, parsePhoneNumber } from "react-phone-number-input";

export const PHONE_ERROR_MESSAGE = "Please enter a valid phone number.";

const INTERNATIONAL_REGEX = /^\+[1-9][0-9]{7,14}$/;
const LOCAL_REGEX = /^[0-9]{8,15}$/;
const VALID_CHARACTERS_REGEX = /^\+?[0-9]+$/;
const PHONE_SEPARATOR_REGEX = /[\s()-]/g;
const DEFAULT_COUNTRY = "MY";

export const normalizePhoneNumber = (phone: string): string => {
  if (!phone) {
    return "";
  }

  return phone.trim().replace(PHONE_SEPARATOR_REGEX, "");
};

export const validatePhoneNumber = (phone: string): string | null => {
  const normalized = normalizePhoneNumber(phone);

  if (!normalized) {
    return PHONE_ERROR_MESSAGE;
  }

  if (!VALID_CHARACTERS_REGEX.test(normalized)) {
    return PHONE_ERROR_MESSAGE;
  }

  const digits = normalized.replace(/^\+/, "");
  if (digits.length < 8 || digits.length > 15) {
    return PHONE_ERROR_MESSAGE;
  }

  if (normalized.startsWith("+")) {
    if (!INTERNATIONAL_REGEX.test(normalized)) {
      return PHONE_ERROR_MESSAGE;
    }

    if (!isPossiblePhoneNumber(normalized)) {
      return PHONE_ERROR_MESSAGE;
    }

    return null;
  }

  if (!LOCAL_REGEX.test(normalized)) {
    return PHONE_ERROR_MESSAGE;
  }

  return null;
};

export const formatPhoneForAPI = (phone: string): string => {
  const normalized = normalizePhoneNumber(phone);

  if (!normalized) {
    return "";
  }

  if (normalized.startsWith("+")) {
    return normalized.slice(1);
  }

  if (normalized.startsWith("60")) {
    return normalized;
  }

  if (normalized.startsWith("0")) {
    const parsedPhone = parsePhoneNumber(normalized, DEFAULT_COUNTRY);

    if (parsedPhone?.number) {
      return parsedPhone.number.slice(1);
    }
  }

  return normalized;
};

export const parsePhoneFromAPI = (phone: string): string => {
  const normalized = normalizePhoneNumber(phone);

  if (!normalized) {
    return "";
  }

  if (normalized.startsWith("+")) {
    return normalized;
  }

  if (normalized.startsWith("0")) {
    return normalized;
  }

  return `+${normalized}`;
};
