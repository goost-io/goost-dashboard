import jwt_decode from "jwt-decode";

export const tokenValidation = () => {
    try {
        const token = localStorage.getItem("token");
        const decodedToken = jwt_decode(token ?? "");
        const currentDate = new Date();

        // JWT exp is in seconds
        return decodedToken.exp * 1000 >= currentDate.getTime();
    } catch (error) {
        return false;
    }
};