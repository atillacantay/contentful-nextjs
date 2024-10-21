import { HttpStatusCode } from "axios";
import useAuthApi from "./useAuthApi";

interface VerifyPhoneRequest {
  prefix: string;
  localNumber: string;
  verificationCode: string;
}

interface VerifyPhoneResponse {
  prefix: string;
  localNumber: string;
}

const useVerificationSMS = () => {
  const { data, error, isLoading, post } = useAuthApi<
    VerifyPhoneResponse,
    VerifyPhoneRequest
  >();

  const verifyPhone = async (
    prefix: string,
    localNumber: string,
    verificationCode: string,
    returnUrl: string,
    token: string,
    actionUrl: string
  ) => {
    const data: VerifyPhoneRequest = {
      prefix,
      localNumber,
      verificationCode,
    };

    await post(
      actionUrl,
      data,
      {
        headers: { __RequestVerificationToken: token },
      },
      (result) => {
        switch (result.status) {
          case HttpStatusCode.Ok:
            if (returnUrl) {
              window.location.href = returnUrl;
            }
            break;
        }
      },
      (error, setError) => {
        switch (error.response?.status) {
          case HttpStatusCode.Accepted:
            setError("Incomplete verification! Please Try Again!");
            break;
          case HttpStatusCode.InternalServerError:
            setError("Server error!");
            break;
          case HttpStatusCode.NotFound:
            setError("Invalid code!");
            break;
          default:
            setError(error.message || "An error occured");
            break;
        }
      }
    );
  };

  return {
    data,
    error,
    isLoading,
    verifyPhone,
  };
};

export default useVerificationSMS;
