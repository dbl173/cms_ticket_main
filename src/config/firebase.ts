import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
const firebaseConfig = {
    apiKey: 'AIzaSyBlf6cgMSInXSgMTnc-hoaOg_iCRobRIxc',
    authDomain: 'cms-ticket-sale-applicat-8f40d.firebaseapp.com',
    projectId: 'cms-ticket-sale-applicat-8f40d',
    storageBucket: 'cms-ticket-sale-applicat-8f40d.appspot.com',
    messagingSenderId: '783246767118',
    appId: '1:783246767118:web:25911a0c24cd5e308cf85f',
    measurementId: 'G-FXDZ98T7X5',
};

// const firebaseConfig = {
//   apiKey: "AIzaSyC3a_V00unh_3gTcgxQdUmmHtTQILvPvhs",
//   authDomain: "cms-ticket-b5cb4.firebaseapp.com",
//   projectId: "cms-ticket-b5cb4",
//   storageBucket: "cms-ticket-b5cb4.appspot.com",
//   messagingSenderId: "501593339267",
//   appId: "1:501593339267:web:ce20ca7672aa21afc7b2b6"
// };
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
