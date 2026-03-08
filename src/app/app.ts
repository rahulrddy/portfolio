import { Component } from '@angular/core';

interface QuickStat {
  value: string;
  label: string;
}

interface ExperienceItem {
  role: string;
  company: string;
  location: string;
  period: string;
  highlights: string[];
  stack: string[];
}

interface ProjectItem {
  title: string;
  impact: string;
  description: string;
}

interface SkillGroup {
  title: string;
  items: string[];
}

interface EducationItem {
  degree: string;
  institution: string;
  period: string;
}

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  readonly name = 'Rahul Reddy';
  readonly title = 'Senior Software Engineer';
  readonly location = "O'Fallon, Missouri";
  readonly summary =
    'I build high-trust, high-scale digital products across payments, insurance, and investment platforms with a strong focus on user journeys, secure APIs, and delivery speed.';

  readonly email = 'Rahul.origanti@gmail.com';
  readonly phone = '737-781-4919';
  readonly phoneHref = `tel:${this.phone.replace(/-/g, '')}`;

  readonly quickStats: QuickStat[] = [
    { value: '8+', label: 'Years in software engineering' },
    { value: '2022-Present', label: 'Senior Engineer at Mastercard' },
    { value: '5', label: 'Enterprise products delivered' }
  ];

  readonly experience: ExperienceItem[] = [
    {
      role: 'Senior Software Engineer',
      company: 'Mastercard',
      location: "O'Fallon, Missouri",
      period: '2022 - Present',
      highlights: [
        'Leading development for payment platform workflows with a focus on secure, resilient transaction experiences.',
        'Designing Angular and API-first features that improve onboarding, account lifecycle, and operational efficiency.',
        'Driving release quality with CI/CD practices, code standards, and close cross-functional collaboration.'
      ],
      stack: ['Angular', 'TypeScript', 'REST APIs', 'CI/CD', 'Security']
    },
    {
      role: 'Application Developer',
      company: 'Nationwide Pet Insurance',
      location: 'Brea, California',
      period: '2019 - 2022',
      highlights: [
        'Created and maintained CI/CD pipelines using Azure DevOps Pipelines and Releases.',
        'Built a Flutter mobile app for both Android and iOS.',
        'Implemented centralized login with MFA and one-time passcode integration.',
        'Developed APIGEE proxies with API key verification and OAuth2 security controls.'
      ],
      stack: ['Flutter', 'Azure DevOps', 'APIGEE', 'MFA', 'OAuth2']
    },
    {
      role: 'Software Engineer',
      company: 'Vanguard',
      location: 'Charlotte, North Carolina',
      period: '2019',
      highlights: [
        'Contributed to redesign of advisor web experiences using Angular.',
        'Led dynamic analytics implementation using Adobe Experience Manager data layer events.',
        'Supported migration efforts from monolith solutions to service-oriented cloud-ready architecture.'
      ],
      stack: ['Angular', 'AEM', 'Analytics', 'SOA']
    },
    {
      role: 'Software Developer',
      company: 'Mastercard',
      location: "O'Fallon, Missouri",
      period: '2017 - 2019',
      highlights: [
        'Built digital wallet onboarding experiences with Angular and reusable TypeScript components.',
        'Developed configurable digital card layouts using Canvas and HTML5.',
        'Implemented reactive forms, custom validations, and cross-browser compatibility hardening.'
      ],
      stack: ['Angular', 'TypeScript', 'Canvas', 'HTML5', 'Reactive Forms']
    },
    {
      role: 'Software Developer Intern / Jr Web Developer',
      company: 'Thermo Fisher Scientific',
      location: 'San Diego, California',
      period: '2016 - 2017',
      highlights: [
        'Learned and applied full software development lifecycle practices in agile teams.',
        'Implemented features using JavaScript, Angular, Java, and SQL foundations.',
        'Contributed to codebase modernization and issue resolution for production readiness.'
      ],
      stack: ['JavaScript', 'Angular', 'Java', 'SQL', 'Agile']
    }
  ];

  readonly projects: ProjectItem[] = [
    {
      title: 'Payment Platform Modernization',
      impact: 'Mastercard',
      description:
        'Built secure, API-driven payment workflows with stronger reliability and release quality across enterprise channels.'
    },
    {
      title: 'Digital Wallet Onboarding Experience',
      impact: 'Mastercard',
      description:
        'Delivered onboarding journeys and reusable front-end components that accelerated integration for wallet capabilities.'
    },
    {
      title: 'Mobile Insurance Experience',
      impact: 'Nationwide Pet Insurance',
      description:
        'Shipped a Flutter application for Android and iOS with CI/CD automation and identity-first authentication.'
    }
  ];

  readonly skills: SkillGroup[] = [
    {
      title: 'Frontend Engineering',
      items: ['Angular', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Bootstrap', 'Material Design']
    },
    {
      title: 'Backend & API Security',
      items: ['.NET Core', 'Java', 'SQL', 'REST APIs', 'APIGEE', 'OAuth2', 'MFA']
    },
    {
      title: 'Cloud & Delivery',
      items: ['Azure DevOps', 'AWS', 'CI/CD', 'Release Pipelines', 'Agile Delivery']
    },
    {
      title: 'Analytics & Optimization',
      items: ['Google Tag Manager', 'AEM Data Layer', 'Feature Rollouts', 'Performance Tuning']
    }
  ];

  readonly education: EducationItem[] = [
    {
      degree: 'Doctor of Business Administration',
      institution: 'Westcliff University, Irvine, California',
      period: '2020 - Present'
    },
    {
      degree: 'Master of Science, Computer and Information Sciences',
      institution: 'Northwestern Polytechnic University, Fremont, California',
      period: '2015 - 2016'
    }
  ];
}
