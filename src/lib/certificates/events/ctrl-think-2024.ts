import { parseCSV } from '@/lib/utils/csvParser';
import type { EventConfig, CertificateData } from '../types';
import { TEMPLATE_PATHS } from '../templates';

// Event Configuration
export const ctrlThinkConfig: EventConfig = {
  eventId: 'ctrl-think-2024',
  eventName: 'CTRL+THINK (ALLNIGHT VIBECODING @DEJABREW)',
  eventDate: '26th & 27th September 2024',
  issueDate: '28th September 2024',
  certificatePrefix: 'TECH-CT-2024',
  templatePath: TEMPLATE_PATHS['ctrl-think-2024'],
  templateConfig: {
    type: 'overlay',
    dimensions: {
      width: 1200,
      height: 800,
    },
    elements: {
      name: {
        x: 500,
        y: 450,
        fontSize: 48,
        fontFamily: 'Georgia, serif',
        color: '#000000',
        align: 'center',
      },
      qrCode: {
        x: 850,
        y: 550,
        size: 150,
      },
      teamName: {
        x: 500,
        y: 520,
        fontSize: 24,
        fontFamily: 'Arial, sans-serif',
        color: '#333333',
        align: 'center',
      },
    },
  },
};

// CSV Data - All 70 participants
const CSV_DATA = `id,team_name,name,email_id,enrollment
1,Nightfall,Arjit Singh,7982385313@gmail.com,A50105225074
2,Nightfall,Shridhar Pathak,7982385313@gmail.com,A50105225090
3,Nightfall,Manav Manu,7982385313@gmail.com,A501132625002
4,Nightfall,Jatin,7982385313@gmail.com,A50105225084
5,CiviSense,Mohamed Irfan,9080385006@gmail.com,A501132525020
6,CiviSense,Akshay Rao,9080385006@gmail.com,A501132525032
7,CiviSense,Suhail Panda,9080385006@gmail.com,A501132525033
8,CiviSense,Shivam Jain,9080385006@gmail.com,A501132525097
9,Remembrance,DEBOJIT DEY,7002351127@gmail.com,A501132524046
10,Hackathoners,Himesh mahendiratta,9817618911@gmail.com,A501132525094
11,Hackathoners,Nikunj Raj,9817618911@gmail.com,A50105225094
12,Hackathoners,Piyush munjal,9817618911@gmail.com,A505112425005
13,Hackathoners,Vinay Kumar,9817618911@gmail.com,A501163525002
14,Syntax Error,Metrysa Maria Nicolas,9108435800@gmail.com,A50105225002
15,Syntax Error,Blessy Khaling,9108435800@gmail.com,A51339925005
16,Syntax Error,Kajal Aggarwal,9108435800@gmail.com,A50105225051
17,Syntax Error,Riya,9108435800@gmail.com,A518151025034
18,Pulse,Chirag,9817158309@gmail.com,A50105224065
19,Pulse,Nisha,9817158309@gmail.com,A50381624002
20,Diddy party,Tanishq Gupta,9878014153@gmail.com,A50105225087
21,Diddy party,Jashandeep Singh,9878014153@gmail.com,A50105225076
22,Merge Conflicts,Tanishq Chaudhary,9149932076@gmail.com,A505150825063
23,Merge Conflicts,Nikhil Yadav,9149932076@gmail.com,A505150825064
24,Byte Bandits,Tejas,9728327029@gmail.com,A50199825004
25,Byte Bandits,Rajan Jhedu,9728327029@gmail.com,A51339925004
26,Byte Bandits,Adithyan Nair,9728327029@gmail.com,A51339925014
27,Byte Bandits,Madhumithaa,9728327029@gmail.com,A51339925009
28,Hackers Craze,Nikhil,7027914556@gmail.com,A50105223170
29,Hackers Craze,Lakshay Bharadwaj,7027914556@gmail.com,A50105223171
30,Hackers Craze,Shivam,7027914556@gmail.com,A50105125005
31,Hackers Craze,Uday Katoch,7027914556@gmail.com,A50105223080
32,Straw Hats,Shankar pratap Singh,7055385224@gmail.com,A50105224190
33,Straw Hats,Sameer Yadav,7055385224@gmail.com,A50105224161
34,Spartans,Ujjwal Sharma,9310177149@gmail.com,A501015225063
35,Spartans,Hemant Kumar,9310177149@gmail.com,A50105225055
36,Spartans,Mayank soni,9310177149@gmail.com,A50105225030
37,Spartans,Arush gupta,9310177149@gmail.com,A50105225042
38,Soda Pop,Nitin,8368689674@gmail.com,A501132524084
39,Soda Pop,Kaushal,8368689674@gmail.com,A504179524004
40,Soda Pop,Annu,8368689674@gmail.com,A518160024017
41,Soda Pop,Yash Choudhary,8368689674@gmail.com,A50504823013
42,DEBUG THUGS,Rohit Yadav,8569851202@gmail.com,A50504823044
43,DEBUG THUGS,Dhruv Pahuja,8569851202@gmail.com,A50504823074
44,DEBUG THUGS,Nishant Rao,8569851202@gmail.com,A50504823056
45,DEBUG THUGS,nitish dhamu,8569851202@gmail.com,A50504823002
46,NEUROBRO,Atharv,9582300021@gmail.com,A501132525010
47,NEUROBRO,Mahir,9582300021@gmail.com,A501163525001
48,NEUROBRO,Aditya,9582300021@gmail.com,A50105225057
49,No sleep till solution,Amrutha Manu,9560819237@gmail.com,A513131123003
50,No sleep till solution,Karishma,9560819237@gmail.com,A518159824043
51,No sleep till solution,Bhupender,9560819237@gmail.com,A51820124001
52,No sleep till solution,Krishna,9560819237@gmail.com,A51675123004
53,Cipher,Dia Khurana,9968342230@gmail.com,A501132621006
54,Cipher,Anubhav Dash,9968342230@gmail.com,A501132524011
55,Cipher,Vikrant Chaudhary,9968342230@gmail.com,A50105223050
56,Techno warrior,Madhav Suneja,9212552442@gmail.com,A501132524027
57,Calibers,Vishal singh,9971035196@gmail.com,A50105223185
58,Calibers,Jatin kumar,9971035196@gmail.com,A50105223175
59,Calibers,Dhruv,9971035196@gmail.com,A501132525106
60,Hack Hunters,Divyansh Chauhan,9837079133@gmail.com,A50105222132
61,Hack Hunters,Mohit Sharma,9837079133@gmail.com,A50105222020
62,Hack Hunters,Ajendra Singh,9837079133@gmail.com,A501132523035
63,Hell,Jayasri,7845677565@gmail.com,A50204124005
64,Hell,Priyadarshan,7845677565@gmail.com,A50204124005
65,Hell,Shakti Seelan,7845677565@gmail.com,A501132524049
66,Hell,Vaishnavi,7845677565@gmail.com,A513112723005
67,CodeStorm,Sachidanand Das,9643142800@gmail.com,A501132525002
68,CodeStorm,Pankaj Anand,9643142800@gmail.com,A501132525075
69,CodeStorm,Tanu,9643142800@gmail.com,A518159824047
70,CodeStorm,Nishant,9643142800@gmail.com,A501132525108`;

// Convert CSV rows to certificate data
function csvToCertificates(): CertificateData[] {
  const rows = parseCSV(CSV_DATA);
  return rows.map(row => ({
    id: row.id,
    certificateId: `${ctrlThinkConfig.certificatePrefix}-${row.id.padStart(3, '0')}`,
    eventId: ctrlThinkConfig.eventId,
    eventName: ctrlThinkConfig.eventName,
    teamName: row.team_name,
    name: row.name,
    email: row.email_id,
    enrollment: row.enrollment,
    eventDate: ctrlThinkConfig.eventDate,
    issueDate: ctrlThinkConfig.issueDate,
    category: 'Participant',
  }));
}

// Export certificates
export const ctrlThinkCertificates: CertificateData[] = csvToCertificates();
