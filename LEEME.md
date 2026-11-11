# Familia Kovac · Gastos — puesta en marcha con Firebase

Todo vive en Firebase: el plan de cada mes (ingresos, gastos fijos, cupos variables, ahorro), los gastos del día a día y el fondo de emergencia. No hace falta la planilla de Google.

Archivos:

- `index.html`: la app (celular y computadora).
- `config.js`: tu configuración (datos de Firebase y mails). Es el único archivo que editás.
- `img/`: la foto de la familia y las fotos de perfil.
- `firestore.rules`: las reglas de seguridad (solo ustedes dos pueden entrar).

## 1. Crear el proyecto en Firebase (~10 minutos)

Podés usar el mismo proyecto de la app de los equipos del club o crear uno nuevo. Recomiendo **uno nuevo**, para que los datos de la casa no se mezclen.

1. En [console.firebase.google.com](https://console.firebase.google.com): **Agregar proyecto**, nombre `familia-kovac`. Analytics no hace falta.
2. **Compilación > Firestore Database > Crear base de datos**. Ubicación: `southamerica-east1` (São Paulo), modo **producción**.
3. **Compilación > Authentication > Comenzar > Google > Habilitar**. Elegí tu mail como correo de asistencia y guardá.
4. **Configuración del proyecto (engranaje) > Tus apps > Web (</>)**. Registrá la app (sin Hosting) y copiá el objeto `firebaseConfig`.

## 2. Poner los mails y la configuración

**En `config.js`** (es el único archivo de la app que se edita):

```js
export const firebaseConfig = { ... };   // pegá lo que copiaste en el paso 1.4
export const PERSONAS = [
  { nombre: 'Simón', email: 'TU_EMAIL@gmail.com',     foto: 'img/simon.jpg' },
  { nombre: 'Vir',   email: 'EMAIL_DE_VIR@gmail.com', foto: 'img/vir.jpg' }
];
```

Los mails son las cuentas de Google con las que cada uno va a entrar.

**En `firestore.rules`**: poné los mismos dos mails. Después, en Firebase: **Firestore Database > Reglas**, borrá lo que hay, pegá el contenido del archivo y tocá **Publicar**.

## 3. Publicar la app

Igual que la app del club o el recetario: subí `index.html`, `config.js` y la carpeta `img/` a donde publiques (GitHub Pages, Firebase Hosting, Netlify).

Después, en Firebase: **Authentication > Configuración > Dominios autorizados > Agregar dominio**, y agregá el dominio donde quedó publicada (por ejemplo `tuusuario.github.io`). Sin esto, el botón "Entrar con Google" da error.

Las fotos de la familia son visibles para cualquiera que tenga el link de la página. Los gastos y el plan, no: sin una de sus dos cuentas, Firestore no entrega nada.

## 4. Primer uso

1. Entrá con tu cuenta de Google.
2. Va a aparecer **"Cargar plan inicial"**. Ese botón carga los rubros y los montos de noviembre 2026 a junio 2027 (los mismos de la planilla, sin el ingreso del club), el ahorro de cada mes, los movimientos en USD de los autos y el fondo de emergencia (USD 5.365 en el banco + USD 1.500 en efectivo).
3. Vir entra desde su celular con su cuenta. Los dos ven lo mismo en tiempo real.
4. En el celular: menú del navegador > **Agregar a pantalla de inicio**.

## Cómo se usa

- **Inicio:** cargar un gasto y ver cuánto queda de cada rubro variable. La rayita gris marca cuánto del mes ya pasó.
- **Movimientos:** todos los gastos del mes, con filtros por rubro y persona, borrado y descarga en CSV.
- **Plan:** los montos de cada mes. Se guardan solos al salir de cada casilla. "Copiar montos del mes anterior" sirve para armar un mes nuevo. Abajo está el fondo de emergencia proyectado.
- **Ajustes:** agregar, renombrar, reordenar u ocultar rubros, y descargar todo en CSV.
- **Sin señal:** se puede cargar igual. El gasto queda guardado en el celular y se sube cuando vuelve la conexión.

**Tipos de rubro:**

- **Ingreso:** sueldo, alquiler, etc.
- **Gasto fijo:** se planifica, no se carga día a día (hipoteca, expensas, seguros, cuotas).
- **Gasto variable:** tiene cupo y se carga día a día.
- **Control:** tiene cupo pero no suma al plan. Por ejemplo, "Compras en cuotas": lo que suma al plan es la cuota, que ya está en los fijos.

## CSV

Separador punto y coma, para que Excel en español lo abra directo. Hay dos archivos:

- **Gastos:** uno por fila.
- **Plan:** rubros por mes, totales, fondo proyectado y lo gastado real por rubro y mes.

## Actualizar la app

Cuando recibas una versión nueva, subí a GitHub solo el `index.html` nuevo (arrastrándolo, como siempre). **No reemplaces `config.js`**: ahí está tu configuración. Los datos (plan, gastos, rubros) viven en Firebase y no se tocan al actualizar.
