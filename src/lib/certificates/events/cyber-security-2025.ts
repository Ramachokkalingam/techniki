import { parseCSV } from '@/lib/utils/csvParser';
import type { EventConfig, CertificateData } from '../types';
import { TEMPLATE_PATHS } from '../templates';

// Event Configuration for Cyber Security Workshop
export const cyberSecurityConfig: EventConfig = {
  eventId: 'cyber-security-2025',
  eventName: 'Ethical hacking workshop',
  eventDate: '11th November 2025',
  issueDate: '11th November 2025',
  certificatePrefix: 'TECH-CS-2025',
  templatePath: TEMPLATE_PATHS['cyber-security-2025'] || TEMPLATE_PATHS['ctrl-think-2025'],
  templateConfig: {
    type: 'overlay',
    dimensions: {
      width: 1200,
      height: 800,
    },
    elements: {
      name: {
        x: 600,
        y: 420,
        fontSize: 48,
        fontFamily: 'Georgia, serif',
        color: '#ffffff',
        align: 'center',
      },
      qrCode: {
        x: 900,
        y: 600,
        size: 120,
      },
      teamName: {
        x: 600,
        y: 500,
        fontSize: 22,
        fontFamily: 'Arial, sans-serif',
        color: '#cccccc',
        align: 'center',
      },
    },
  },
};

// CSV data from the provided attachment (form responses)
const CSV_DATA = `Timestamp,Name,Enrollment Number,Course,Semester,Phone No.,Email-ID,Why are you interested in this workshop?,Join Cyber Security Workshop for Further Information.,Join Techniki-Society for More Exciting Events.
11/5/2025 23:19:03,Himesh Mehendiratta,A5011132525094,B tech AIML,1st,9817618911,himeshmehendiratta@gmail.com,I am interested in hacking and it is also beneficial for future,yes,yes
11/5/2025 23:22:27,Chandni Kotiya ,A505112425004,I.B.Tech+M.Tech(NCS),1st,7011382147,chandnikotiya5@gmail.com,I am passionate about cybersecurity and want to dive deeper into its concepts and applications.,yes,yes
11/5/2025 23:25:29,Akshay,A501132525032,"B-tech,AI&ML",1st,9849153450,Sudatiakshayraoo@gmail.com,To learn about ethical hacking and cybersecurity,yes,yes
11/5/2025 23:34:05,Suhail Panda,A501132525033,BTech AIML ,1st,8457803338,suhailpanda843@gmail.com,Experience in cybersecurity ,yes,yes
11/5/2025 23:36:11,Aarushi Singh Rana ,A50204125017,BTech biotechnology ,1st,9211499177,rana.aarushi.singh@gmail.com,I just wanted to learn about cyber security ,yes,yes
11/6/2025 8:24:22,Sneha Yadav ,A50105225098,BTECH ,1st,9896804959,sy2745202@gmail.com,To explore ,yes,yes
11/6/2025 11:04:37,Yash,A50105224128,B.tech(ai s ml),3rd,7466879864,asedcfvghj@gmail.com,To learn the basic of ethical hacking ,yes,yes
11/6/2025 11:24:53,Madhav Suneja ,A501132524027,B.TECH(AI/ML),3rd,921552442,sunejam45@gmail.com,To gain experience ,yes,yes
11/6/2025 11:39:59,Rudraksh,A50105224103,B tech (CSE),3rd,8168138570,Rudrakshz231@gmail.com,To improve our knowledge ,yes,yes
11/6/2025 12:00:22,Daksh,A51313325033,B pharmacy ,1st,9971639117,Dakshkamboj777@gmail.com,Because i like it,yes,yes
11/6/2025 12:03:54,Arjit Singh,A50105225074 ,B.Tech. CSE ,1st,9289570756,singh25arjit@gmail.com,To know about cyber-security.,yes,yes
11/6/2025 12:05:04,Arjit Singh ,A50105225074 ,B.tech CSE,1st,9289570756,singh25arjit@gmail.com,To know about cyber security stuff,yes,yes
11/6/2025 12:58:28,Manav Manu ,A501132625002,I.btech AIML,1st,7982385313,manavmanu2024@gmail.com,Ehhhh,yes,yes
11/6/2025 12:59:54,Divyanka Pandey ,A50105225071,B tech CSE ,1st,9908796877,divyankapandey13@gmail.com,Cyber security attracts me a lot ,yes,yes
11/6/2025 14:56:02,Nitin kumar,A50105223078,B.tech cse,5th,7240181585,parjapatn298@gmail.com,Want to learn hacking ,yes,yes
11/6/2025 16:58:39,Manish,A51313325050,B.pharma,1st,8769616446,tonyraoshab@gmail.com,Yes ,yes,yes
11/6/2025 18:26:12,Ashutosh Sharma,A50105225036,BTech CSE ,1st,9821925336,ashutosh17072007@gmail.com,i want to know how we can perform attack on other system ,yes,yes
11/6/2025 19:13:32,Priyanshi ,A50105224062 ,BTECH CSE ,3rd,9315199406,priyanshiofficial17@gmail.com,Gain insights and learn atleast some elements,yes,yes
11/6/2025 22:21:01,Arnav Garg,A501132525119,B.Tech AIML,1st,9571260162,this.arnavgarg@gmail.com,As a tech enthusiasm i have always been interested to know about the hacking,yes,yes
11/7/2025 9:11:37,Kartik Yadav ,A50821525008,BBA LLB,1st,9996994869,mrminee123@gmail.com,Just to gain knowledge outside of my current course. ,yes,yes
11/7/2025 10:22:19,Ashish Kumar,A501132525006,B.tech (AIML),1st,8295028553,ashishkumar270607@gmail.com,interested in hacking,yes,yes
11/7/2025 10:22:45,Aaditya ,A50105225026,Btech cse,1st,8789882580,kislaythakur13@gmail.com,I want to explore ,yes,yes
11/7/2025 10:22:50,Kajal aggarwal ,A50105225051,Btech cse,1st,8950641556,kajalaggarwal2731@gmail.com,To learn and innovate new things,yes,yes
11/7/2025 11:06:37,Pushkar ,A505112325001,I. Btech+Mtech(DS),1st,9599487960,pushkarsuryan@gmail.com,Issh na puch pagle it's the craze for technologiyaaa ,yes,yes
11/7/2025 11:35:54,Tanmay Agarwal,A505112425003,I.Btech+Mtech(NCS) ,1st,7037021031,agtanmay370@gmail.com,Because I wanna learn more about it as I wanna aspire to be a ethical hacker,yes,yes
11/7/2025 12:55:34,RASHID ALI ,A505145025033,MCA,1st,9871788240,rashid8860273076@gmail.com,Gain knowledge about ethical hacking ,yes,yes
11/7/2025 12:58:05,Saksham sehrawat ,A505145025031,Mca,1st,9990006835,Saksham.ssehrawat@gmail.com,Ethical Hacking ,yes,yes
11/7/2025 13:18:52,Tanishq Gupta ,A50105225087 ,Btech cse,1st,9306535141,tanishq1908@gmail.com,To learn about ethical hacking ,yes,yes
11/7/2025 13:25:42,Tejaswani Nayak,A501132625006,integrated AIML,1st,8448572747,tejaswaninayak281105@gmail.com,to learn ,yes,yes
11/7/2025 13:26:39,Uday Katoch,A50105223080,Btech CSE,5th,9317704148,Katochuday123@gmail.com,I have cyber security as my specialization.,yes,yes
11/7/2025 13:33:11,Manjeet,A50105224045,BTech CSE,3rd,7082590796,manjeetvnandal500@gmail.com,Interested in ethical hacking,yes,yes
11/7/2025 14:12:48,Rahul Sehrawat ,A505145025030,MCA,1st,9899208840,rahulsehrawat479@gmail.com ,For experience ,yes,yes
11/7/2025 14:28:45,Tejas,A50199825004,B.Tech Mechanical engineering ,1st,9728327029,Tejas.bishnoi.0001@gmail.com,"To learn about cybersecurity, and extend my knowledge base",yes,yes
11/7/2025 14:28:48,Lakshay Bhardwaj ,A50105223171,Btech cse,5th,9729075176,bhardwajlakshay33@gmail.com,I will tell you on phone call 🤙🏼,yes,yes
11/7/2025 14:29:44,Parth khandelwal ,A50105224132,Btech cse,3rd,7891256353,parthk1300@gmail.com,Yes,yes,yes
11/7/2025 14:33:06,Vandana yadav ,A50105224153,Btech cse,3rd,6232539928,vandanayadav192006@gmail.com,To gain knowledge and basics  of hacking ,yes,yes
11/7/2025 14:38:07,Pushkar yadav,A50105224170,Btech cse ,3rd,9999220344,ydvpushkar0608@gmail.com,Intrested in hacking,yes,yes
11/7/2025 14:38:19,nancy yadav,A50105224184,btech cse,3rd,9311511175,nancyyraoo99@gmail.com,learn to hack ,yes,yes
11/7/2025 14:38:22,UMANG ,A505150825006,BCA,1st,9211727765,9211727765,Learning ,yes,yes
11/7/2025 14:38:36,Kriti Gupta ,A50105224187,Btech CSE ,3rd,81672927979,kritiguptaasn01@gmail.com,Want to learn how to hack ,yes,yes
11/7/2025 14:47:32,Pulkit Singh,A505150825017,BCA,1st,9810409656,singh1pulkit3@gmail.com,to learn more about tech world.,yes,yes
11/7/2025 14:48:20,Shashank Saini,A501132524045,B. Tech(AI&ML) ,3rd,8395908029,shashanksaini130407@gmail.com,To learn about this domain,yes,yes
11/7/2025 14:50:18,Sampriya Behera ,A501132524060,B.tech AI-ML ,3rd,9311490059,Sampriyabehera.1905@gmail.com,To get an exposure of this domain and figure out my interest,yes,yes
11/7/2025 14:52:02,Abhimanyu Deshwal ,A501132524074,Btech AIML,3rd,9990808053,abhimanyudeswal6@gmail.com,To learn new skills ,yes,yes
11/7/2025 14:52:13,Ankit Kumar ,A501132524044,AI&ML,3rd,6386887538,ak3125885@gmail.com,Yes,yes,yes
11/7/2025 15:21:10,Pranjal sharma,A50105225111,Btech cse,1st,9315976495,pranjal194823@gmail.com,Ethical hacking ,yes,yes
11/7/2025 15:30:07,Rajan Jhedu,A51339925004,B.Tech. BME,1st,8094225592,jhedurajan@gmail.com,To dive into the world of ethical hacking and learn something new. ,yes,yes
11/7/2025 15:31:43,Vaibhav,A50105225116,B.tech CSE,1st,7056113366,vaibhavsharmabhiwani@gmail.com,Cause of hacking,yes,yes
11/7/2025 15:51:13,Sohil,A501132524073,B tech AI/ml,3rd,8053353198,Ksohil4556@gmail.com,Interest in ethical hacking ,yes,yes
11/7/2025 15:54:19,Jatin,048,BCA HONOURS WITH RESEARCH ,1st,9671517894,jatinsaini102010@gmail.com,New attack learn ,yes,yes
11/7/2025 16:02:06,Mahir Rajmalani,A501163525001,Integrated B.Tech -M.Tech Defence Technology ,1st,9811187185,mahir.rajmalani17@gmail.com,Want to learn as much as I can.,yes,yes
11/7/2025 16:11:22,Harsh,A50001923050,Mca,1st,9817676186,Harshrajawat981@gmail.com,For knowledge ,yes,yes
11/7/2025 17:18:43,Yuvika Mourya,A50105224004,Btech cse,3rd,8076866851,collegeyuvika@gmail.com,I want to know and explore hand to hand workshop on ethical hacking,yes,yes
11/7/2025 18:48:29,Sparsh sharma ,A50105222030,Btech cse ,7th,9518813446,sparsh124444@gmail.com,Looking for opportunities in the field of cyber security,yes,yes
11/7/2025 18:48:57,Abhinav Ahuja ,A50105222038,Btech CSE ,7th,9517599099,abhinav95175@gmail.com,I have already some knowledge of cybersecurity and I want to enhance my knowledge via this workshop.,yes,yes
11/7/2025 18:58:43,Dikshanya Varsha,A50105224012,BTech Cse ,3rd,9363925120,Dikshanyavarsha@gmail.com,To learn about ethical hacking ,yes,yes
11/7/2025 19:22:05,Prachi,A50105224061,Btech cse,3rd,9518137602,officialprachi007@gmail.com,.,yes,yes
11/7/2025 19:25:28,Akriti Singh,A50105224042,Btech CSE-A,3rd,9319290822,akritisingh.gurgaon@gmail.com,i’ve an interest in ethical hacking,yes,yes
11/7/2025 19:36:49,Nikunj Raj,A50105225094,Btech cse ,1st,9729505307,nikunjraj51@gmail.com,I want to learn in the best way possible,yes,yes
11/7/2025 20:04:08,Siddharth Sinha,A50105223148,BTech CSE,5th,7903066361,siddharthsinha1125@gmail.com,Learning,yes,yes
11/7/2025 20:06:17,Khushi ,A50105225124,Btech cse ,1st,8595771398,Bansalkhushi446@gmail.com,To explore and gain experience ,yes,yes
11/7/2025 20:11:49,Bhawana,A50105224049,Btech CSE,3rd,9773526451,bhawana30092006@gmail.com,To excel knowlegde in the field of cyber security.,yes,yes
11/7/2025 20:13:06,Bhawana,A50105224049,Btech CSE,3rd,9773526451,bhawana30092006@gmail.com,To excel knowledge in cyber security.,yes,yes
11/7/2025 20:19:55,Vipin kumar ,A50105225118,B tech,1st,5253308560,Kumarvipin230708@gmail.com,"It give good experience
",yes,yes
11/7/2025 20:25:40,Sagarla Gowtham Yadav ,A50105225114,BTech CSE,1st,8341520125,sagarla9288@gmail.com,Interested in Ethical Hacking ,yes,yes
11/7/2025 20:35:18,Vaibhavi lakhera ,A50204125011,Btech biotechnology ,1st,9027618533,vaibhavilakhera2101@gmail.com,Hacking hehe,yes,yes
11/7/2025 20:36:48,Kavya kumar pandey ,A501132525065,Ai/ml,1st,9205532344,bnp201010@gmail.com,Wanna learn about hacking ,yes,yes
11/7/2025 20:37:40,Akhil Srivastava,A501132525125,Btech Aiml,1st,9870510674,akhilsrivastavagmeets21@gmail.com,To learn,yes,yes
11/7/2025 20:39:53,Aditya Goswami ,A50105225057,Btech cse ,1st,8920873792,adityagoswami45u@gmail.com,Want to learn the basics and understanding the fundamental of ethical hacking ,yes,yes
11/7/2025 20:44:20,Isha Prasad ,A501132525001,B.Tech (AI+ML),1st,8290651895,ishaprasad79@gmail.com,Learning basis,yes,yes
11/7/2025 21:19:41,Anubhav Dash ,A501132524011,BTech AI&ML,3rd,7011944619,anubhavdash91@gmail.com,Becoz of Rohit bhaiya ,yes,yes
11/7/2025 21:23:55,Jatin  Gahlawat,A501132525120,btech . Ai & ml,1st,9138339488,gahlawatjatin4@gmail.com,"to learn something ,  to gain experience , tomtry something new ",yes,yes
11/7/2025 21:40:30,Tejas Arora ,A501132525091,Btech AI ML ,1st,7015616401,tejasarora268@gmail.com,I'm interested in cybersecurity ,yes,yes
11/7/2025 21:44:26,Sakshi,A50105225117,BTech ,1st,9466250581,chunnukashyap.087@gmail.com,To explore tech experience ,yes,yes
11/7/2025 21:49:18,Hardik Miglani,A501132525095,B.Tech(AI&ML),1st,8570037096,hardikmiglani999@gmail.com,Want to learn,yes,yes
11/7/2025 21:50:22,Metrysa Maria Nicolas ,A50105225002 ,B.Tech CSE ,1st,9718529333,metrysa2007@gmail.com,To learn and innovate,yes,yes
11/7/2025 22:03:48,Aman kumar,A50105225073,B tech cse ,1st,7065091839,Kumarsaman2006@gmail.com,I want to know more about this ,yes,yes
11/7/2025 22:06:13,Kunal ,A50105224005,B.Tech CSE,3rd,8295727278,kunalkhola7@gmail.com,I am interested in learning about ethical hacking.,yes,yes
11/7/2025 22:24:03,Paras,A501132525116,B.tech (AI & ML),1st,9034270181,waliaparas679@gmail.com,I just have interest in ethical hacking ,yes,yes
11/7/2025 22:43:01,Sajan,A50105223190,CSE,5th,8448038515,sajansp559@gmail.com,To learn how to hack amizone.,yes,yes
11/7/2025 22:46:10,Yashasvi Rastogi ,A501132625005,Integrated AI ML,1st,9911564433,yashasvirastogi007@gmail.com,Because I work in techniki 🥹👍🏻,yes,yes
11/8/2025 7:56:50,Gourav Aggarwal,A50105225121,Btech Cse,1st,8398952119,pk4149155@gmail.com,Interest in cyber,yes,yes
11/8/2025 12:00:35,Ishika,A501132524099 , Btech AIML,3rd,9306647476,Ishikakharb05@gmail.com,I want to learn something new,yes,yes
11/8/2025 12:13:59,Rahul Yadav ,A501132525085,B.Tech in AI and ML ,1st,9628126269,radhe55krishna57@gmail.com,To learn ,yes,yes
11/8/2025 13:19:50,Shivam Jain ,8708563032,B.Tech AI ML ,1st,8708563032,shivamjain.sj555@gmail.com,To learn ethical hacking and hack people ethically ,yes,yes
11/8/2025 15:42:24,Rinku Sorout ,A50105224001,Btech cse,3rd,9729273053,rinkusorout170@gmail.com,To learn something new,yes,yes
11/8/2025 15:44:30,Rinku Sorout ,A50105224001,Btech cse,3rd,9729273053,rinkusorout170@gmail.com,To learn something new,yes,yes
11/8/2025 17:30:39,Blessy Khaling,A51339925005,B.Tec. Biomedical Engineering,1st,9108435800,blessykh@gmail.com,To learn something new. ,yes,yes
11/8/2025 22:00:07,Vishu Gautam,A5010225054,Btech CSE,1st,9992069473,Vishugautam2324@gmail.com,To know more about cyber security and learn more new and interested things,yes,yes
11/9/2025 14:07:06,Nikhil ,A50105223170,B.Tech[CSE},5th,7027914556,nikhilyadav123501@gmail.com,Learn Something different ,yes,yes
11/9/2025 14:56:15,TANNU YADAV,A50150025002,M.Sc (AP),1st,7015063027,raotannu6@gmail.com,For learning things related to cybersecurity to avoid any fraud in the future ,yes,yes
11/9/2025 20:06:44,Aryan Raina ,A51313322031,B.pharmacy,7th,9694169301,aryanraina956@gmail.com,Because I want to know ethical hacking ,yes,yes
11/9/2025 22:55:05,BOBBARI VINAY KUMAR ,A501163525002,Integrated B.Tech-M.Tech in Defence Technology ,1st,7780429205,bobbarivinay96@gmail.com,For knowledge ,yes,yes
11/9/2025 22:58:18,Tanuj Choudhary ,A501132525138,B.Tech AIML,1st,8209897794,rahul1289choudhary@gmail.com,For knowledge ,yes,yes
11/10/2025 7:20:37,Shivansh Mishra ,A50105225093 ,Btech cse ,1st,9785882814,baldevmishra@gmail.com,Experience and knowledge ,yes,yes
11/10/2025 9:38:43,Aman sharma,A501132525117,Btech (ALML),1st,8368430431,aman16pro@gmail.com,Interested in cyber security ,yes,yes
11/10/2025 9:38:47,Prince kumar ,A501132524098,AIML,3rd,9667022818,princeshrivastav966@gmail.com,Apne bola tha,yes,yes
11/10/2025 9:39:52,Ishant Gupta ,A501132525105,Btech AI ML ,1st,6294488406,guptaishant09@gmail.com,To learn a new thing ,yes,yes
11/10/2025 10:23:00,Mohit ,A50105223132,BTech ,5th,8059310894,sutharmohit528@gmail.com,Cause I want to hack my ex insta id,yes,yes
11/10/2025 10:25:18,Sushant Chawla,A501132525099,Btech(AI&ML),1st,8000300081,sushantchawla2105@gmail.com,Because it is a good opportunity to work on my skills.,yes,yes
11/10/2025 11:00:12,Jai rathore ,A501132525009,Ai ml,1st,9992911089,jairathore608@gmail.com,To learn ,yes,yes
11/10/2025 11:45:15,Parvinder ,A505150825054,Bca,1st,8396815012,igpreet869@gmail.com,Wanna be a hacker ,yes,yes
11/10/2025 11:47:16,Navneet,A505150825009,BCA,1st,8222996969,themexxhere@gmail.com,Interested in cyber security ,yes,yes
11/10/2025 13:04:25,Devesh sinha,A50105225039,Btech CSE,1st,9810294081,sinhadev454@gmail.com,Practical experience ,yes,yes
11/10/2025 13:04:36,Arush Gupta ,A50105225042 ,Btech cse A,1st,93046 42301 ,Arushgupta425287@gmail.com,Learn about cybersecurity ,yes,yes
11/10/2025 14:58:21,Navdeep Singh,A50105225015,BTech CSE,1st,7082317728,navdeepsinghjosan11@gmail.com,Ethical Hacking,yes,yes
11/10/2025 15:34:38,Hunny,A505150825031,Bca,1st,8368378164,hunnylamba.2007@gmail.com,Personal interest ,yes,yes
11/10/2025 15:49:34,Nishant ,A501132525108,Btech AIML ,1st,7988012681,nishantchoudhary1628@gmail.com,I am interested in cyber security ,yes,yes
11/10/2025 16:40:19,Vanshika rajput,A50105225022 ,Btech CSE,1st,9068033042,vanshikarajput0401@gmail.com,Ethical hacking,yes,yes
11/10/2025 16:42:05,Vanshika rajput,A50105225022 ,Btech CSE,1st,9068033042,vanshikarajput0401@gmail.com,Ethical hacking,yes,yes
11/10/2025 20:02:43,Hemant Kumar ,A50105225055,Btech cse ,1st,9251036223,hemantrathi7240@gmail.com,To do new something ,yes,yes
11/10/2025 20:58:54,Agalya,A501132524026,Btech AI&ML,3rd,9511566753,agalyab2006@gmail.com,To upgrade my skills,yes,yes
11/10/2025 21:03:14,Utkarsh Mishra,A501132524043,B.Tech(AI&ML),3rd,8809414996,utkarshmishra10101@gmail.com,CURIOSITY,yes,yes
11/10/2025 21:18:36,Aman,A501132525117,Btech AIML,1st,8368430431,aman16pro@gmail.com,Idk,yes,yes
11/10/2025 21:28:42,Siddhi Mahawar,A50105224047,B.Tech (CSE),3rd,9302080727,mansimahawar15@gmail.com,To learn something new,yes,yes
11/10/2025 21:31:37,Piyush Munjal ,A505112425005,B.Tech +M.Tech(NCS),1st,91 9315191389 ,pshmnjl@gmail.com,As a my course is dedicated to Cyber Security it will be very much helpful,yes,yes
11/10/2025 23:00:11,Riya Seth,A518151025034,BA eng hons,1st,9891119448,riyaseth390@gmail.com,To learn and experience,yes,yes
11/10/2025 23:11:08,Adithyan,A51339925014,BME,1st,6268944887,Adithyan3110@gmail.com,Because my friends suggested ,yes,yes
11/11/2025 3:28:50,Sahil,A51313325041,B.pharma,1st,8571947143,sahiljakhar6300@gmail.com,I am interested in technology ,yes,yes
11/11/2025 3:29:15,Rakshit sheoran,A51313325044,B pharmacy ,1st,9785842972,rakshitsheoran32@gmail.com,Interested to know how to be more secure,yes,yes
11/11/2025 9:37:34,Yash Chopra ,A50105223179,B. Tech CSE,5th,9773662383,yashhchopraa26@gmail.com,Hacking,yes,yes
11/11/2025 9:38:24,Mohit sharma,A50105224046 ,Btech cse,3rd,7056545637,mohit545433q@gmail.com,I have an intrest in hacking ,yes,yes
11/11/2025 11:31:14,Mudit ,A50105224060,Btech Cse ,3rd,9813499727,mtaneja.794@gmail.com,To gain new skills,yes,yes
11/11/2025 13:21:40,Dhruv Deshwal,A50105224037,BTech CSE,3rd,6308988900,dhruvdeshwal04@gmail.com,It is really interesting ,yes,yes
11/11/2025 13:30:32,Antriksh Jain,A50105224063,Btech Cse,3rd,9817123367,antrikshj3@gmail.com,to gain new skills and experience ,yes,yes
11/11/2025 13:51:48,Yash jain,A50105224160 ,Btech cse ,3rd,6264591969,yashdeepjain860@gmail.com,To enhancement skills ,yes,yes
11/11/2025 10:20:13,Dikshanya Varsha,A50105224012,Btech cse,3rd,9363945120,dikshanyavarsha@gmail.com,hacking,yes,
11/11/2025 10:20:13,Harsh singh rajawat,A505145025032,MCA,1st,9817676186,Harshrajawat981@gmail.com,hacking,`;

// Convert CSV rows to certificate data
function csvToCertificates(): CertificateData[] {
  // We will reuse the project's simple parser by converting our CSV into the expected columns
  // Create a minimal CSV with headers expected by parseCSV: id,team_name,name,email_id,enrollment
  const rows = parseCSV(
    // Build a small CSV where id is the index and team_name is left blank
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
    certificateId: `${cyberSecurityConfig.certificatePrefix}-${row.id.padStart(3, '0')}`,
    eventId: cyberSecurityConfig.eventId,
    eventName: cyberSecurityConfig.eventName,
    teamName: row.team_name,
    name: row.name,
    email: row.email_id,
    enrollment: row.enrollment,
    eventDate: cyberSecurityConfig.eventDate,
    issueDate: cyberSecurityConfig.issueDate,
    category: 'Participant',
  }));
}

export const cyberSecurityCertificates: CertificateData[] = csvToCertificates();
