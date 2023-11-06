import {routesV1} from "@/redux/routes";
import {axiosInstance} from "@/redux/axios.instance";

export const getAll = async () => {
    return await axiosInstance.get(
        process.env.REACT_APP_BASE_BACKEND +
        routesV1.version +
        routesV1.contentManagement.listTitle2
    );
};

export const create = async (data) => {
    return await axiosInstance.post(
        process.env.REACT_APP_BASE_BACKEND +
        routesV1.version +
        routesV1.contentManagement.createTitle2,
        data
    );
};

export const update = async (data) => {
    return await axiosInstance.put(
        process.env.REACT_APP_BASE_BACKEND +
        routesV1.version +
        routesV1.contentManagement.updateTitle2,
        data
    );
};

export const deleteContent = async (id) => {
    return await axiosInstance.delete(
        process.env.REACT_APP_BASE_BACKEND +
        routesV1.version +
        routesV1.contentManagement.deleteTitle2 + "/" + id
    );
};
