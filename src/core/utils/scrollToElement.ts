export function scrollToElement(elementId: string) {
  const elementPosition = document.getElementById(elementId)?.getBoundingClientRect().top;
  if (elementPosition) {
    window.scrollTo({
      top: elementPosition - 200,
      behavior: 'smooth',
    });
  }
}
  