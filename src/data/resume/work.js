/**
 * @typedef {Object} Position
 * Conforms to https://jsonresume.org/schema/
 *
 * @property {string} name - Name of the company
 * @property {string} position - Position title
 * @property {string} url - Company website
 * @property {string} startDate - Start date of the position in YYYY-MM-DD format
 * @property {string|undefined} endDate - End date of the position in YYYY-MM-DD format.
 * If undefined, the position is still active.
 * @property {string|undefined} summary - html/markdown summary of the position
 * @property {string[]} highlights - plain text highlights of the position (bulleted list)
 */
const work = [
  {
    name: 'Control Risks',
    position: 'Data Analytics Consultant',
    url: 'https://controlrisks.com',
    startDate: '2022-02-01',
    summary:
    'Control Risks is a firm specialized in risk consultancy that helps to create secure, compliant and resilient organizations. As a consultant in the data science industry, we have developed a team of engineers that are dedicated to the business and provide the best services to our customers. I provide technical leadership on high-impact projects, influence and coach a distributed team of engineers, and facilitate alignment and clarity across teams on goals, outcomes, and timelines.\n',
    highlights: [
      'Redesigned engineering processes for continuous client engagements.',
      'Re-architected and migrated data processing to ensure we use the latest cloud tools.',
      'Established and nurtured strong client relationships through regular communication and project updates.',
      'Built new computer vision and ETL pipelines',
      'Implemented and maintained dashboards for key internal and external decision makers',
    ],
  },
  {
    name: 'Seax Knives',
    position: 'Co-founder',
    url: 'https://seaxknives.com',
    startDate: '2023-09-01',
    summary: `Seax Knives is a sidekick me and two friends started last year.
    We import handmade knives from Mexico, and sell them in the US through our
    website, and through partnerships with local stores. We have automated
    most of the work and at this point our concern is to match supply with demand,
    which is naturally a very hard thing to accomplish! It's been a sweet source of passive income.`,
    highlights: [
      'Built production, online, end-to-end optimized machine learning pipelines for time-series prediction.',
      "Set and communicated team priorities that supported the broader organization's goals. Aligned strategy, processes, and decision-making across team.",
      'Collaborated with regional partners to uphold product excellence, ensuring adherence to quality standards and optimizing the sales funnel for sustained business growth.',
    ],
  },
  {
    name: 'Pecus',
    position: 'Co-founder & COO',
    url: 'http://pecus.app',
    startDate: '2021-12-01',
    endDate: '2023-12-31',
    summary: `Pecus is an organization that is dedicated to the virtualization and data transformation of the key members in the agricultural industry within the United States,
    with special focus on Livestock Breeders.`,
    highlights: [
      'Revitalized the business model by aligning our core purpose with our messaging, and spearheaded marketing campaigns to attract breeders to our network.',
      'Successfully graduated from the prestigious Builders and Backers Accelerator program.',
    ],
  },
  {
    name: 'Atento Capital',
    position: 'Data Analytics Intern',
    url: 'https://www.atentocapital.com/',
    startDate: '2021-06-01',
    endDate: '2021-08-15',
    summary: `Atento is an early-stage investment firm focused on unlocking unsung potential.
    We identify high-potential ideas and individuals and then invest the early-stage funding and human capital needed to take ventures from 0-1.
    By bringing together founders, partners, and investors, we are transforming the heartland into the nation's most equitable tech hub while generating real returns.`,
    highlights: [
      'Designed and implemented Power BI dashboards for the Marketing team, seemlessly integrating diverse data sources such as MailChimp, Google Analytics, CRM systems, and various other sources.',
      'Produced cloud-based solutions and automation tools to streamline data processing workflows, reducing operational costs, and ensuring data quality.',
      'Trained a descriptive machine learning to provide strategic risk assessments to decision makers',
      'Implemented cloud storage solutions through BigQuery and PostgreSQL, improving data accessibility and scalability.',
    ],
  },
  {
    name: 'University of Tulsa',
    position: 'Graduate Assistant',
    url: 'https://utulsa.edu/',
    startDate: '2019-11-01',
    endDate: '2021-12-17',
    summary: "Engaged in impactful roles at the University of Tulsa, a distinguished academic institution renowned for its commitment to excellence in education and research. Collaborated within the business college to support research and student success, contributing to the university's mission of fostering knowledge, innovation, and academic excellence.\n",
    highlights: [
      'Worked with professors and students with research and development.',
    ],
  },
  {
    name: 'Empresas Polar',
    position: 'Quality Analyst',
    url: 'https://empresaspolar.com',
    startDate: '2015-07-01',
    endDate: '2016-01-01',
    summary: "Contributed to the success of Empresas Polar, a prominent Venezuelan conglomerate renowned for its leadership in the food and beverage industry. Worked within a dynamic and challenging environment, actively participating in CPG manufacturing to support the company's continued growth and impact in the Venezuelan business landscape.\n",
    highlights: [
      'Implemented Lean Six Sigma methodologies, reducing packaging defects by 20%.',
      'Led adoption of data-driven practices, boosting operational efficiencies, and providing training to solidify team members tech stack.',
      'Spearheaded internal manufacturing initiatives that decreased monthly customer dissatisfaction claims by 33%.',
    ],
  },
  {
    name: 'Chevron',
    position: 'Facilities Engineer Intern',
    url: 'https://www.chevron.com/',
    startDate: '2014-06-01',
    endDate: '2015-01-01',
    highlights: [
      'Developed a simulation of all the onshore surface infrastructure across 240 square miles of oilfield with over 500 active wells. Leveraged python to ensure data quality.',
      'Provided gas recovery and construction recommendations, representing a 35% cost of installation reduction.',
    ],
  },
];

export default work;
