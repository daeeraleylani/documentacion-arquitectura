# Command Pattern

El patrón **Command** encapsula una solicitud como un objeto independiente que contiene toda la información necesaria para procesarla. Este patrón permite desacoplar al remitente de una solicitud (quien la emite) del receptor (quien la ejecuta), brindando mayor flexibilidad en el diseño del software.

Con el patrón Command, puedes parametrizar métodos con diferentes solicitudes, poner en cola la ejecución de solicitudes, registrar operaciones realizadas e incluso implementar deshacer/rehacer operaciones fácilmente.


## **Ventajas del Patrón Command**
- **Desacoplamiento:** Separa al remitente del receptor de la solicitud, promoviendo un diseño más modular y flexible.
- **Reutilización:** Permite reutilizar comandos en diferentes contextos.
- **Historial:** Facilita el registro de las solicitudes para implementar funciones de deshacer/rehacer.
- **Colas de tareas:** Es sencillo almacenar y gestionar comandos en una cola para su ejecución posterior.
- **Flexibilidad:** Agregar nuevos comandos no requiere modificar clases existentes, lo que cumple con el principio de abierto/cerrado.

## **Desventajas del Patrón Command**
- **Complejidad:** Incrementa la cantidad de clases en el sistema debido a la necesidad de crear una clase para cada comando.
- **Sobrecarga:** Puede resultar excesivo para aplicaciones pequeñas o solicitudes simples.
