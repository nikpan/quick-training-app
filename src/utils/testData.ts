import { SectionProps } from "../components/Section";

const contents: SectionProps[] = [
  { 
    heading: 'Video Content',
    content: { 
      type: 'video', 
      url: 'https://www.youtube.com/embed/equ8xgIcqe4', 
      start: 1000,
    },
  },
  {
    heading: 'Text Content',
    content: {
      type: 'text',
      textContent: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.'
    }
  },
  {
    heading: 'QnA Content',
    content: {
      type: 'qna',
      question: `Best team in the world`,
      options: ['Arsenal', 'Man City', 'Man Utd'],
      answer: 0,
    }
  }
];

export default function getTestData() {
  return contents;
}