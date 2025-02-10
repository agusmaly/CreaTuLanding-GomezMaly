# Overol-E

## Descripción
Somos un equipo de diseñadores gráficos que exploramos todas las formas de expresión visual, desde el diseño hasta la fotografía, la ilustración, el arte gráfico y la producción audiovisual. Cada proyecto es una aventura única, muy parecida a las que viven nuestros gatos cada día, que nos inspiran a crear la identidad visual de Overol. Overol-E es nuestra web y tienda virtual!!!

## Características Principales
### Lista de Funcionalidades más destacadas.

1. **Autenticación de usuarios**: (simulada).
2. **Visualización dinámica de productos**: desde Firestore.
3. **Gestión de carrito de compras**: Carrito de compras a través de hook.
4. **CRUD de Productos**: Actualización y eliminación de productos.
5. **Variables de entorno**: Uso de variables de entorno para configuraciones sensibles.
6. **Diseño responsivo**: Diseño responsivo con css puro.

### Lista de funcionalidades en otro tipo de aspecto

## Funcionalidades principales

```sh
| Característica        | Descripción                          | Estado   |
|-----------------------|--------------------------------------|----------|
| Autenticación         | Registro e inicio de sesión         | ✅ Listo  |
| Carrito de compras    | Añadir y eliminar productos          | ✅ Listo  |
| Integración con Firestore | CRUD en tiempo real                | ✅ Listo  |
| Filtros de búsqueda   | Buscar por categoría o precio        | 🔄 En progreso |
```

## Tecnologias Utilizadas

- Frontend: React + Vite
- Base de datos: Firebase Firestore
- Estilos: CSS puro y Flexbox
- Gestión de estado: React Context API
- Variables de entorno: .env con soporte para Vite

## Instalacion

Instrucciones paso a paso para clonar y ejecutar la aplicación.

```shellscript
# Clonar el repositorio
git clone https://github.com/agusmaly/ProyectoFinal-GomezMaly.git

# Entrar al directorio del proyecto
cd overol-ecomerce

# Instalar dependencias
npm install


# Iniciar el servidor de desarrollo
npm run dev
```

La aplicación estará disponible en http://localhost:5181/

## Estructura del Proyecto

```sh
├── src/
    ├── components/   # Componentes reutilizables
    ├── context/      # Proveedores de contexto (Cart, User)
    ├── hooks/        # Custom hooks (e.g., useFetch)
    ├── pages/        # Vistas principales
    ├── services/     # Constantes y servicios (Firebase config)
```

## Configuración de Firebase
1. Accede a Firebase Console.
2. Crea un proyecto y habilita Firestore Database.
3. Configura las reglas de Firestore para el entorno de desarrollo:

```sh
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if true;
    }
  }
}
```

### URL del Deploy en Producción
El proyecto está desplegado en Vercel, podés acceder a la aplicación en el siguiente URL:
- **[URL Vercel](hhttps://overoltienda-5x46z9ez0-agusmalys-projects.vercel.app/mainPage)**

## Contribución

¡Contribuciones son bienvenidas! Por favor, sigue los siguientes pasos:

1. Haz un fork del repositorio.
2. Crea una nueva rama (`git checkout -b feature/nueva-funcionalidad`).
3. Realiza los cambios y haz commit (`git commit -m 'Añadida nueva funcionalidad'`).
4. Haz push a tu rama (`git push origin feature/nueva-funcionalidad`).
5. Crea un Pull Request.

##