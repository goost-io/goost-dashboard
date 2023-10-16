import {routesV1} from "@/redux/routes";
import {axiosInstance} from "@/redux/axios.instance";

export const getAll = async () => {
    return await axiosInstance.get(
        process.env.REACT_APP_BASE_BACKEND +
        routesV1.version +
        routesV1.type.language.list
    );
};

export const create = async (data) => {
    return await axiosInstance.post(
        process.env.REACT_APP_BASE_BACKEND +
        routesV1.version +
        routesV1.type.language.create,
        data
    );
};