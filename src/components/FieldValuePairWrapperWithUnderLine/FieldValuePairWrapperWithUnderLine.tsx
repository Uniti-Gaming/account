import styles from './FieldValuePairWrapperWithUnderLine.module.scss';

interface FieldValuePairWrapperWithUnderLineProps {
    children: JSX.Element[] | JSX.Element
}

const FieldValuePairWrapperWithUnderLine = ({children}: FieldValuePairWrapperWithUnderLineProps) => {
  return (
    <div className={styles.wrapper}>
      {children}
    </div>
  );
};

export default FieldValuePairWrapperWithUnderLine;