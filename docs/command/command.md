# Command

## **¿Que es Command?**
El patrón **Command** encapsula una solicitud como un objeto independiente que contiene toda la información necesaria para procesarla. Este patrón permite desacoplar al remitente de una solicitud (quien la emite) del receptor (quien la ejecuta), brindando mayor flexibilidad en el diseño del software.

Con el patrón Command, puedes parametrizar métodos con diferentes solicitudes, poner en cola la ejecución de solicitudes, registrar operaciones realizadas e incluso implementar deshacer/rehacer operaciones fácilmente.

<img src="https://cdn.discordapp.com/attachments/696173635441786902/1314814987906318346/command-es.png?ex=67552461&is=6753d2e1&hm=3b6f8ee6239d3830f83825aa2e32d162932df900340b0aebbce6e3df8224745c&" alt="Descripción de la imagen" class="custom-img-5"/>

## **¿En qué se utiliza Command?**

El patrón Command  se utiliza cuando:
- Necesitas encapsular una operación, solicitud o acción en un objeto.
- Quieres parametrizar objetos con operaciones, retrasar la ejecución o almacenar un historial de comandos.
- Deseas implementar deshacer/rehacer (undo/redo) de forma sencilla.
- Quieres separar el objeto que solicita una operación del que la ejecuta.

## **Ventajas del Patrón Command**
- **Desacoplamiento:** Separa al remitente del receptor de la solicitud, promoviendo un diseño más modular y flexible.
- **Reutilización:** Permite reutilizar comandos en diferentes contextos.
- **Historial:** Facilita el registro de las solicitudes para implementar funciones de deshacer/rehacer.
- **Colas de tareas:** Es sencillo almacenar y gestionar comandos en una cola para su ejecución posterior.
- **Flexibilidad:** Agregar nuevos comandos no requiere modificar clases existentes, lo que cumple con el principio de abierto/cerrado.

## **Desventajas del Patrón Command**
- **Complejidad:** Incrementa la cantidad de clases en el sistema debido a la necesidad de crear una clase para cada comando.
- **Sobrecarga:** Puede resultar excesivo para aplicaciones pequeñas o solicitudes simples.


## **Estructura del patrón State**

- **Command (Comando):**
Define la interfaz común para todos los comandos.
~~~
public interface Command {
    void execute();
}
~~~
-  **Concrete Commands (Comandos Concretos):**
Implementan la lógica de los comandos específicos.
~~~
public class PastaOrder implements Command {
    private Chef chef;

    public PastaOrder(Chef chef) {
        this.chef = chef;
    }

    @Override
    public void execute() {
        chef.cookPasta();
    }
}
~~~
-  **Receiver (Receptor):**
Es el objeto que realiza el trabajo real cuando se ejecuta el comando.
~~~
public class Chef {
    public void cookPasta() {
        System.out.println("El chef está preparando un plato de pasta.");
    }

    public void makeSalad() {
        System.out.println("El chef está preparando una ensalada.");
    }
}

~~~
-  **Invoker (Invocador):**
Llama al comando y delega la acción al receptor.
~~~
import java.util.ArrayList;
import java.util.List;

public class Waiter {
    private List<Command> orderQueue = new ArrayList<>();

    public void takeOrder(Command order) {
        orderQueue.add(order);
    }

    public void sendOrders() {
        for (Command order : orderQueue) {
            order.execute();
        }
        orderQueue.clear();
    }
}

~~~
-  **Client (Cliente):**
Crea y configura los comandos, receptores e invocadores.
~~~
public class Restaurant {
    public static void main(String[] args) {
        Chef chef = new Chef();

        Command pastaOrder = new PastaOrder(chef);
        Command saladOrder = new SaladOrder(chef);

        Waiter waiter = new Waiter();

        System.out.println("El cliente hace pedidos:");
        waiter.takeOrder(pastaOrder);
        waiter.takeOrder(saladOrder);

        System.out.println("\nEl camarero envía los pedidos a la cocina:");
        waiter.sendOrders();
    }
}

~~~

## **Ejemplo en un entorno real**  

***Gestión de Pedidos en un Restaurante***  

- **Contexto:**
En un restaurante concurrido, los pedidos deben gestionarse de manera eficiente para garantizar un servicio rápido. Cada pedido sigue un flujo específico: el cliente realiza el pedido, el camarero lo registra, el chef lo prepara, y finalmente el pedido se sirve. El restaurante implementa el patrón Command para gestionar esta funcionalidad.

***Estructura***

- **Comando (Command):** Representa un pedido genérico que define una interfaz común para ejecutar el pedido.

- **Comandos Concretos (Concrete Commands):** Cada comando representa un pedido específico, como preparar un plato de pasta o una ensalada.

- **Receptor (Receiver):** El chef, quien ejecuta las acciones específicas de acuerdo al pedido.

- **Invocador (Invoker):** El camarero, quien toma los pedidos de los clientes y los entrega al chef para su preparación.

- **Cliente (Client):** El cliente que realiza un pedido, creando comandos específicos para que el camarero los gestione.

***Funcionamiento***

- **Creación de pedidos:** El cliente solicita un plato al camarero.
Ejemplo: "Quiero un plato de pasta y una ensalada."

- **Registro del pedido:** El camarero registra el pedido y lo coloca en una lista de tareas.

- **Preparación en la cocina:** El chef toma cada pedido de la lista y lo prepara según las instrucciones.

- **Entrega del pedido:** El camarero sirve el plato preparado al cliente.

***Flujo de un Pedido***

1. **Cliente realiza el pedido:**
    - Pedido: "Quiero un plato de pasta."
    - Acción: El cliente crea un comando para un plato de pasta y lo envía al camarero.
    - Camarero toma el pedido:
    - Acción: El camarero almacena el pedido en una lista de órdenes pendientes.

2. **Chef prepara la comida:**
    - Acción: El chef ejecuta el pedido, cocinando el plato solicitado.

3. **Pedido servido:**
    - Acción: El camarero verifica el pedido preparado y lo sirve al cliente.

***Ejemplo en detalle***

- **Pedido de Pasta:**
El cliente solicita un plato de pasta.
Mensaje: "Quiero un plato de pasta."

- **El camarero registra el pedido y lo entrega al chef.**
Mensaje: "Pedido: Plato de pasta."

- **El chef prepara el plato según la receta.**
Mensaje: "El chef está preparando el plato de pasta."

- **El camarero sirve el plato al cliente.**
Mensaje: "Aquí está su plato de pasta. ¡Disfrute!"

- **Pedido de Ensalada:**
El cliente solicita una ensalada.
Mensaje: "Quiero una ensalada."

- **El camarero registra el pedido y lo entrega al chef.**
Mensaje: "Pedido: Ensalada."

- **El chef prepara la ensalada según la receta.**
Mensaje: "El chef está preparando la ensalada."

- **El camarero sirve la ensalada al cliente.**
Mensaje: "Aquí está su ensalada. ¡Disfrute!"

***Relación entre Invocador, Comando y Receptor***

- Cliente (Cliente): Crea comandos específicos y los entrega al camarero.
- Camarero (Invocador): Toma los comandos (pedidos) y los entrega al chef.
- Chef (Receptor): Ejecuta las acciones específicas según las instrucciones del pedido (comando).
- Pedido (Command): Define y encapsula las acciones necesarias para preparar cada plato.
- Este patrón permite que cada elemento del flujo trabaje de manera independiente, manteniendo un sistema flexible y fácil de escalar (por - ejemplo, agregando nuevos platos o comportamientos sin modificar el flujo principal).

<img src="https://cdn.discordapp.com/attachments/696173635441786902/1314814987658727424/command-comic-1.png?ex=67552461&is=6753d2e1&hm=ecb30f2d671026474d6a626acbf1ac192fa9d36d63d9b1f9819e64785ee16a36&" alt="Descripción de la imagen" class="custom-img-5"/>
