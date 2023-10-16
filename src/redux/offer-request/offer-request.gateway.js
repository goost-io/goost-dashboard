import {routesV1} from "@/redux/routes";
import {axiosInstance} from "@/redux/axios.instance";

export const getAll = async () => {
    axiosInstance.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token');

    return await axiosInstance.get(
        process.env.REACT_APP_BASE_BACKEND +
        routesV1.version +
        routesV1.offerRequest.list
    );
};

export const create = async (data) => {
    return await axiosInstance.post(
        process.env.REACT_APP_BASE_BACKEND +
        routesV1.version +
        routesV1.offerRequest.create,
        data
    );
};