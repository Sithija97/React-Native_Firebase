import axios, { AxiosRequestConfig } from "axios";
import localStorage from "react-native-expo-localstorage";
import { IComplaintData } from "../models";

const BASE_URL = "http://192.168.8.100:3000/api";

const createAxiosInstance = (token: string) => {
  const config: AxiosRequestConfig = {
    baseURL: BASE_URL,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  return axios.create(config);
};

// Create complaint
const createComplaint = async (
  complaintData: IComplaintData,
  token: string
) => {
  const axiosInstance = createAxiosInstance(token);

  try {
    const response = await axiosInstance.post(
      "/create-complaint",
      complaintData
    );
    return response.data;
  } catch (error) {
    // Handle error here
    console.log(`error : ${error}`);
    throw error;
  }
};

const complaintService = {
  createComplaint,
};
export default complaintService;
