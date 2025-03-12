const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || "";

export const ROUTES = {
    HOME: `${BASE_PATH}/`,
    LOGIN: `${BASE_PATH}/login`,
    SIGNUP: `${BASE_PATH}/signup`,
    DASHBOARD: `${BASE_PATH}/dashboard`,
    SETTINGS: `${BASE_PATH}/settings`,
    PROFILE: `${BASE_PATH}/profile`,
    NOT_FOUND: `${BASE_PATH}/404`,
};
