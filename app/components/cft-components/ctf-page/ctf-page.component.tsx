import ComponentResolver from "@/components/shared/component-resolver";
import { Page } from "lib/__generated/sdk";

interface CftPageProps {
  page: Page;
}

const CtfPage = ({ page }: CftPageProps) => {
  const { sectionCollection } = page || {};
  const sections = sectionCollection?.items?.filter(Boolean);

  return (
    <>
      {sections &&
        sections.map((section, index) => (
          <ComponentResolver key={index} component={section} />
        ))}
    </>
  );
};

export default CtfPage;
