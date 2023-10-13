import axiosInstance from "@/redux/axios.instance";
import {routesV1} from "@/redux/routes";

export const create = async (data) => {
    const ax =  await axiosInstance.post(
        "http://localhost:3000/" +
        routesV1.version +
        routesV1.auth.login,
        data
    );
    console.log(process.env.REACT_APP_BASE_BACKEND + routesV1 + routesV1.auth.login)
    console.log("DATA" + data)
    console.log("ax"+ax)

    return ax
};