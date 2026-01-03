# proyecto-personal

## Backend Endpoints:

Entidades: Cliente, Servicio, Turno

### Cliente:
- Registrarse: **POST auth/register**
    ```json
        {
            "fullName": "User Name",
            "email": "user@email.com",
            "password": "super_safe_password"
        }
    ```

- Loguearse: **POST auth/login**
    ```json
        {
            "email": "user@email.com",
            "password": "super_safe_password"
        }
    ```


### Servicios:
- Obtener servicios: **GET services/**

- Obtener servicio por id: **GET services/:id**

- Crear servicio (ADMIN): **POST services/**
    ```json
        {
            "name": "Service Name",
            "price": 1000,
            "durationMin": 45
        }
    ```

- Cambiar servicio (ADMIN): **PUT services/:id**
    ```json
        {
            "name": "Service Name",
            "price": 1,
            "durationMin": 45,
            "isActive": true
        }
    ```

- Eliminar servicio (ADMIN): **DELETE services/:id**

### Turnos:
