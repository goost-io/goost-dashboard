import {routesV1} from "@/redux/routes";
import {axiosInstance} from "@/redux/axios.instance";

export const create = async (data) => {
    return await axiosInstance.post(
        process.env.REACT_APP_BASE_BACKEND +
        routesV1.version +
        routesV1.auth.login,
        data
    );

};