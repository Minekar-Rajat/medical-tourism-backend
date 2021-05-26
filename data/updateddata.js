 
 const fs = require('fs');
 const mongoose = require('mongoose')
 const dotenv = require('dotenv');
 const Treatment = require('./../models/treatmentModel')
 // const data = require('./updateddata');
 

 const data  =[






    {
        "location": "Toledo",
        "photo": "https://firebasestorage.googleapis.com/v0/b/medical-tourism-2367d.appspot.com/o/hospital%2Fimg1.png?alt=media&token=5d6cb802-6b27-432c-a7b1-62081b60f91e",
        "treatment": [
           
            "60a7bb3d0313193f98099777",
        "60a7bb3d0313193f9809973e",
        "60a7bb3d0313193f980997a2",
        "60a7bb3d0313193f980996b0",
        "60a7bb3d0313193f98099772",
        "60a7bb3d0313193f9809967f",
        "60a7bb3d0313193f98099688",
        "60a7bb3d0313193f9809976d",
        "60a7bb3d0313193f9809976f",
        "60a7bb3d0313193f9809976b" 
        ],
        "about": "100 Pasos is an official sanitary establishment specialized in the foot. We have what is necessary so that citizens of Toledo and its surroundings can enjoy the best and most accessible treatments.  ‍  We are expert podiatrists in sports medicine; accepting the challenges that this supposes so much for the professionals as for the athlete who is accompanied until his sport improvement. And the attention to the growth of the smallest of the house (pediatrics) is also our other strong point.",
        "country_name": "Spain",
        "name": "100Pasos"
    },
    {
        "name": "2nd Medical Consultancy",
        "about": "We set off with the idea that we can achieve the most we can earn by solving the problems of our friends. If a solution is known for the problems, we are aware that nobody should be indifferent. Finding short-term solutions to the problems is not enough. It is necessary to look with different, special perspectives.  ‍  It runs to your aid as a new perspective at the point where the sharpest intelligence is insufficient. We believe that the scope of our consultancy services is not only making suggestions but also implementing these suggestions. Each solution proposal requires a change and change is a process to be managed.",
        "country_name": "Turkey",
        "treatment": [
            "60a7bb3d0313193f9809976c",
        "60a7bb3d0313193f98099672",
        "60a7bb3d0313193f980997a6",
        "60a7bb3d0313193f980996af",
        "60a7bb3d0313193f980996b1",
        "60a7bb3d0313193f98099731",
        "60a7bb3d0313193f98099720",
        "60a7bb3d0313193f980996be",
        "60a7bb3d0313193f980996df",
        "60a7bb3d0313193f980996e3",
        "60a7bb3d0313193f98099698",
        "60a7bb3d0313193f98099729",
        "60a7bb3d0313193f98099728",
        "60a7bb3d0313193f9809972b",
        "60a7bb3d0313193f980996c7",
        "60a7bb3d0313193f98099738",
        "60a7bb3d0313193f98099764",
        "60a7bb3d0313193f98099726",
        "60a7bb3d0313193f98099696",
        "60a7bb3d0313193f98099751",
        "60a7bb3d0313193f980996b4",
        "60a7bb3d0313193f980996d8"
        ],
        "photo": "https://firebasestorage.googleapis.com/v0/b/medical-tourism-2367d.appspot.com/o/hospital%2F2.png?alt=media&token=0741bc2a-1cc0-43c0-af37-0ad8606db568",
        "location": "Istanbul"
    },
    {
        "photo": "https://firebasestorage.googleapis.com/v0/b/medical-tourism-2367d.appspot.com/o/hospital%2F5e4af5a7a05f842a57042748_32Smiles%20Logo.png?alt=media&token=bab4cbbe-90fe-4dde-a440-1d46a383f765",
        "about": "We take pleasure in introducing ourselves as one of the leading, professionally managed, complete dental care Hospital, one of its kind in Pune. Launched in 2003, just as an orthodontic specialty clinic, today 32 Smiles has evolved as a complete dental care center, offering varied services in different fields of dentistry, to the residents of Pune.",
        "treatment": [
           
            "60a7bb3d0313193f980996af",
            "60a7bb3d0313193f980997a1",
            "60a7bb3d0313193f980996a4",
            "60a7bb3d0313193f980996e4",
            "60a7bb3d0313193f98099754",
            "60a7bb3d0313193f98099707",
            "60a7bb3d0313193f9809978a",
            "60a7bb3d0313193f980996d6",
            "60a7bb3d0313193f980996db",
            "60a7bb3d0313193f980996d9",
            "60a7bb3d0313193f980996cb",
            "60a7bb3d0313193f9809975b",
            "60a7bb3d0313193f980996cd",
            "60a7bb3d0313193f98099758",
            "60a7bb3d0313193f98099739",
            "60a7bb3d0313193f980996a5",
            "60a7bb3d0313193f980996ae"
        ],
        "country_name": "India",
        "name": "32 Smiles Dental Clinic",
        "location": "Maharashtra,"
    },
    {
        "about": "4 Health Travel  offers  complete healthcare treatments - providing a bridge to the patient from a familiar country and destination country. Our commitment is to offer a qualified service at a reasonable price. We take care of every step of your journey to Poland making it as smooth as possible. We have connections with various national accredited healthcare facilities to provide quality service to our medical traveller.",
        "treatment": [
            "60a7bb3d0313193f980996ae",
            "60a7bb3d0313193f9809975b",
            "60a7bb3d0313193f98099780",
            "60a89a299d650e2814d25230",
            "60a7bb3d0313193f98099745",
            "60a7bb3d0313193f9809972e",
            "60a7bb3d0313193f98099719",
            "60a7bb3d0313193f980996d7",
            "60a7bb3d0313193f98099718",
            "60a7bb3d0313193f98099790",
            "60a7bb3d0313193f98099706",
            "60a7bb3d0313193f980996d4",
            "60a7bb3d0313193f980996d5",
            "60a7bb3d0313193f980996a5",
            "60a7bb3d0313193f98099707",
            "60a7bb3d0313193f98099754",
            "60a7bb3d0313193f980996af"
        ],
        "name": "4HealthTravel",
        "photo": "https://firebasestorage.googleapis.com/v0/b/medical-tourism-2367d.appspot.com/o/hospital%2F4.png?alt=media&token=675d18e3-f52c-473e-a391-1fbe6425edef",
        "country_name": "Poland",
        "location": "Krakow"
    },
    {
        "treat": [
            "60a7bb3d0313193f98099665",
            "60a7bb3d0313193f980996f1",
            "60a7bb3d0313193f98099760",
            "60a7bb3d0313193f98099768"
        ],
        "country_name": "South Korea",
        "about": "97.7 B&H Clinic has discovered the world’s first pluripotent stem cells without side effects through collaboration with STRI. Our goal is to realize a healthy life for the mankind and improve the quality of life by conquering incurable diseases.  ‍  97.7 B & H Clinic and STC Stem Cell Institute are becoming new leaders of biotechnology industry that give hopes to many people suffering from incurable diseases around the world with continuous treatment for various intractable diseases.  ‍",
        "location": "Seoul",
        "name": "97.7 B&H Hospital",
        "photo": "https://firebasestorage.googleapis.com/v0/b/medical-tourism-2367d.appspot.com/o/hospital%2F9.7.jpg?alt=media&token=b1db26df-f988-48e6-b843-66dbb1417baa"
    },
    {
        "location": "Madrid",
        "name": "ABA Oftalmologia – Dra. A. BAEZA",
        "photo": "https://firebasestorage.googleapis.com/v0/b/medical-tourism-2367d.appspot.com/o/hospital%2Faba.jpg?alt=media&token=18341d59-2dfa-4f00-a214-29fcbc97f9d5",
        "about": "The main activity of the company Aba Ophthalmology Cb is Other health services without internship not classified in this group. Aba Oftalmologia Cb currently has its registered office established in Madrid.  ‍  According to the CNAE tree, it is found within 8622 Specialized medicine activities.  ‍  ‍",
        "country_name": "Spain",
        "treatment": [
            "60a7bb3d0313193f9809972e",
            "60a7bb3d0313193f9809972e",
            "60a7bb3d0313193f98099719",
            "60a7bb3d0313193f980996d7",
            "60a7bb3d0313193f98099718",
            "60a7bb3d0313193f98099790",
            "60a7bb3d0313193f98099706",
            "60a7bb3d0313193f980996d4",
            "60a7bb3d0313193f980996d5",
        ]
    },
    {
        "country_name": "Turkey",
        "treatment": [
            "60a7bb3d0313193f98099759",
            "60a89c923c1f130a28d3a392",
            "60a7bb3d0313193f9809967c",
            "60a7bb3d0313193f98099709",
            "60a7bb3d0313193f980996ae",
            "60a7bb3d0313193f980996ea",
            "60a7bb3d0313193f980996af",
            "60a7bb3d0313193f98099681",
            "60a7bb3d0313193f980996e0",
            "60a7bb3d0313193f98099718",
            "60a7bb3d0313193f9809973c",
            "60a7bb3d0313193f98099719",
            "60a7bb3d0313193f980996d7",
            "60a7bb3d0313193f98099712",
            "60a7bb3d0313193f9809966a",
            "60a7bb3d0313193f9809973a",
            "60a7bb3d0313193f980996c8",
            "60a7bb3d0313193f9809965d",
            "60a7bb3d0313193f9809965c",
            "60a7bb3d0313193f9809978f",
            "60a7bb3d0313193f980996ef",
            "60a7bb3d0313193f9809968b",
            "60a7bb3d0313193f98099751",
            "60a7bb3d0313193f9809975c",
            "60a7bb3d0313193f98099780",
            "60a7bb3d0313193f980996fa",
            "60a7bb3d0313193f98099711",
            "60a7bb3d0313193f980996b1",
            "60a7bb3d0313193f9809965b"
        ],
        "about": "Healthpartnerturkey is a company that provides health tourism services for guests who want to get health care anywhere in the world in Turkey.  Our company provides services to Medical Tourism - Thermal Tourism - Advanced Age Tourism subjects to our guests who will come to our country from abroad. We have offered our agency to your service by relying on our experience in tourism sector for forty years. Our primary mission is to be able to apply the health tourism which is felt in our country in the widest possible way with the guest-oriented service approach.  ‍",
        "photo": "https://firebasestorage.googleapis.com/v0/b/medical-tourism-2367d.appspot.com/o/hospital%2Fadk.png?alt=media&token=a098f2c0-6775-4d3a-8e99-3a28e80bf60a",
        "name": "ADK Health Partner Turkey",
        "location": "Denizli"
    },
    {
        "about": "Medical Center ADONIS FAMILY was created in May 2012 in order to offer the most available and qualitative specialized medical care in the field of human reproduction. Medical Center ADONIS FAMILY is a part of Medical Group of Companies ADONIS which has been working in Kyiv since 1997 and is known for its excellent reputation.  ‍  We are a multi-profiled Medical Group of Companies, have our own Fertility Centers, Maternity Hospital, Pediatrician Clinic, MRI center, Cytogenetic Lab and decisive advantages in comparison with other private clinics throughout Ukraine",
        "location": "Kyiv",
        "treatment": [
            "60a7bb3d0313193f9809967e",
            "60a7bb3d0313193f98099759",
            "60a7bb3d0313193f9809970e",
            "60a7bb3d0313193f980996da",
            "60a7bb3d0313193f980996d0",
            "60a7bb3d0313193f980996cf",
            "60a7bb3d0313193f980996d4",
            "60a7bb3d0313193f980996af",
            "60a7bb3d0313193f98099791",
            "60a7bb3d0313193f98099747",
            "60a7bb3d0313193f9809978b",
            "60a7bb3d0313193f98099703",
            "60a7bb3d0313193f980996e3",
            "60a7bb3d0313193f98099719",
            "60a7bb3d0313193f980996d7",
            "60a7bb3d0313193f980996b9",
            "60a7bb3d0313193f98099673",
            "60a7bb3d0313193f98099780"
        ],
        "country_name": "Ukraine",
        "photo": "https://firebasestorage.googleapis.com/v0/b/medical-tourism-2367d.appspot.com/o/hospital%2F5e4c58fe7e1aef40d2349364_ADONIS-logo-p-500.png?alt=media&token=abd12edc-36c6-418a-a982-99746cfd9b88",
        "name": "ADONIS Medical Group of Companies"
    },
    {
        "location": "Warszawa",
        "name": "Carolina Medical Center",
        "treatment": [
            "60a7bb3d0313193f9809967e",
            "60a7bb3d0313193f98099759",
            "60a7bb3d0313193f9809970e",
            "60a7bb3d0313193f980996da",
            "60a7bb3d0313193f980996d0",
            "60a7bb3d0313193f980996cf",
            "60a7bb3d0313193f980996d4",
            "60a7bb3d0313193f980996af",
            "60a7bb3d0313193f98099791",
           
            "60a7bb3d0313193f980996b9",
            "60a7bb3d0313193f98099673",
            "60a7bb3d0313193f98099780"
        ],
        "country_name": "Poland",
        "photo": "https://firebasestorage.googleapis.com/v0/b/medical-tourism-2367d.appspot.com/o/hospital%2FAmato.jpeg?alt=media&token=c1618277-4a6f-4bb5-9ace-6721f75d66d8",
        "about": "Patient transport to and from hospitals, doctors appointments, and rehabilitation clinics. Full transportation service for outpatient needs as well as in-patient transportation in Bavaria, Germany and nearby foreign countries.  We offer experienced and qualified non-emergency medical transportation. One of our specialized attendants will provide sophisticated and seamless transportation to your destination, all in a luxurious setting."
    },
    {
        "photo": "https://firebasestorage.googleapis.com/v0/b/medical-tourism-2367d.appspot.com/o/hospital%2FAmasa.jpeg?alt=media&token=c95017f3-41aa-4c89-ac31-ff7c6681ba5a",
        "location": "Dubai",
        "about": "AMSA Renal Care is a specialized center with a strong focus on Hemodialysis, it also aims to cover all areas of Nephrology in the near future. We aspire to build many such centers across Dubai and also in many other countries.  ‍  We will be bringing Hemodialysis, Peritoneal Dialysis and Vascular Surgery one step closer to serve all patients. Our experienced core team of Nephrologists, Technicians and Nurses have been doing dialysis in DUBAI and also in beautiful and exotic locations like SEYCHELLES, MAURITIUS, SRILANKA, TURKEY, EGYPT & ICELAND.",
        "name": "AMSA Renal Care",
        "country_name": "United Arab Emirates",
        "treatment": [
            "60a7bb3d0313193f980996e6",
            "60a7bb3d0313193f98099753",
            "60a7bb3d0313193f9809978d"
        ]
    },
    {
        "about": "Thanks to our patients, we celebrate 35 years in the practice of dentistry.  ‍  Our strategy is to always combine professionalism, experience and technology to offer the right solution that best suits you and your budget.In addition, you will enjoy a space studied in detail.  ‍  Modern, sophisticated and designed to make your experience in our clinic unique and unforgettable.",
        "name": "ARTE·SANO Dental Clinic",
        "photo": "https://firebasestorage.googleapis.com/v0/b/medical-tourism-2367d.appspot.com/o/hospital%2F5e5f9e6fb89945094be202ff_Arte%20Sano%20Logo.png?alt=media&token=55ddc91d-6ab7-4b22-acb6-17e6abc30585",
        "treatment": [
            "60a7bb3d0313193f980996af",
            "60a7bb3d0313193f98099747",
            "60a7bb3d0313193f9809978a",
            "60a7bb3d0313193f98099707",
            "60a89a299d650e2814d25230"
        ],
        "country_name": "Spain",
        "location": "Valencia"
    },
    {
        "photo": "https://firebasestorage.googleapis.com/v0/b/medical-tourism-2367d.appspot.com/o/hospital%2FASG.png?alt=media&token=badb4003-a62e-45b6-a926-fdd1f561cd98",
        "country_name": "India",
        "treatment": [
            "60a7bb3d0313193f980996e8",
            "60a7bb3d0313193f980996e9",
            "60a7bb3d0313193f980996ea",
            "60a7bb3d0313193f98099673",
            "60a7bb3d0313193f980996d3",
            "60a7bb3d0313193f98099759",
            "60a7bb3d0313193f98099794",
            "60a7bb3d0313193f9809970c"
        ],
        "about": "ASG Hair Transplant Clinic is Famous Hair Transplant Clinic in Jalandhar. We provide best solutions in baldness on scalp, moustache, eyebrows or eyelashes.  ‍  The problem of male and female pattern baldness is usually embarrassing and frustrating. Resolve these issues permanently with hair transplant techniques only from ASG hair transplant centre. The surgery provided at our centre is completely painless and you can get results according to your desires.",
        "name": "ASG Hair Transplant Centre",
        "location": "Punjab,"
    },
    {
        "photo": "https://firebasestorage.googleapis.com/v0/b/medical-tourism-2367d.appspot.com/o/hospital%2FASHVIN.jpeg?alt=media&token=2475f87a-03db-4aa3-9ebc-c9b91e9326bf",
        "location": "Tamilnadu",
        "name": "ASHVIN Clinics",
        "treatment": [
            "60a7bb3d0313193f980996b6",
            "60a7bb3d0313193f98099780",
            "60a7bb3d0313193f980996c5",
            "60a8a939497c5432508ac7be",
            "60a7bb3d0313193f98099719",
            "60a7bb3d0313193f9809977b",
            "60a7bb3d0313193f98099704",
        ],
        "about": "This is a comprehensive urology website, launched by Dr. K. Ramesh, senior consultant urologist and Robotic Surgeon at Apollo Hospitals.  Dr. K. Ramesh is one of the few urologists in India who has had formal training in Robotic Surgery at Roswell Park Cancer Institute, Buffalo, United States. His aim in starting this website is to provide a simple, informative and interactive, patient oriented urology website so that patients take an active part in decision making regarding their condition and consequent treatment.",
        "country_name": "India"
    },
    {
        "location": "Maharashtra",
        "about": "The ATPI Group delivers world-leading corporate travel and events solutions to organisations operating in a variety of speciatreatment sectors around the world.  ‍  The aim that unites every brand, sector, service and strategy is to deliver what really matters to every single one of our customers.  ‍",
        "name": "ATPI India Pvt Limited",
        "treatment": [
            "60a7bb3d0313193f980996b6",
            "60a7bb3d0313193f98099780",
            "60a7bb3d0313193f980996c5",
            "60a8a939497c5432508ac7be",
            "60a7bb3d0313193f98099719",
            "60a7bb3d0313193f9809977b",
            "60a7bb3d0313193f98099704",
        ],
        "photo": "https://firebasestorage.googleapis.com/v0/b/medical-tourism-2367d.appspot.com/o/hospital%2Fprov.png?alt=media&token=0dc29c6e-06dd-47e4-a606-aac8e39aa9b1",
        "country_name": "India"
    },
    {
        "photo": "https://firebasestorage.googleapis.com/v0/b/medical-tourism-2367d.appspot.com/o/hospital%2FYathart.jpeg?alt=media&token=8216ca52-e724-4017-8cf4-ebab124353f7",
        "name": "Aa Yatharth Wellness Super Specialty Hospital",
        "treatment": [
            "60a7bb3d0313193f9809968b",
        "60a89a299d650e2814d25230",
        "60a7bb3d0313193f98099728",
        "60a7bb3d0313193f98099780",
        "60a7bb3d0313193f980996df",
        "60a7bb3d0313193f98099745",
        "60a7bb3d0313193f98099755",
        "60a7bb3d0313193f9809975c",
        "60a7bb3d0313193f98099731",
        "60a7bb3d0313193f980996b1",
        "60a7bb3d0313193f980996af",
        "60a7bb3d0313193f9809972e",
        "60a7bb3d0313193f98099744",
        "60a7bb3d0313193f98099751",
        "60a7bb3d0313193f980996be",
        "60a7bb3d0313193f98099729",
        "60a7bb3d0313193f98099693",
        "60a7bb3d0313193f980996f9",
        "60a7bb3d0313193f98099724"
        ],
        "about": "Yatharth Super Speciality Hospitals are the most trusted healthcare providers in the region with 1200 beds across 3 hospitals. With three super speciality hospitals of 300 bed, 400 bed, and 500 bed established in Noida, Greater Noida & Greater Noida West respectively, we have the world class infrastructure and advanced technology to deliver hotreatmentic care to patients.  ‍  With the belief that healthcare requires utmost care and responsibility, Yatharth Super Speciality Hospitals have brought together a team of medical speciatreatments -doctors and para medical staff, who represent and uphold the Group’s philosophy of transparency, dedication and honesty",
        "country_name": "India",
        "location": "Delhi"
    },
    {
        "location": "Chiasso,",
        "treatment": [
            "60a7bb3d0313193f9809979d",
            "60a7bb3d0313193f980996e8",
            "60a7bb3d0313193f980996fc",
            "60a7bb3d0313193f9809974b",
            "60a7bb3d0313193f98099674",
            "60a7bb3d0313193f9809969f",
            "60a7bb3d0313193f980996bb",
            "60a7bb3d0313193f980996d2",
            "60a7bb3d0313193f980996fb",
            "60a7bb3d0313193f9809971e",
            "60a7bb3d0313193f9809972a",
            "60a7bb3d0313193f9809972d",
            "60a7bb3d0313193f98099659",
            "60a7bb3d0313193f9809965a",
            "60a8aa6527cef3054c53b1d7",
            "60a7bb3d0313193f98099675",
            "60a7bb3d0313193f98099682",
            "60a7bb3d0313193f98099686",
            "60a7bb3d0313193f980996bc",
            "60a7bb3d0313193f980996bd",
            "60a7bb3d0313193f980996d4",
            "60a7bb3d0313193f9809970c",
            "60a7bb3d0313193f98099716",
            "60a7bb3d0313193f9809971c",
        ],
        "photo": "https://firebasestorage.googleapis.com/v0/b/medical-tourism-2367d.appspot.com/o/hospital%2F5e4b16e9c27325ffdfdfe36c_logo_academia_day_clinic.jpg?alt=media&token=8752a7ac-eb73-4642-a5cf-321da982bbd2",
        "country_name": "Swaziland",
        "name": "Academia Day Clinic S.A.",
        "about": "Academia Day Clinic is the perfect place to dedicate yourself to your beauty needs while being able to put your trust in expert hands with the certainty that nothing will be left to chance. Academia Day Clinic is an outpatient clinic with cutting-edge technical support, where highly qualified speciatreatments are well-equipped to provide innovational medical and surgical benefits.  ‍  Designed to meet the needs of patients and physicians, Academia Day Clinic caters to an international audience, offering an environment that is elegant and intimate, as well as the guarantee of renowned Swiss quality."
    },
    {
        "treatment": [
            "60a7bb3d0313193f98099681",
            "60a7bb3d0313193f98099683",
            "60a7bb3d0313193f98099686",
            "60a7bb3d0313193f980996ac",
            "60a7bb3d0313193f980996b3"
        ],
        "country_name": "India",
        "name": "Addiction treatment",
        "about": "Our Super Speciality Hospitals are the most trusted healthcare providers in the region with 1200 beds across 3 hospitals. With three super speciality hospitals of 300 bed, 400 bed, and 500 bed established in Noida, Greater Noida & Greater Noida West respectively, we have the world class infrastructure and advanced technology to deliver hotreatmentic care to patients.  ‍  With the belief that healthcare requires utmost care and responsibility, Our Super Speciality Hospitals have brought together a team of medical speciatreatments -doctors and para medical staff, who represent and uphold the Group’s philosophy of transparency, dedication and honesty",
        "location": "Delhi",
        "photo": "https://firebasestorage.googleapis.com/v0/b/medical-tourism-2367d.appspot.com/o/hospital%2Fprov.png?alt=media&token=0dc29c6e-06dd-47e4-a606-aac8e39aa9b1"
    },
    {
        "photo": "https://firebasestorage.googleapis.com/v0/b/medical-tourism-2367d.appspot.com/o/hospital%2F5e4c65f08419e572bccbac00_Andance_hair_logo.jpg?alt=media&token=7a442e50-dd32-41d5-b6f0-3d2f75ae048c",
        "name": "Advanced Hair Clinics",
        "treatment": [
            "60a7bb3d0313193f980996ea",
            "60a7bb3d0313193f980996e9"
        ],
        "about": "Advanced Hair Clinics was founded in 2011 by Dr. Anastasios Vekris, Plastic Surgeon, with great experience in hair restoration surgery.  ‍  Awarded twice as the Best International Hair Clinic for 2016 and 2017 by the International Medical Travel Journal, Advanced Hair Clinics is now a pioneer in FUE Hair Transplant.  ‍  With 10 clinics in Greece & Cyprus, we offer solutions in every hair loss problem, either with conservative treatments or with surgical treatments, depending on your needs.  ‍",
        "country_name": "Greece",
        "location": "Athens,"
    },
    {
        "treatment": [
            "60a7bb3d0313193f9809972e",
        "60a7bb3d0313193f980996d8",
        "60a7bb3d0313193f980996b3",
        "60a7bb3d0313193f9809969a",
        "60a7bb3d0313193f980996b1",
        "60a7bb3d0313193f98099760",
        "60a7bb3d0313193f98099745",
        "60a7bb3d0313193f9809973f",
        "60a7bb3d0313193f980996cf",
        "60a7bb3d0313193f98099739"
        ],
        "about": "Advanced Medical Group is a dynamic group of Family Doctors, Speciatreatments and Surgeons who pursue the practice of the balance of Body, Mind and Spirit of the entire person. This enables our patients to fulfill their life purpose by living a full and abundant life without the interference of disease.  ‍  AMG is a state of the art medical clinic with family physicians, speciatreatments, and 6 fitness studios. The top 2 floors offer over 120 Senior Living suites.",
        "location": "Ontario",
        "name": "Advanced Surgical Operatory",
        "photo": "https://firebasestorage.googleapis.com/v0/b/medical-tourism-2367d.appspot.com/o/hospital%2F5e4c6c35eaf2d993fcc20d35_Advanced%20Surgical%20Operatory%20Logo.jpeg?alt=media&token=4667c4e8-ce8e-48f2-afa7-e59839643b0f",
        "country_name": "Canada"
    },
    {
        "about": "Advancells is a research-oriented company focused on therapeutic applications of Regenerative Medicine. One of the pioneer's Stem Cell Company in India, we are passionate about the almost limitless potential of Human Stem Cells in providing a natural cure for any ailment that our body suffers from. With this belief, we strive to deliver technologies for safe and effective treatment options to patients all over the world at the highest medical standards. We work closely with some of the best medical practitioners at world-class medical centers across the globe in providing these therapeutic solutions to our patients.  ‍",
        "name": "Advancells",
        "treatment": [
            "60a7bb3d0313193f98099799",
            "60a7bb3d0313193f98099769",
            "60a7bb3d0313193f9809973a",
            "60a7bb3d0313193f98099798",
            "60a7bb3d0313193f98099761",
            "60a7bb3d0313193f9809970f",
            "60a7bb3d0313193f980996b2",
            "60a7bb3d0313193f98099695",
            "60a7bb3d0313193f9809979f",
            "60a7bb3d0313193f980996f4",
            "60a7bb3d0313193f980996c9",
            "60a7bb3d0313193f98099689",
            "60a89a299d650e2814d25230",
            "60a7bb3d0313193f98099735",
            "60a7bb3d0313193f98099757",
            "60a7bb3d0313193f98099664",
            "60a7bb3d0313193f98099765",
            "60a7bb3d0313193f980996f6",
            "60a7bb3d0313193f98099760",
            "60a7bb3d0313193f98099665",
            "60a7bb3d0313193f980996e9",
            "60a7bb3d0313193f980996d8",
            "60a7bb3d0313193f980996af",
            "60a7bb3d0313193f98099719",
            "60a7bb3d0313193f980996d7"
        ],
        "country_name": "India",
        "location": "Uttar Pradesh",
        "photo": "https://firebasestorage.googleapis.com/v0/b/medical-tourism-2367d.appspot.com/o/hospital%2F5e4d967e3102e9714e991640_advancells_logo.png?alt=media&token=00fc6e1b-4b52-4fef-a5a4-d00c06e6f10d"
    },
    {
        "about": "CosmeDocs is a chain of renowned and established cosmetic clinics spread all across the UK. We have a team of professionally trained, qualified and experienced cosmetic doctors who provide latest surgical and non-surgical cosmetic treatments at affordable prices. Our clinics offer all the modern facilities and equipment that are necessary to operate an aesthetic clinic. We aim to enhance your natural appearance to boost your self-confidence.  Our Harley Street clinic is our foundation aesthetic clinic that has been operating since 2007 with tremendous success and appreciation from our clients.",
        "country_name": "United Kingdom",
        "location": "London",
        "treatment": [
            "60a7bb3d0313193f98099665",
            "60a7bb3d0313193f980996d3",
            "60a7bb3d0313193f98099673",
            "60a7bb3d0313193f98099760",
            "60a7bb3d0313193f980996a4",
            "60a7bb3d0313193f98099790"
        ],
        "name": "CosmeDocs Hospital",
        "photo": "https://firebasestorage.googleapis.com/v0/b/medical-tourism-2367d.appspot.com/o/hospital%2FAhemad.jpg?alt=media&token=ebfa03b6-cea8-4502-b145-cf7d3a738496"
    },
    {
        "location": "Bogota",
        "country_name": "Colombia",
        "name": "Alan González Cirugía Plástica y Tratamientos Estéticos",
        "about": "At Alan González IPS we have a multidisciplinary team of more than 70 people and an infrastructure of more than 800 m2 at the total service of our patients.  ‍  Our speciatreatment Alan González has performed more than 3500 surgical procedures where he has transformed the lives of national and international patients.  ‍  Throughout his career he has been characterized by providing the best experience to each of our patients, so we have a team dedicated to ensuring a safe, successful and enjoyable trip for those who visit us from other cities.",
        "treatment": [
            "60a7bb3d0313193f98099759",
        "60a7bb3d0313193f980996cf",
        "60a7bb3d0313193f9809970e",
        "60a7bb3d0313193f9809967e",
        "60a7bb3d0313193f9809965f",
        "60a89c923c1f130a28d3a392",
        "60a7bb3d0313193f98099674",
        "60a7bb3d0313193f98099680"
        ],
        "photo": "https://firebasestorage.googleapis.com/v0/b/medical-tourism-2367d.appspot.com/o/hospital%2FAlan.png?alt=media&token=c1ef417c-4b41-4f3a-8fd6-8d4b647840ac"
    },
    {
        "about": " we have a multidisciplinary team of more than 70 people and an infrastructure of more than 800 m2 at the total service of our patients.  ‍  Our speciatreatment Alan González has performed more than 3500 surgical procedures where he has transformed the lives of national and international patients.  ‍  Throughout his career he has been characterized by providing the best experience to each of our patients, so we have a team dedicated to ensuring a safe, successful and enjoyable trip for those who visit us from other cities. ",
        "photo": "https://firebasestorage.googleapis.com/v0/b/medical-tourism-2367d.appspot.com/o/hospital%2FAlba.jpg?alt=media&token=087c7d77-406a-40e8-93c2-fd20f716da3d",
        "treatment": [
            "60a7bb3d0313193f98099695",
            "60a7bb3d0313193f9809979f",
            "60a7bb3d0313193f980996f4",
            "60a7bb3d0313193f980996c9",
            "60a7bb3d0313193f98099689",
            "60a89a299d650e2814d25230",
            "60a7bb3d0313193f98099735",
            "60a7bb3d0313193f98099757",
            "60a7bb3d0313193f98099664",
            "60a7bb3d0313193f98099765",
            "60a7bb3d0313193f980996f6",
            "60a7bb3d0313193f98099760",
        ],
        "country_name": "Chile",
        "location": "Santiago",
        "name": "San Juan de Dios Hospital"
    },
    {
        "country_name": "India",
        "name": "Alis Dentistry",
        "photo": "https://firebasestorage.googleapis.com/v0/b/medical-tourism-2367d.appspot.com/o/hospital%2FAlis.png?alt=media&token=ced5e983-ca44-48a4-8d4a-2e3491bf10d5",
        "about": "We offer a wealth of dental care services including laser and implant dentistry. Led by Dr Sameena Ali who holds an MFDS, FICD (USA) and has several years of experience, the clinic provides premium dental care in a clean and hygienic environment.",
        "treatment": [
            "60a7bb3d0313193f9809975b",
            "60a7bb3d0313193f980996ae",
            "60a7bb3d0313193f98099705",
            "60a7bb3d0313193f980996af"
        ],
        "location": "Telengana"
    },
    {
        "treatment": [
            "60a7bb3d0313193f9809975c",
        "60a7bb3d0313193f98099729",
        "60a7bb3d0313193f980996f1",
        "60a7bb3d0313193f980996e3",
        "60a7bb3d0313193f98099698",
        "60a7bb3d0313193f9809967c",
        "60a7bb3d0313193f98099679",
        "60a7bb3d0313193f9809967d",
        "60a7bb3d0313193f980996cf",
        "60a7bb3d0313193f98099692",
        "60a7bb3d0313193f980996d1",
        "60a7bb3d0313193f9809970e",
        "60a7bb3d0313193f98099727",
        "60a7bb3d0313193f98099717",
        "60a7bb3d0313193f980996ee",
        "60a7bb3d0313193f98099671",
        "60a7bb3d0313193f98099694",
        "60a7bb3d0313193f98099655",
        "60a7bb3d0313193f9809971b",
        "60a7bb3d0313193f98099746",
        "60a7bb3d0313193f980996f8",
        "60a7bb3d0313193f980996e6",
        "60a7bb3d0313193f98099661",
        "60a7bb3d0313193f98099678",
        "60a7bb3d0313193f9809968f",
        "60a7bb3d0313193f98099712",
        "60a7bb3d0313193f98099732",
        "60a7bb3d0313193f98099733",
        "60a7bb3d0313193f9809968e",
        "60a7bb3d0313193f9809969e",
        "60a7bb3d0313193f9809973b",
        "60a7bb3d0313193f9809966b",
        "60a7bb3d0313193f98099668",
        "60a7bb3d0313193f9809976a",
        ],
        "photo": "https://firebasestorage.googleapis.com/v0/b/medical-tourism-2367d.appspot.com/o/hospital%2Falivia.png?alt=media&token=9435c71d-7aaf-4d76-90ff-4c721afbd657",
        "country_name": "Mexico",
        "name": "Alivia Clinica de Alta Especialidad",
        "about": "Alivia is the largest independent provider of specialized pharmacy and infusion services in the country.  We work with the entire healthcare ecosystem to connect patients with chronic and rare diseases with medications and information.  Our personal and highly tactile approach is backed by exceptional results in patient satisfaction, prescriber satisfaction, adherence rates and more.",
        "location": "Nuevo Leon"
    },
    {
        "name": "Almater Hospital SA de CV",
        "country_name": "Mexico",
        "location": "Mexicali",
        "about": "Mexico. Located just two hours from San Diego, California, in the vibrant border city of Mexicali, Mexico, Almater Hospital has been providing affordable, world-class healthcare to American, Canadian and local patients for more than 25 years.  ‍  Whether you need surgery or are seeking routine medical care, choosing a healthcare facility is a big decision. At Almater, we understand the importance of this decision and value the trust our international patients put in our skilled healthcare professionals. ",
        "treatment": [
            "60a7bb3d0313193f980996e0",
        "60a7bb3d0313193f980996de",
        "60a7bb3d0313193f98099793",
        "60a7bb3d0313193f980996a2",
        "60a7bb3d0313193f9809965f",
        "60a7bb3d0313193f9809979c",
        "60a7bb3d0313193f98099676",
        "60a7bb3d0313193f9809967a",
        "60a7bb3d0313193f9809967c",
        "60a7bb3d0313193f98099679",
        "60a7bb3d0313193f9809967d",
        "60a7bb3d0313193f980996cf",
        "60a7bb3d0313193f98099692",
        "60a7bb3d0313193f980996d1",
        "60a7bb3d0313193f9809970e",
        "60a7bb3d0313193f98099727",
        "60a7bb3d0313193f98099717",
        "60a7bb3d0313193f980996ee",
        "60a7bb3d0313193f98099671",
        "60a7bb3d0313193f98099694",
        "60a7bb3d0313193f98099655",
        "60a7bb3d0313193f9809971b",
        "60a7bb3d0313193f98099746",
        "60a7bb3d0313193f980996f8",
        "60a7bb3d0313193f980996e6",
        "60a7bb3d0313193f98099661",
        "60a7bb3d0313193f98099678",
        "60a7bb3d0313193f9809968f",
        "60a7bb3d0313193f98099712",
        "60a7bb3d0313193f98099732",
        "60a7bb3d0313193f98099733",
        "60a7bb3d0313193f9809968e",
        "60a7bb3d0313193f9809969e",
        "60a7bb3d0313193f9809973b",
        "60a7bb3d0313193f9809966b",
        "60a7bb3d0313193f98099668",
        "60a7bb3d0313193f9809976a",
        "60a7bb3d0313193f98099778",
        "60a7bb3d0313193f9809977a",
        "60a7bb3d0313193f9809969d",
        "60a7bb3d0313193f98099721",
        "60a7bb3d0313193f98099775",
        "60a7bb3d0313193f98099677",
        "60a7bb3d0313193f98099690",
        "60a7bb3d0313193f98099714",
        "60a7bb3d0313193f9809974d",
        "60a7bb3d0313193f9809974f",
        "60a7bb3d0313193f9809977e",
        "60a7bb3d0313193f98099697",
        "60a7bb3d0313193f980996a8",
        "60a7bb3d0313193f980996a9",
        "60a7bb3d0313193f980996ca",
        "60a7bb3d0313193f98099702",
        "60a7bb3d0313193f98099704",
        "60a7bb3d0313193f9809974e",
        "60a7bb3d0313193f98099784",
        "60a7bb3d0313193f98099788",
        "60a7bb3d0313193f98099663",
        "60a7bb3d0313193f9809968c",
        "60a7bb3d0313193f9809968a",
        "60a7bb3d0313193f98099786",
        "60a7bb3d0313193f98099780"
        ],
        "photo": "https://firebasestorage.googleapis.com/v0/b/medical-tourism-2367d.appspot.com/o/hospital%2FAlmaster.png?alt=media&token=1ab70bcf-3be0-447a-bd67-c9dea4a6f7e5"
    },
    {
        "about": "INDEXMEDICA Dental Clinic is the so called “one stopshop” where we have gathered all the necessary strength and equipment to deliver a complete dental treatment. The Dental laboratory department is in-house with the dentistry Treatment facilities. That gives our clinic a competitive edge and helps us not only deliver dental care at the highest standards but also doing it in a timely fashion and at the lowest costs possible.   Our clinic is prepared to address all the requests coming from abroad. This confidence is given by the working experience some of us have in United States of America and by the many satisfied patience living abroad that we have already treated",
        "country_name": "Poland",
        "location": "Kraków",
        "treatment": [
            "60a7bb3d0313193f980996af",
        "60a89a299d650e2814d25230",
        "60a7bb3d0313193f980996b1",
        "60a7bb3d0313193f980996be",
        "60a7bb3d0313193f9809968b",
        "60a7bb3d0313193f98099729",
        "60a7bb3d0313193f98099780",
        "60a7bb3d0313193f980996ae",
        "60a7bb3d0313193f98099730",
        "60a7bb3d0313193f9809976c"
        ],
        "name": "INDEXMEDICA Dental Clinic",
        "photo": "https://firebasestorage.googleapis.com/v0/b/medical-tourism-2367d.appspot.com/o/hospital%2FAlverna.jpeg?alt=media&token=2692e961-5874-47ee-9346-94be24101ace"
    },
    {
        "about": "At Cutis 'The Skin Clinic' we have a multidisciplinary team of more than 70 people and an infrastructure of more than 800 m2 at the total service of our patients.  ‍  Our specia treatment  has performed more than 3500 surgical procedures where he has transformed the lives of national and international patients.  ‍  Throughout his career he has been characterized by providing the best experience to each of our patients, so we have a team dedicated to ensuring a safe, successful and enjoyable trip for those who visit us from other cities.",
        "photo": "https://firebasestorage.googleapis.com/v0/b/medical-tourism-2367d.appspot.com/o/hospital%2Fprov.png?alt=media&token=0dc29c6e-06dd-47e4-a606-aac8e39aa9b1",
        "location": "Cairo Governorate",
        "name": "Cutis 'The Skin Clinic' ",
        "treatment": [
            "60a7bb3d0313193f980996b1",
            "60a7bb3d0313193f9809979f",
            "60a7bb3d0313193f980996d2",
            "60a7bb3d0313193f980997a3",
            "60a7bb3d0313193f980997a6"
        ],
        "country_name": "Egypt"
    },
    {
        "country_name": "Poland",
        "location": "Katowice",
        "treatment": [
            "60a7bb3d0313193f980996a1",
        "60a7bb3d0313193f9809973f",
        "60a7bb3d0313193f980997a3",
        "60a7bb3d0313193f98099736",
        "60a7bb3d0313193f980996f2",
        "60a7bb3d0313193f980996a2",
        "60a7bb3d0313193f9809975f",
        "60a7bb3d0313193f980996b7",
        "60a8b44baacc003ae0ab3c7b",
        "60a7bb3d0313193f98099654",
        ],
        "photo": "https://firebasestorage.googleapis.com/v0/b/medical-tourism-2367d.appspot.com/o/hospital%2FAmerican.jpg?alt=media&token=131caf4f-9b06-458d-9e44-56e64862585b",
        "about": "American Heart of Poland Group is the largest network of private hospitals in Europe regarding treatment of cardiovascular diseases. Annually 60,000 patients appeal to the Heart Hospitals.  ‍  Over 500 doctors work at clinics. A majority of them underwent study and practice in the medical centers of West Europe and the USA. Polish heart surgeons conduct operations with 99.7% success rate. It is one of the highest indexes in the world.  ‍",
        "name": "American Heart of Poland"
    },
    {
        "location": "Quintana Roo",
        "name": "Amerimed Cancún",
        "photo": "https://firebasestorage.googleapis.com/v0/b/medical-tourism-2367d.appspot.com/o/hospital%2FAmeriand.png?alt=media&token=19fc1e5d-2ea5-4060-bd49-9c5fc4a9f676",
        "treatment": [
            "60a7bb3d0313193f98099715",
        "60a7bb3d0313193f98099751",
        "60a7bb3d0313193f980996c4",
        "60a7bb3d0313193f980996fd",
        "60a7bb3d0313193f98099742"
        ],
        "about": "We offer a wide array of routine and emergency services. Our facilities include 24/7 physicians specialized and board-certified in emergency medicine. Our nurses offer outstanding care with competence and human warmth, supported by the most recent technology.  At Amerimed Cancun we provide care ranging from simple outpatient conditions to highly complex interventions. We are committed to continuous improvement through quality control tools and resources as we continually seek to offer world-class services and to maintain worldwide recognition as a medical services provider. ",
        "country_name": "Mexico"
    },
    {
        "location": "Cairo",
        "country_name": "Egypt",
        "name": "Andalusia Group For Healthcare",
        "photo": "https://firebasestorage.googleapis.com/v0/b/medical-tourism-2367d.appspot.com/o/hospital%2FAndalusia-for-Medical-Services.jpg?alt=media&token=4da931f5-f73d-4d30-acac-271a1b54b849",
        "treatment": [
            "60a7bb3d0313193f980996af",
            "60a7bb3d0313193f980996af",
            "60a89a299d650e2814d25230",
            "60a7bb3d0313193f980996b1",
            "60a7bb3d0313193f980996be",
            "60a7bb3d0313193f9809968b",
            "60a7bb3d0313193f98099729",
            "60a7bb3d0313193f98099780",
            "60a7bb3d0313193f980996ae",
            "60a7bb3d0313193f98099730",
            "60a7bb3d0313193f9809976c"
        ],
        "about": "Andalusia Group is a Holding Company specialized in Hospital management.  ‍  The group was founded in 1984, with a single Hospital in Jeddah, KSA, and grown over 30 years to own and manage several primary and secondary healthcare facilities spread geographically across both Saudi Arabia and Egypt, providing facilities ranging from general hospitals, dental centres, polyclinics and supporting services units.  ‍"
    },
   
































    {
        "location": "Maharashtra",
        "photo": "https://firebasestorage.googleapis.com/v0/b/medical-tourism-2367d.appspot.com/o/hospital%2Fprov.png?alt=media&token=0dc29c6e-06dd-47e4-a606-aac8e39aa9b1",
        "about": "We offer a wide array of routine and emergency services. Our facilities include 24/7 physicians specialized and board-certified in emergency medicine. Our nurses offer outstanding care with competence and human warmth, supported by the most recent technology.  At Amerimed Cancun we provide care ranging from simple outpatient conditions to highly complex interventions. We are committed to continuous improvement through quality control tools and resources as we continually seek to offer world-class services and to maintain worldwide recognition as a medical services provider. ",
        "treatments": [
            "60a7bb3d0313193f980996af",
        "60a7bb3d0313193f9809979d",
        "60a7bb3d0313193f980996ae"
        ],
        "country_name": "India",
        "name": "Clove Dental"
    },











    {
        "country_name": "Turkey",
        "photo": "https://firebasestorage.googleapis.com/v0/b/medical-tourism-2367d.appspot.com/o/hospital%2Fandromed.png?alt=media&token=1773895c-5516-4f1e-b766-3ad668e7e27a",
        "location": "Istanbul",
        "name": "Andromed Medikal A",
        "treatments": [
            "60a7bb3d0313193f98099739",
        "60a7bb3d0313193f9809973d",
        "60a7bb3d0313193f9809973f"
        ],
        "about": "Andromed was founded in Ankara by Hüseyin Lüleci. Our company office was between the years 1992-2003 Ankara, Istanbul and Izmir branches has served the market from three centers. In 2003, the head office in Istanbul carrying Andromed, particularly in urology and dermatology industry pioneer and market innovative device sales in Turkey with the mission, continues its activities in technical and medical support."
    },







    {
        "treatments": [
            "60a7bb3d0313193f98099730",
        "60a7bb3d0313193f98099735",
        "60a7bb3d0313193f98099732"
        ],
        "about": "We offer a wide array of routine and emergency services. Our facilities include 24/7 physicians specialized and board-certified in emergency medicine. Our nurses offer outstanding care with competence and human warmth, supported by the most recent technology.  At Amerimed Cancun we provide care ranging from simple outpatient conditions to highly complex interventions. We are committed to continuous improvement through quality control tools and resources as we continually seek to offer world-class services and to maintain worldwide recognition as a medical services provider.",
        "country_name": "Ukraine",
        "photo": "https://firebasestorage.googleapis.com/v0/b/medical-tourism-2367d.appspot.com/o/hospital%2Fprov.png?alt=media&token=0dc29c6e-06dd-47e4-a606-aac8e39aa9b1",
        "location": "Kyiv",
        "name": "Angelina Zherevchuk"
    },
    {
        "country_name": "Chile",
        "location": "San Miguel",
        "photo": "https://firebasestorage.googleapis.com/v0/b/medical-tourism-2367d.appspot.com/o/hospital%2Fansalud_logo.png?alt=media&token=f744ab57-2438-4bfc-8148-b2fda08f1510",
        "about": "We offer a wide array of routine and emergency services. Our facilities include 24/7 physicians specialized and board-certified in emergency medicine. Our nurses offer outstanding care with competence and human warmth, supported by the most recent technology.  At Amerimed Cancun we provide care ranging from simple outpatient conditions to highly complex interventions. We are committed to continuous improvement through quality control tools and resources as we continually seek to offer world-class services and to maintain worldwide recognition as a medical services provider.",
        "treatments": [ 
            "60a7bb3d0313193f980996b1",
            "60a7bb3d0313193f980996be",
            "60a7bb3d0313193f9809968b",
            "60a7bb3d0313193f98099729",
            "60a7bb3d0313193f98099780",
            "60a7bb3d0313193f980996ae",
            "60a7bb3d0313193f98099730",
            "60a7bb3d0313193f9809976c"
            
        ],
        "name": "Barros Luco Trudeau"
    },
    {
        "about": "We offer a wide array of routine and emergency services. Our facilities include 24/7 physicians specialized and board-certified in emergency medicine. Our nurses offer outstanding care with competence and human warmth, supported by the most recent technology.  At Amerimed Cancun we provide care ranging from simple outpatient conditions to highly complex interventions. We are committed to continuous improvement through quality control tools and resources as we continually seek to offer world-class services and to maintain worldwide recognition as a medical services provider.",
        "name": "Dr. Exequiel González Cortés Hospital",
        "country_name": "Chile",
        "treatments": [
            "60a7bb3d0313193f98099777",
        "60a7bb3d0313193f9809973e",
        "60a7bb3d0313193f980997a2",
        "60a7bb3d0313193f980996b0",
        "60a7bb3d0313193f98099772",
        "60a7bb3d0313193f9809967f",
        "60a7bb3d0313193f98099688",
        "60a7bb3d0313193f9809976d",
        "60a7bb3d0313193f9809976f",
        "60a7bb3d0313193f9809976b" 
        ],
        "location": "San Miguel",
        "photo": "https://firebasestorage.googleapis.com/v0/b/medical-tourism-2367d.appspot.com/o/hospital%2Fprov.png?alt=media&token=0dc29c6e-06dd-47e4-a606-aac8e39aa9b1"
    },
    {
        "country_name": "Chile",
        "about": "We offer a wide array of routine and emergency services. Our facilities include 24/7 physicians specialized and board-certified in emergency medicine. Our nurses offer outstanding care with competence and human warmth, supported by the most recent technology.  At Amerimed Cancun we provide care ranging from simple outpatient conditions to highly complex interventions. We are committed to continuous improvement through quality control tools and resources as we continually seek to offer world-class services and to maintain worldwide recognition as a medical services provider.",
        "location": "Providencia",
        "photo": "https://firebasestorage.googleapis.com/v0/b/medical-tourism-2367d.appspot.com/o/hospital%2Fprov.png?alt=media&token=0dc29c6e-06dd-47e4-a606-aac8e39aa9b1",
        "treatments": [
            "60a7bb3d0313193f98099777",
            "60a7bb3d0313193f9809973e",
            "60a7bb3d0313193f980997a2",
            "60a7bb3d0313193f980996b0",
            "60a7bb3d0313193f98099772",
            "60a7bb3d0313193f9809967f",
            "60a7bb3d0313193f98099688",
            "60a7bb3d0313193f9809976d",
            "60a7bb3d0313193f9809976f",
            "60a7bb3d0313193f9809976b" 
        ],
        "name": "Metropolitan Hospital of Santiago"
    },







    {
        "treatments": [
            "60a7bb3d0313193f98099665",
        "60a7bb3d0313193f9809979c",
        "60a7bb3d0313193f9809979b",
        "60a7bb3d0313193f98099799",
        "60a7bb3d0313193f9809979a"
        ],
        "location": "Qormi",
        "photo": "https://firebasestorage.googleapis.com/v0/b/medical-tourism-2367d.appspot.com/o/hospital%2Fprov.png?alt=media&token=0dc29c6e-06dd-47e4-a606-aac8e39aa9b1",
        "country_name": "Malta",
        "name": "St Thomas Hospital",
        "about": "We offer a wide array of routine and emergency services. Our facilities include 24/7 physicians specialized and board-certified in emergency medicine. Our nurses offer outstanding care with competence and human warmth, supported by the most recent technology.  At Amerimed Cancun we provide care ranging from simple outpatient conditions to highly complex interventions. We are committed to continuous improvement through quality control tools and resources as we continually seek to offer world-class services and to maintain worldwide recognition as a medical services provider.",
        
    },








    {
        "about": "About  Dr. Min Choi is the founder and head doctor at Answer Plastic Surgery. He has over 15 years of experience as a Plastic Surgeon with a 100% safety record.  ‍  Patients from all around the world trust Dr. Min Choi for the best results. About 50% of his patients are Internationals with about 53% of them residing outside of Korea.  ‍  Being bilingual in both English and Korean, Dr. Min Choi is dedicated to providing you with the best treatment possible from start to finish.  ‍",
        "country_name": "South Korea",
        "treatments": [
            "60a7bb3d0313193f98099759",
        "60a7bb3d0313193f980996cf",
        "60a7bb3d0313193f9809966f",
        "60a7bb3d0313193f980996d4",
        "60a7bb3d0313193f98099665"
        ],
        "location": "Seoul",
        "photo": "https://firebasestorage.googleapis.com/v0/b/medical-tourism-2367d.appspot.com/o/hospital%2Fanswer.png?alt=media&token=3265ecd1-7937-438a-8d17-e8e64d401ade",
        "name": "Answer Plastic Surgery"
    },
    {
        "about": "It is renowned worldwide for the quality of its medical care and that same quality is now available at our center. Our Medical Centre is a healthcare facility which offers the highest standards of medical care to be found in a confidential and relaxing atmosphere. ",
        "photo": "https://firebasestorage.googleapis.com/v0/b/medical-tourism-2367d.appspot.com/o/hospital%2Fprov.png?alt=media&token=0dc29c6e-06dd-47e4-a606-aac8e39aa9b1",
        "country_name": "India",
        "name": "FMS DENTAL HOSPITAL",
        "treatments": [
            "60a7bb3d0313193f98099788",
            "60a7bb3d0313193f9809978a",
            "60a7bb3d0313193f9809978f",
            "60a7bb3d0313193f9809978c"
        ],
        "location": "Hyderabad, Telangana"
    },








    {
        "location": "Puebla",
        "country_name": "Mexico",
        "about": "It is renowned worldwide for the quality of its medical care and that same quality is now available at our center. Our Medical Centre is a healthcare facility which offers the highest standards of medical care to be found in a confidential and relaxing atmosphere. ",
        "name": "Clínica Dermatológica y Cirugía Estética de Puebla",
        "treatments": [
            "60a7bb3d0313193f980996d2",
            "60a7bb3d0313193f9809971e",
            "60a7bb3d0313193f98099773",
            "60a7bb3d0313193f98099659",
            "60a7bb3d0313193f98099667",
            "60a8aa6527cef3054c53b1d7",
            "60a7bb3d0313193f98099673",
            "60a7bb3d0313193f9809967c",
            "60a7bb3d0313193f9809967d",
            "60a7bb3d0313193f9809967b",
            "60a7bb3d0313193f98099680",
            "60a7bb3d0313193f98099686",
            "60a7bb3d0313193f980996d0",
            "60a7bb3d0313193f980996d1",
            "60a7bb3d0313193f980996d3",
            "60a7bb3d0313193f980996e7",
            "60a7bb3d0313193f98099706",
            "60a7bb3d0313193f9809970d",
            "60a7bb3d0313193f9809970e",
            "60a7bb3d0313193f9809971d",
            "60a7bb3d0313193f9809972f",
            "60a7bb3d0313193f98099737",
            "60a7bb3d0313193f98099759",
            "60a7bb3d0313193f9809975a"
        ],
        "photo": "https://firebasestorage.googleapis.com/v0/b/medical-tourism-2367d.appspot.com/o/hospital%2Fprov.png?alt=media&token=0dc29c6e-06dd-47e4-a606-aac8e39aa9b1"
    },











    {
        "photo": "https://firebasestorage.googleapis.com/v0/b/medical-tourism-2367d.appspot.com/o/hospital%2Fdental-clinic-turkey.jpg?alt=media&token=a39667d9-ca57-4ad6-b14b-2847b88addbc",
        "name": "Antalya Dental Clinic",
        "about": "Panoramik Oral and Dental Clinic Turkey, was founded with the belief in the importance of accurate diagnosis, planning and treatment in oral and dental health. It provides services at best dental clinic in Antalya, Turkey. Panoramic Dental Clinic Turkey, which includes treatment in all branches, oral diagnoses and radiology, laser periodontology, orthodontics, pedodontics, endodontics, prosthesis, jaw surgery and implantology, tooth bleaching, cosmetic and emergency dentistry, with its expert doctor team and experienced crew is working with the adoption of the “smile to life with us” service mentality.  ",
        "treatments": [
             "60a7bb3d0313193f980996ae",
        "60a7bb3d0313193f980996cb",
        "60a7bb3d0313193f9809978a",
        "60a7bb3d0313193f980996a7",
        "60a7bb3d0313193f980996e4",
        "60a7bb3d0313193f980996d6",
        "60a7bb3d0313193f98099707"
        ],
        "country_name": "Turkey",
        "location": "Antalya"
    },





    {
        "location": "Jalisco",
        "photo": "https://firebasestorage.googleapis.com/v0/b/medical-tourism-2367d.appspot.com/o/hospital%2Fprov.png?alt=media&token=0dc29c6e-06dd-47e4-a606-aac8e39aa9b1",
        "country_name": "Mexico",
        "treatments": [
            "60a7bb3d0313193f98099776",
            "60a7bb3d0313193f98099778",
            "60a7bb3d0313193f98099779",
            "60a7bb3d0313193f98099781"
        ],
        "name": "Clínica de Vanguardia en Otorrinolaringología",
        "about": "It is renowned worldwide for the quality of its medical care and that same quality is now available at our center. Our Medical Centre is a healthcare facility which offers the highest standards of medical care to be found in a confidential and relaxing atmosphere. "
    },






    {
        "about": "he Antiobesity Center is a private institution dedicated to the treatment of obesity, is formed by a group of visionaries, engaged with the firm intention to treat obesity based on a multidisciplinary management.  ‍  Our center is performing specific activities to offer the patient the best results in the treatment of obesity, when the patient is a candidate for surgery, we offer the most advanced laparoscopic procedures, including diagnosis and treatment of obesity.",
        "name": "Anti Obesity Center",
        "photo": "https://firebasestorage.googleapis.com/v0/b/medical-tourism-2367d.appspot.com/o/hospital%2Fantoobesity.jpg?alt=media&token=e00d2a3e-f136-4ba5-8d9f-231a8618e8c8",
        "treatments": [
            "60a7bb3d0313193f980996e0",
            "60a7bb3d0313193f980996bf",
            "60a7bb3d0313193f98099701",
            "60a7bb3d0313193f980996de",
            "60a7bb3d0313193f98099722"
        ],
        "country_name": "Mexico",
        "location": "Quintana Roo"
    },
    {
        "treatments": [
            "60a7bb3d0313193f980996dc",
        "60a7bb3d0313193f980996ed",
        "60a7bb3d0313193f980996e0",
        "60a7bb3d0313193f980996de",
        "60a7bb3d0313193f9809966d",
        "60a7bb3d0313193f9809979b",
        "60a7bb3d0313193f9809966c",
        "60a7bb3d0313193f980997a0",
        "60a7bb3d0313193f98099683",
        "60a7bb3d0313193f98099687",
        "60a7bb3d0313193f9809969b",
        "60a7bb3d0313193f980996a2",
        "60a7bb3d0313193f980996aa",
        "60a7bb3d0313193f980996ba",
        "60a7bb3d0313193f980996dd",
        "60a7bb3d0313193f980996f2",
        "60a7bb3d0313193f98099740",
        "60a7bb3d0313193f98099741",
        "60a7bb3d0313193f98099743",
        "60a7bb3d0313193f98099752",
        "60a7bb3d0313193f98099750",
        "60a7bb3d0313193f98099782",
        "60a7bb3d0313193f9809965f",
        "60a7bb3d0313193f98099667",
        "60a7bb3d0313193f98099670",
        "60a7bb3d0313193f98099673",
        "60a7bb3d0313193f98099676",
        "60a7bb3d0313193f9809967c",
        "60a7bb3d0313193f9809967d",
        "60a7bb3d0313193f980996ab",
        "60a7bb3d0313193f980996d0",
        "60a7bb3d0313193f980996b5",
        "60a7bb3d0313193f980996cf",
        "60a7bb3d0313193f980996d1",
        "60a7bb3d0313193f980996d3",
        "60a7bb3d0313193f980996e1",
        "60a7bb3d0313193f980996ea",
        "60a7bb3d0313193f980996f7",
        "60a89c923c1f130a28d3a392",
        "60a7bb3d0313193f9809970a",
        "60a7bb3d0313193f9809970b",
        "60a7bb3d0313193f9809970e",
        "60a7bb3d0313193f9809971e",
        "60a7bb3d0313193f98099737",
        "60a7bb3d0313193f98099759",
        "60a7bb3d0313193f9809975a",
        "60a7bb3d0313193f980996f0",
        "60a7bb3d0313193f980996ee",
        "60a7bb3d0313193f980996f3",
        "60a7bb3d0313193f98099734",
        "60a7bb3d0313193f9809976e",
        "60a7bb3d0313193f980996b6",
        "60a7bb3d0313193f980996c0",
        "60a7bb3d0313193f980996b8",
        "60a7bb3d0313193f980996ff",
        "60a7bb3d0313193f9809975d",
        "60a7bb3d0313193f98099771",
        "60a7bb3d0313193f98099783",
        "60a7bb3d0313193f98099700",
        "60a7bb3d0313193f98099746",
        "60a7bb3d0313193f98099785",
        "60a7bb3d0313193f980996f8",
        "60a7bb3d0313193f980996a6",
        "60a7bb3d0313193f980996a3",
        "60a7bb3d0313193f98099762",
        "60a7bb3d0313193f98099770",
        "60a7bb3d0313193f9809978e",
        "60a7bb3d0313193f9809968e",
        "60a7bb3d0313193f9809968d",
        "60a7bb3d0313193f98099691",
        "60a7bb3d0313193f980996e2",
        "60a7bb3d0313193f9809974c",
        "60a7bb3d0313193f98099756",
        "60a7bb3d0313193f98099666",
        "60a7bb3d0313193f98099669",
        "60a7bb3d0313193f9809966e",
        "60a7bb3d0313193f98099699",
        "60a7bb3d0313193f9809969c",
        "60a7bb3d0313193f980996ac",
        "60a7bb3d0313193f98099748",
        "60a7bb3d0313193f98099749",
        "60a7bb3d0313193f98099766",
        "60a7bb3d0313193f9809976a",
        "60a7bb3d0313193f98099776",
        "60a7bb3d0313193f98099778",
        "60a7bb3d0313193f9809977a",
        "60a7bb3d0313193f9809977c",
        "60a7bb3d0313193f98099779",
        "60a7bb3d0313193f9809977d",
        "60a7bb3d0313193f9809977f",
        "60a7bb3d0313193f980997a5",
        "60a7bb3d0313193f980996c1",
        "60a7bb3d0313193f980996c2",
        "60a7bb3d0313193f980996c5",
        "60a7bb3d0313193f98099721",
        "60a7bb3d0313193f9809971f",
        "60a7bb3d0313193f9809975e",
        "60a7bb3d0313193f980996f5",
        "60a7bb3d0313193f980996fe",
        "60a7bb3d0313193f98099781",
        "60a7bb3d0313193f98099795",
        "60a7bb3d0313193f98099656",
        "60a7bb3d0313193f98099657",
        "60a7bb3d0313193f98099660",
        "60a7bb3d0313193f98099662",
        "60a7bb3d0313193f980996c3",
        "60a7bb3d0313193f980996c6",
        "60a7bb3d0313193f9809972c",
        "60a7bb3d0313193f98099786",
        "60a7bb3d0313193f98099789",
        "60a7bb3d0313193f98099787"
        ],
        "about": "At the behest of his father, in 1971, Dr. Reddy left behind a flourishing practice in Boston and returned to India. On his return he found the medical landscape in the country plagued by gaps in infrastructure, delivery and affordability. Things took a turn for the worse when he lost a young patient who just did not have the means to go abroad for treatment. The incident marked a cross road in Dr. Reddy's life and steeled his determination to get quality healthcare to India. He set the blueprint to build India's first multi-specialty private sector hospital.",
        "location": "New Delhi",
        "photo": "https://firebasestorage.googleapis.com/v0/b/medical-tourism-2367d.appspot.com/o/hospital%2FApollo%20Delhi.jpg?alt=media&token=7e314401-39f6-4fad-9deb-96d1fd9848f7",
        "country_name": "India",
        "name": "Apollo Delhi"
    }, 

















    {
        "treatments": [
            "60a7bb3d0313193f980996af",
        "60a7bb3d0313193f980996a7",
        "60a7bb3d0313193f980996ae",
        "60a7bb3d0313193f98099747"
        ],
        "name": "Apostoloski Dental Center",
        "country_name": "Serbia",
        "location": "Belgrade",
        "photo": "https://firebasestorage.googleapis.com/v0/b/medical-tourism-2367d.appspot.com/o/hospital%2Fapostoloski_logo.png?alt=media&token=b73fcdf4-05c3-453e-9001-52d93644b3fe",
        "about": "We have the knowledge, experience and skill to give you the most amazing smile ever!  ‍  Providing the most advanced dental care in a comfortable and pleasant atmosphere are the priorities . We are diligent in our pursuit to stay current in providing the profession’s leading dental care procedures while utilizing state-of-the-art technology, supplies and equipment. We have the experience, fine touch, and advanced skills of the best techniques and practices so we can offer you the unique level of care to give you the best smile."
    },






    {
        "name": "Apple Saraswati Multispeciality Hospital",
        "country_name": "India",
        "photo": "https://firebasestorage.googleapis.com/v0/b/medical-tourism-2367d.appspot.com/o/hospital%2FApple-Logo.png?alt=media&token=a0592b1c-24b2-406a-bc18-86f8371f4eeb",
        "about": "In the year 2017, Company has acquired State-of –Art 3T MRI Machine with 48 Channel for Rs 8.5 CR by replacing the existing 1.5T MRI Machine. In Kolhapur region, the technology of this quality is only available with Apple Hospital.  ‍ In the year 2017, another major achievement of the Company is functioning of oncology project costing near about 25 CR. The Linear Accelerator i.e. True beam STx acquired by Apple is the only machine of its kind in the entire regions. It will enable to perform new treatments like SRS and SBRT. The technology contained in this Linear Accelerator will be definitely beneficial to the Cancer patients for providing accurate and precise radiation therapy with very less side effects.",
        "treatments": [
            "60a7bb3d0313193f98099725",
            "60a7bb3d0313193f98099780",
            "60a7bb3d0313193f9809968b",
            "60a7bb3d0313193f98099724",
            "60a7bb3d0313193f9809975c",
            "60a7bb3d0313193f98099729",
            "60a7bb3d0313193f9809973f",
            "60a7bb3d0313193f98099728",
            "60a7bb3d0313193f9809976c",
            "60a89a299d650e2814d25230"
        ],
        "location": "Maharashtra"
    },









    {
        "name": "Arathana Hospital",
        "treatments": [
            "60a7bb3d0313193f98099699",
            "60a7bb3d0313193f980996eb",
            "60a7bb3d0313193f98099748",
            "60a7bb3d0313193f9809973d",
            "60a7bb3d0313193f98099763"
        ],
        "photo": "https://firebasestorage.googleapis.com/v0/b/medical-tourism-2367d.appspot.com/o/hospital%2FArathana%20Hospital%20Logo-p-500.jpeg?alt=media&token=afb086ba-69b8-480f-90fc-e02f676ac145",
        "about": "Arathana Hospital – Functioning in a newly constructed building with world class state of the art facilities. Arathana Hospital was extending its service to patients in a leased building before Arathana hospital’s new building premises built. Arathana Hospital has 3 surgical operation theaters, with latest and modern technology of laminar air flow systems. Operation theatres set with the state of art facilities like imported Siemens c –arm, Microscope tools, Arthroscopy unit, Fracture table, Electronic Tourniquet, Spine Instrument, and Ventilators etc.  ‍",
        "location": "Tamilnadu",
        "country_name": "India"
    },

    {
        "photo": "https://firebasestorage.googleapis.com/v0/b/medical-tourism-2367d.appspot.com/o/hospital%2FArmada-Logo.png?alt=media&token=706de9da-037d-4a36-a20a-89c00c1e2ad3",
        "location": "Dubai",
        "country_name": "Dubai",
        "about": "Armada Medical Centre Located in Jumeriah Lake Towers Dubai is a multi-discipline medical centre offering a range of healthcare services.  ‍  Armada Medical Centre provides patients with state of the art facilities as well as a comprehensive range of services to address the needs of every patient.  ‍  Armada Medical Centre offers a wide range of clinical specialties required by the communities residing within the areas adjacent to Armada Towers as well to cover a broad spectrum of specialties, such as General Practice, Obstetrics & Gynecology, Pediatrics, ENT, Internal Medicine, Plastic Surgery, General Surgery, Vascular Surgery and Dental.",
        "name": "Armada Day Care Surgical Center",
        "treatments": [
            "60a7bb3d0313193f98099759",
        "60a7bb3d0313193f980996cf",
        "60a7bb3d0313193f98099685",
        "60a7bb3d0313193f98099731",
        "60a7bb3d0313193f9809973f",
        "60a7bb3d0313193f98099724",
        "60a7bb3d0313193f980996e5",
        "60a7bb3d0313193f980996b1",
        "60a7bb3d0313193f980996af",
        "60a7bb3d0313193f98099742",
        "60a7bb3d0313193f980996e3"
        ]
    },
    
    {
        "photo": "https://firebasestorage.googleapis.com/v0/b/medical-tourism-2367d.appspot.com/o/hospital%2Fprov.png?alt=media&token=0dc29c6e-06dd-47e4-a606-aac8e39aa9b1",
        "name": "Companhia da Saúde",
        "location": "Lisbon",
        "treatments": [
            "60a7bb3d0313193f98099768",
            "60a7bb3d0313193f98099769",
            "60a7bb3d0313193f98099770",
        ],
        "country_name": "Portugal",
        "about": "We have the knowledge, experience and skill to give you the most amazing smile ever!  ‍  Providing the most advanced dental care in a comfortable and pleasant atmosphere are the priorities . We are diligent in our pursuit to stay current in providing the profession’s leading dental care procedures while utilizing state-of-the-art technology, supplies and equipment. We have the experience, fine touch, and advanced skills of the best techniques and practices so we can offer you the unique level of care to give you the best smile."
    }, 









    {
        "name": "Ashford Presbyterian Community Hospital",
        "about": "The Presbyterian Hospital was founded in 1904, when the National Mission Board of the Presbyterian Church of the United States recognized the need to build a hospital in the area of ​​Santurce, Puerto Rico. The initial building consisted of three wooden buildings, in the same heart of Condado and in the place that the hospital occupies today. Later, in 1946, the Founding Board of the Hospital transferred the management of the institution to a Board of Trustees residing in Puerto Rico and the name was changed to Ashford Presbyterian Community Hospital.",
        "country_name": "United States",
        "treatments": [
            "60a7bb3d0313193f9809976c",
            "60a7bb3d0313193f980996e3",
            "60a7bb3d0313193f98099755",
        "60a7bb3d0313193f980996e5"
        ],
        "location": "Puerto Rico",
        "photo": "https://firebasestorage.googleapis.com/v0/b/medical-tourism-2367d.appspot.com/o/hospital%2F5e5fb646579a536e19c08af0_Ashford%20Logo.png?alt=media&token=2c303256-b2f4-416e-8864-e8d59ee1a82c"
    },
    {
        "country_name": "India",
        "about": "Dr. Ashraf Khan’s clinical interest includes diagnostic surgical pathology of Breast and Endocrine system. Dr. Khan is actively involved in clinical translational research focused in the field of thyroid and breast cancer investigating biomarkers that help in the diagnosis and prediction of outcome in these tumors. Over the past decade Dr. Khan has published several papers on the role of cell cycle regulatory proteins, translation initiation factors and cell adhesion molecules in the diagnosis of thyroid follicular tumors and progression of thyroid cancer. Dr. Khan was a key contributor of one large multi-institution international study published in The Lancet on the role of galectin 3 and CD44 in the diagnosis of thyroid malignancy.",
        "treatments": [
            "60a7bb3d0313193f98099678",
        "60a7bb3d0313193f980997a4"
        ],
        "name": "Ashraf Khan",
        "photo": "https://firebasestorage.googleapis.com/v0/b/medical-tourism-2367d.appspot.com/o/hospital%2Fprov.png?alt=media&token=0dc29c6e-06dd-47e4-a606-aac8e39aa9b1",
        "location": "Maharashtra"
    },












    {
        "photo": "https://firebasestorage.googleapis.com/v0/b/medical-tourism-2367d.appspot.com/o/hospital%2FAsia%20Pacific%20Eye%20Center%20Logo-p-500.jpeg?alt=media&token=74b78eed-07ba-4d99-a1cc-ed4772790f02",
        "name": "Asia-Pacific Eye Center",
        "about": "Established in 1993, the Asia-Pacific Eye Center has mirrored the growth of the town in which it originally started. From a modest small-town clinic in rustic Biñan, Laguna, it flourished to a progressive service-oriented eye care facility located in the bustling commercial part of Biñan. Today, the Asia-Pacific Eye Center continues to provide the same personalized eye care with the same uncompromising quality of service as other reputable local and international eye centers.",
        "location": "Laguna",
        "treatments": [
            "60a7bb3d0313193f9809968e",
        "60a7bb3d0313193f98099709",
        "60a7bb3d0313193f980996e2",
        "60a7bb3d0313193f980996a0",
        "60a7bb3d0313193f9809972e",
        "60a7bb3d0313193f9809978c"
        ],
        "country_name": "Philippines"
    },









    {
        "photo": "https://firebasestorage.googleapis.com/v0/b/medical-tourism-2367d.appspot.com/o/hospital%2FAsian%20Hair%20and%20Skin%20Centre%20Logo.png?alt=media&token=53982e09-197c-4d61-95f2-67165208d05a",
        "name": "Asian Hair & Skin Centre",
        "country_name": "India",
        "location": "Karnatka",
        "treatments": [
            "60a7bb3d0313193f980996e8",
        "60a7bb3d0313193f980996ea",
        "60a7bb3d0313193f98099708"
        ],
        "about": "Asian Hair and Skin Clinic is one of the best clinics in Bangalore, and provides the best hair transplant and cosmetic surgery services in the city.  ‍  All the doctors at our clinic are well trained with years of experience and have been credited for their work with famous personalities. Located in a convenient locality, the clinic is accessible to all, and our services are available at pocket friendly prices."
    },
    {
        "location": "San Salvador",
        "about": "We have the knowledge, experience and skill to give you the most amazing smile ever!  ‍  Providing the most advanced dental care in a comfortable and pleasant atmosphere are the priorities . We are diligent in our pursuit to stay current in providing the profession’s leading dental care procedures while utilizing state-of-the-art technology, supplies and equipment. We have the experience, fine touch, and advanced skills of the best techniques and practices so we can offer you the unique level of care to give you the best smile.",
        "country_name": "El Salvador",
        "name": "Coloclinica",
        "treatments": [
            "60a7bb3d0313193f9809968e",
        "60a7bb3d0313193f98099709",
        "60a7bb3d0313193f980996e2",
        "60a7bb3d0313193f980996a0",
        "60a7bb3d0313193f9809972e",
        "60a7bb3d0313193f9809978c"
        ],
        
        "photo": "https://firebasestorage.googleapis.com/v0/b/medical-tourism-2367d.appspot.com/o/hospital%2Fprov.png?alt=media&token=0dc29c6e-06dd-47e4-a606-aac8e39aa9b1"
    },


    {
        "country_name": "Dubai",
        "treatments": [
            "60a7bb3d0313193f9809979a",
        "60a7bb3d0313193f9809968b",
        "60a7bb3d0313193f980996af",
        "60a7bb3d0313193f980996b1",
        "60a7bb3d0313193f98099731",
        "60a7bb3d0313193f980996df",
        "60a7bb3d0313193f98099725",
        "60a7bb3d0313193f980996e3",
        "60a7bb3d0313193f9809972e",
        "60a89a299d650e2814d25230",
        "60a7bb3d0313193f98099724",
        "60a7bb3d0313193f9809973c",
        "60a7bb3d0313193f98099751",
        "60a7bb3d0313193f9809975c",
        "60a7bb3d0313193f98099767",
        "60a7bb3d0313193f98099780"
        ],
        "name": "Aster Hospital Dubai",
        "photo": "https://firebasestorage.googleapis.com/v0/b/medical-tourism-2367d.appspot.com/o/hospital%2FAster%20Logo.png?alt=media&token=0270c331-f870-4b45-bcee-5edba8e9ca86",
        "about": "The entire Aster family in the UAE is spread across four world-renowned branches, Aster DM Healthcare being one of them. From single, standalone clinics to high-performance driven healthcare enterprises, Aster is comprised of 323 establishments in 9 countries and is only expanding. Aster DM Healthcare has transitioned into being a highly recognized hospital network across the Middle East, India and the Far East, and is easily becoming one of the top private hospitals in Dubai.",
        "location": "United Arab Emirates"
    },
    {
        "treatments": [
            "60a7bb3d0313193f9809975a",
            "60a7bb3d0313193f9809975e",
            "60a7bb3d0313193f98099760",
            "60a7bb3d0313193f9809975d"
        ],
        "country_name": "Egypt",
        "location": "Heliopolis",
        "photo": "https://firebasestorage.googleapis.com/v0/b/medical-tourism-2367d.appspot.com/o/hospital%2Fprov.png?alt=media&token=0dc29c6e-06dd-47e4-a606-aac8e39aa9b1",
        "name": "Confidental Clinic",
        "about": "We have the knowledge, experience and skill to give you the most amazing smile ever!  ‍  Providing the most advanced dental care in a comfortable and pleasant atmosphere are the priorities . We are diligent in our pursuit to stay current in providing the profession’s leading dental care procedures while utilizing state-of-the-art technology, supplies and equipment. We have the experience, fine touch, and advanced skills of the best techniques and practices so we can offer you the unique level of care to give you the best smile."
    },
    {
        "name": "Astra Dent",
        "about": "A team of speciatreatments of the Astra Dent dentistry chain in Kyiv, Ukraine provides a full range of services in the field of dental medicine. 12 dentistries in different areas of the city, more than 100 experienced doctors, European level of service - for 13 years Astra Dent has been cared about people`s smiles!  ‍",
        "location": "Kylv",
        "treatments": [
            "60a7bb3d0313193f980996ae",
            "60a7bb3d0313193f9809978a",
            "60a7bb3d0313193f98099658",
            "60a7bb3d0313193f98099797",
            "60a7bb3d0313193f9809965e",
            "60a7bb3d0313193f980996ad"
        ],
        "photo": "https://firebasestorage.googleapis.com/v0/b/medical-tourism-2367d.appspot.com/o/hospital%2FAstra%20Dent%20Logo.png?alt=media&token=53cbe03b-a09a-47ef-941d-b0a7b4df537f",
        "country_name": "Ukraine"
    },
    {
        "treatments": [
            "60a7bb3d0313193f98099792",
            "60a7bb3d0313193f98099689",
            "60a7bb3d0313193f98099710",
            "60a7bb3d0313193f98099755",
            "60a7bb3d0313193f980996c4",
            "60a7bb3d0313193f9809972b",
            "60a7bb3d0313193f980996b2",
            "60a89a299d650e2814d25230",
            "60a7bb3d0313193f98099672"
        ],
        "name": "Auxilio Mutuo Hospital",
        "location": "Puerto Rico",
        "about": "Auxilio Mutuo Hospital is the most comprehensive private hospital in the Caribbean and a non for profit organization that has been engaged with the health in Puerto Rico offering first class medical services and surgical procedures for more than 130 years. We are located just minutes away from the Luis Muñoz Marín International Airport, hotels and beaches.  ‍  At the Auxilio Mutuo Hospital we are committed to excellence, for this reason, we have obtained the Medical Tourism Association Certification, the American Joint Commission, the American College of Radiology,",
        "country_name": "United States",
        "photo": "https://firebasestorage.googleapis.com/v0/b/medical-tourism-2367d.appspot.com/o/hospital%2FAuxilio%20Mutuo%20Logo.jpg?alt=media&token=89480030-b4a5-45e3-be71-54a409fcc7e5"
    },














    
    {
        "location": "Avcilar",
        "country_name": "Turkey",
        "name": "Avcilar Hospital",
        "photo": "https://firebasestorage.googleapis.com/v0/b/medical-tourism-2367d.appspot.com/o/hospital%2FAvcilar%20Hospital%20Logo.jpg?alt=media&token=a379a561-0b39-4dcb-a40d-37944b96c2e5",
        "about": "Avcilar Hospital is a private healthcare service provider in Istanbul established in 1998. It has created a unique opportunity for global healthcare seekers via its unique network in and outside Turkey. The vision of Avcılar Hospital is to offer comprehensive healthcare services to the community and international patients by setting standards for excellence in all medical specialties using latest technologies and medical standards. Guarantee incredible savings for patients seeking medical care.",
        "treatments": [
            "60a7bb3d0313193f9809976c",
        "60a7bb3d0313193f98099730",
        "60a7bb3d0313193f980996ad",
        "60a7bb3d0313193f980996ae",
        "60a89a299d650e2814d25230",
        "60a7bb3d0313193f980996af",
        "60a7bb3d0313193f980996b1",
        "60a7bb3d0313193f98099744",
        "60a7bb3d0313193f98099742",
        "60a7bb3d0313193f9809968b",
        "60a7bb3d0313193f98099684",
        "60a7bb3d0313193f98099713",
        "60a7bb3d0313193f980996ce",
        "60a7bb3d0313193f98099726",
        "60a7bb3d0313193f98099729",
        "60a7bb3d0313193f98099751",
        "60a7bb3d0313193f980996e3",
        "60a7bb3d0313193f98099731",
        "60a7bb3d0313193f9809973d",
        "60a7bb3d0313193f98099780",
        "60a7bb3d0313193f98099724",
        "60a7bb3d0313193f980996df",
        "60a7bb3d0313193f98099745",
        "60a7bb3d0313193f980996e9"
        ]
    },
    {
        "location": "Odessa",
        "name": "Avrodent Odessa",
        "about": "Located in Odessa, Ukraine, our clinic is dedicated to providing exceptional dental care to patients from all around the globe. Our dentists have more than 18 years of combined experience and have been trained at Odessa State Medical University - the oldest medical university with 118 years of history, one of the best medical universities in the world - and have state dental licenses. In addition, our dentists are constantly upgrading their skills. They attend professional courses and seminars both in Ukraine and abroad. Dr. Daniel Borodenko treats patients using the latest technology - treatment under a microscope. Dr. Borodenko defended his Ph.D. dissertation – root canals treatment under a microscope.",
        "photo": "https://firebasestorage.googleapis.com/v0/b/medical-tourism-2367d.appspot.com/o/hospital%2FAvrodent_Odessa_Logo.jpg?alt=media&token=dd844ad5-0f04-41be-99d2-40c095011407",
        "treatments": [
            "60a7bb3d0313193f98099754",
            "60a7bb3d0313193f980996a5",
            "60a7bb3d0313193f98099739",
            "60a7bb3d0313193f980996cc",
            "60a7bb3d0313193f980996cb",
            "60a7bb3d0313193f980996d6",
            "60a7bb3d0313193f980996ae",
            "60a7bb3d0313193f98099707",
            "60a7bb3d0313193f98099774",
            "60a7bb3d0313193f9809975b"
        ],
        "country_name": "Ukraine"
    },



    {
        "about": "Established in 2005, AVRUPAGOZ is the leading international eye health group in Turkey and the Middle East. With its 14 branches throughout Turkey staffed with 60 expert doctors and 750 employees, AVRUPAGOZ is at the forefront of eye care and treatment. Currently we are established with 6 centers in Istanbul and active in 8 other cities throughout Turkey.  ‍  Since 2013, AVRUPAGOZ is part of an international healthcare group, Nesmal Holding from Saudi Arabia. As we are actively growing with the opening of new centers, AVRUPAGOZ will soon operate eye clinics in Saudi Arabia, United Arab Emirates, Azerbaijan, Kazakhstan and Albania.",
        "location": "Istanbul",
        "country_name": "Turkey",
        "name": "Avrupagoz Group",
        "photo": "https://firebasestorage.googleapis.com/v0/b/medical-tourism-2367d.appspot.com/o/hospital%2Favrupagoz-p-500.jpeg?alt=media&token=9d6fb04e-ef85-404d-a412-8615f7c67690",
        "treatments": [
            "60a7bb3d0313193f980996ce",
            "60a7bb3d0313193f98099709",
            "60a7bb3d0313193f980996e2",
            "60a7bb3d0313193f9809968e",
            "60a7bb3d0313193f9809978c",
            "60a7bb3d0313193f9809969e"
        ]
    },











//  ------------------------------------------------------------------







    {
        "about": "The 15 acres large campus is situated in serene outskirts under the foothills of Chamundi Hills, away from the hustle and bustle of the city. The hospital is surrounded by splendid Ayurveda herb garden from which most medicines are produced. This sets a serene environment for healing and rejuvenation.  ‍  The JSS Ayurveda Hospital provides authentic Ayurveda experience. ",
        "treat": [
            "Skincare",
            "Headache",
            "Allergic & Chronic Sinusitis "
        ],
        "photo": "https://firebasestorage.googleapis.com/v0/b/medical-tourism-2367d.appspot.com/o/hospital%2FJSS_Ayurveda_hospital_Mysuru_logo.png?alt=media&token=7d781de4-366e-4605-8cb9-ceff4676af01",
        "country_name": "India",
        "location": "kerala",
        "name": "Ayurveda Hospitals"
    },
    {
        "treat": [
            "Diagnostic Tests",
            "Capsulitis",
            "Circumcision",
            "Cystoscopy - Flexible",
            "Extraction (Simple)"
        ],
        "photo": "https://firebasestorage.googleapis.com/v0/b/medical-tourism-2367d.appspot.com/o/hospital%2Fprov.png?alt=media&token=0dc29c6e-06dd-47e4-a606-aac8e39aa9b1",
        "about": "",
        "name": "Ayurveda Treatments",
        "location": "kerala",
        "country_name": "India"
    },
    {
        "about": "",
        "photo": "https://firebasestorage.googleapis.com/v0/b/medical-tourism-2367d.appspot.com/o/hospital%2Fprov.png?alt=media&token=0dc29c6e-06dd-47e4-a606-aac8e39aa9b1",
        "treat": [
            "Massage",
            "Mastopexy (Breast Lift)",
            "Mesh Repair for Prolapse",
            "Mentoplasty"
        ],
        "country_name": "India",
        "name": "Ayuvedic health and wellness",
        "location": "Maharashtra"
    },
    {
        "about": "",
        "photo": "https://firebasestorage.googleapis.com/v0/b/medical-tourism-2367d.appspot.com/o/hospital%2Fprov.png?alt=media&token=0dc29c6e-06dd-47e4-a606-aac8e39aa9b1",
        "name": "B?R?NC? EYE HOSPITAL",
        "country_name": "Turkey",
        "treat": [
            "Laser Cleaning",
            "Laser Hair Removal ",
            "Laser Lipolysis",
            "Laser Teeth Whitening"
        ],
        "location": "Beylikdüzü"
    },
    {
        "about": "",
        "treat": [
            "Dentistry and Orthodontics",
            "Autism",
            "Alzheimer's",
            "Acne",
            "ascular Access"
        ],
        "name": "BLK CyberKnife Center",
        "location": "Delhi",
        "photo": "https://firebasestorage.googleapis.com/v0/b/medical-tourism-2367d.appspot.com/o/hospital%2Fprov.png?alt=media&token=0dc29c6e-06dd-47e4-a606-aac8e39aa9b1",
        "country_name": "India"
    },
    {
        "about": "",
        "name": "Corlu Vatan Hospital",
        "treat": [
            "Ophthalmology",
            "Osteoporosis",
            "Osteosarcoma"
        ],
        "country_name": "Turkey",
        "location": "Çorlu",
        "photo": "https://firebasestorage.googleapis.com/v0/b/medical-tourism-2367d.appspot.com/o/hospital%2Fprov.png?alt=media&token=0dc29c6e-06dd-47e4-a606-aac8e39aa9b1"
    },
    {
        "about": "The largest multispecialty, tertiary care referral hospital in the corporate sector in Kerala, with 800 beds, over 40 Medical and Surgical departments including full-fledged Neuroscience, Cardiothoracic and Oncology super-specialty departments. With 16 world class operation theaters,12 fully equipped ICU’s and a 24-hour Accident & Emergency care unit our team of over 300 doctors and 2000 medical, nursing, paramedical and administrative staff work seamlessly and untiringly to keep up the ideology of BMH – “Committed to Care”.",
        "country_name": "India",
        "location": "kerala",
        "photo": "https://firebasestorage.googleapis.com/v0/b/medical-tourism-2367d.appspot.com/o/hospital%2F500.jpeg?alt=media&token=2ad2a006-88d4-40c9-8b2f-df6d657c3f2f",
        "name": "Baby Memorial Hospital",
        "treat": [
            "Liver Care",
            "Orthopedics",
            "Spine Surgery",
            "Sports Injuries",
            "Plastic Surgery",
            "Urology",
            "Otolaryngology - Ear, Nose, and Throat (ENT)",
            "Nephrology and Hypertension",
            "Cardiology",
            "Ophthalmology",
            "Gynecology "
        ]
    },
    {
        "location": "Baja California",
        "about": "Baja Dent offers specialized care in the port of Ensenada Baja California by highly trained speciatreatments. We specialize in the immediate care of our patients who visit us from various parts of the world.  ‍  We have dental cad-cam technology that is a technological system that allows the design and production of dental prostheses by computer. Using this digital technology, we are in a position to design and manufacture extremely precise dental restorations of the highest quality.  ‍",
        "treat": [
            "Oral Prophylaxis - Cleaning and Polishing",
            "Laser Teeth Whitening",
            "Extraction (Simple)",
            "Extraction - Wisdom Tooth",
            "Crown – Indirect Resin Based Composite",
            "Regular Teeth Cleaning",
            "Implant Supported Overdenture, Removable (With 2 Implants)",
            "Implant Supported Overdenture, Removable (With 3 Implants)",
            "Dentistry and Orthodontics",
            "Dental Implants",
            "Crowns and Bridges – Procera (Per Tooth)",
            "Panoramic X-ray",
            "Crowns and Bridges – Metal (Per Tooth)",
            "Crown - Porcelain/Ceramic",
            "Crowns and Bridges – Full Ceramic (Per Tooth)"
        ],
        "photo": "https://firebasestorage.googleapis.com/v0/b/medical-tourism-2367d.appspot.com/o/hospital%2FBaja%20Dent%20Logo.jpeg?alt=media&token=0b349798-7d9f-44be-81a9-7365132470b8",
        "country_name": "Mexico",
        "name": "Baja Dent"
    },
    {
        "location": "Baja California",
        "country_name": "Mexico",
        "treat": [
            "Crowns and Bridges – Procera (Per Tooth)",
            "Partial Dentures",
            "Dentistry and Orthodontics",
            "Dental Implants",
            "Root Canal Treatment",
            "Tooth Whitening",
            "Laser Teeth Whitening"
        ],
        "name": "Baja smile tijuana",
        "about": "Baja Smile Dentistry has family ties deeply integrated in our daily operations: we are proud to be a family business founded in 2018.  ‍  We have over 5 years of experience working with over 500 patients from all over the United States, Canada, and Mexico. We treat each customer with personalized care while maintaining high standards in our service.  ‍",
        "photo": "https://firebasestorage.googleapis.com/v0/b/medical-tourism-2367d.appspot.com/o/hospital%2F5e6b2cf703eb1af680017920_baja-smile-logo.png?alt=media&token=b8dbb7b2-b96e-4f74-9750-f2cb12d5f691"
    },
    {
        "photo": "https://firebasestorage.googleapis.com/v0/b/medical-tourism-2367d.appspot.com/o/hospital%2FBanobagi_logo.png?alt=media&token=bf049877-d0b8-4e08-a4cd-a8c61e967342",
        "country_name": "Korea",
        "treat": [
            "Corrective Jaw Surgery",
            "Genioplasty-Chin Advancement",
            "Face Lift Surgery",
            "Total Body Lift with Body Constouring",
            "Liposuction",
            "Abdominoplasty & Liposuction",
            "Body Lift",
            "Body Contouring After Massive Weight Loss",
            "Breast Surgery",
            "Breast Reduction",
            "Breast Augmentation with Fat Natural Breast",
            "Breast Augmentation",
            "Breast Lift",
            "Breast Augmentation (With/Including Implants)",
            "Eyelid Surgery - Upper and Lower",
            "Anti-Aging",
            "Rhinoplasty (Nose Repair/Reconstruction)",
            "Primary Rhinoplasty",
            "Non-surgical Rhinoplasty",
            "Face & Neck Lift (Rhytidectomy)",
            "Upper Body Lift",
            "Macs Face Lift",
            "Breast Lift with Implants",
            "Mastopexy (Breast Lift)",
            "Lower Body Lift",
            "Neck Lift",
            "Brow Lift (Thread Lift)",
            "Cervicoplasty (Neck Lift)",
            "Eye Lid Lift - Blepharoplasty",
            "Canthoplasty, Lifting the Outside of the Eye",
            "Breast Implant Removal",
            "Hair Transplant",
            "Hair Loss and Hair Transplant "
        ],
        "about": "Banobagi is like family and a trusted hospital where mothers, for example, can confidently and proudly refer their daughters to, a place where daughters can refer their mothers, a family member to a family member and a place that friends can tell their friends about.",
        "name": "Banobagi",
        "location": "seoul"
    },
    {
        "treat": [
            "Blepharoplasty (Upper and Lower Combined)",
            "Balloon Pulmonary Valvuloplasty",
            "Balloon Aortic Valvuloplasty"
        ],
        "about": "",
        "country_name": "Korea",
        "name": "Barosun Hospital",
        "location": "Dobong-gu",
        "photo": "https://firebasestorage.googleapis.com/v0/b/medical-tourism-2367d.appspot.com/o/hospital%2Fprov.png?alt=media&token=0dc29c6e-06dd-47e4-a606-aac8e39aa9b1"
    },
    {
        "location": "Antalya",
        "photo": "https://firebasestorage.googleapis.com/v0/b/medical-tourism-2367d.appspot.com/o/hospital%2F533.png?alt=media&token=cfd1a4eb-ab53-4da5-a522-49e0cee75b70",
        "country_name": "Turkey",
        "treat": [
            "Atrial Septal Defect Closure (ASD)",
            "Balloon Valvuloplasty (Mitral, Pulmonary, Aortic)",
            "Coronary Angiography",
            "Coronary Angioplasty",
            "Electrophysiological Study",
            "Radiofrequency Ablation",
            "Thoracic Sympathectomy",
            "VATS (Video-Assisted Thoracic Surgery)",
            "Breast Augmentation",
            "Breast Reduction",
            "Deep Chemical Peel",
            "Dermabrasion",
            "Eyelid Surgery - Upper and Lower",
            "Face Lift Surgery",
            "Liposuction",
            "Male Breast Reduction (Gynecomastia)",
            "Otoplasty/Ear Deformity Repair and Reconstruction",
            "Rhinoplasty (Nose Repair/Reconstruction)",
            "Composite Fillings",
            "Fillings",
            "Root Canal Treatment",
            "Diagnostic Colonoscopy",
            "Diagnostic Upper GI Endoscopy",
            "Endoscopic Common Bile Duct Stone Removal",
            "Endoscopic Retrograde Cholangiopancreatography (ERCP)",
            "ERCP (Therapeutic)",
            "Therapeutic Colonoscopy with Polypectomy",
            "Diagniostic Retroperitonescopy and Biopsy",
            "Lap. Assisted Hemicolectomy",
            "Laparoscopic Biliary Pancreatic Bypass",
            "Laparoscopic Cardiomyotomy",
            "Laparoscopic Cholescystectomy with Choledochodudenostomy",
            "Laparoscopic Duodenal Closure",
            "Laparoscopic Fundoplication",
            "Lap. Gastric Banding",
            "Laparoscopic Gastrojejunostomy",
            "Laparoscopic Splenectomy",
            "Laparoscopic Cholecystectomy",
            "Laparoscopic Inguinal Hernioplasty - Bilateral",
            "Laparoscopic Inguinal Hernioplasty - Unilateral",
            "Colposcopy",
            "Diagnostic Hysterectomy",
            "Dilation and Curettage",
            "Chronic Ambulatory Peritoneal Dialysis (CAPD)",
            "Haemodialysis",
            "Kidney Transplantation",
            "Brain Tumour Removal",
            "Craniotomy for Supratentorial Tumours",
            "Epilepsy Surgery",
            "Posterior Fossa Tumour Surgery",
            "Spinal Cord Tumours",
            "Lung Perfusion and Venogram of Upper or Lower Limbs",
            "Single Photon Emission Computed Tomography (SPECT)",
            "TC-99M Thyroid Scan",
            "Breast Cancer (CMF, FAC, FEC, 4 AC) - Chemotherapy",
            "Hodgkin's Lymphoma (ABVD) Chemotherapy",
            "NHL (R-CHOP)-Chemotherapy",
            "Non-Hogkin's Lymphoma (CHOP) - Chemotherapy",
            "Cataract Surgery – Phacoemulsification",
            "Cornea Transplantation",
            "Glaucoma Surgery",
            "Oculoplastic Service",
            "Pterygium Removal",
            "Retinal Detachment",
            "Corrective Jaw Surgery",
            "Extraction - Wisdom Tooth",
            "Extraction, Erupted Tooth or Exposed Root",
            "Joint Reconstruction",
            "Surgery for Fractures of the Jaw",
            "Tooth Reimplantation",
            "Total Elbow Replacement",
            "Total Hip Replacement",
            "Total Knee Replacement",
            "Total Shoulder Replacement",
            "Circumcision",
            "Diaphragmatic Hernia",
            "Hernia Umbilical",
            "Hernias (Inguinal)",
            "Hydrocele",
            "Undescended Testis",
            "Liver Transplantation (For Liver Failure)",
            "Crown – Indirect Resin Based Composite",
            "Crowns and Bridges – Metal (Per Tooth)",
            "Crowns and Bridges – Procera (Per Tooth)",
            "Crowns and Bridges – Full Ceramic (Per Tooth)",
            "Crowns and Bridges – Porcelain Fused to Metal (Per Tooth)",
            "Crown - Porcelain/Ceramic",
            "Crown-Porcelain Fused to Noble Metal",
            "Crown-Porcelain Fused to High Noble Metal",
            "Crown-Porcelain Fused to Predominantly Base Metal",
            "Catheter Angiography",
            "Catheter Embolization",
            "CT Angiography",
            "CT Body",
            "Magnetic Resonance Imaging (MRI) Body",
            "Mammogram",
            "MRI BODY",
            "MRI Head",
            "MRI Chest",
            "MRI Spine"
        ],
        "name": "Baskent University Hospitals",
        "about": ""
    },
    {
        "about": "",
        "photo": "https://firebasestorage.googleapis.com/v0/b/medical-tourism-2367d.appspot.com/o/hospital%2Fprov.png?alt=media&token=0dc29c6e-06dd-47e4-a606-aac8e39aa9b1",
        "name": "Beauty Medi",
        "location": "Istanbul",
        "country_name": "Turkey"
    },
    {
        "name": "Beijing Tongshantang Hospital of TCM",
        "about": "",
        "photo": "https://firebasestorage.googleapis.com/v0/b/medical-tourism-2367d.appspot.com/o/hospital%2Fprov.png?alt=media&token=0dc29c6e-06dd-47e4-a606-aac8e39aa9b1",
        "country_name": "China",
        "treat": [
            "Kidney Transplant",
            "LPG-Endermologie",
            "Laser Cleaning",
            "Laser Teeth Whitening",
            "Lip Reduction"
        ],
        "location": "Beijing"
    },
    {
        "treat": [
            "Gynecology",
            "Gynecomastia Surgery",
            "Hypertension",
            "IUI (Intra Uterine Insemination)",
            "Kidney Transplant"
        ],
        "location": "Istanbul",
        "name": "Beloved Vita Health Tourism & Consulting",
        "photo": "https://firebasestorage.googleapis.com/v0/b/medical-tourism-2367d.appspot.com/o/hospital%2Fprov.png?alt=media&token=0dc29c6e-06dd-47e4-a606-aac8e39aa9b1",
        "about": "",
        "country_name": "Turkey"
    },
    {
        "location": "Beverly Hills",
        "photo": "https://firebasestorage.googleapis.com/v0/b/medical-tourism-2367d.appspot.com/o/hospital%2Fprov.png?alt=media&token=0dc29c6e-06dd-47e4-a606-aac8e39aa9b1",
        "country_name": " United States",
        "treat": [
            "Neonatology",
            "Nuclear Medicine Studies",
            "Osteoporosis",
            "Pain Control",
            "Pediatric Rehabilitation"
        ],
        "name": "Beverly Hills Cancer Center",
        "about": ""
    },
    {
        "about": "",
        "treat": [
            "Pediatric Rehabilitation",
            "Pelvic Florr Disorders Treatment",
            "Physical Therapy",
            "Root Canal Treatment",
            "Spinal Cord Injury"
        ],
        "location": "Los Angeles,",
        "country_name": "United States",
        "name": "Beverly Hills Spine Surgery Center",
        "photo": "https://firebasestorage.googleapis.com/v0/b/medical-tourism-2367d.appspot.com/o/hospital%2Fprov.png?alt=media&token=0dc29c6e-06dd-47e4-a606-aac8e39aa9b1"
    },
    {
        "about": "",
        "name": "Bicher Cancer Institute",
        "treat": [
            "Hair Removal",
            "Hair Loss and Hair Transplant",
            "Hand Surgery (Trauma)",
            "Hormone Replacement Therapy"
        ],
        "country_name": "United States",
        "location": "Los Angeles",
        "photo": "https://firebasestorage.googleapis.com/v0/b/medical-tourism-2367d.appspot.com/o/hospital%2Fprov.png?alt=media&token=0dc29c6e-06dd-47e4-a606-aac8e39aa9b1"
    },
    {
        "location": "Dubai",
        "name": "Biolite Aesthetic Clinic",
        "about": "",
        "country_name": "United Arab Emirates",
        "treat": [
            "Varicose Vein Stripping",
            "Vasectomy",
            "Arm Lift",
            "Botulinum Toxin",
            "Dermatology"
        ],
        "photo": "https://firebasestorage.googleapis.com/v0/b/medical-tourism-2367d.appspot.com/o/hospital%2Fprov.png?alt=media&token=0dc29c6e-06dd-47e4-a606-aac8e39aa9b1"
    },
    {
        "name": "Czech Medical Center",
        "location": "Brno",
        "treat": [
            "Endoscopy",
            "Epilepsy Surgery",
            "Extraction (Simple)"
        ],
        "about": "",
        "country_name": "Czech Republic",
        "photo": "https://firebasestorage.googleapis.com/v0/b/medical-tourism-2367d.appspot.com/o/hospital%2Fprov.png?alt=media&token=0dc29c6e-06dd-47e4-a606-aac8e39aa9b1"
    },
    {
        "location": "Istanbul",
        "name": "Biruni Universite Hastanesi",
        "photo": "https://firebasestorage.googleapis.com/v0/b/medical-tourism-2367d.appspot.com/o/hospital%2Fprov.png?alt=media&token=0dc29c6e-06dd-47e4-a606-aac8e39aa9b1",
        "treat": [
            "Surgery",
            "Thyroid Cancer",
            "Invisalign",
            "Haemodialysis",
            "Dentistry and Orthodontics"
        ],
        "country_name": "Turkey",
        "about": ""
    },
    {
        "treat": [
            "Laparoscopic Cholecystectomy with LAP Common Bile Duct Exploration",
            "Laparoscopic Myomectomy",
            "Laparoscopic Nephrectomy",
            "Laparoscopic Sleeve Gastrectomy"
        ],
        "about": "",
        "photo": "https://firebasestorage.googleapis.com/v0/b/medical-tourism-2367d.appspot.com/o/hospital%2Fprov.png?alt=media&token=0dc29c6e-06dd-47e4-a606-aac8e39aa9b1",
        "location": "New Delhi",
        "country_name": "India",
        "name": "Cygnus Orthocare Hospital"
    },
    {
        "country_name": "United States",
        "location": "Las Vegas",
        "photo": "https://firebasestorage.googleapis.com/v0/b/medical-tourism-2367d.appspot.com/o/hospital%2Fprov.png?alt=media&token=0dc29c6e-06dd-47e4-a606-aac8e39aa9b1",
        "about": "",
        "treat": [
            "Spinal Cord Injury",
            "Skincare",
            "Single Valve Replacement",
            "Varicose Vein Stripping"
        ],
        "name": "Blossom Bariatrics"
    },
    {
        "location": "Hainan",
        "about": "",
        "treat": [
            "Treatment of Stress Incontinence",
            "Tonsillectomy",
            "Tendon Dysfunctions"
        ],
        "photo": "https://firebasestorage.googleapis.com/v0/b/medical-tourism-2367d.appspot.com/o/hospital%2Fprov.png?alt=media&token=0dc29c6e-06dd-47e4-a606-aac8e39aa9b1",
        "name": "Boao Yiling Life Care Center",
        "country_name": "China"
    },
    {
        "photo": "https://firebasestorage.googleapis.com/v0/b/medical-tourism-2367d.appspot.com/o/hospital%2Fprov.png?alt=media&token=0dc29c6e-06dd-47e4-a606-aac8e39aa9b1",
        "name": "Cosmetic Derma Medicine",
        "about": "",
        "treat": [
            "Microdermabrasion",
            "Microlaryngeal Surgery",
            "Minimally Invasive Surgery - Aortic and Mitral Valve replacements"
        ],
        "country_name": "Greece",
        "location": "Athens"
    },
    {
        "country_name": "Chile",
        "name": "Clinica Alemana",
        "about": "Clínica Alemana de Santiago [\"The German Hospital of Santiago\"] is a Chilean private health care facility. It is located in the eastern sector of Santiago de Chile with two facilities: one on Avenida Vitacura and the other in La Dehesa.",
        "photo": "https://firebasestorage.googleapis.com/v0/b/medical-tourism-2367d.appspot.com/o/hospital%2Fprov.png?alt=media&token=0dc29c6e-06dd-47e4-a606-aac8e39aa9b1",
        "treat": [
            "Whole Body Skeletal Study",
            "Vitrectomy",
            "Vasectomy",
            "Varicocelectomy",
            "Variceal Band Ligation"
        ],
        "location": "Clinica Alemana chile"
    },
    {
        "about": "",
        "location": "Giza",
        "name": "Bone and Joint Center, October 6 University Hospital",
        "treat": [
            "Lip Reduction",
            "Mentoplasty",
            "Metabolic Disorders",
            "Mini ByPass Surgery",
            "Neonatology"
        ],
        "country_name": "Egypt",
        "photo": "https://firebasestorage.googleapis.com/v0/b/medical-tourism-2367d.appspot.com/o/hospital%2Fprov.png?alt=media&token=0dc29c6e-06dd-47e4-a606-aac8e39aa9b1"
    },
    {
        "treat": [
            "ascular Access",
            "Vasectomy",
            "Varicose Vein Stripping",
            "Urology",
            "Ultrasound Breast"
        ],
        "country_name": "Spain",
        "about": "",
        "location": "Madrid",
        "photo": "https://firebasestorage.googleapis.com/v0/b/medical-tourism-2367d.appspot.com/o/hospital%2Fprov.png?alt=media&token=0dc29c6e-06dd-47e4-a606-aac8e39aa9b1",
        "name": "Bordonclinic"
    },
    {
        "treat": [
            "Stroke",
            "Stem Cell",
            "Rhinoplasty (Nose Repair/Reconstruction)",
            "Prostate Cancer – High-Intensity Focused Ultrasound (HIFU) treatment",
            "Physical Medicine and Rehabilitation"
        ],
        "location": "Tamilnadu",
        "about": "",
        "photo": "https://firebasestorage.googleapis.com/v0/b/medical-tourism-2367d.appspot.com/o/hospital%2Fprov.png?alt=media&token=0dc29c6e-06dd-47e4-a606-aac8e39aa9b1",
        "country_name": "India",
        "name": "Brain and Spine Hospital"
    },
    {
        "treat": [
            "Gum Surgery",
            "Gastric Bypass",
            "Endoscopic Surgery for DCR",
            "Dimple Creation",
            "Dental Surgery"
        ],
        "name": "Broward Health",
        "photo": "https://firebasestorage.googleapis.com/v0/b/medical-tourism-2367d.appspot.com/o/hospital%2Fprov.png?alt=media&token=0dc29c6e-06dd-47e4-a606-aac8e39aa9b1",
        "about": "",
        "country_name": "United States",
        "location": "Fort Lauderdale"
    },
    {
        "country_name": "Romania",
        "photo": "https://firebasestorage.googleapis.com/v0/b/medical-tourism-2367d.appspot.com/o/hospital%2Fprov.png?alt=media&token=0dc29c6e-06dd-47e4-a606-aac8e39aa9b1",
        "treat": [
            "Permanent Pacemaker Implantation (PPI) Double Chamber",
            "Peripheral Vascular Surgery",
            "Osteosarcoma",
            "Neck Lift",
            "Massage"
        ],
        "location": "Bucharest",
        "name": "Bucharest British Dental Place",
        "about": ""
    },
    {
        "photo": "https://firebasestorage.googleapis.com/v0/b/medical-tourism-2367d.appspot.com/o/hospital%2Fprov.png?alt=media&token=0dc29c6e-06dd-47e4-a606-aac8e39aa9b1",
        "name": "Budapest Top Dental",
        "about": "",
        "treat": [
            "Treatment of Stress Incontinence",
            "Total Hip Replacement",
            "Thigh Lift",
            "Tendinosis",
            "Surface Hip Replacement"
        ],
        "location": "Budapest",
        "country_name": "Hungary"
    },
    {
        "location": "London",
        "country_name": "United Kingdom",
        "photo": "https://firebasestorage.googleapis.com/v0/b/medical-tourism-2367d.appspot.com/o/hospital%2Fprov.png?alt=media&token=0dc29c6e-06dd-47e4-a606-aac8e39aa9b1",
        "treat": [
            "Dental Surgery",
            "Cystoscopy - Rigid",
            "Conventional Lasik",
            "Buttock Lift",
            "Botox"
        ],
        "about": "",
        "name": "Bupa Cromwell Hospital"
    },
    {
        "name": "CEVISA",
        "treat": [
            "Headache",
            "Lap. Gastric Banding",
            "Lung Cancer",
            "Micro-Laryngeal & Phonsurgery - Holmium & Diode Laser",
            "Mesotherapy"
        ],
        "about": "",
        "photo": "https://firebasestorage.googleapis.com/v0/b/medical-tourism-2367d.appspot.com/o/hospital%2Fprov.png?alt=media&token=0dc29c6e-06dd-47e4-a606-aac8e39aa9b1",
        "country_name": "Brazil",
        "location": "São Paulo"
    },
    {
        "location": "Izmir",
        "photo": "https://firebasestorage.googleapis.com/v0/b/medical-tourism-2367d.appspot.com/o/hospital%2Fprov.png?alt=media&token=0dc29c6e-06dd-47e4-a606-aac8e39aa9b1",
        "about": "",
        "name": "CTG Dental Group",
        "country_name": "Turkey",
        "treat": [
            "Fillings",
            "Root Canal Treatment",
            "Fixed Appliance Therapy",
            "Removable Appliance Therapy",
            "Gum Surgery",
            "Peridontal Scaling and Root Planing",
            "Crown - Porcelain/Ceramic",
            "Crown-Full Cast Predominantly Base Metal",
            "Crown-Porcelain Fused to High Noble Metal",
            "Crown-Porcelain Fused to Predominantly Base Metal",
            "Crowns and Bridges – Metal (Per Tooth)",
            "Crowns and Bridges – Procera (Per Tooth)",
            "Crowns and Bridges – Full Ceramic (Per Tooth)",
            "Crowns and Bridges – Porcelain Fused to Metal (Per Tooth)",
            "Veneers/Laminates"
        ]
    },
    {
        "about": "",
        "treat": [
            "Body Lift",
            "Ankylosing Spondylitis",
            "Allergy and Immunology",
            "Cardiac Catheterization and Angiography Coronary",
            "Capsulitis"
        ],
        "country_name": "Turkey",
        "photo": "https://firebasestorage.googleapis.com/v0/b/medical-tourism-2367d.appspot.com/o/hospital%2Fprov.png?alt=media&token=0dc29c6e-06dd-47e4-a606-aac8e39aa9b1",
        "location": "Izmir",
        "name": "Cadde Dental Clinic"
    },
    {
        "treat": [
            "LED Light Photodynamic Therapy (PTD)",
            "Jaw Augmentation",
            "Injury By Serious Burns",
            "Hand Surgery (Trauma)",
            "Gum Surgery"
        ],
        "country_name": "Turkey",
        "location": "Istanbul,",
        "photo": "https://firebasestorage.googleapis.com/v0/b/medical-tourism-2367d.appspot.com/o/hospital%2Fprov.png?alt=media&token=0dc29c6e-06dd-47e4-a606-aac8e39aa9b1",
        "about": "",
        "name": "Caginer Hospital"
    },
    {
        "name": "Calibre Clinic",
        "location": "WA",
        "photo": "https://firebasestorage.googleapis.com/v0/b/medical-tourism-2367d.appspot.com/o/hospital%2Fprov.png?alt=media&token=0dc29c6e-06dd-47e4-a606-aac8e39aa9b1",
        "about": "",
        "country_name": "Australia",
        "treat": [
            "MRI Breast",
            "MRI Angiography",
            "Liver Transplant",
            "Lip Reduction",
            "Lap Reconstructive Urology Renal Transplant"
        ]
    },
    {
        "photo": "https://firebasestorage.googleapis.com/v0/b/medical-tourism-2367d.appspot.com/o/hospital%2Fprov.png?alt=media&token=0dc29c6e-06dd-47e4-a606-aac8e39aa9b1",
        "country_name": "Italy",
        "about": "",
        "name": "Campus Bio-Medico University Hospital of Rome",
        "treat": [
            "Extraction (Simple)",
            "Laser Teeth Whitening",
            "Tooth Whitening",
            "Aorto-Femoral Bypass",
            "GUCH (Grown Up Congenital Heart) Surgery",
            "Carotid Endarterectomy",
            "Mediastinal Tumors",
            "Percutaneous Transluminal Peripheral Angioplasty with or without Stent",
            "Pacemaker/AICD Implantations",
            "Percutaneous Transluminal Coronary Angioplasty with or without Stent",
            "Pericardial Window",
            "Pericardiocentesis",
            "Body Contouring After Massive Weight Loss",
            "Breast Reconstruction",
            "Dermabrasion",
            "Laser Hair Removal",
            "Laser Skin Surfacing",
            "Rhinoplasty (Nose Repair/Reconstruction)",
            "Scar Removal",
            "Septoplasty or Submucous Resection",
            "Diabetes",
            "Apicoectomy/Periradicular Surgery",
            "Composite Fillings",
            "Fillings",
            "FLAP Surgery or Gingivectomy (Full Month Per Quadrant)",
            "Pulp CAP-Direct (Excluding Final Restoration)",
            "Pulp CAP-Indirect (Excluding Final Restoration)",
            "Retractment of Root Canal Treatment",
            "Root Canal Treatment",
            "Therapeutic Pulpotomy (Excluding Final Restoration)",
            "Diagnostic Colonoscopy",
            "Diagnostic Gastroscopy",
            "Diagnostic Upper GI Endoscopy",
            "Endoscopic Common Bile Duct Stone Removal",
            "Endoscopic Retrograde Cholangiopancreatography (ERCP)",
            "Endoscopic Stenting for Pancreatic Stricture",
            "Therapeutic Colonoscopy with Polypectomy",
            "Variceal Band Ligation",
            "Variceal Glue Injection",
            "Adult – Other Tumors",
            "Axillary Lymph Node Biopsy",
            "Brain Cancer",
            "Breast Cancer (CMF, FAC, FEC, 4 AC) - Chemotherapy",
            "Breast Cancer Radiotherapy",
            "Cervical Cancer",
            "Diagnosis, Tumour Staging and Treatment Plans",
            "Lung Cancer",
            "Ovarian Cancer",
            "Pancreatic Cancer",
            "Pediatric -Other Rare Tumors",
            "Prostate Cancer",
            "Glaucoma Surgery",
            "Retinal Detachment",
            "Vitrectomy + Retinal Detachment",
            "Extraction, Erupted Tooth or Exposed Root",
            "Removal of Impacted Tooth - Completely Bony",
            "Removal of Benign Odontogenic Cyst or Tumour",
            "Removal of Impacted Tooth - Partially Bony",
            "Removal of Impacted Tooth - Soft Tissue",
            "Arthroscopic Shoulder",
            "Arthroscopic Knee",
            "Clubfoot - Congenital Tallipes Equinovarus (CTEV)",
            "Complex Hand Surgeries (Microreconstruction/Repair)",
            "Corrective Surgery for Kyphosis/Scoliosis",
            "Diagnostic Knee/Shoulder/Ankle/Elbow/Wrist Arthroscopy (Arthroscopic Procedure)",
            "Hand Surgery (Trauma)",
            "Shoulder Stabilization (Arthroscopic Procedures)",
            "Subacromial Decompression (Shoulder) Rotator Cuff repair (Arthroscopic Procedures)",
            "Wrist Surgery",
            "Cochlear Implants",
            "Neurogenic Tests - Array-CGH Analysis",
            "Neurogenetic Tests - Congenital Deafness",
            "Neurogenic Tests - PTEN (Autism with Macrocephaly and Macrosomia)",
            "Neurogenetic Tests - Rett Syndrome",
            "Neuropsychiatric Diagnosis",
            "Therapeutics/Rehabilitative Acivities",
            "Periodonaal Flap Surgery or Gingivectomy",
            "Laser Cleaning",
            "Oral Prophylaxis - Cleaning and Polishing",
            "Pit and Fissure Sealing",
            "Regular Teeth Cleaning",
            "Subgingival Curettage and Root Planing",
            "Braces",
            "Complete Denture Mandibular",
            "Complete Denture Maxillary",
            "Overdenture - Complete",
            "Overdenture - Partial",
            "Partial Dentures",
            "Angioplasty and Vascular Stenting",
            "Radiofrequency Ablation of Liver Tumours",
            "Radiofrequency Ablation of Lung Tumouurs",
            "Vertebroplasty",
            "Sports Injuries",
            "Laparoscopic Surgery for Stress Incontinence",
            "Laser Treatment of Bladder Cancer",
            "Transurethral Resection of Bladder Tumour (TURBT)",
            "Vascular Surgery for Treatment of Impotence"
        ],
        "location": "Rome"
    },
    {
        "name": "Canadian Biologics Inc",
        "treat": [
            "Deformity Correction",
            "Diagnostic Tests",
            "Fillings",
            "Facial Fillers",
            "Headache"
        ],
        "about": "",
        "photo": "https://firebasestorage.googleapis.com/v0/b/medical-tourism-2367d.appspot.com/o/hospital%2Fprov.png?alt=media&token=0dc29c6e-06dd-47e4-a606-aac8e39aa9b1",
        "country_name": "Canada",
        "location": "Manitoba"
    },
    {
        "treat": [
            "Therapeutic Colonoscopy with Polypectomy",
            "TESA (Transepidermal Sperm Aspiration) Colonoscopy",
            "Subluxations"
        ],
        "about": "",
        "country_name": "India",
        "photo": "https://firebasestorage.googleapis.com/v0/b/medical-tourism-2367d.appspot.com/o/hospital%2Fprov.png?alt=media&token=0dc29c6e-06dd-47e4-a606-aac8e39aa9b1",
        "location": "Gujarat",
        "name": "Cancer"
    },
    {
        "treat": [
            "Capsulitis",
            "CT Angiography",
            "Endovascular Repair of Thoracic Aortic Aneurysm - Elective",
            "Erectile Dysfunction",
            "Deformity Correction"
        ],
        "location": "Maharashtra",
        "photo": "https://firebasestorage.googleapis.com/v0/b/medical-tourism-2367d.appspot.com/o/hospital%2Fprov.png?alt=media&token=0dc29c6e-06dd-47e4-a606-aac8e39aa9b1",
        "country_name": "India",
        "name": "Care 32 Dental Clinic",
        "about": ""
    },
    {
        "about": "",
        "country_name": "Mexico",
        "name": "Cristina Urbina Mendez",
        "location": "Yucatan",
        "treat": [
            "Peripheral & Renal Angioplasty",
            "Peripheral Vascular Surgery",
            "Permanent Pacemaker Implantation (PPI) - Single",
            "Physical Medicine and Rehabilitation"
        ],
        "photo": "https://firebasestorage.googleapis.com/v0/b/medical-tourism-2367d.appspot.com/o/hospital%2Fprov.png?alt=media&token=0dc29c6e-06dd-47e4-a606-aac8e39aa9b1"
    },
    {
        "country_name": "Turkey",
        "photo": "https://firebasestorage.googleapis.com/v0/b/medical-tourism-2367d.appspot.com/o/hospital%2Fprov.png?alt=media&token=0dc29c6e-06dd-47e4-a606-aac8e39aa9b1",
        "location": "Antalya",
        "treat": [
            "Ophthalmology",
            "Non-Surgical Otoplasty",
            "Osteoporosis",
            "Partial Dentures",
            "Permanent Pacemaker Implantation (PPI) - Single"
        ],
        "about": "",
        "name": "Carees Medical Tour Operator"
    },
    {
        "name": "Carolina Medical Center",
        "treat": [
            "Vascular Surgery ",
            "All on Six System with Megagen Implants",
            "Botulinum Toxin",
            "Haemodialysis",
            "Rheumatology"
        ],
        "photo": "https://firebasestorage.googleapis.com/v0/b/medical-tourism-2367d.appspot.com/o/hospital%2Fprov.png?alt=media&token=0dc29c6e-06dd-47e4-a606-aac8e39aa9b1",
        "country_name": "Poland",
        "location": "Mazowieckie",
        "about": ""
    },
    {
        "about": "",
        "treat": [
            "Radiofrequency Ablation",
            "Scar Removal",
            "Spine Surgery ",
            "Subluxations",
            "Tendon Dysfunctions"
        ],
        "name": "Carthago Med",
        "country_name": "Tunisia",
        "photo": "https://firebasestorage.googleapis.com/v0/b/medical-tourism-2367d.appspot.com/o/hospital%2Fprov.png?alt=media&token=0dc29c6e-06dd-47e4-a606-aac8e39aa9b1",
        "location": "Tunis"
    },
    {
        "about": "",
        "country_name": "Dominican Republic",
        "treat": [
            "Parathyroidectomy",
            "Sub Total Thyroidectomy",
            "Colorectal Surgery",
            "Diagnostic Colonoscopy",
            "Diagnostic Gastroscopy",
            "Diagnostic Upper GI Endoscopy",
            "Colposcopy",
            "Total Abdominal Hysterectomy",
            "Laparoscopic Vaginal Hysterectomy"
        ],
        "photo": "https://firebasestorage.googleapis.com/v0/b/medical-tourism-2367d.appspot.com/o/hospital%2Fprov.png?alt=media&token=0dc29c6e-06dd-47e4-a606-aac8e39aa9b1",
        "location": "San Domingo",
        "name": "Cedimat"
    },
    {
        "treat": [
            "Eye Allergy Diagnosis and Treatment",
            "Cavitation",
            "Autism"
        ],
        "name": "CedrusHealth Ltd.Comp.",
        "photo": "https://firebasestorage.googleapis.com/v0/b/medical-tourism-2367d.appspot.com/o/hospital%2Fprov.png?alt=media&token=0dc29c6e-06dd-47e4-a606-aac8e39aa9b1",
        "location": "Istanbul",
        "country_name": "Turkey",
        "about": ""
    },
    {
        "photo": "https://firebasestorage.googleapis.com/v0/b/medical-tourism-2367d.appspot.com/o/hospital%2Fprov.png?alt=media&token=0dc29c6e-06dd-47e4-a606-aac8e39aa9b1",
        "treat": [
            "Tendon Dysfunctions",
            "TC-99M Thyroid Scan"
        ],
        "country_name": "Mexico",
        "location": "Ciudad de México",
        "about": "",
        "name": "Celum Center"
    },
    {
        "location": "Newport News",
        "name": "Center for Weight Loss Success, P.C.",
        "photo": "https://firebasestorage.googleapis.com/v0/b/medical-tourism-2367d.appspot.com/o/hospital%2Fprov.png?alt=media&token=0dc29c6e-06dd-47e4-a606-aac8e39aa9b1",
        "about": "",
        "treat": [
            "TC-99M Thyroid Scan",
            "Varicose Vein Stripping",
            "ascular Access",
            "Zirconia Crown",
            "Whole Body Skeletal Study"
        ],
        "country_name": "United States"
    },
    {
        "country_name": "Ukraine",
        "treat": [
            "Thyroid Cancer",
            "Dermatology",
            "Abdominoplasty (Tummy Tuck)",
            "Vitiligo",
            "Treatment of Stress Incontinence"
        ],
        "photo": "https://firebasestorage.googleapis.com/v0/b/medical-tourism-2367d.appspot.com/o/hospital%2Fprov.png?alt=media&token=0dc29c6e-06dd-47e4-a606-aac8e39aa9b1https://firebasestorage.googleapis.com/v0/b/medical-tourism-2367d.appspot.com/o/hospital%2F5dc2e9e69bfc56571d333477_MTA%20Provider%20Logo%20Placeholder.svg?alt=media&token=4d4e2d1b-a994-4076-a98e-d11466ecdbd9",
        "about": "",
        "name": "Center of Cell Regeneration LLC",
        "location": "Kyiv"
    },
    {
        "photo": "https://firebasestorage.googleapis.com/v0/b/medical-tourism-2367d.appspot.com/o/hospital%2Fprov.png?alt=media&token=0dc29c6e-06dd-47e4-a606-aac8e39aa9b1",
        "location": "New Delhi",
        "treat": [
            "Total Elbow Replacement",
            "Total Hip Replacement",
            "Total Knee Replacement",
            "Total Shoulder Replacement"
        ],
        "name": "Centre for skin and hair by dr. Deepali Bhardwaj",
        "about": "",
        "country_name": "India"
    },
    {
        "country_name": "Dominican Republic",
        "location": "Distrito Nacional",
        "about": "",
        "photo": "https://firebasestorage.googleapis.com/v0/b/medical-tourism-2367d.appspot.com/o/hospital%2Fprov.png?alt=media&token=0dc29c6e-06dd-47e4-a606-aac8e39aa9b1",
        "treat": [
            "Stem Cell",
            "Sports Medicine",
            "Sports Injuries"
        ],
        "name": "Centro Medico Otorrino"
    },
    {
        "about": "",
        "location": "Duarte",
        "treat": [
            "Skincare",
            "Spinal Cord Injury",
            "Spinal Fusion",
            "Spine Surgery "
        ],
        "photo": "https://firebasestorage.googleapis.com/v0/b/medical-tourism-2367d.appspot.com/o/hospital%2Fprov.png?alt=media&token=0dc29c6e-06dd-47e4-a606-aac8e39aa9b1",
        "name": "Centro Médico Siglo 21",
        "country_name": "Dominican Republic"
    },
    {
        "about": "",
        "name": "CubaHeal Medical Tourism Inc",
        "country_name": "Canada",
        "location": "Ontario",
        "photo": "https://firebasestorage.googleapis.com/v0/b/medical-tourism-2367d.appspot.com/o/hospital%2Fprov.png?alt=media&token=0dc29c6e-06dd-47e4-a606-aac8e39aa9b1",
        "treat": [
            "MRI Angiography",
            "MRI Breast",
            "Magnetic Resonance Imaging (MRI) Body",
            "Malar Augmentation, Prosthetic Material"
        ]
    },
    {
        "treat": [
            "Balloon Aortic Valvuloplasty",
            "Liver Care",
            "Rhinoplasty (Nose Repair/Reconstruction)"
        ],
        "about": "",
        "location": "Lucern",
        "name": "Cereneo International AG",
        "country_name": "Switzerland",
        "photo": "https://firebasestorage.googleapis.com/v0/b/medical-tourism-2367d.appspot.com/o/hospital%2Fprov.png?alt=media&token=0dc29c6e-06dd-47e4-a606-aac8e39aa9b1"
    },
    {
        "about": "",
        "treat": [
            "GUCH (Grown Up Congenital Heart) Surgery",
            "Hair Transplant",
            "Haemodialysis"
        ],
        "country_name": "Czech Republic",
        "location": "Prague",
        "name": "Czech Medic",
        "photo": "https://firebasestorage.googleapis.com/v0/b/medical-tourism-2367d.appspot.com/o/hospital%2Fprov.png?alt=media&token=0dc29c6e-06dd-47e4-a606-aac8e39aa9b1"
    },
    {
        "about": "",
        "location": "Baja California",
        "country_name": "Mexico",
        "name": "Certified Bariatric surgeons.com",
        "treat": [
            "Syndromes Of Nerve Entrapments",
            "Wrinkles Removal",
            "Audiology"
        ],
        "photo": "https://firebasestorage.googleapis.com/v0/b/medical-tourism-2367d.appspot.com/o/hospital%2Fprov.png?alt=media&token=0dc29c6e-06dd-47e4-a606-aac8e39aa9b1"
    },
    {
        "treat": [
            "Fitness/Wellness Immersion",
            "Full Denture, Acrylic Teeth (Upper or Lower)",
            "Full Denture, Porcelain Teeth (Upper or Lower)"
        ],
        "about": "",
        "country_name": "Egypt",
        "location": "Toledo",
        "name": "Change me clinic",
        "photo": "https://firebasestorage.googleapis.com/v0/b/medical-tourism-2367d.appspot.com/o/hospital%2Fprov.png?alt=media&token=0dc29c6e-06dd-47e4-a606-aac8e39aa9b1"
    },
    {
        "photo": "https://firebasestorage.googleapis.com/v0/b/medical-tourism-2367d.appspot.com/o/hospital%2Fprov.png?alt=media&token=0dc29c6e-06dd-47e4-a606-aac8e39aa9b1",
        "treat": [
            "Zirconia Crown",
            "Urethroscopy - Laser Lithotripsy",
            "Thermage®"
        ],
        "about": "",
        "location": "Dubai",
        "name": "Charly Poly Clinic @ Medstar",
        "country_name": "United Arab Emirates"
    },
    {
        "about": "",
        "country_name": "Mexico  ",
        "name": "Christus Muguerza Hospital Conchita",
        "treat": [
            "Variceal Band Ligation",
            "VATS (Video-Assisted Thoracic Surgery)",
            "Therapeutic Colonoscopy with Polypectomy"
        ],
        "location": "Nuevo León",
        "photo": "https://firebasestorage.googleapis.com/v0/b/medical-tourism-2367d.appspot.com/o/hospital%2Fprov.png?alt=media&token=0dc29c6e-06dd-47e4-a606-aac8e39aa9b1"
    },
    {
        "about": "",
        "country_name": "United States",
        "location": "Cincinnati",
        "treat": [
            "Unilateral Total Knee Replacement Revision",
            "Respiratory Care",
            "Eye Allergy Diagnosis and Treatment"
        ],
        "name": "Cincinnati Children Hospital",
        "photo": "https://firebasestorage.googleapis.com/v0/b/medical-tourism-2367d.appspot.com/o/hospital%2Fprov.png?alt=media&token=0dc29c6e-06dd-47e4-a606-aac8e39aa9b1"
    },
    {
        "name": "City International Hospital (Vietnam)",
        "about": "",
        "country_name": "Russia",
        "treat": [
            "Jaw Augmentation",
            "Joint Replacement",
            "Kidney Transplant",
            "Kidney Transplantation"
        ],
        "location": "Ho Chi Minh City",
        "photo": "https://firebasestorage.googleapis.com/v0/b/medical-tourism-2367d.appspot.com/o/hospital%2Fprov.png?alt=media&token=0dc29c6e-06dd-47e4-a606-aac8e39aa9b1"
    },
    {
        "name": "City of Sultans",
        "location": "Besiktas",
        "photo": "https://firebasestorage.googleapis.com/v0/b/medical-tourism-2367d.appspot.com/o/hospital%2Fprov.png?alt=media&token=0dc29c6e-06dd-47e4-a606-aac8e39aa9b1",
        "treat": [
            "Electrolipolysis",
            "Endoscopic Nasal/Sinus Surgeries",
            "Erectile Dysfunction"
        ],
        "about": "",
        "country_name": "Turkey"
    },
    {
        "location": "Kaunas",
        "about": "",
        "name": "Clinic AGATAS",
        "treat": [
            "Ankylosing Spondylitis",
            "AVR – Aortic Valve Replacement ",
            "Inguinal Hernioplasty"
        ],
        "country_name": "Lithuania",
        "photo": "https://firebasestorage.googleapis.com/v0/b/medical-tourism-2367d.appspot.com/o/hospital%2Fprov.png?alt=media&token=0dc29c6e-06dd-47e4-a606-aac8e39aa9b1"
    },
    {
        "location": "Alicante",
        "photo": "https://firebasestorage.googleapis.com/v0/b/medical-tourism-2367d.appspot.com/o/hospital%2Fprov.png?alt=media&token=0dc29c6e-06dd-47e4-a606-aac8e39aa9b1",
        "country_name": "Spain",
        "about": "",
        "treat": [
            "Eyelid Surgery - Upper and Lower",
            "Facial Fillers",
            "Facial Peels"
        ],
        "name": "Clinica Dental INT Diamante"
    },
    {
        "photo": "https://firebasestorage.googleapis.com/v0/b/medical-tourism-2367d.appspot.com/o/hospital%2Fprov.png?alt=media&token=0dc29c6e-06dd-47e4-a606-aac8e39aa9b1",
        "location": "MedCare Austria - Tratamente in Strainatate. Austria ",
        "treat": [
            "Eye Allergy Diagnosis and Treatment",
            "Eye Lid Lift - Blepharoplasty",
            "Eyelid Surgery - Upper and Lower"
        ],
        "country_name": "Austria",
        "about": "It is renowned worldwide for the quality of its medical care and that same quality is now available at our center. Our Medical Centre is a healthcare facility which offers the highest standards of medical care to be found in a confidential and relaxing atmosphere. ",
        "name": "MedCare Austria - Tratamente in Strainatate. Austria "
    },
    {
        "country_name": "Slovakia",
        "photo": "https://firebasestorage.googleapis.com/v0/b/medical-tourism-2367d.appspot.com/o/hospital%2Fprov.png?alt=media&token=0dc29c6e-06dd-47e4-a606-aac8e39aa9b1",
        "treat": [
            "Corrective jaw Surgery",
            "Crown - Porcelain/Ceramic",
            "Diabetes"
        ],
        "location": "Bratislava",
        "about": "",
        "name": "Clinica Orhopedica"
    },
    {
        "about": "",
        "location": "San José",
        "treat": [
            "Arthroscopic Knee",
            "Breast Biopsy Ultrasound Guided",
            "Breast Biopsy Ultrasound Guided"
        ],
        "name": "Clinica UNIBE",
        "country_name": " Costa Rica",
        "photo": "https://firebasestorage.googleapis.com/v0/b/medical-tourism-2367d.appspot.com/o/hospital%2Fprov.png?alt=media&token=0dc29c6e-06dd-47e4-a606-aac8e39aa9b1"
    },
    {
        "country_name": "Australia",
        "about": "Sydney Hospital is a major hospital in Australia, located on Macquarie Street in the Sydney central business district. It is the oldest hospital in Australia, dating back to 1788, and has been at its current location since 1811. It first received the name Sydney Hospital in 1881",
        "name": "Sydney Medical Centre",
        "treat": [
            "MHE(Multiple Hereditary Exostoses)",
            "AVR – Aortic Valve Replacement ",
            "Acne",
            "Adenoidectomy",
            "Addiction Treatment",
            "Advanced Checkup",
            "Aging Skin",
            "Amputations"
        ],
        "photo": "photo",
        "location": "Sydney Medical Centre Australia"
    },
    {
        "photo": "https://firebasestorage.googleapis.com/v0/b/medical-tourism-2367d.appspot.com/o/hospital%2Fprov.png?alt=media&token=0dc29c6e-06dd-47e4-a606-aac8e39aa9b1",
        "name": "Clinichair Turkey, Hair Transplantation Clinic",
        "country_name": "Turkey",
        "treat": [
            "Calf Augmentation",
            "Cataract with Phaco and Multifocal Foldable Lens",
            "Chronic Obstructive Pulmonary Disease (COPD)"
        ],
        "location": "Bayrakli",
        "about": ""
    },
    {
        "country_name": "Ireland",
        "name": "Whitehall Medical Centre",
        "about": "It is renowned worldwide for the quality of its medical care and that same quality is now available at our center. Our Medical Centre is a healthcare facility which offers the highest standards of medical care to be found in a confidential and relaxing atmosphere. ",
        "location": "Whitehall Medical Centre Ireland",
        "photo": "photo",
        "treat": [
            "MHE(Multiple Hereditary Exostoses)",
            "AVR – Aortic Valve Replacement ",
            "Acne",
            "Adenoidectomy",
            "Addiction Treatment",
            "Advanced Checkup",
            "Aging Skin",
            "Amputations"
        ]
    },
    {
        "treat": [
            "Abdominoplasty (Tummy Tuck)",
            "Aneurysm Surgery - Iliac Endo",
            "Arthroscopic Knee"
        ],
        "name": "Clinique La Corniche",
        "country_name": "Tunisia",
        "location": "Sousse",
        "about": "",
        "photo": "https://firebasestorage.googleapis.com/v0/b/medical-tourism-2367d.appspot.com/o/hospital%2Fprov.png?alt=media&token=0dc29c6e-06dd-47e4-a606-aac8e39aa9b1"
    },
    {
        "treat": [
            "MHE(Multiple Hereditary Exostoses)",
            "AVR – Aortic Valve Replacement ",
            "Acne",
            "Adenoidectomy",
            "Addiction Treatment",
            "Advanced Checkup",
            "Aging Skin",
            "Amputations"
        ],
        "name": "Canadian Medical Center abu dhabi",
        "about": "The Canadian Medical Center boasting highly-expert practitioners and surgeons from the top educational hospitals around the world, including 30+ specialties and home healthcare service to meet the needs of our patients. We are aware that going through medical situations is a very unpleasant experience, but our friendly veteran team ensures to provide a high level of healthcare to our patients in a comfortable environment with excellent service that provides our patients with quiet and good experience.",
        "location": "Canadian Medical Center abu dhabi",
        "photo": "photo",
        "country_name": "Abu Dhabi"
    },
    {
        "treat": [
            "MHE(Multiple Hereditary Exostoses)",
            "AVR – Aortic Valve Replacement ",
            "Acne",
            "Adenoidectomy",
            "Addiction Treatment",
            "Advanced Checkup",
            "Aging Skin",
            "Amputations"
        ],
        "country_name": "Argentina",
        "location": "Swiss Medical Center Barrio Norte Argentina",
        "photo": "photo",
        "name": "Swiss Medical Center Barrio Norte",
        "about": "It is renowned worldwide for the quality of its medical care and that same quality is now available at our center. Our Medical Centre is a healthcare facility which offers the highest standards of medical care to be found in a confidential and relaxing atmosphere. "
    },
    {
        "name": "Rudolfinerhaus private clinic GmbH",
        "treat": [
            "MHE(Multiple Hereditary Exostoses)",
            "AVR – Aortic Valve Replacement ",
            "Acne",
            "Adenoidectomy",
            "Addiction Treatment",
            "Advanced Checkup",
            "Aging Skin",
            "Amputations"
        ],
        "country_name": "Austria",
        "location": "Rudolfinerhaus private clinic GmbH Austria",
        "about": "It is renowned worldwide for the quality of its medical care and that same quality is now available at our center. Our Medical Centre is a healthcare facility which offers the highest standards of medical care to be found in a confidential and relaxing atmosphere. ",
        "photo": "photo"
    },
    {
        "country_name": "Spain",
        "treat": [
            "MHE(Multiple Hereditary Exostoses)",
            "AVR – Aortic Valve Replacement ",
            "Acne",
            "Adenoidectomy",
            "Addiction Treatment",
            "Advanced Checkup",
            "Aging Skin",
            "Amputations"
        ],
        "name": "100Pasos",
        "about": "Hello",
        "photo": "photo",
        "location": "Toledo"
    },
    {
        "name": "DENT KM A?IZ VE D?? SA?LI?I POL?KL?N???",
        "treat": [
            "Dermatology",
            "Diagnostic Upper GI Endoscopy",
            "Dimple Creation"
        ],
        "country_name": "Turkey  ",
        "about": "",
        "location": "Izmir",
        "photo": "https://firebasestorage.googleapis.com/v0/b/medical-tourism-2367d.appspot.com/o/hospital%2Fprov.png?alt=media&token=0dc29c6e-06dd-47e4-a606-aac8e39aa9b1"
    },
    {
        "name": "Health Service Center",
        "about": "It is renowned worldwide for the quality of its medical care and that same quality is now available at our center. Our Medical Centre is a healthcare facility which offers the highest standards of medical care to be found in a confidential and relaxing atmosphere. ",
        "location": "Health Service Center Austria",
        "treat": [
            "MHE(Multiple Hereditary Exostoses)",
            "AVR – Aortic Valve Replacement ",
            "Acne",
            "Adenoidectomy",
            "Addiction Treatment",
            "Advanced Checkup",
            "Aging Skin",
            "Amputations"
        ],
        "country_name": "Austria",
        "photo": "photo"
    },
    {
        "about": "",
        "country_name": "Ukraine",
        "location": "Vinnytsia",
        "treat": [
            "Coronary Angiography",
            "Craniotomy for Supratentorial Tumours",
            "Cornea Transplantation"
        ],
        "photo": "https://firebasestorage.googleapis.com/v0/b/medical-tourism-2367d.appspot.com/o/hospital%2Fprov.png?alt=media&token=0dc29c6e-06dd-47e4-a606-aac8e39aa9b1",
        "name": "DVB SP"
    },
    {
        "about": "TWAREAT MEDICAL COMPANY is located in Al Khobar, Saudi Arabia and is part of the Staffing Services Industry. TWAREAT MEDICAL COMPANY has 300 employees at this location and generates $25.08 million in sales (USD).  D&B Hoovers provides sales leads and sales intelligence data on over 120 million companies like TWAREAT MEDICAL COMPANY around the world, including contacts, financials, and competitor information. To witness the full depth and breadth of our data and for industry leading sales intelligence tools, take D&B Hoovers for a test drive.",
        "photo": "photo",
        "treat": [
            "MHE(Multiple Hereditary Exostoses)",
            "AVR – Aortic Valve Replacement ",
            "Acne",
            "Adenoidectomy",
            "Addiction Treatment",
            "Advanced Checkup",
            "Aging Skin",
            "Amputations"
        ],
        "name": "Twareat Medical Center",
        "country_name": "Saudi Arabia",
        "location": "Twareat Medical Center,Saudi Arebia"
    },
    {
        "about": "",
        "photo": "https://firebasestorage.googleapis.com/v0/b/medical-tourism-2367d.appspot.com/o/hospital%2Fprov.png?alt=media&token=0dc29c6e-06dd-47e4-a606-aac8e39aa9b1",
        "name": "Dantu Implantacijos Klinika",
        "treat": [
            "Buttocks Augmentation",
            "Cardiology",
            "Cataract with Phaco and Foldable Lens"
        ],
        "country_name": "Lithuania",
        "location": "Kaunas"
    },
    {
        "treat": [
            "MHE(Multiple Hereditary Exostoses)",
            "AVR – Aortic Valve Replacement ",
            "Acne",
            "Adenoidectomy",
            "Addiction Treatment",
            "Advanced Checkup",
            "Aging Skin",
            "Amputations"
        ],
        "photo": "photo",
        "country_name": "Italy",
        "about": "The University of Pittsburgh Medical Center (UPMC) is a $21 billion integrated global nonprofit health enterprise that has 89,000 employees, 40 hospitals with more than 8,000 licensed beds, 700 clinical locations including outpatient sites and doctors' offices, a 3.7 million-member health insurance division, as well as commercial and international ventures.",
        "name": "University Of Pittsburgh Medical Center Italy",
        "location": "University Of Pittsburgh Medical Center Italy"
    },
    {
        "name": "El Salvador MedCenter",
        "location": "El Salvador MedCenter ",
        "about": "El Salvador Med Center is the first medical center specialized in the application of research and training of adult stem cells in Central America.  With the highest commitment to exceed the satisfaction of our patients.   We provide a safe therapy to patients who have been diagnosed with chronic diseases, in order to improve the regenerative capacity of the body, through Stem Cells derived from their own fat, with the highest quality standards to satisfy our patients.",
        "treat": [
            "MHE(Multiple Hereditary Exostoses)",
            "AVR – Aortic Valve Replacement ",
            "Acne",
            "Adenoidectomy",
            "Addiction Treatment",
            "Advanced Checkup",
            "Aging Skin",
            "Amputations"
        ],
        "photo": "photo",
        "country_name": "El Salvador"
    },
    {
        "treat": [
            "MHE(Multiple Hereditary Exostoses)",
            "AVR – Aortic Valve Replacement ",
            "Acne",
            "Adenoidectomy",
            "Addiction Treatment",
            "Advanced Checkup",
            "Aging Skin",
            "Amputations"
        ],
        "location": "PAH - Portugal Advanced Health Portugal",
        "about": "PAH, a pioneer in Portugal in hyperbaric treatments at 1.4 atm (atmosphere) aims to be a network of centers of excellence and already has its first point located in the center of Lisbon.",
        "photo": "photo",
        "name": "PAH - Portugal Advanced Health",
        "country_name": "Portugal"
    },
    {
        "location": "Australia Fair Medical Centre Australia",
        "name": "Australia Fair Medical Centre",
        "country_name": "Australia",
        "photo": "photo",
        "treat": [
            "MHE(Multiple Hereditary Exostoses)",
            "AVR – Aortic Valve Replacement ",
            "Acne",
            "Adenoidectomy",
            "Addiction Treatment",
            "Advanced Checkup",
            "Aging Skin",
            "Amputations"
        ],
        "about": "It is renowned worldwide for the quality of its medical care and that same quality is now available at our center. Our Medical Centre is a healthcare facility which offers the highest standards of medical care to be found in a confidential and relaxing atmosphere. "
    },
    {
        "name": "Nairi Medical Center",
        "country_name": "Armenia",
        "location": "Nairi Medical Center Armenia",
        "treat": [
            "MHE(Multiple Hereditary Exostoses)",
            "AVR – Aortic Valve Replacement ",
            "Acne",
            "Adenoidectomy",
            "Addiction Treatment",
            "Advanced Checkup",
            "Aging Skin",
            "Amputations"
        ],
        "about": "Nairi Medical Center is the leading medical institution of the Republic of Armenia, where both for local population and foreigners we provide multidisciplinary, highly qualified medical care in accordance with world standards.",
        "photo": "photo"
    },
    {
        "country_name": "Australia",
        "location": "Australian Health Care Centre Kirrawee Australia",
        "about": "It is renowned worldwide for the quality of its medical care and that same quality is now available at our center. Our Medical Centre is a healthcare facility which offers the highest standards of medical care to be found in a confidential and relaxing atmosphere. ",
        "name": "Australian Health Care Centre Kirrawee",
        "photo": "photo",
        "treat": [
            "MHE(Multiple Hereditary Exostoses)",
            "AVR – Aortic Valve Replacement ",
            "Acne",
            "Adenoidectomy",
            "Addiction Treatment",
            "Advanced Checkup",
            "Aging Skin",
            "Amputations"
        ]
    },
    {
        "treat": [
            "MHE(Multiple Hereditary Exostoses)",
            "AVR – Aortic Valve Replacement ",
            "Acne",
            "Adenoidectomy",
            "Addiction Treatment",
            "Advanced Checkup",
            "Aging Skin",
            "Amputations"
        ],
        "location": "Toledo",
        "about": "Hello",
        "country_name": "Spain",
        "name": "100Pasos",
        "photo": "photo"
    },
    {
        "about": "The Clinical Centre Of Serbia is an academic health science centre located in Belgrade, Serbia. It serves as the main medical centre for both Belgrade and the rest of Serbia",
        "name": "Clinical Centre of Serbia",
        "treat": [
            "MHE(Multiple Hereditary Exostoses)",
            "AVR – Aortic Valve Replacement ",
            "Acne",
            "Adenoidectomy",
            "Addiction Treatment",
            "Advanced Checkup",
            "Aging Skin",
            "Amputations"
        ],
        "country_name": "Serbia",
        "photo": "photo",
        "location": "Clinical Centre of Serbia,serbia"
    },
    {
        "name": "Harley Street Medical Centre",
        "about": "'Harley Street is renowned worldwide for the quality of its medical care and that same quality is now available in Abu Dhabi. Harley Street Medical Centre is a healthcare facility new to Abu Dhabi which offers the highest standards of medical care to be found in the UAE in a confidential and relaxing atmosphere. ",
        "photo": "photo",
        "country_name": "Abu Dhabi",
        "location": "Harley Street Medical Centre Abu Dhabi",
        "treat": [
            "MHE(Multiple Hereditary Exostoses)",
            "AVR – Aortic Valve Replacement ",
            "Acne",
            "Adenoidectomy",
            "Addiction Treatment",
            "Advanced Checkup",
            "Aging Skin",
            "Amputations"
        ]
    },
    {
        "photo": "photo",
        "about": "It is renowned worldwide for the quality of its medical care and that same quality is now available at our center. Our Medical Centre is a healthcare facility which offers the highest standards of medical care to be found in a confidential and relaxing atmosphere. ",
        "location": "Swiss Medical Center Microcentro Argentina",
        "country_name": "Argentina",
        "name": "Swiss Medical Center Microcentro",
        "treat": [
            "MHE(Multiple Hereditary Exostoses)",
            "AVR – Aortic Valve Replacement ",
            "Acne",
            "Adenoidectomy",
            "Addiction Treatment",
            "Advanced Checkup",
            "Aging Skin",
            "Amputations"
        ]
    },
    {
        "photo": "photo",
        "about": "We will always strive to be the trend of modern business and provide our customers with the best service to meet their wants and needs.” An old Chinese proverb says: “Even the longest journey starts with a small step.” It was the same way and at the same time this started in 2016. Elite Medical, To the persistent and dedicated work of a dynamic and young team of experts turn into one of the leading national companies in Serbia. Rapid social and market developments directed our development, customer or client has always come first because it is one of our basic assumptions that we can operate only if the customer buys, uses, and is satisfied. Persistence business strategy laid the foundation for the development of customer trust-enabled clients and expansion of partnerships at all levels and countries.",
        "country_name": "Serbia",
        "name": "Elite Medical Serbia",
        "treat": [
            "MHE(Multiple Hereditary Exostoses)",
            "AVR – Aortic Valve Replacement ",
            "Acne",
            "Adenoidectomy",
            "Addiction Treatment",
            "Advanced Checkup",
            "Aging Skin",
            "Amputations"
        ],
        "location": "Elite Medical Serbia,serbia"
    },
    {
        "treat": [
            "MHE(Multiple Hereditary Exostoses)",
            "AVR – Aortic Valve Replacement ",
            "Acne",
            "Adenoidectomy",
            "Addiction Treatment",
            "Advanced Checkup",
            "Aging Skin",
            "Amputations"
        ],
        "photo": "photo",
        "country_name": "Israel",
        "location": "Barzilai Medical Center Israel",
        "about": "Barzilai Medical Center is a 617-bed hospital in Ashkelon in southern Israel. The hospital serves a population of 500,000, including a large number of Ethiopian and Russian immigrants, and has more than 100,000 admissions annually.",
        "name": "Barzilai Medical Center"
    },
    {
        "photo": "photo",
        "name": "CENTRE MEDICAL AUSTRALIEN Morocoo",
        "about": "We at Central Medical Australian Morocoo have experts of adult medicine and prevention of aging. Anti-aging medicine. Lasers and Aesthetics without surgery. Management of overweight and obesity. Adult medicine and functional medicine: fatigue, stress.",
        "country_name": "Morocoo",
        "location": "8 ghandi mall Casablanca -Maroc، Boulevard Ghandi، Casablanca, Morocco",
        "treat": [
            "MHE(Multiple Hereditary Exostoses)",
            "AVR – Aortic Valve Replacement ",
            "Acne",
            "Adenoidectomy",
            "Addiction Treatment",
            "Advanced Checkup",
            "Aging Skin",
            "Amputations"
        ]
    },
    {
        "about": "The Hospital Universitario San Ignacio is a 4th level university hospital in Bogotá, Colombia. It is located within campus of the Pontificia Universidad Javeriana and is home to this school's faculties of Medicine, Nursing and Dentistry",
        "photo": "photo",
        "country_name": "Colombia",
        "name": "Hospital Universitario San Ignacio",
        "location": "Hospital Universitario San Ignacio Colombia",
        "treat": [
            "MHE(Multiple Hereditary Exostoses)",
            "AVR – Aortic Valve Replacement ",
            "Acne",
            "Adenoidectomy",
            "Addiction Treatment",
            "Advanced Checkup",
            "Aging Skin",
            "Amputations"
        ]
    },
    {
        "photo": "photo",
        "treat": [
            "MHE(Multiple Hereditary Exostoses)",
            "AVR – Aortic Valve Replacement ",
            "Acne",
            "Adenoidectomy",
            "Addiction Treatment",
            "Advanced Checkup",
            "Aging Skin",
            "Amputations"
        ],
        "name": "Sina Hospital",
        "country_name": "Iran",
        "location": "Sina Hospital Iran",
        "about": "Sina University Hospital is the first Iranian hospital established in 1837 in the Iran, started to work as the head of the surgery"
    },
    {
        "photo": "photo",
        "name": "Hospital de Kennedy",
        "treat": [
            "MHE(Multiple Hereditary Exostoses)",
            "AVR – Aortic Valve Replacement ",
            "Acne",
            "Adenoidectomy",
            "Addiction Treatment",
            "Advanced Checkup",
            "Aging Skin",
            "Amputations"
        ],
        "about": "It is renowned worldwide for the quality of its medical care and that same quality is now available at our center. Our Medical Centre is a healthcare facility which offers the highest standards of medical care to be found in a confidential and relaxing atmosphere. ",
        "country_name": "Colombia",
        "location": "Hospital de Kennedy Colombia"
    },
    {
        "treat": [
            "MHE(Multiple Hereditary Exostoses)",
            "AVR – Aortic Valve Replacement ",
            "Acne",
            "Adenoidectomy",
            "Addiction Treatment",
            "Advanced Checkup",
            "Aging Skin",
            "Amputations"
        ],
        "photo": "photo",
        "name": "King Fahad Medical City - KFMC",
        "about": "King Fahd Medical City is a medical facility in Riyadh, Saudi Arabia. With four hospitals, KFMC is the largest medical facility in Saudi Arabia. It was built at a cost of $633 million. KFMC’s yearly operating budget is estimated at $150 million for medical and non-medical maintenance and catering contracts.",
        "country_name": "Saudi Arebia",
        "location": "King Fahad Medical City - KFMC,Saudi Arebia"
    },
    {
        "name": "International Medical Center 84 'Srl ",
        "about": "It was established in 1997 by William S. Freilich, MD FACEP and offers medical services by English-speaking doctors. It provides assistance to the international English-speaking community as well as the Italian Milan community. AIMC shares a philosophy of medicine that incorporates a commitment of care and quality.",
        "treat": [
            "MHE(Multiple Hereditary Exostoses)",
            "AVR – Aortic Valve Replacement ",
            "Acne",
            "Adenoidectomy",
            "Addiction Treatment",
            "Advanced Checkup",
            "Aging Skin",
            "Amputations"
        ],
        "photo": "photo",
        "location": "International Medical Center 84 'Srl Italy",
        "country_name": "Italy"
    },
    {
        "treat": [
            "MHE(Multiple Hereditary Exostoses)",
            "AVR – Aortic Valve Replacement ",
            "Acne",
            "Adenoidectomy",
            "Addiction Treatment",
            "Advanced Checkup",
            "Aging Skin",
            "Amputations"
        ],
        "photo": "photo",
        "name": "Novartis Chile S A",
        "location": "Novartis Chile S A chile",
        "country_name": "Chile",
        "about": "It is renowned worldwide for the quality of its medical care and that same quality is now available at our center. Our Medical Centre is a healthcare facility which offers the highest standards of medical care to be found in a confidential and relaxing atmosphere. "
    },
    {
        "country_name": "Dubai",
        "name": "LMC Medical Center - Dubai",
        "location": "LMC Medical Center  Dubai",
        "about": "LMC Provides an exceptional medical and dental services from highly-qualified speciatreatments, each one is fully qualified and has a wealth of experience in their chosen field of specialization.",
        "treat": [
            "MHE(Multiple Hereditary Exostoses)",
            "AVR – Aortic Valve Replacement ",
            "Acne",
            "Adenoidectomy",
            "Addiction Treatment",
            "Advanced Checkup",
            "Aging Skin",
            "Amputations"
        ],
        "photo": "photo"
    },
    {
        "location": "NMC Royal Medical Centre Karama Abu Dhabi",
        "photo": "photo",
        "name": "NMC Royal Medical Centre Karama Abu Dhabi",
        "country_name": "Abu Dhabi",
        "about": "NMC Royal Medical Centre, Abu Dhabi provides comprehensive multi-specialty services in a state-of-the-art Clinic with a luxurious setting under one roof. With a high standard of service and exclusive ambience in the heart of Abu Dhabi.",
        "treat": [
            "MHE(Multiple Hereditary Exostoses)",
            "AVR – Aortic Valve Replacement ",
            "Acne",
            "Adenoidectomy",
            "Addiction Treatment",
            "Advanced Checkup",
            "Aging Skin",
            "Amputations"
        ]
    },
    {
        "about": "International Medical Center or IMC is a large hospital in Jeddah, Saudi Arabia, and was built in 2005. The CEO of the Center is Dr. Walid Fitaihi. The IMC is a multi-disciplinary hospital that features specialty centers providing a wide range of comprehensive treatment options for different health problems.",
        "country_name": "Saudi Arebia",
        "photo": "photo",
        "treat": [
            "MHE(Multiple Hereditary Exostoses)",
            "AVR – Aortic Valve Replacement ",
            "Acne",
            "Adenoidectomy",
            "Addiction Treatment",
            "Advanced Checkup",
            "Aging Skin",
            "Amputations"
        ],
        "location": "International Medical Center Hospital,Saudi Arebia",
        "name": "International Medical Center Hospital"
    },
    {
        "name": "Medicover Hospital Hungary",
        "treat": [
            "MHE(Multiple Hereditary Exostoses)",
            "AVR – Aortic Valve Replacement ",
            "Acne",
            "Adenoidectomy",
            "Addiction Treatment",
            "Advanced Checkup",
            "Aging Skin",
            "Amputations"
        ],
        "photo": "photo",
        "country_name": "Hungary",
        "location": "Medicover Hospital Hungary",
        "about": " Medicover Private Hospital’s speciatreatments and staff have decades of history, references and extensive experience, and provide a wide range of healthcare services in nearly 40 specialties. We have selected our speciatreatments from among the best-known authorities in the country with serious expertise and extensive experience. In addition to an experienced doctor, modern diagnostic tools that provide an excellent image are also needed for a good diagnosis."
    },
    {
        "country_name": "France",
        "name": "Médica France",
        "photo": "photo",
        "location": "Médica France 74190 Passy, France",
        "about": "It is renowned worldwide for the quality of its medical care and that same quality is now available at our center. Our Medical Centre is a healthcare facility which offers the highest standards of medical care to be found in a confidential and relaxing atmosphere. ",
        "treat": [
            "MHE(Multiple Hereditary Exostoses)",
            "AVR – Aortic Valve Replacement ",
            "Acne",
            "Adenoidectomy",
            "Addiction Treatment",
            "Advanced Checkup",
            "Aging Skin",
            "Amputations"
        ]
    },
    {
        "about": "Marina Medical Center is an initiative towards helping individuals in fulfilling the choice of staying in good health through its multi-specialty health care services. The Medical center offers affordable health care services to each member of the community without comprising on the quality, safety, and the reputable standard of delivering medical services.",
        "country_name": "Dubai",
        "name": "Marina Medical Center, Dubai Marina Clinics",
        "location": "Marina Medical Center, Dubai Marina Clinics Dubai",
        "photo": "photo",
        "treat": [
            "MHE(Multiple Hereditary Exostoses)",
            "AVR – Aortic Valve Replacement ",
            "Acne",
            "Adenoidectomy",
            "Addiction Treatment",
            "Advanced Checkup",
            "Aging Skin",
            "Amputations"
        ]
    },
    {
        "photo": "photo",
        "about": "Our clinic has been conceived by experts in the medical field to provide the people living in Malta with high-quality health care service within a unique location based in Naxxar",
        "name": "St. Francis Medical Center",
        "treat": [
            "MHE(Multiple Hereditary Exostoses)",
            "AVR – Aortic Valve Replacement ",
            "Acne",
            "Adenoidectomy",
            "Addiction Treatment",
            "Advanced Checkup",
            "Aging Skin",
            "Amputations"
        ],
        "location": "St. Francis Medical Center Malta",
        "country_name": "Malta"
    },
    {
        "location": "Talbot St Medical Centre Ireland",
        "country_name": "Ireland",
        "name": "Talbot St Medical Centre",
        "photo": "photo",
        "about": "Welcome to Talbot Street Medical Centre. The surgery was opened in 2007 by Dr. Suzanne Kenny who graduated from the Royal College of Surgeons Ireland in 1997.  Talbot Street Medical Centre caters for walk in patients as well as appointments. We also cater for medical card holders and European card holders.   We practice in family medicine, family planning, maternity and infants, travel medicine, blood tests and sexual health screening. The medical centre also offers pre-employment medicals.",
        "treat": [
            "MHE(Multiple Hereditary Exostoses)",
            "AVR – Aortic Valve Replacement ",
            "Acne",
            "Adenoidectomy",
            "Addiction Treatment",
            "Advanced Checkup",
            "Aging Skin",
            "Amputations"
        ]
    },
    {
        "name": "Parkway Health Medical Center",
        "photo": "photo",
        "about": "Parkway Pantai is Asia's Leading Healthcare Provider, part of IHH Healthcare, one of the largest healthcare providers in the world by market capitalization. Its operates 80 hospitals with more than 15,000 beds in 10 countries. ParkwayHealth China is a leading international healthcare provider.",
        "location": "Parkway Health Medical Center Shanghai",
        "country_name": "China",
        "treat": [
            "MHE(Multiple Hereditary Exostoses)",
            "AVR – Aortic Valve Replacement ",
            "Acne",
            "Adenoidectomy",
            "Addiction Treatment",
            "Advanced Checkup",
            "Aging Skin",
            "Amputations"
        ]
    },
    {
        "name": "IMC Medical Center | IMC Clinic Albarsha, Dubai",
        "about": "IMC Medical Center, where our patients are always treated with personal and professional care in a friendly environment. We offer highly skilled clinicians, and state-of-the-art treatments and equipment in Dermatology, Plastic Surgery, Beauty & Aesthetics, Dental, Obstetrics, Gynecology and more",
        "location": "IMC Medical Center | IMC Clinic Albarsha, Dubai",
        "treat": [
            "MHE(Multiple Hereditary Exostoses)",
            "AVR – Aortic Valve Replacement ",
            "Acne",
            "Adenoidectomy",
            "Addiction Treatment",
            "Advanced Checkup",
            "Aging Skin",
            "Amputations"
        ],
        "country_name": "Dubai",
        "photo": "photo"
    },
    {
        "location": "Philippine Medical Center Philippines",
        "name": "Philippine Medical Center",
        "about": "PMC has been providing medical and dental services since year 2002. ... We reach the highest standard and full range of general practice medical care for individuals and family members thru highly skilled and dedicated Healthcare Professionals, all the expertise and competence needed for providing utmost services.",
        "treat": [
            "MHE(Multiple Hereditary Exostoses)",
            "AVR – Aortic Valve Replacement ",
            "Acne",
            "Adenoidectomy",
            "Addiction Treatment",
            "Advanced Checkup",
            "Aging Skin",
            "Amputations"
        ],
        "country_name": "Philippines",
        "photo": "photo"
    },
    {
        "treat": [
            "MHE(Multiple Hereditary Exostoses)",
            "AVR – Aortic Valve Replacement ",
            "Acne",
            "Adenoidectomy",
            "Addiction Treatment",
            "Advanced Checkup",
            "Aging Skin",
            "Amputations"
        ],
        "photo": "photo",
        "location": "European Clinic of Sports Traumatology and Orthopedics,Russia",
        "country_name": "Russia",
        "name": "European Clinic of Sports Traumatology and Orthopedics",
        "about": "European Medical Center is the territory of health, where each patient receives an individual integrated approach and access to the best world medical technologies. EMC is a lifelong medical partner for patients. The undisputed leader in the field of comprehensive health care, providing medical services of the highest quality and of any complexity."
    },
    {
        "about": "Mercer's Hospital was a hospital in Dublin, Ireland. It was converted into a clinical centre and medical library for the Royal College of Surgeons in Ireland in 1991.",
        "treat": [
            "MHE(Multiple Hereditary Exostoses)",
            "AVR – Aortic Valve Replacement ",
            "Acne",
            "Adenoidectomy",
            "Addiction Treatment",
            "Advanced Checkup",
            "Aging Skin",
            "Amputations"
        ],
        "country_name": "Ireland",
        "name": "Mercers Medical Centre",
        "photo": "photo",
        "location": "Mercers Medical Centre Ireland"
    },
    {
        "about": "Cagayan Valley Medical Center is a government-owned tertiary hospital situated in Tuguegarao City, Cagayan. It is largest medical facility in the Cagayan Valley Region",
        "treat": [
            "MHE(Multiple Hereditary Exostoses)",
            "AVR – Aortic Valve Replacement ",
            "Acne",
            "Adenoidectomy",
            "Addiction Treatment",
            "Advanced Checkup",
            "Aging Skin",
            "Amputations"
        ],
        "photo": "photo",
        "country_name": "Philippines",
        "name": "Cagayan Valley Medical Center",
        "location": "Cagayan Valley Medical Center Philippines"
    },
    {
        "location": "Taiwan Adventist Hospital,Taiwan",
        "photo": "photo",
        "country_name": "Taiwan",
        "about": "The Taiwan Adventist Hospital is a hospital in Songshan District, Taipei, Taiwan. Since 1989, Taiwan Adventist Hospital has been giving medical care to patients from Australia, Canada, India, Japan, Korea, United States, United Kingdom, and many other countries.",
        "treat": [
            "MHE(Multiple Hereditary Exostoses)",
            "AVR – Aortic Valve Replacement ",
            "Acne",
            "Adenoidectomy",
            "Addiction Treatment",
            "Advanced Checkup",
            "Aging Skin",
            "Amputations"
        ],
        "name": "Taiwan Adventist Hospital"
    },
    {
        "name": "100Pasos",
        "treat": [
            "MHE(Multiple Hereditary Exostoses)",
            "AVR – Aortic Valve Replacement ",
            "Acne",
            "Adenoidectomy",
            "Addiction Treatment",
            "Advanced Checkup",
            "Aging Skin",
            "Amputations"
        ],
        "location": "Toledo",
        "country_name": "Spain",
        "photo": "photo",
        "about": "Hello"
    },
    {
        "about": "Herzliya Medical Center is a private hospital in Herzliya, Israel that offers therapeutic care, laboratory services, physiotherapy, air-ambulance, and medical tourism services. The hospital was founded in 1983",
        "photo": "photo",
        "location": "Herzliya Medical Center Israel",
        "country_name": "Israel",
        "treat": [
            "MHE(Multiple Hereditary Exostoses)",
            "AVR – Aortic Valve Replacement ",
            "Acne",
            "Adenoidectomy",
            "Addiction Treatment",
            "Advanced Checkup",
            "Aging Skin",
            "Amputations"
        ],
        "name": "Herzliya Medical Center"
    },
    {
        "location": "Hospital Vital Brasil ",
        "name": "Hospital Vital Brasil",
        "about": "The Vital Brazil Hospital (HVB), specialized in the care of patients bitten by venomous animals, started its activities in November 1945. With an accumulated experience of more than six decades dedicated to attendance, teaching and research, attested by its more than 100,000 records, is recognized as one of the most important references in the area of ​​poisoning by venomous animals. The HVB maintains an emergency care service and has 10 beds for observation or hospitalization",
        "treat": [
            "MHE(Multiple Hereditary Exostoses)",
            "AVR – Aortic Valve Replacement ",
            "Acne",
            "Adenoidectomy",
            "Addiction Treatment",
            "Advanced Checkup",
            "Aging Skin",
            "Amputations"
        ],
        "photo": "photo",
        "country_name": "Brazil"
    },
    {
        "about": "Herzog Hospital is a geriatric-psychiatric hospital in Jerusalem, Israel. It is the third largest hospital in the city. Herzog Hospital specializes in nursing care for the elderly. The director-general of the hospital is Dr. Yehezkel Caine.",
        "treat": [
            "MHE(Multiple Hereditary Exostoses)",
            "AVR – Aortic Valve Replacement ",
            "Acne",
            "Adenoidectomy",
            "Addiction Treatment",
            "Advanced Checkup",
            "Aging Skin",
            "Amputations"
        ],
        "location": "Herzog Medical Center Israel",
        "name": "Herzog Medical Center",
        "photo": "photo",
        "country_name": "Israel"
    },
    {
        "treat": [
            "MHE(Multiple Hereditary Exostoses)",
            "AVR – Aortic Valve Replacement ",
            "Acne",
            "Adenoidectomy",
            "Addiction Treatment",
            "Advanced Checkup",
            "Aging Skin",
            "Amputations"
        ],
        "location": "Medical Center,slovakia",
        "photo": "photo",
        "country_name": "Slovakia",
        "name": "Medical Center",
        "about": "It is renowned worldwide for the quality of its medical care and that same quality is now available at our center. Our Medical Centre is a healthcare facility which offers the highest standards of medical care to be found in a confidential and relaxing atmosphere. "
    },
    {
        "about": "St James Capua Hospital, or Saint James Hospital Sliema, started out in 1996 as the Capua Palace Hospital. In 2002 it was taken over by the Saint James Hospital Group, which owns other hospitals in Malta, Libya and Hungary. It is an 80 bed unit in Sliema, Malta.",
        "location": "Saint James Hospital Malta",
        "country_name": "Malta",
        "photo": "photo",
        "name": "Saint James Hospital",
        "treat": [
            "MHE(Multiple Hereditary Exostoses)",
            "AVR – Aortic Valve Replacement ",
            "Acne",
            "Adenoidectomy",
            "Addiction Treatment",
            "Advanced Checkup",
            "Aging Skin",
            "Amputations"
        ]
    },
    {
        "country_name": "Iran",
        "about": "It is renowned worldwide for the quality of its medical care and that same quality is now available at our center. Our Medical Centre is a healthcare facility which offers the highest standards of medical care to be found in a confidential and relaxing atmosphere. ",
        "name": "Shahid Rahnemoun Hospital",
        "photo": "photo",
        "treat": [
            "MHE(Multiple Hereditary Exostoses)",
            "AVR – Aortic Valve Replacement ",
            "Acne",
            "Adenoidectomy",
            "Addiction Treatment",
            "Advanced Checkup",
            "Aging Skin",
            "Amputations"
        ],
        "location": "Shahid Rahnemoun Hospital Iran"
    },
    {
        "treat": [
            "MHE(Multiple Hereditary Exostoses)",
            "AVR – Aortic Valve Replacement ",
            "Acne",
            "Adenoidectomy",
            "Addiction Treatment",
            "Advanced Checkup",
            "Aging Skin",
            "Amputations"
        ],
        "location": "Centro Médico Internacional de Vila Real de Santo António Portugal",
        "country_name": "Portugal",
        "photo": "photo",
        "name": "Centro Médico Internacional de Vila Real de Santo António",
        "about": "The Sports Complex of Vila Real de Santo António in addition to providing ongoing medical care, also provides, out-patient medical specialties, dental surgery and complementary diagnostic examinations, its main activity is its the rehabilitation and physiotherapy unit.  This Clinic boasts a team of professional international speciatreatments devoted to the care of patients with both acquired and chronic brain damage, and also in rehabilitation of neuromusculoskeletal and cardiorespiratory conditions. Another of their specialties is preventative and rehabilitation medicine related to the practice of sports or physical activity"
    },
    {
        "location": "MD.X Medical Center Brazil",
        "about": "It is renowned worldwide for the quality of its medical care and that same quality is now available at our center. Our Medical Centre is a healthcare facility which offers the highest standards of medical care to be found in a confidential and relaxing atmosphere. ",
        "name": "MD.X Medical Center",
        "country_name": "Brazil",
        "photo": "photo",
        "treat": [
            "MHE(Multiple Hereditary Exostoses)",
            "AVR – Aortic Valve Replacement ",
            "Acne",
            "Adenoidectomy",
            "Addiction Treatment",
            "Advanced Checkup",
            "Aging Skin",
            "Amputations"
        ]
    },
    {
        "country_name": "Qatar",
        "photo": "photo",
        "about": "The International Medical Centre was founded in 2016 to meet the needs of the residents of Qatar, providing them with access to world-class healthcare. We adhere to evidence-based best practice – we ensure confidentiality, informed consent and good record-keeping.",
        "treat": [
            "MHE(Multiple Hereditary Exostoses)",
            "AVR – Aortic Valve Replacement ",
            "Acne",
            "Adenoidectomy",
            "Addiction Treatment",
            "Advanced Checkup",
            "Aging Skin",
            "Amputations"
        ],
        "name": "The International Medical Centre",
        "location": "The International Medical Centre Qatar"
    },
    {
        "about": "Seyed-ol Shohada University Hospital was founded in 2009. ... The hospital was expanded to include 153 beds; the beds occupancy rate of the hospital is typically 78.9%. The clinics and outpatient clinics offer treatment and care services for 58600 patients in a year.",
        "country_name": "Iran",
        "photo": "photo",
        "name": "Seyyed-Al-Shohada Hospital",
        "location": "Seyyed-Al-Shohada Hospital Iran",
        "treat": [
            "MHE(Multiple Hereditary Exostoses)",
            "AVR – Aortic Valve Replacement ",
            "Acne",
            "Adenoidectomy",
            "Addiction Treatment",
            "Advanced Checkup",
            "Aging Skin",
            "Amputations"
        ]
    },
    {
        "location": "Medical Centers Slovakia, S.r.o,Slovakia",
        "treat": [
            "MHE(Multiple Hereditary Exostoses)",
            "AVR – Aortic Valve Replacement ",
            "Acne",
            "Adenoidectomy",
            "Addiction Treatment",
            "Advanced Checkup",
            "Aging Skin",
            "Amputations"
        ],
        "photo": "photo",
        "country_name": "Slovakia",
        "about": "It is renowned worldwide for the quality of its medical care and that same quality is now available at our center. Our Medical Centre is a healthcare facility which offers the highest standards of medical care to be found in a confidential and relaxing atmosphere. ",
        "name": "Medical Centers Slovakia, S.r.o"
    },
    {
        "treat": [
            "MHE(Multiple Hereditary Exostoses)",
            "AVR – Aortic Valve Replacement ",
            "Acne",
            "Adenoidectomy",
            "Addiction Treatment",
            "Advanced Checkup",
            "Aging Skin",
            "Amputations"
        ],
        "name": "ADELI Medical Center",
        "about": "The ADELI Medical Center is an international rehabilitation centre which specialises in treating patients with neurological disorders. From the time it was established in 2004, the ADELI Center has successfully treated more than 13,000 patients, mainly with conditions following a brain injury.",
        "photo": "photo",
        "location": "ADELI Medical Center,Slovakia",
        "country_name": "Slovakia"
    },
    {
        "name": "International Medical Clinic - Camden",
        "treat": [
            "MHE(Multiple Hereditary Exostoses)",
            "AVR – Aortic Valve Replacement ",
            "Acne",
            "Adenoidectomy",
            "Addiction Treatment",
            "Advanced Checkup",
            "Aging Skin",
            "Amputations"
        ],
        "photo": "photo",
        "about": "Family Medicine Singapore. Women's Health. Children's Pediatric services. 20 years serving Singapore. Delivers high standard patient care. Locals and Expats Doctors. 4 Clinic Locations. Onsite parking and public transport. Medication dispensary facilities. Family friendly. Wheelchair access. Corporate Medicine. Travel Medicine. Men's Health Screenings. Offshore Medical Assessments. Employment Medicals. UKOOA accredited doctors. Minor surgical procedures. Quality medical care in a welcoming environment. Call IMC Healthcare to make an appointment to see a Doctor of your choice today.'",
        "country_name": "Singapore",
        "location": "International Medical Clinic - Camden ,Singapore"
    },
    {
        "about": "Hello",
        "treat": [
            "MHE(Multiple Hereditary Exostoses)",
            "AVR – Aortic Valve Replacement ",
            "Acne",
            "Adenoidectomy",
            "Addiction Treatment",
            "Advanced Checkup",
            "Aging Skin",
            "Amputations"
        ],
        "photo": "photo",
        "name": "100Pasos",
        "location": "Toledo",
        "country_name": "Spain"
    },
    {
        "name": "National Taiwan University Hospital",
        "photo": "photo",
        "location": "National Taiwan University Hospital,Taiwan",
        "about": "The National Taiwan University Hospital started operations under Japanese rule in Daitōtei on 18 June 1895, and moved to its present location in 1898. The hospital was later annexed to the Medical School of Taihoku Imperial University in 1937. The present name was adopted in 1945.",
        "country_name": "Taiwan",
        "treat": [
            "MHE(Multiple Hereditary Exostoses)",
            "AVR – Aortic Valve Replacement ",
            "Acne",
            "Adenoidectomy",
            "Addiction Treatment",
            "Advanced Checkup",
            "Aging Skin",
            "Amputations"
        ]
    },
    {
        "treat": [
            "MHE(Multiple Hereditary Exostoses)",
            "AVR – Aortic Valve Replacement ",
            "Acne",
            "Adenoidectomy",
            "Addiction Treatment",
            "Advanced Checkup",
            "Aging Skin",
            "Amputations"
        ],
        "country_name": "France",
        "photo": "photo",
        "location": " American Hospital of Paris",
        "name": " American Hospital of Paris",
        "about": "The American Hospital of Paris, founded in 1906, is a private, not-for-profit hospital that is certified under the French healthcare system. Located in Neuilly-sur-Seine, in the western suburbs of Paris, France, it has 187 surgical, medical, and obstetric beds"
    },
    {
        "location": "Centre Medical , 74260 Les Gets, France",
        "name": "Center Medical , France",
        "photo": "photo",
        "about": "The Medical Center is located right in the center of the resort. It welcomes you every day in winter and summer season.",
        "treat": [
            "MHE(Multiple Hereditary Exostoses)",
            "AVR – Aortic Valve Replacement ",
            "Acne",
            "Adenoidectomy",
            "Addiction Treatment",
            "Advanced Checkup",
            "Aging Skin",
            "Amputations"
        ],
        "country_name": "France"
    },
    {
        "photo": "photo",
        "about": "The physicians, nursing staff and other support staff at this hospital are caring, compassionate and highly skilled. The facilities at this hospital rival any of the best in the United States. We were very impressed how each of the team of physicians spoke to us in nearly flawless English and took the time to answer questions and provide guidance.",
        "country_name": "Chile",
        "treat": [
            "MHE(Multiple Hereditary Exostoses)",
            "AVR – Aortic Valve Replacement ",
            "Acne",
            "Adenoidectomy",
            "Addiction Treatment",
            "Advanced Checkup",
            "Aging Skin",
            "Amputations"
        ],
        "name": "Dr. Felipe Cardemil",
        "location": "Dr. Felipe Cardemil Chile"
    },
    {
        "photo": "photo",
        "name": "Swiss Premium Health Center",
        "treat": [
            "MHE(Multiple Hereditary Exostoses)",
            "AVR – Aortic Valve Replacement ",
            "Acne",
            "Adenoidectomy",
            "Addiction Treatment",
            "Advanced Checkup",
            "Aging Skin",
            "Amputations"
        ],
        "country_name": "Hungary",
        "location": "Swiss Premium Health Center Hungary",
        "about": " Outpatient clinics are widely available in our private health clinic. Advance appointments are always required to minimize waiting times! "
    },
    {
        "location": "Al Razi Medical Center Qatar",
        "treat": [
            "MHE(Multiple Hereditary Exostoses)",
            "AVR – Aortic Valve Replacement ",
            "Acne",
            "Adenoidectomy",
            "Addiction Treatment",
            "Advanced Checkup",
            "Aging Skin",
            "Amputations"
        ],
        "country_name": "Qatar",
        "photo": "photo",
        "about": "Al Razi Medical Center is A modern out-patient poly-clinic that provides high quality medical services with advanced experience, in a comfortable environment.  Al Razi Medical Center is now amongst the Qatar’s leading healthcare service provider today and well known brand providing state-of-the-art medical care to the Qatar’s citizens and residents.",
        "name": "Al Razi Medical Center Qatar"
    },
    {
        "name": "Health Center El Bahia",
        "treat": [
            "MHE(Multiple Hereditary Exostoses)",
            "AVR – Aortic Valve Replacement ",
            "Acne",
            "Adenoidectomy",
            "Addiction Treatment",
            "Advanced Checkup",
            "Aging Skin",
            "Amputations"
        ],
        "country_name": "Morocoo",
        "about": "We have the knowledge, experience and skill to give you the most amazing smile ever!  ‍  Providing the most advanced dental care in a comfortable and pleasant atmosphere are the priorities . We are diligent in our pursuit to stay current in providing the profession’s leading dental care procedures while utilizing state-of-the-art technology, supplies and equipment. We have the experience, fine touch, and advanced skills of the best techniques and practices so we can offer you the unique level of care to give you the best smile.",
        "photo": "photo",
        "location": "Health Center El Bahia Morocoo"
    },
    {
        "about": "Hello",
        "country_name": "Spain",
        "name": "100Pasos",
        "treat": [
            "MHE(Multiple Hereditary Exostoses)",
            "AVR – Aortic Valve Replacement ",
            "Acne",
            "Adenoidectomy",
            "Addiction Treatment",
            "Advanced Checkup",
            "Aging Skin",
            "Amputations"
        ],
        "photo": "photo",
        "location": "Toledo"
    },


    {
        "name": "Swiss Medical Center (SMC) Ltd.",
        "treat": [
            "MHE(Multiple Hereditary Exostoses)",
            "AVR – Aortic Valve Replacement ",
            "Acne",
            "Adenoidectomy",
            "Addiction Treatment",
            "Advanced Checkup",
            "Aging Skin",
            "Amputations"
        ],
        "photo": "photo",
        "about": "Swiss Medical Center (SMC) is a world leading medical practice, based in Zurich, and dedicated to supporting you throughout your personal healthcare journey. We are committed to identifying and supporting your personal healthcare requirements every step of the way. We pride ourselves on ensuring you receive the best quality medical care and treatments available no matter where you are in the world and are reachable 24/7.",
        "location": "Swiss Medical Center (SMC) Ltd. Switzerland",
        "country_name": "Switzerland"
    },
    {
        "name": "Bangkok Hospital Phuket",
        "location": "Bangkok Hospital Phuket  , Thailand",
        "about": "Located in southern Thailand, Bangkok Hospital Phuket is a leading health and wellness destination in Asia. Bangkok Hospital Phuket is proud to be a member of the rapidly expanding Bangkok Dusit Medical Services PLC – BDMS, the largest hospital network in Asia-Pacific and recognized globally as one of the top five medical service providers in the world. The hospital is capable of delivering world-class tertiary care over a comprehensive range of medical sub-specialities which include Cardiology, Orthopaedics, Ophthalmology, Oncology, Gynecology/Obstetrics, Colorectal Disease, and many more",
        "treat": [
            "MHE(Multiple Hereditary Exostoses)",
            "AVR – Aortic Valve Replacement ",
            "Acne",
            "Adenoidectomy",
            "Addiction Treatment",
            "Advanced Checkup",
            "Aging Skin",
            "Amputations"
        ],
        "photo": "photo",
        "country_name": "Thailand"
    },
    {
        "location": "Montreux Medical Center Switzerland",
        "country_name": "Switzerland",
        "photo": "photo",
        "name": "Montreux Medical Center",
        "about": "Founded in 1988, Montreux Medical Center develops and embodies years of experience in biotechnology to position itself as a Swiss leader in regenerative cellular medicine.  Located in the heart of the Swiss Riviera facing the beautiful Geneva Lake, the center offers, in addition to regenerative cellular medicine, aesthetic and cosmetic treatments, a wide range of integrative medical solutions along quality services in collaboration with the Independent Centre of Surgery (Clinic CIC).",
        "treat": [
            "MHE(Multiple Hereditary Exostoses)",
            "AVR – Aortic Valve Replacement ",
            "Acne",
            "Adenoidectomy",
            "Addiction Treatment",
            "Advanced Checkup",
            "Aging Skin",
            "Amputations"
        ]
    },
    {
        "treat": [
            "MHE(Multiple Hereditary Exostoses)",
            "AVR – Aortic Valve Replacement ",
            "Acne",
            "Adenoidectomy",
            "Addiction Treatment",
            "Advanced Checkup",
            "Aging Skin",
            "Amputations"
        ],
        "about": "World Medical Hospital Providing premium services in all branches by Bangkok Chain Hospital Public Company Limited, a leading hospital company On the Stock Exchange of Thailand and one of the best companies in Asia. According to the rating of Forbes Magazine in 2009",
        "country_name": "Thailand",
        "photo": "photo",
        "location": "World Medical Hospital Pak Kret, Thailand",
        "name": "World Medical Hospital"
    },
    {
        "name": "Panacee Medical Center",
        "country_name": "Thailand",
        "treat": [
            "MHE(Multiple Hereditary Exostoses)",
            "AVR – Aortic Valve Replacement ",
            "Acne",
            "Adenoidectomy",
            "Addiction Treatment",
            "Advanced Checkup",
            "Aging Skin",
            "Amputations"
        ],
        "about": "PANACEE is the leader in hotreatmentic medicine combining a wide variety of treatments and medical technology that meet international standards. While protecting the body from illness The speciatreatment doctors will design the treatment that is appropriate for each individual. For effective results in keeping you healthy and looking young for a long time.",
        "photo": "photo",
        "location": "Panacee Medical  Bangkok, Thailand Center "
    },
    {
        "about": " Mkhiwa Clinic is a multidisciplinary private hospital in the Kingdom of Swaziland committed to offering safe, quality and affordable medical care in a patient friendly environment. ",
        "photo": "photo",
        "treat": [
            "MHE(Multiple Hereditary Exostoses)",
            "AVR – Aortic Valve Replacement ",
            "Acne",
            "Adenoidectomy",
            "Addiction Treatment",
            "Advanced Checkup",
            "Aging Skin",
            "Amputations"
        ],
        "name": "Mkhiwa Clinic",
        "country_name": "Swaziland",
        "location": "Mkhiwa Clinic , Manzini M200, Eswatini , Swaziland"
    },
    {
        "treat": [
            "MHE(Multiple Hereditary Exostoses)",
            "AVR – Aortic Valve Replacement ",
            "Acne",
            "Adenoidectomy",
            "Addiction Treatment",
            "Advanced Checkup",
            "Aging Skin",
            "Amputations"
        ],
        "about": "Mbabane Government Hospital is the national hospital in Mbabane, Eswatini with 500 beds. Nkosazana Dlamini-Zuma worked at this hospital at a paedeatric nurse in the 1980s.In 2007, the Minister for Health and Social Welfare, Njabulo Mabuza, banned the media from entering the hospital",
        "photo": "photo",
        "country_name": "Swaziland",
        "name": "Mbabane Government Hospital",
        "location": "Mbabane Government Hospital Swaziland"
    }

];

const dub=[{ "treat": [
    "Surgery",
            "Bone Marrow Transplantation",
            "Standard Checkup",
            "Dentistry and Orthodontics",
            "Dermatology",
            "Otolaryngology - Ear, Nose, and Throat (ENT)",
            "Metabolic Disorders",
            "Endocrinology",
            "Gastroenterology, Hepatology, and Nutrition",
            "Gynecology",
            "Clinical Hematology",
            "Neurology",
            "Neurosurgery",
            "Nuclear Medicine Studies",
            "Entire Range of Oncology Surgery",
            "Pain Control",
            "Spiritual & Psychosocial Care",
            "Neuropsychiatric Diagnosis",
            "Chronic Obstructive Pulmonary Disease (COPD)",
            "Radiology and Medical Imaging",
            "Diagnosis and Treatment of Snoring and Sleep Apnea Syndrome Urology",
            "Fitness/Wellness Immersion "
]},{

"treat": [
    // "Foot & Ankle Deformity",
            "Thigh Lift",
            "Pelvic Florr Disorders Treatment",
            "Chronic Low Back Pain",
            "Dequervain's Tenosynovitis",
            // "Tendinosis",
            // "Bursitis",
            // "Capsulitis",
            // "Subluxations",
            // "Tendon Dysfunctions",
            // "Syndromes Of Nerve Entrapments",
            
],

}]
dotenv.config({ path: '../config.env' });
 const DB = process.env.DATABASE.replace(
     '<PASSWORD>',
     process.env.DATABASE_PASSWORD
 );
 
 mongoose
     .connect(DB, {
         useNewUrlParser: true,
         useCreateIndex: true,
         useFindAndModify: false
     })
     .then(() => console.log('DB connection successful!')
    
     ).catch((err)=>{
         console.log(err);
     })
     const datawewant = async(t)=>{
        console.log(t);
        const temp1 = await Treatment.find({name:t});
        return temp1[0]._id
        
    }
const final = dub.forEach((ele)=>{ 
    // console.log(ele.treat)
    var temp=ele;
    ele=[];
    let requests = temp.treat.map((t) => Treatment.find({name:t}));
    Promise.all(requests)
  .then(responses => {responses.forEach(
    response => {
        ele.push(response[0]._id);
       
    }
  )
  return responses;
}
  ).then(responses => Promise.all(responses.map(r => r.data.json())))
  // all JSON answers are parsed: "users" is the array of them
  .then(users => users.forEach(user => console.log(user)));
  

    // temp.treat.forEach((t)=>{
    //     try { 
    //                const treat =  Treatment.find({name:t});
    //             //    console.log(treat[0]);
    //             //    t=treat[0]._id;
    //             // console.log(t);
                   
    //             } catch (err) {
    //                 console.log(err)
    //             }
    //         }
    // )
})
//  console.log(final);
