# State Pattern

El patrón **State** permite que un objeto cambie su comportamiento cuando su estado interno cambia. Es como si el objeto cambiara su clase en tiempo de ejecución. Este patrón se utiliza para manejar estados dinámicos de manera más organizada, evitando el uso excesivo de declaraciones condicionales.

El patrón State separa la lógica relacionada con los diferentes estados en clases distintas, lo que facilita su mantenimiento y escalabilidad.


## **Ventajas del Patrón State**
- **Organización:** Elimina largas estructuras condicionales como `if` o `switch`, distribuyendo el comportamiento en diferentes clases.
- **Escalabilidad:** Facilita la adición de nuevos estados sin modificar el código existente.
- **Mantenimiento:** Promueve un código más limpio y fácil de mantener al encapsular la lógica de estado.
- **Flexibilidad:** Permite cambiar el estado del objeto dinámicamente en tiempo de ejecución.

## **Desventajas del Patrón State**
- **Complejidad:** Incrementa el número de clases en el sistema debido a la creación de una clase por cada estado.
- **Sobrecarga:** Puede ser innecesario para problemas con pocos estados o comportamientos simples.