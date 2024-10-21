import Text from "@/components/common/typography/text";
import { IReviewHistogram } from "./review-histogram.interfaces";

const ReviewHistogram = ({ percentages }: IReviewHistogram) => {
  return (
    <table className="border-separate border-spacing-y-2">
      <tbody>
        {percentages.map(({ rating, percentage }) => (
          <tr key={rating}>
            <td className="ltr:border-r-[16px] rtl:border-l-[16px] border-transparent">
              <Text className="whitespace-nowrap">{rating}</Text>
            </td>
            <td className="w-full ltr:border-r-[16px] rtl:border-l-[16px] border-transparent">
              <div className="h-[6px] rounded-xl overflow-hidden bg-primary_red_alt">
                <div
                  className={`h-full rounded-xl bg-primary`}
                  style={{
                    width: `${percentage}%`,
                  }}
                />
              </div>
            </td>
            <td>
              <Text weight="medium">{percentage}%</Text>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ReviewHistogram;
