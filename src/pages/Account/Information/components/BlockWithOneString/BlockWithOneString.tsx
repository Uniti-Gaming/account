import LayoutBlock from '@/components/LayoutBlock/LayoutBlock';
import FieldValuePair from '@/components/FieldValuePair/FieldValuePair';

interface BlockWithOneStringProps {
    handleClick: () => void;
    title: string
    value: string
    label: string
}
const BlockWithOneString = ({ handleClick, label, value, title }: BlockWithOneStringProps) => {
  return (
    <LayoutBlock
      title={title}
      button={{ handleClick }} >
      <div style={{ padding: '70px 0 64px' }}>
        <FieldValuePair {...{ value, label }} />
      </div>
    </LayoutBlock>
  );
};

export default BlockWithOneString;