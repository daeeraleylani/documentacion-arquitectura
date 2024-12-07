# State

## **¿Que es State?**

El patrón **State** permite que un objeto cambie su comportamiento cuando su estado interno cambia. Es como si el objeto cambiara su clase en tiempo de ejecución. Este patrón se utiliza para manejar estados dinámicos de manera más organizada, evitando el uso excesivo de declaraciones condicionales.

El patrón State separa la lógica relacionada con los diferentes estados en clases distintas, lo que facilita su mantenimiento y escalabilidad.

<img src="https://cdn.discordapp.com/attachments/696173635441786902/1314796177547333662/state-es.png?ex=675512dc&is=6753c15c&hm=a1b66bf69e99ee8c1f58fc760485e9c03f5998c557b1cbfe2a3e5e0bbc04e415&" alt="Descripción de la imagen" class="custom-img-5"/>

## **¿En qué se utiliza el State?**

El patrón State se utiliza cuando:
- Un objeto necesita cambiar su comportamiento dinámicamente en función de su estado.
- El código relacionado con diferentes estados tiende a volverse complejo y desorganizado.
- Quieres evitar el uso excesivo de condicionales (if-else, switch-case) para manejar comportamientos dependientes del estado.


## **Ventajas del Patrón State**
- **Organización:** Elimina largas estructuras condicionales como `if` o `switch`, distribuyendo el comportamiento en diferentes clases.
- **Escalabilidad:** Facilita la adición de nuevos estados sin modificar el código existente.
- **Mantenimiento:** Promueve un código más limpio y fácil de mantener al encapsular la lógica de estado.
- **Flexibilidad:** Permite cambiar el estado del objeto dinámicamente en tiempo de ejecución.

## **Desventajas del Patrón State**
- **Complejidad:** Incrementa el número de clases en el sistema debido a la creación de una clase por cada estado.
- **Sobrecarga:** Puede ser innecesario para problemas con pocos estados o comportamientos simples.

## **Estructura del patrón State**

El patrón **State** está compuesto por los siguientes elementos:

- **Context (Contexto):**  
  Representa el objeto cuyo comportamiento cambia dinámicamente según su estado. Este contiene una referencia al objeto estado actual y delega el trabajo a dicho objeto.

~~~
public class TrafficLightContext {
    private TrafficLightState currentState;

    public TrafficLightContext() {
        this.currentState = new RedState();
    }

    public void setState(TrafficLightState state) {
        this.currentState = state;
    }

    public void change() {
        currentState.handle(this);
    }
}
~~~


- **State (Estado):**  
  Define una interfaz común que encapsula el comportamiento asociado a un estado particular.
  
~~~
public interface TrafficLightState {
    void handle(TrafficLightContext context);
}
~~~

- **Concrete States (Estados Concretos):**  
  Implementan el comportamiento específico para cada estado y manejan las transiciones entre ellos.
 
~~~
public class RedState implements TrafficLightState {
    @Override
    public void handle(TrafficLightContext context) {
        System.out.println("Estado: ROJO. Detenga los vehículos.");
        context.setState(new GreenState()); // Transición al estado Verde.
    }
}
public class GreenState implements TrafficLightState {
    @Override
    public void handle(TrafficLightContext context) {
        System.out.println("Estado: VERDE. Permita que los vehículos avancen.");
        context.setState(new YellowState()); // Transición al estado Amarillo.
    }
}
public class YellowState implements TrafficLightState {
    @Override
    public void handle(TrafficLightContext context) {
        System.out.println("Estado: AMARILLO. Reduzca la velocidad, próximo cambio a ROJO.");
        context.setState(new RedState()); // Transición al estado Rojo.
    }
}
~~~

## **Ejemplo en un entorno real**  

***Control de un Semáforo Inteligente***  

**Contexto:**  
En una ciudad moderna, los semáforos deben adaptarse dinámicamente al flujo de tráfico para reducir la congestión y mejorar la movilidad. Un semáforo puede estar en diferentes estados, como **rojo**, **amarillo** y **verde**, y su comportamiento cambia dependiendo de su estado actual y el entorno.  

La ciudad implementa el patrón State para gestionar esta funcionalidad.



***Estructura***

- **Contexto (Context):** El semáforo es el objeto principal que controla la gestión del tráfico. Este cambia su comportamiento dependiendo de su estado actual.  

- **Estado (State):** Cada estado representa un comportamiento específico del semáforo, como detener vehículos (rojo), advertir sobre el cambio de luz (amarillo), o permitir el paso (verde).  

- **Estados Concretos (Concrete States):**  
  - **Estado Rojo:** Detiene los vehículos.  
  - **Estado Verde:** Permite el paso de los vehículos.  
  - **Estado Amarillo:** Advierte a los conductores que la luz cambiará a roja.  



***Funcionamiento***

- El semáforo inicia en el **estado rojo**:  
  Los vehículos deben detenerse.  

- **Cambio de estado:** Después de un tiempo, el semáforo cambia al **estado verde**, permitiendo que los vehículos avancen.  

- **Advertencia:** Antes de volver al estado rojo, el semáforo entra al **estado amarillo**, advirtiendo a los conductores que se preparen para detenerse.  

- **Ciclo continuo:** El semáforo repite este ciclo adaptándose dinámicamente al flujo de tráfico.  



***Flujo de un día típico:***

1. **Estado inicial:**  
   El semáforo empieza en **rojo** y detiene el tráfico.  
   - **Acción:** Los vehículos permanecen detenidos.  

2. **Cambio a verde:**  
   Después de un tiempo definido, el semáforo cambia a **verde**.  
   - **Acción:** Los vehículos comienzan a avanzar.  

3. **Advertencia amarilla:**  
   Justo antes de cambiar a rojo, el semáforo entra al estado **amarillo**.  
   - **Acción:** Los conductores son advertidos para que se preparen a detenerse.  

4. **Reinicio del ciclo:**  
   El semáforo vuelve al estado **rojo**, deteniendo nuevamente el tráfico.  



***Ejemplo en detalle***

- **Estado Rojo:**  
  Un grupo de vehículos espera en el cruce porque la luz está roja.  
  **Mensaje:** *“El semáforo está en rojo. Por favor, deténgase.”*  

- **Estado Verde:**  
  Los vehículos que estaban detenidos comienzan a avanzar.  
  **Mensaje:** *“El semáforo está en verde. Puede avanzar.”*  

- **Estado Amarillo:**  
  Los conductores que llegan al cruce reciben la advertencia de que deben reducir la velocidad.  
  **Mensaje:** *“El semáforo está en amarillo. Prepárese para detenerse.”*  



***Relación entre Contexto y Estados***

- El semáforo (Contexto) delega el comportamiento a su estado actual (Rojo, Verde o Amarillo).  
- Cada estado define el comportamiento específico del semáforo, eliminando la necesidad de manejar condiciones complejas.  
