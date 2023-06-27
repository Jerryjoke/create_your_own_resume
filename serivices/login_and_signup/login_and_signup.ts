import { LoginAndSign } from "../../models/login";
import axiosInstance from "../../utiles/axiosInstance";


export class LoginAndSignupServices{
    public static shared: LoginAndSignupServices = new LoginAndSignupServices();
    async logIn(body: LoginAndSign): Promise<string | null> {
        try {
          const response = await axiosInstance.put(
            `/api/user/login`,
            body
          );
          if (response.status! >= 200 && response.status! <= 300 && response.data) {
            return response.data["data"];
          } else {
            return null;
          }
        } catch (error) {
          return null;
        }
      }

      async signUp(body: LoginAndSign): Promise<string | null> {
        try {
          const response = await axiosInstance.post(
            `/api/user/signup`,
            body
          );
          if (response.status! >= 200 && response.status! <= 300 && response.data) {
            return response.data["data"];
          } else {
            return null;
          }
        } catch (error) {
          return null;
        }
      }
}