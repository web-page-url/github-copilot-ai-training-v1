// Database types for sections and questions
export interface Section {
  id: number;
  title: string;
  description: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  questionsCount: number;
  estimatedTime: string;
  icon: string;
  color: string;
  slug: string;
  is_active: boolean;
  created_at?: string;
  updated_at?: string;
}

export interface Question {
  id: string;
  section_id: number;
  question_text: string;
  question_type: 'multiple-choice' | 'true-false';
  options?: string[];
  correct_answer: string;
  explanation: string;
  time_limit: number;
  points: number;
  order_index: number;
  is_active: boolean;
}

export interface UserProgress {
  user_id: string;
  section_id: number;
  questions_answered: number;
  questions_correct: number;
  total_score: number;
  completion_percentage: number;
  time_spent?: number;
  status: 'not-started' | 'in-progress' | 'completed';
  started_at?: string;
  completed_at?: string;
}

export interface UserAnswer {
  user_id: string;
  section_id: number;
  question_id: string;
  user_answer: string;
  is_correct: boolean;
  response_time: number;
  points_earned: number;
  created_at: string;
}

// Section data for the homepage (will be replaced by database calls)
export const sections: Section[] = [
  {
    id: 1,
    title: "Introduction to GitHub Copilot",
    description: "Understanding GitHub Copilot as an AI pair programmer",
    difficulty: "beginner",
    questionsCount: 2,
    estimatedTime: "5 min",
    icon: "🤖",
    color: "from-blue-500 to-cyan-500",
    slug: "introduction-github-copilot",
    is_active: true
  },
  {
    id: 2,
    title: "Key Features Overview",
    description: "Exploring GitHub Copilot's main capabilities",
    difficulty: "beginner", 
    questionsCount: 2,
    estimatedTime: "5 min",
    icon: "💡",
    color: "from-green-500 to-emerald-500",
    slug: "key-features-overview",
    is_active: true
  },
  {
    id: 3,
    title: "Plans and Access",
    description: "Understanding GitHub Copilot's subscription model and availability",
    difficulty: "beginner",
    questionsCount: 2,
    estimatedTime: "5 min",
    icon: "⚙️",
    color: "from-purple-500 to-violet-500",
    slug: "plans-and-access",
    is_active: true
  },
  {
    id: 4,
    title: "Responsible AI Principles",
    description: "Guidelines and ethical considerations for using Copilot",
    difficulty: "intermediate",
    questionsCount: 2,
    estimatedTime: "5 min",
    icon: "💭",
    color: "from-orange-500 to-red-500",
    slug: "responsible-ai-principles",
    is_active: true
  },
  {
    id: 5,
    title: "Limitations of Copilot",
    description: "Understanding Copilot's current limitations and review requirements",
    difficulty: "intermediate",
    questionsCount: 2,
    estimatedTime: "5 min",
    icon: "✨",
    color: "from-pink-500 to-rose-500",
    slug: "limitations-of-copilot",
    is_active: true
  },
  {
    id: 6,
    title: "Validating Copilot Output",
    description: "Reviewing AI-generated code for safety and correctness",
    difficulty: "intermediate",
    questionsCount: 2,
    estimatedTime: "5 min",
    icon: "🔗",
    color: "from-indigo-500 to-blue-500",
    slug: "validating-copilot-output",
    is_active: true
  },
  {
    id: 7,
    title: "Risks of Over-Reliance",
    description: "Recognizing the downsides of blindly trusting AI suggestions",
    difficulty: "advanced",
    questionsCount: 2,
    estimatedTime: "5 min",
    icon: "🔍",
    color: "from-teal-500 to-green-500",
    slug: "risks-over-reliance",
    is_active: true
  },
  {
    id: 8,
    title: "Hands-On with Copilot",
    description: "Practical application and live examples",
    difficulty: "advanced",
    questionsCount: 2,
    estimatedTime: "5 min",
    icon: "🔒",
    color: "from-yellow-500 to-orange-500",
    slug: "hands-on-copilot",
    is_active: true
  },
  {
    id: 9,
    title: "Ethical Considerations",
    description: "Ethical use of AI tools in software development",
    difficulty: "advanced",
    questionsCount: 2,
    estimatedTime: "5 min",
    icon: "🛠️",
    color: "from-gray-500 to-slate-500",
    slug: "ethical-considerations",
    is_active: true
  },
  {
    id: 10,
    title: "Looking Ahead",
    description: "What to expect in future sessions of Copilot training",
    difficulty: "beginner",
    questionsCount: 2,
    estimatedTime: "5 min",
    icon: "🚀",
    color: "from-red-500 to-pink-500",
    slug: "looking-ahead",
    is_active: true
  }
];

// Sample questions for each section (2 questions per section)
export const sampleQuestions: Record<number, Question[]> = {
  1: [
    {
      id: "q1_1",
      section_id: 1,
      question_text: "What is GitHub Copilot?",
      question_type: "multiple-choice",
      options: ["AI-powered code completion tool", "Version control system", "Code editor", "Testing framework"],
      correct_answer: "0",
      explanation: "GitHub Copilot is an AI-powered code completion tool that helps developers write code faster.",
      time_limit: 30,
      points: 1,
      order_index: 1,
      is_active: true
    },
    {
      id: "q1_2",
      section_id: 1,
      question_text: "GitHub Copilot uses machine learning to suggest code.",
      question_type: "true-false",
      correct_answer: "true",
      explanation: "Yes, GitHub Copilot uses advanced machine learning models trained on billions of lines of code.",
      time_limit: 20,
      points: 1,
      order_index: 2,
      is_active: true
    }
  ],
  2: [
    {
      id: "q2_1",
      section_id: 2,
      question_text: "Which plan includes GitHub Copilot for individuals?",
      question_type: "multiple-choice",
      options: ["GitHub Free", "GitHub Pro", "GitHub Copilot Individual", "GitHub Enterprise"],
      correct_answer: "2",
      explanation: "GitHub Copilot Individual is the subscription plan for individual developers.",
      time_limit: 30,
      points: 1,
      order_index: 1,
      is_active: true
    },
    {
      id: "q2_2",
      section_id: 2,
      question_text: "GitHub Copilot can suggest entire functions based on comments.",
      question_type: "true-false",
      correct_answer: "true",
      explanation: "Yes, Copilot can generate entire functions from descriptive comments.",
      time_limit: 20,
      points: 1,
      order_index: 2,
      is_active: true
    }
  ]
  // ... continue for all 10 sections
};

export const getDifficultyColor = (difficulty: string): string => {
  switch (difficulty) {
    case 'beginner': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300';
    case 'intermediate': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300';
    case 'advanced': return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300';
    default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300';
  }
}; 