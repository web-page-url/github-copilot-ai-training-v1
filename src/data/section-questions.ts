// Hardcoded questions for all 10 sections
export interface Question {
  id: string;
  question: string;
  type: 'multiple-choice' | 'true-false';
  options?: string[];
  correctAnswer: number | string;
  explanation: string;
  timeLimit: number;
  points: number;
  category: 'general' | 'general' | 'quickfire';
}

export interface SectionData {
  id: number;
  title: string;
  description: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  duration: number;
  questions: Question[];
}

export const sectionData: Record<number, SectionData> = {
  1: {
    id: 1,
    title: "Introduction to GitHub Copilot",
    description: "Understanding GitHub Copilot as an AI pair programmer",
    difficulty: "beginner",
    duration: 1,
    questions: [
      {
        id: "copilot-1-1",
        question: "What is GitHub Copilot primarily designed as?",
        type: "multiple-choice",
        options: [
          "An AI pair programmer",
          "A cloud deployment tool",
          "A project management software",
          "A CI/CD pipeline monitor"
        ],
        correctAnswer: 0,
        explanation: "GitHub Copilot is described as an AI pair programmer to assist with real-time code generation.",
        timeLimit: 30,
        points: 1,
        category: "general"
      },
      {
        id: "copilot-1-2",
        question: "Which of the following is a benefit of using GitHub Copilot?",
        type: "multiple-choice",
        options: [
          "Improves cloud storage",
          "Increases developer productivity",
          "Reduces server load",
          "Automates deployment"
        ],
        correctAnswer: 1,
        explanation: "Copilot helps boost developer productivity by generating code quickly and reducing boilerplate work.",
        timeLimit: 30,
        points: 1,
        category: "general"
      }
    ]
  },

  2: {
    id: 2,
    title: "Key Features Overview",
    description: "Exploring GitHub Copilot's main capabilities",
    difficulty: "beginner",
    duration: 1,
    questions: [
      {
        id: "copilot-2-1",
        question: "Which feature allows Copilot to suggest code as you type?",
        type: "multiple-choice",
        options: [
          "Pull Request Automation",
          "Inline Code Completion",
          "Chat-Based Debugging",
          "Code Deployment"
        ],
        correctAnswer: 1,
        explanation: "Inline Code Completion is the feature that lets Copilot suggest code within the editor as you type.",
        timeLimit: 30,
        points: 1,
        category: "general"
      },
      {
        id: "copilot-2-2",
        question: "What is a highlighted benefit of Copilot's multi-language support?",
        type: "multiple-choice",
        options: [
          "It supports only JavaScript.",
          "It eliminates the need for linters.",
          "It helps developers across different language stacks.",
          "It creates new programming languages."
        ],
        correctAnswer: 2,
        explanation: "Multi-language support means Copilot can assist developers across different programming ecosystems.",
        timeLimit: 30,
        points: 1,
        category: "general"
      }
    ]
  },

  3: {
    id: 3,
    title: "Plans and Access",
    description: "Understanding GitHub Copilot's subscription model and availability",
    difficulty: "beginner",
    duration: 1,
    questions: [
      {
        id: "copilot-3-1",
        question: "Which of the following is true about GitHub Copilot access?",
        type: "multiple-choice",
        options: [
          "Copilot is only available for GitHub Enterprise users.",
          "Copilot access is only through open-source repositories.",
          "Copilot offers subscription-based access with individual and enterprise plans.",
          "Copilot is free for everyone."
        ],
        correctAnswer: 2,
        explanation: "GitHub Copilot offers subscription plans for individuals and enterprises.",
        timeLimit: 30,
        points: 1,
        category: "general"
      },
      {
        id: "copilot-3-2",
        question: "Which group gets free access to GitHub Copilot according to common plans?",
        type: "multiple-choice",
        options: [
          "Startups",
          "Students and verified open-source contributors",
          "Remote freelancers",
          "Large corporations"
        ],
        correctAnswer: 1,
        explanation: "GitHub Copilot offers free access to students and verified open-source contributors.",
        timeLimit: 30,
        points: 1,
        category: "general"
      }
    ]
  },

  4: {
    id: 4,
    title: "Responsible AI Principles",
    description: "Guidelines and ethical considerations for using Copilot",
    difficulty: "intermediate",
    duration: 1,
    questions: [
      {
        id: "copilot-4-1",
        question: "Which of the following is a key principle of Responsible AI?",
        type: "multiple-choice",
        options: [
          "Speed and Scalability",
          "Fairness and Transparency",
          "Profitability",
          "UI Design Principles"
        ],
        correctAnswer: 1,
        explanation: "Responsible AI principles include fairness, transparency, and privacy.",
        timeLimit: 30,
        points: 1,
        category: "general"
      },
      {
        id: "copilot-4-2",
        question: "Which AI risk is associated with using GitHub Copilot?",
        type: "multiple-choice",
        options: [
          "Faster deployment pipelines",
          "Bias and insecure code suggestions",
          "Increased licensing fees",
          "Lack of editor support"
        ],
        correctAnswer: 1,
        explanation: "Risks of using generative AI include bias in output and the potential for insecure code patterns.",
        timeLimit: 30,
        points: 1,
        category: "general"
      }
    ]
  },

  5: {
    id: 5,
    title: "Limitations of Copilot",
    description: "Understanding Copilot's current limitations and review requirements",
    difficulty: "intermediate",
    duration: 1,
    questions: [
      {
        id: "copilot-5-1",
        question: "Which limitation is mentioned regarding Copilot's training data?",
        type: "multiple-choice",
        options: [
          "It only includes proprietary enterprise code.",
          "It is constantly updated with live feedback.",
          "It uses outdated training data and limited context windows.",
          "It only uses data from mobile apps."
        ],
        correctAnswer: 2,
        explanation: "Copilot is trained on a static dataset, so its responses may include outdated information or miss full context.",
        timeLimit: 30,
        points: 1,
        category: "general"
      },
      {
        id: "copilot-5-2",
        question: "Why is validating Copilot's output manually important?",
        type: "multiple-choice",
        options: [
          "To save subscription fees",
          "Because Copilot doesn't support multiple editors",
          "To ensure code quality, security, and correctness",
          "To improve internet speed"
        ],
        correctAnswer: 2,
        explanation: "Manual validation ensures that the code generated by Copilot is safe, correct, and aligned with your intent.",
        timeLimit: 30,
        points: 1,
        category: "general"
      }
    ]
  },

  6: {
    id: 6,
    title: "Validating Copilot Output",
    description: "Reviewing AI-generated code for safety and correctness",
    difficulty: "intermediate",
    duration: 1,
    questions: [
      {
        id: "copilot-6-1",
        question: "What is a critical step after Copilot generates code?",
        type: "multiple-choice",
        options: [
          "Immediately pushing to production",
          "Running performance benchmarks",
          "Manual review and testing",
          "Switching to another AI tool"
        ],
        correctAnswer: 2,
        explanation: "The training emphasizes that manually reviewing and testing Copilot's suggestions is essential.",
        timeLimit: 30,
        points: 1,
        category: "general"
      },
      {
        id: "copilot-6-2",
        question: "Which scenario highlights a failure in Copilot validation?",
        type: "multiple-choice",
        options: [
          "Using AI-suggested code without review and finding security flaws later",
          "Writing manual code after Copilot suggestions",
          "Using comments in code",
          "Choosing TypeScript over JavaScript"
        ],
        correctAnswer: 0,
        explanation: "Blindly accepting AI-generated code without review may introduce security flaws or bugs.",
        timeLimit: 30,
        points: 1,
        category: "general"
      }
    ]
  },

  7: {
    id: 7,
    title: "Risks of Over-Reliance",
    description: "Recognizing the downsides of blindly trusting AI suggestions",
    difficulty: "advanced",
    duration: 1,
    questions: [
      {
        id: "copilot-7-1",
        question: "What is a risk of over-relying on Copilot?",
        type: "multiple-choice",
        options: [
          "Better syntax highlighting",
          "Increased understanding of logic",
          "Shipping insecure or buggy code",
          "Lower subscription pricing"
        ],
        correctAnswer: 2,
        explanation: "Over-reliance can lead to poor quality code being used in production without proper understanding.",
        timeLimit: 30,
        points: 1,
        category: "general"
      },
      {
        id: "copilot-7-2",
        question: "Which practice reduces the risk of over-reliance on Copilot?",
        type: "multiple-choice",
        options: [
          "Copy-pasting without reading",
          "Using Copilot for every task",
          "Always reviewing and testing AI output",
          "Turning off syntax checkers"
        ],
        correctAnswer: 2,
        explanation: "Reviewing and testing Copilot's output ensures developers stay responsible and critical of what they use.",
        timeLimit: 30,
        points: 1,
        category: "general"
      }
    ]
  },

  8: {
    id: 8,
    title: "Hands-On with Copilot",
    description: "Practical application and live examples",
    difficulty: "advanced",
    duration: 1,
    questions: [
      {
        id: "copilot-8-1",
        question: "What is one way Copilot is demonstrated in hands-on exercises?",
        type: "multiple-choice",
        options: [
          "By writing blog articles",
          "By completing function bodies from comments",
          "By running cloud backups",
          "By opening terminal sessions"
        ],
        correctAnswer: 1,
        explanation: "The demo showcases Copilot generating function implementations from descriptive comments.",
        timeLimit: 30,
        points: 1,
        category: "general"
      },
      {
        id: "copilot-8-2",
        question: "What is emphasized after using Copilot in hands-on scenarios?",
        type: "multiple-choice",
        options: [
          "Disabling the plugin",
          "Deleting code history",
          "Reviewing and running tests on the generated code",
          "Ignoring output warnings"
        ],
        correctAnswer: 2,
        explanation: "The wrap-up clearly advises reviewing and testing all Copilot-generated code for accuracy.",
        timeLimit: 30,
        points: 1,
        category: "general"
      }
    ]
  },

  9: {
    id: 9,
    title: "Ethical Considerations",
    description: "Ethical use of AI tools in software development",
    difficulty: "advanced",
    duration: 1,
    questions: [
      {
        id: "copilot-9-1",
        question: "Which ethical issue is associated with generative AI tools like Copilot?",
        type: "multiple-choice",
        options: [
          "Server lag",
          "Bias in training data",
          "Lack of color themes",
          "Low-resolution UI"
        ],
        correctAnswer: 1,
        explanation: "Bias in training data is a known ethical concern when using generative AI models like Copilot.",
        timeLimit: 30,
        points: 1,
        category: "general"
      },
      {
        id: "copilot-9-2",
        question: "How can developers mitigate ethical risks when using Copilot?",
        type: "multiple-choice",
        options: [
          "Ignore AI completely",
          "Avoid testing code",
          "Be transparent, review output, and follow privacy norms",
          "Turn off autocomplete features"
        ],
        correctAnswer: 2,
        explanation: "Responsible usage involves transparency, privacy, and active review of AI-generated suggestions.",
        timeLimit: 30,
        points: 1,
        category: "general"
      }
    ]
  },

  10: {
    id: 10,
    title: "Looking Ahead",
    description: "What to expect in future sessions of Copilot training",
    difficulty: "beginner",
    duration: 1,
    questions: [
      {
        id: "copilot-10-1",
        question: "What does the final slide suggest about the training?",
        type: "multiple-choice",
        options: [
          "It has ended completely",
          "More hands-on and detailed examples are coming",
          "Copilot is being retired",
          "No further learning is necessary"
        ],
        correctAnswer: 1,
        explanation: "The slide 'To Be Continued…' implies more detailed hands-on examples and training in future sessions.",
        timeLimit: 30,
        points: 1,
        category: "general"
      },
      {
        id: "copilot-10-2",
        question: "What is the most likely next focus based on the training flow?",
        type: "multiple-choice",
        options: [
          "Copilot's role in GitHub billing",
          "In-depth demos and real-world usage",
          "AI in image editing",
          "Machine learning theory"
        ],
        correctAnswer: 1,
        explanation: "The next step hinted is more practical application and real-world examples of Copilot in action.",
        timeLimit: 30,
        points: 1,
        category: "general"
      }
    ]
  }
}; 
