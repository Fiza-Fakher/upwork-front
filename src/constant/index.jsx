export const links=['How it Works','Features','Pricing','FAQ']
export  const proposalDetails = [
    "Project scope and objectives",
    "Timeline and milestones",
    "Budget and cost breakdown",
    "Expected outcomes and benefits",
  ];
 export const stats = [
  "10,000+ Proposals Generated",
  "99% Freelancer Satisfaction",
  "24/7 Support"
];

 export const uniqueValueProps = [
    "Innovative solutions tailored to client's needs",
    "Proven track record of successful projects",
    "Competitive pricing and flexible terms",
  ];
  import { FaCopy, FaSlidersH, FaBolt, FaPaperPlane } from 'react-icons/fa';
  export const workCard = [
      {
        title: 'Paste the Job Post',
        des: 'Copy and paste the Upwork job posting into our platform',
        icon: <FaCopy />,
      },
      {
        title: 'Select Profile & Tone',
        des: 'Choose your tone and fill in your freelancer details',
        icon: <FaSlidersH />,
      },
      {
        title: 'AI Generates Proposal',
        des: 'Our AI creates a tailored, winning proposal in seconds',
        icon: <FaBolt />,
      },
      {
        title: 'Copy & Send',
        des: 'Copy your proposal and submit it directly to Upwork',
        icon: <FaPaperPlane />,
      },
    ];

  export const tones = ["Professional", "Persuasive", "Concise", "Formal", "Friendly"];
  export const languages = [
    "English",
    "Russian",
    "Spanish",
    "Arabic",
    "French",
    "German",
    "Chinese",
    "Japanese",
    "Italian",
  ];
  export const steps = [
  { id: "①", text: "Enter business information" },
  { id: "②", text: "Provide proposal details" },
  { id: "③", text: 'Click "Generate Proposal"' },
];
import { Briefcase, Smile, Zap, FolderOpen, RefreshCw, Shield } from "lucide-react";
 export const featureCards = [
    {
      title: 'Deep Job Post Analysis',
      des: 'AI analyzes every detail of the job posting to create highly relevant proposals',
      icon: <Briefcase className="w-6 h-6 text-blue-600" />
    },
    {
      title: 'Multiple Tone Options',
      des: 'Choose from professional, friendly, technical, or creative tones',
      icon: <Smile className="w-6 h-6 text-purple-600" />
    },
    {
      title: 'Lightning Fast Generation',
      des: 'Generate proposals in under 30 seconds with enterprise-grade AI',
      icon: <Zap className="w-6 h-6 text-blue-500" />
    },
    {
      title: 'Templates Library',
      des: 'Access 50+ pre-built proposal templates for different industries',
      icon: <FolderOpen className="w-6 h-6 text-blue-600" />
    },
    {
      title: 'Regenerate Versions',
      des: 'Generate multiple versions and choose the one you like best',
      icon: <RefreshCw className="w-6 h-6 text-purple-600" />
    },
    {
      title: 'Privacy Guaranteed',
      des: 'Your data is never stored or sold. 100% private processing.',
      icon: <Shield className="w-6 h-6 text-blue-600" />
    }
  ];
  export const faqs = [
    {
      question: 'How accurate is the AI-generated content?',
      answer:
        'Our AI is trained on 10,000+ winning proposals and achieves 92% accuracy in matching job requirements. All proposals are customizable before sending.'
    },
    {
      question: 'Is my data safe and private?',
      answer: 'Absolutely. We never store your job posts or personal information. All processing happens in real-time and is immediately deleted after generation.'
    },
    {
      question: 'Can I customize the generated proposals?',
      answer: 'Yes! All proposals are fully editable. You can modify tone, add details, remove sections, or regenerate for a different approach.'
    },
    {
      question: 'How does the credit system work?',
      answer: 'Each proposal generation uses 1 credit. Free users get 10 credits daily that reset at midnight. Premium users get unlimited credits.'
    },
    {
        question: 'Will my proposals stand out or feel generic?',
        answer:'Each proposal is tailored to the specific job posting. The AI analyzes job details, required skills, and budget to create unique, personalized proposals.'
    },
    {
        question:'What if I`m not happy with a propsal?',
        answer:'You can regenerate unlimited times. Try different tones, lengths, or ask for variations until you get exactly what you want.'
    }
  ];
export const testimonials = [
    {
      text: 'This tool saved me hours every week. My proposal acceptance rate jumped from 30% to 65% in just two weeks!',
      name: 'Sarah Chen',
      username: '@sarahchen',
      avatar: '👩‍💼'
    },
    {
      text: 'The AI truly understands what clients are looking for. My proposals now feel more personalized and professional.',
      name: 'Marcus Johnson',
      username: '@marcusdev',
      avatar: '👨‍💻'
    },
    {
      text: 'Finally a tool that makes proposal writing painless. Highly recommend for any freelancer serious about landing clients.',
      name: 'Emma Rodriguez',
      username: '@emmadesigns',
      avatar: '👩‍🎨'
    }
  ];
export const plans = [
    {
      name: 'Free Plan',
      subtitle: 'Perfect for getting started',
      price: '$0',
      credits: '10 credits/day',
      button: 'Get Started',
      features: [
        '10 proposals per day',
        'All tone options',
        'Basic templates',
        'Community support'
      ]
    },
    {
      name: 'Premium',
      subtitle: 'Advanced features',
      price: 'TBD',
      credits: 'Coming Soon',
      button: 'Notify Me',
      isPremium: true,
      features: [
        'Unlimited proposals',
        'Priority generation',
        'Advanced analytics',
        '24/7 dedicated support'
      ]
    }
  ];

 // Form field definitions
  export const clientFields = [
    { name: 'clientName', type: 'text', placeholder: 'Client Name (Optional)' },
    { name: 'jobPost', type: 'textarea', placeholder: 'Paste the job post here...', rows: 4 }
  ];

  export const freelancerFields = [
    { name: 'freelancerName', type: 'text', placeholder: 'Name' },
    { name: 'github', type: 'text', placeholder: 'GitHub' },
    { name: 'email', type: 'email', placeholder: 'Email' }
  ];

  export const settingsFields = [
    { name: 'experience', type: 'select', options: ['Professional', 'Intermediate', 'Beginner'] },
    { name: 'complexity', type: 'select', options: ['Medium', 'Simple', 'Complex'] },
    { name: 'language', type: 'select', options: ['English', 'Spanish', 'French'] }
  ];

 export const projectFields = [
    { name: 'budget', type: 'text', placeholder: 'Proposed Budget' },
    { name: 'timeline', type: 'text', placeholder: 'Timeline' },
    { name: 'additionalDetails', type: 'textarea', placeholder: 'Additional Details', rows: 4 }
  ];