# PedidosFast App - Proyecto

## 👥 Integrantes del Equipo
- Alejandro Miranda - Dueño del repositorio
- Leonardo Candia - Developer
- Blanca Prieto - Developer  
- Paz Martinez - Developer

## Cómo Empezar

### Prerrequisitos
- Node.js 16+
- Ionic CLI: `npm install -g @ionic/cli`
- Git

### Instalación
```bash
# Clonar el repositorio
git clone https://github.com/IsaiasMr2000/tp-grupo-9.git

# Entrar al directorio
cd pedidos-fast-app

# Instalar dependencias
npm install

# Ejecutar en navegador
ionic serve

# 🍽️ Sabor Py

**Sabor Py** es una aplicación móvil desarrollada con **Angular** e **Ionic**, que permite pedir comida a domicilio de manera rápida, sencilla y segura.  
Su objetivo es ofrecer una experiencia intuitiva para los usuarios que buscan restaurantes, platillos y promociones, todo desde un solo lugar.

---

## 🧾 Descripción

Sabor Py facilita la conexión entre usuarios y restaurantes locales, permitiendo explorar menús, realizar pedidos y hacer seguimiento de entregas.  
La app combina un diseño moderno con una interfaz amigable y un flujo simple para hacer pedidos en pocos pasos.

---

## 🚀 Funcionalidades Principales

- **Inicio de sesión y registro de usuarios**  
  Acceso seguro mediante correo electrónico y contraseña.

- **Búsqueda de restaurantes o comidas**  
  Barra de búsqueda inteligente con categorías por tipo de comida (pizza, hamburguesas, postres, etc.).

- **Visualización de restaurantes**  
  Muestra información relevante como tipo de comida, tiempo de entrega, costo de envío y calificación.

- **Carrito de compras**  
  Permite agregar, eliminar o modificar productos antes de confirmar el pedido.

- **Confirmación de pedidos**  
  Opción para revisar el total y confirmar la compra con un mensaje emergente.

- **Historial de pedidos**  
  Registra los pedidos anteriores, mostrando el estado (pendiente o entregado), fecha y total.

- **Perfil de usuario**  
  Sección para editar datos personales, gestionar direcciones, métodos de pago, favoritos y configuración general.

- **Notificaciones**  
  Avisos sobre el estado del pedido o la falta de nuevas notificaciones.

- **Cierre de sesión seguro**  
  Posibilidad de cerrar la sesión y proteger la cuenta del usuario.

---

## 🎨 Estilo Visual

- **Paleta de colores:**
  - 🟠 Naranja degradado (principal)
  - ⚪ Blanco (fondos y textos secundarios)
  - ⚫ Gris claro (fondos neutros)
  - 🟢 Verde y 🟡 Amarillo para estados de pedido

- **Diseño:**
  - Minimalista y moderno  
  - Íconos claros y redondeados  
  - Uso de degradados y sombras suaves para resaltar botones  
  - Navegación inferior intuitiva (Inicio, Carrito, Historial, Perfil)

- **Tipografía:**
  - Estilo limpio y legible, ideal para interfaces móviles.

---

## 🧱 Estructura del Proyecto

El proyecto sigue una organización modular para facilitar la escalabilidad y el mantenimiento.

```bash
src/
├── app/
│   ├── guards/           # Protección de rutas
│   ├── models/           # Modelos de datos
│   ├── pages/            # Páginas principales de la app
│   ├── services/         # Servicios (autenticación, pedidos, etc.)
│   ├── tabs/             # Navegación principal
│   ├── app.component.*   # Componentes base
│   ├── app.routes.ts     # Rutas principales
├── assets/               # Imágenes e íconos
├── environments/         # Variables de entorno
├── theme/                # Estilos globales (SCSS)
└── index.html

