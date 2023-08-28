import { useLoaderData, useOutletContext } from 'react-router-dom';

import { IFaqPost } from '@interfaces/faqInterface';
import { extractFaq } from '@utils/extractFaq';
import { scrollToElement } from '@utils/scrollToElement';
import styles from './Support.module.scss';

import LayoutBlock from '@/components/LayoutBlock/LayoutBlock';

const Support = () => {
  const data = useLoaderData() as IFaqPost[];
  const titleRef = useOutletContext() as React.RefObject<HTMLHeadingElement>;
  titleRef.current ? titleRef.current.textContent = 'Помощь' : null;

  return (
    <>
      {data.map((groop, groopIndex) => (
        <LayoutBlock title={groop.title.rendered} key={`faq-${groopIndex}`}>
          <div className={styles.body}>
            {extractFaq(groop.content.rendered).map((item, index) => (
              <p
                key={`question-${index}`}
                className={styles.question}
                onClick={() => scrollToElement(`${groopIndex}-${index}`)}
              >
                {item.question}
              </p>
            ))}
          </div>
        </LayoutBlock>
      ))}
      <LayoutBlock title='Ответы на вопросы'>
        <div className={styles.body}>
          {data.map((groop, groopIndex) => (
            <div key={groopIndex}>
              <h3 className={styles.title}>{groop.title.rendered}</h3>
              {extractFaq(groop.content.rendered).map((item, index) => (
                <div id={`${groopIndex}-${index}`} key={index} className={styles.faqItem}>
                  <p className={styles.subtitle}>{item.question}</p>
                  <p className={styles.answer} dangerouslySetInnerHTML={{ __html: item.answer }}/>
                </div>
              ))}
            </div>
          ))}
        </div>
      </LayoutBlock>
    </>
  );
};

export default Support;