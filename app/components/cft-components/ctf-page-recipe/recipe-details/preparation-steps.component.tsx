import ContentfulImage from "@/components/cft-components/cft-image";
import Stack from "@/components/common/stack";
import Header from "@/components/common/typography/header";
import Text from "@/components/common/typography/text";
import { Maybe, PreparationStep } from "lib/__generated/sdk";
import { useTranslations } from "next-intl";

interface PreparationStepsProps {
  preparationSteps?: Maybe<PreparationStep>[];
}

const PreparationSteps = ({
  preparationSteps,
}: PreparationStepsProps): JSX.Element => {
  const t = useTranslations();

  return (
    <>
      <Header as="h2" weight="medium" size="xxl" className="mb-8">
        {t("common.preparation")}
      </Header>
      <Stack
        direction="col"
        className="divide-y space-y-8 text-wrap break-words"
      >
        {preparationSteps?.map((step, index) => (
          <Stack
            key={step._id}
            direction="col"
            spacing={4}
            className={`${index > 0 ? "pt-8" : ""}`}
          >
            <Header as="h3" weight="medium">
              {t("common.step", { step: ++index })}
            </Header>
            <Text>{step?.description}</Text>
            {step.image && (
              <ContentfulImage
                className="block w-full rounded-xl"
                src={step.image.url || ""}
                width={step.image.width}
                height={step.image.height}
                alt={step.image.description}
              />
            )}
          </Stack>
        ))}
      </Stack>
    </>
  );
};

export default PreparationSteps;
