import { parseCSV } from '@/lib/utils/csvParser';
import type { EventConfig, CertificateData } from '../types';
import { TEMPLATE_PATHS } from '../templates';

// Event Configuration for Computer Vision Workshop
export const cvWorkshopConfig: EventConfig = {
  eventId: 'cv-workshop-2026',
  eventName: 'Foundations & Frontiers of Computer Vision',
  eventDate: '7th April 2026',
  issueDate: '7th April 2026',
  certificatePrefix: 'TECH-CV-2026',
  templatePath: TEMPLATE_PATHS['cv-workshop-2026'],
  templateConfig: {
    type: 'overlay',
    dimensions: {
      width: 1200,
      height: 800,
    },
    elements: {
      name: {
        x: 600,
        y: 340,
        fontSize: 40,
        fontFamily: "'Playfair Display', Georgia, serif",
        color: '#ffffff',
        align: 'center',
      },
      qrCode: {
        x: 1110,
        y: 610,
        size: 60,
      },
    },
  },
};

// CSV data from form responses
const CSV_DATA = `Timestamp,Name,Enrollment Number,Course,Semester,Phone No.,Email-ID,Why are you interested in this workshop?,Join Computer Vision Workshop for Further Information.,Join Techniki-Society for More Exciting Events.
4/2/2026 11:54:58,Saksham Arora,A501132524017,Btech Ai Ml,3rd,9306723245,saksham73218@gmail.com,I want to learn more about ML really excited to see how this club teach and operate,yes,yes
4/2/2026 12:18:25,Yash Chaudhary ,A50105224128,B.tech(ai ml),4th,7466879864,asedcfvghj@gmail.com,Idk,yes,yes
4/2/2026 12:45:06,Aditya Raj Gupta ,A50105224138,BTech CSE ,4th,7005848867,adityarajg569@gmail.com,To know more about computer vision ,yes,yes
4/2/2026 12:45:59,Keshav Jangra ,A50105224181,B.tech cse,4th,8059088064,jangrakeshav137@gmail.com,To explore about deep learning ,yes,yes
4/2/2026 12:52:04,Parth khandelwal ,A50105224132,Btech cse ,4th,7891256353,parthk1300@gmail.com,My domain is ai and ml,yes,yes
4/2/2026 13:19:44,Anubhav Dash,A501132524011,BTech AI & ML,4th,7011944619,anubhavdash91@gmail.com,Seriously?? ,yes,yes
4/2/2026 13:50:03,Prachi,A50105224061,Btech cse,4th,9813040477,officialprachi007@gmail.com,.,yes,yes
4/2/2026 15:43:48,Akshay,A501132525032,B-Tech AI&ML,2nd,9849153450,sudatiakshayraoo@gmail.com,To learn new things and learn about computer vision,yes,yes
4/2/2026 15:44:42,Neelanshi,A501132525121,Btech aiml ,2nd,8295209408,neelanshichaudhary@gmail.com,I want to gain experience ,yes,yes
4/2/2026 15:46:25,Shashwat ,A501132525077,BTech AIML ,2nd,7678496012,shashwatshokeen@gmail.com,To gain experience ,yes,yes
4/2/2026 17:45:37,Hemant Kumar ,A501132624001,I Btech + Mtech ai & ml,4th,9034507064,hemantkumarsunnyhks@gmail.com,To explore the what is computer vision and how it's work,yes,yes
4/2/2026 19:31:06,Harsh Singh,A501132525057,B tech AI ml,2nd,8318010054,harusr135@gmail.com,I don't know,yes,yes
4/2/2026 19:54:26,Nikunj,A50105225094,Btech cse,2nd,9729505307,nikunjraj51@gmail.com,Because i dont see a reason for why not?,yes,yes
4/2/2026 20:02:37,Sneha Yadav,A50105225098,BTech ,2nd,9896804959,sy2745202@gmail.com,To explore ,yes,yes
4/2/2026 20:41:59,Khushi bansal ,A50105225124,Btech cse ,2nd,8595771398,Bansalkhushi446@gmail.com,For experience ,yes,yes
4/2/2026 21:29:38,Aman sharma,A501133525117,Btech (AIML),2nd,8368430431,aman07officialyt@gmail.com,Want to learn,yes,yes
4/3/2026 9:21:57,Pushkar suryan,A505112325001,I BTech+ Mtech (DS),2nd,7428744670,pushkarsuryan@gmail.com,--------,yes,yes
4/3/2026 20:13:19,Rekhanjali,A50105224092,Btech cse,4th,9799784388,rekhanjalikoya@gmail.com,For building a mini project ,yes,yes
4/3/2026 20:14:29,Anshika ,A50105224083,Btech cse,4th,8950039213,ydv.anshika.21@gmail.com,It helps in learning computer vision,yes,yes
4/3/2026 21:08:53,Arjit Singh,A50105225074,B.tech. CSE,2nd,9289570756,singh25arjit@gmail.com,To know about Pytorch,yes,yes
4/3/2026 21:48:38,Shivani ,A50105224099,Btech cse ,4th,9811162359,Gupta.05shivani06@gmail.com,Learning purpose ,yes,yes
4/3/2026 23:40:25,Dhaanvi Bakshi,A50105225005,B.Tech CSE,2nd,9717624545,dhaanvi.bakshi@s.amity.edu,Interested in coding,yes,yes
4/4/2026 1:04:24,Manav Manu ,A501132625002,I.Btech AIML,2nd,7982385313,manavmanu2024@gmail.com,Interested in ML models,yes,yes
4/5/2026 16:35:44,Sajan Dhakal,A50105223190,BTech CSE,6th,8448038515,sajansp559@gmail.com,.,yes,yes
4/5/2026 19:46:18,Krish dagar,A505112324001,I btech+ mtech ds ,4th,9953861322,dagark069@gmail.com,Because of my friend ,yes,yes
4/6/2026 3:33:03,Parth khandelwal ,A50105224132,Btech cse ,4th,7891256353,khandelwalparth060@gmail.com,I am interested because you are teaching python library,yes,yes
4/6/2026 9:56:59,Chandni Kotiya,A505112425004,I.Btech+Mtech (NCS),2nd,7011382147,chandni.kotiya@s.amity.edu,to explore ,yes,yes
4/6/2026 10:32:35,Divyanka Pandey ,A50105225071,B tech CSE ,2nd,9908796877,divyanka.pandey@s.amity.edu,Since I am a CSE student and wanna learn about robotics ,yes,yes
4/6/2026 11:30:31,Lakshay Bhardwaj ,A50105223171,Btech cse,6th,9729075176,bhardwajlakshay33@gmail.com,Yes,yes,yes
4/6/2026 11:33:58,Nikhil ,A50105223170,B.Tech CSE,6th,7027914556,nikhilyadav123501@gmail.com,Because I improve in my skills and write it in resume ,yes,yes
4/6/2026 11:45:12,Gautam,A50105223137,Btech Cse,6th,9992339496,gautamv21000@gmail.com,To gain hands on experience ,yes,yes
4/6/2026 14:22:09,Gunmay Khasria ,A50105225075,B.tech CSE ,2nd,9354807560,gunmaykhasria@gmail.com,To learn NEW things ,yes,yes
4/6/2026 14:49:20,Himesh Mehendiratta,A501132525094,B tech AIML,2nd,9817618911,himeshmehendiratta@gmail.com,To learn something new,yes,yes
4/6/2026 14:53:11,Vanshika,A501132525087,AIML ,2nd,7404913027,dalalvanshika141@gmail.com,Want to learn web cam processing ,yes,yes
4/6/2026 14:53:14,Avee singh,A501132525052,BTech-(Ai and mL),2nd,8191075000,Chuunibyou123@outlook.com,My friend is in there,yes,yes
4/6/2026 14:53:19,Yashika,A501132525086,Btech ai ml -C ,2nd,7428154878,yashika.s0206@gmail.com,Want to learn some more things about tech,yes,yes
4/6/2026 14:53:31,Akhil Srivastava,A501132525125,Btech AIML,2nd,9870510674,akhilsrivastava@gmail.com,Learning something new,yes,yes
4/6/2026 14:53:55,Atulya Jai Singh,A501132525140,Btech AIML,2nd,7678620893,aviatorjaijai@gmail.com,my friend asked me to,yes,yes
4/6/2026 15:11:24,Akriti Singh,A50105224042,Btech CSE,4th,9319290822,akritisingh.gurgaon@gmail.com,.,yes,yes
4/6/2026 15:34:10,Jayant Sharma,A501132525141,B tech Aiml,2nd,9649281201,jayantshrmaa@gmail.com,To acquire more knowledge,yes,yes
4/6/2026 15:58:31,Jatin Gahlawat ,A501132525120,Btech ai ml ,2nd,9138339488,gahlawatjatin4@gmail.com,For learn something new,yes,yes
4/6/2026 16:06:01,Kumkum Sisodiya ,A505159424002,BscIT,4th,8306806404,kumkumsisodiya799@gmail.com,For experience ,yes,yes
4/6/2026 16:07:34,Kumkum Sisodiya ,A505159424002,BscIT ,4th,8306806404,kumkumsisodiya799@gmail.com,For experience ,yes,yes
4/6/2026 16:14:31,Dhanadeshwara,A50105225044,B. Tech CSE,2nd,9810321056,vdhanadesh@gmail.com,Just to gain some knowledge,yes,yes
4/6/2026 16:22:27,Isha Prasad ,A501132525001,Btech AI+ML,2nd,8290651895,sonikumariisha@gmail.com,Was forced at gunpoint (by ATHARV),yes,yes
4/6/2026 16:43:10,Pardeep,A505159424022,BSc.IT,4th,9588536853,kumarpardeep19102006@gmail.com,To learn new things ,yes,yes
4/6/2026 16:54:57,Prince pandey,A516159324022,BSc forensic science ,4th,9318339529,priyanshupandat9596@gmail.com,Yes ,yes,yes
4/6/2026 17:46:18,Ekta,A505159424004,Bsc IT ,4th,9871936699,ektayadav2405@gmail.com,For knowledge ,yes,yes
4/6/2026 20:43:38,Ayushhi Pragyan ,A51339923004,B tech BME ,6th,8092989039,ayushhipragyan14@gmail.com,Yes,yes,yes
4/6/2026 21:32:25,Roshni,A51339925003,B.tech (BME),2nd,7703908871,roshni8@s.amity.edu,Bcs it's help me to get more knowledge,yes,yes
4/6/2026 23:32:23,Harsh Yadav,A501132524052,B.Tech AI-ML,4th,9996349021,harshyadav17092006h@gmail.com,knowledge,yes,yes
4/7/2026 2:01:06,Yash Chopra ,A50105223179,BTech CSE ,6th,9773662383,yashhchopraa26@gmail.com,Knowledge ,yes,yes
4/7/2026 8:08:06,Sahil Kumar yadav ,A505159424006,B.Sc. IT,4th,6378752791,sahil.yadav23@s.amity.edu,Yes,yes,yes
4/7/2026 9:23:47,Shaik Asif,A5010225060,Btech -CSE,2nd,7989438414,asifmasthan42@gmail.com,About learning new technology ,yes,yes
4/7/2026 9:25:27,Vaibhav Tabeja,A50105225049,Btech cse,2nd,7042655484,vaibhavtaneja6453@gmail.com,-,yes,yes
4/7/2026 9:35:36,Nisha Thakur ,A50504823046,BCA (hons with research),6th,7321830841,thakurnisha200105@gmail.com,Yes,yes,yes
4/7/2026 9:40:53,Tanay Singh Rawat ,A50105225016,BtechCse,2nd,8840597769,tanayrawat47@gmail.com,Reasons,yes,yes
4/7/2026 10:23:03,Harshit Sharma,A50105223180,Btech cse,6th,9625088832,harshitsharma79857@gmail.com,To learn more about computer vision,yes,yes
4/7/2026 11:22:03,Pradeep ,A50105224143,Btech cse,4th,8826623050,pradeepy23050@gmail.com,...,yes,yes`;

// Convert CSV rows to certificate data
function csvToCertificates(): CertificateData[] {
  const rows = parseCSV(
    `id,team_name,name,email_id,enrollment\n` +
      CSV_DATA
        .trim()
        .split('\n')
        .slice(1)
        .map((line, idx) => {
          const parts = line.split(',');
          // Name is at index 1, enrollment at index 2, email at index 6 (0-based)
          const name = (parts[1] || '').trim();
          const enrollment = (parts[2] || '').trim();
          const email = (parts[6] || '').trim();
          return `${(idx + 1).toString()},,${name},${email},${enrollment}`;
        })
        .join('\n')
  );

  return rows.map(row => ({
    id: row.id,
    certificateId: `${cvWorkshopConfig.certificatePrefix}-${row.id.padStart(3, '0')}`,
    eventId: cvWorkshopConfig.eventId,
    eventName: cvWorkshopConfig.eventName,
    teamName: row.team_name,
    name: row.name,
    email: row.email_id,
    enrollment: row.enrollment,
    eventDate: cvWorkshopConfig.eventDate,
    issueDate: cvWorkshopConfig.issueDate,
    category: 'Participant',
  }));
}

export const cvWorkshopCertificates: CertificateData[] = csvToCertificates();
