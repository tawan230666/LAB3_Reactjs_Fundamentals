import yolo from '../assets/images/projects/yolo-bean-detection.jpg';
import tipkhun from '../assets/images/projects/tipkhun-capital.jpg';
import restaurant from '../assets/images/projects/restaurant-review.jpg';
import railway from '../assets/images/projects/microservices-railway.jpg';

const GITHUB = 'https://github.com/tawan230666';

export const projects = [
  {
    id: 1,
    title: 'BizFlow — QR Table Ordering',
    description:
      'Restaurant platform: diners order and pay by PromptPay QR from their phone while the kitchen and cashier see orders live.',
    image: null,
    technologies: ['React', 'TypeScript', 'Express', 'Prisma', 'MySQL', 'Socket.IO'],
    githubUrl: `${GITHUB}/bizflow-monorepo-demo`,
  },
  {
    id: 2,
    title: 'YOLO Bean Snack Detection',
    description:
      'Custom object detector for 5 snack ingredients, 0.91 mAP@50, with a full pipeline from labelling to webcam inference.',
    image: yolo,
    technologies: ['Python', 'YOLO', 'PyTorch', 'OpenCV'],
    githubUrl: `${GITHUB}/yolo-bean-detection`,
  },
  {
    id: 3,
    title: 'Tipkhun Capital',
    description:
      'Flutter app that enforces a trading risk plan: daily loss budget, journal, discipline score and profit allocation.',
    image: tipkhun,
    technologies: ['Flutter', 'Dart', 'Unit & widget tests'],
    githubUrl: `${GITHUB}/SuperApp`,
  },
  {
    id: 4,
    title: 'Secure JWT Microservices',
    description:
      'Auth, task and user services behind an Nginx gateway with rate limiting, database-per-service and Grafana logging.',
    image: railway,
    technologies: ['Node.js', 'PostgreSQL', 'Nginx', 'Docker', 'Grafana'],
    githubUrl: `${GITHUB}/engse207-termproject-jwt-microservices`,
  },
  {
    id: 5,
    title: 'Restaurant Review App',
    description: 'Full-stack app to search, filter and review restaurants with live rating updates.',
    image: restaurant,
    technologies: ['React', 'Vite', 'Express'],
    githubUrl: `${GITHUB}/restaurant-review-app`,
  },
];
