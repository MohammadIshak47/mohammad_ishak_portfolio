export interface SkillGroup {
  dir: string;
  items: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    dir: 'languages/',
    items: ['TypeScript', 'JavaScript (ES6+)', 'Python'],
  },
  {
    dir: 'frontend/',
    items: ['React.js', 'Next.js', 'Tailwind CSS', 'HTML5', 'CSS3', 'Responsive UI Design'],
  },
  {
    dir: 'backend/',
    items: ['FastAPI', 'Django', 'Django REST Framework', 'Node.js (basic)', 'REST API Design', 'JWT Auth'],
  },
  {
    dir: 'database/',
    items: ['PostgreSQL', 'MySQL', 'SQLite', 'SQLAlchemy'],
  },
  {
    dir: 'devops-cloud/',
    items: ['Docker', 'AWS (basic)', 'GitHub Actions (CI/CD)'],
  },
  {
    dir: 'tools/',
    items: ['Git', 'GitHub', 'Postman', 'Swagger', 'Agile/Scrum'],
  },
];
