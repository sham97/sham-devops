import express from 'express';

const app = express();

// Set Pug as the template engine
app.set('view engine', 'pug');
app.set('views', './views'); // Specify the views directory

// CV Data
const cvData = {
  name: 'Illthizam Nassar',
  title: 'DevOps Engineer',
  summary: 'Extensive experience in ensuring high availability for applications and managing robust monitoring, alerting, and logging systems.',
  strengths: [
    'Cloud Architecture and Infrastructure Management',
    'Kubernetes Orchestration and Microservices Optimization',
    'DevOps Excellence with Comprehensive Quality Assurance',
  ],
  experience: [
    {
      role: 'DevOps & QA Engineer',
      company: 'Health Helper . Co',
      duration: 'Nov 2022 - Present',
      highlights: [
        'Ensured system reliability through Kubernetes management.',
        'Implemented CI/CD pipelines and AWS infrastructure.',
        'Collaborated with teams to optimize application functionality.',
      ],
    },
    {
      role: 'IT Engineer (DevOps)',
      company: 'Global Wavenet',
      duration: 'Jul 2022 - Dec 2022',
      highlights: [
        'Maintained high availability for application production systems.',
        'Deployed and managed Kubernetes clusters.',
        'Optimized application performance and implemented CI/CD pipelines.',
      ],
    },
  ],
  education: [
    {
      degree: 'MSc in Information Technology and Strategic Innovation',
      institution: 'Kingston University',
      period: 'Feb 2023 - Feb 2024',
    },
    {
      degree: 'BSc (Hons) in Information Technology Specializing in Computer Systems & Network',
      institution: 'SLIIT',
      period: 'Feb 2018 - Feb 2022',
    },
  ],
  contact: {
    phone: '+94776982202',
    email: 'illthizam321@gmail.com',
    location: 'Mount-Lavinia, Colombo, Sri Lanka',
  },
};

// Define a route to render the CV
app.get('/view-cv', (req, res) => {
  res.render('cv', { cv: cvData });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}/view-cv`);
});
