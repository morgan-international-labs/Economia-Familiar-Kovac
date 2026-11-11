// ===================== CONFIGURACIÓN DE LA APP =====================
// Este es el único archivo que tenés que editar. Cuando recibas una versión
// nueva de la app, reemplazá index.html y dejá este archivo como está.

// 1) Configuración de tu app web de Firebase
//    (Configuración del proyecto > General > Tus apps > Config)
export const firebaseConfig = {
  apiKey: "AIzaSyBmOxJ_GmayrrRyUi3G4jCyr4YHMqDVC5w",
  authDomain: "economia-familiar-kovac.firebaseapp.com",
  projectId: "economia-familiar-kovac",
  storageBucket: "economia-familiar-kovac.firebasestorage.app",
  messagingSenderId: "147305472674",
  appId: "1:147305472674:web:1be8e61c8fbf2f50e3adfb"
};

// 2) Quiénes pueden entrar (los mismos mails que en firestore.rules)
export const PERSONAS = [
  { nombre: 'Simón', email: 'simonkovac16@gmail.com',     foto: 'img/simon.jpg' },
  { nombre: 'Vir',   email: 'virginiahanson86@gmail.com', foto: 'img/vir.jpg' }
];

// 3) Medios de pago que aparecen al cargar un gasto
export const MEDIOS = ['Débito', 'QR', 'Tarjeta de crédito', 'Efectivo', 'Transferencia'];
