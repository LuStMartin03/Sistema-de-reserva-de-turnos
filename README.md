# proyecto-personal

### Autenticación

Todos los endpoints protegidos requieren el header:
- Authorization: Bearer <JWT_TOKEN>

## Backend Endpoints:

- Entidades: Cliente, Servicio, Turno, Horario

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

- Eliminar usuario: **DELETE /users/:id**

### Servicio:

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

### Turno:

- Obtener todos los turnos (ADMIN): **GET appointments/**

- Crear turno (CLIENT): **POST appointments/**
    ```json
        {
            "serviceId": "<id_service>",
            "timeSlotId": "<id_timeslot>32846cc5-25bd-47cb-a7ac-194a58553182",
            "date": "2026-01-10"
        }
    ```
- Obtener mis turnos (CLIENT): **GET appointments/me**

- Cancelar mi turno (CLIENT | ADMIN): **PATCH /appointments/a1f8090d-bf81-43a8-83a1-9f5b561fff4f/cancel**

### Horario:

- Crear horario (ADMIN): **POST /time-slots/**
    ```json
        {
            "time": "10:00"
        }
    ```
- Desactivar horario (ADMIN): **DELETE /time-slots/:id**

- Obtener horarios activos: **GET /time-slots/**