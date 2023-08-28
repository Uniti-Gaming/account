const regex = /<td>(.*?)<\/td><td>(.*?)<\/td>/g;

export function extractFaq(htmlString: string) {
  const faqArray = [];

  let match;
  while ((match = regex.exec(htmlString)) !== null) {
    const question = match[1];
    const answer = match[2];

    if (question !== '' && answer !== '') {
      faqArray.push({ question, answer });
    }
  }

  return faqArray;
}
