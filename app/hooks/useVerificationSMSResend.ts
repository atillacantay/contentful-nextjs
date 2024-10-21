import useAuthApi from "./useAuthApi";

interface ResendSMSRequest {
  prefix: string;
  localNumber: string;
}
interface ResendSMSResponse {}

const useVerificationSMSResend = () => {
  const { data, error, isLoading, post } = useAuthApi<
    ResendSMSResponse,
    ResendSMSRequest
  >();

  const resend = async (prefix: string, localNumber: string, token: string) => {
    const data: ResendSMSRequest = {
      prefix,
      localNumber,
    };

    await post("ResendSMSV2", data, {
      headers: { __RequestVerificationToken: token },
    });
  };

  return {
    data,
    error,
    isLoading,
    resend,
  };
};

export default useVerificationSMSResend;
