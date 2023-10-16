// Api Versions
const v1 = "v1";

// Root
const authRoot = "auth";
const userRoot = "user";
const contentManagementRoot = "content-management";
const typeRoot = "type";
const offerRequestRoot = "offer-request";

export const routesV1 = {
    version: v1,
    auth: {
        root: authRoot,
        login: `/${authRoot}/login`,
        register: `/${authRoot}/register`,
    },
    user: {
        root: userRoot,
        create: `/${userRoot}/create`,
        delete: `/${userRoot}/:id`,
        list: `/${userRoot}/list`,
    },
    contentManagement: {
        root: contentManagementRoot,
        createTitle1: `/${contentManagementRoot}/create-title-1`,
        createTitle2: `/${contentManagementRoot}/create-title-2`,
        listTitle2: `/${contentManagementRoot}/list-title-2`,
    },
    type: {
        root: typeRoot,
        language: `/${typeRoot}/language`,
        content: `/${typeRoot}/content`,
    },
    offerRequest: {
        root: offerRequestRoot,
        create: `/${offerRequestRoot}/create`,
        list: `/${offerRequestRoot}/list`,
    },
};
