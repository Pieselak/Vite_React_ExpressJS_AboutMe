export const GLUCOSE_CONSTANTS = {
  SEC_TO_MS: 1000,
  GLUCOSE: {
    SENSOR_LIFETIME_SEC: 1209600,
    REFRESH_BUFFER_MS: 65000,
    DEFAULT_RETRY_MS: 15000,
    UNITS: {
      0: 'mmol/L',
      1: 'mg/dL',
    },
  },
  AUTH: {
    CACHE_KEY: 'libreview_auth_token',
    BUFFER_TIME_SEC: 300,
  },
} as const;
