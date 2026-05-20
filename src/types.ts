export interface Slide {
  id: string;
  slideNumber: number;
  title: string;
  content: string[];
  explanation: string;
  image?: string;
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number; // 0-based index or letter index
  explanation: string;
}

export interface Lecture {
  id: string;
  title: string;
  titleAr?: string;
  date?: string;
  professor?: string;
  branch?: string;
  program?: string;
  slides: Slide[];
  quiz: QuizQuestion[];
}

export interface Subject {
  id: string;
  title: string;
  titleAr: string;
  description: string;
  iconName: string; // Lucide icon components are resolved dynamically
  lectures: Lecture[];
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: string;
}
