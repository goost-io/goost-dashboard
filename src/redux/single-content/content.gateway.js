import axiosInstance from "@/redux/axios.instance";
import { routesV1 } from "@/redux/routes";

export const getAll = async () => {
  return await axiosInstance.get(
    process.env.REACT_APP_BASE_BACKEND +
      routesV1.version +
      routesV1.contentManagement.createTitle1
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
