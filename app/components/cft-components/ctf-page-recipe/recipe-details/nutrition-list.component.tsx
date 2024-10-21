import Stack from "@/components/common/stack";
import Text from "@/components/common/typography/text";
import Accordion from "@/components/common/accordion";
import { clsxm } from '@/utils/twMerge.utils';

interface INutritionList {
  nutritions: Array<{ title: string; value: string }>;
}

const NutritionList = ({ nutritions }: INutritionList): JSX.Element => {
  return (
    <Accordion className='py-3 border-y'>
      <Accordion.Header title='Nutrition' />
      <Accordion.Body as='ul'>
        {nutritions.map((n, i) => (
          <Stack
            key={i}
            as='li'
            alignItems='center'
            justifyContent='between'
            className={clsxm('py-4', nutritions.length - 1 !== i && 'border-b')}
          >
            <Text>{n.title}</Text>
            <Text>{n.value}</Text>
          </Stack>
        ))}
      </Accordion.Body>
    </Accordion>
  );
};

export default NutritionList;
