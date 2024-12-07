# Strategy

## **¿Qué es Strategy?**

El patrón **Strategy** es un patrón de diseño creacional que permite definir una familia de algoritmos, encapsularlos y hacerlos intercambiables. Este patrón permite que el algoritmo varíe independientemente de los clientes que lo usan.

Con **Strategy**, puedes cambiar el comportamiento de un objeto en tiempo de ejecución, seleccionando dinámicamente el algoritmo adecuado para la tarea requerida.

<img src="https://refactoring.guru/images/patterns/content/strategy/strategy.png?id=379bfba335380500375881a3da6507e0" alt="Descripción de la imagen" class="custom-img-5"/>

## **¿En qué se utiliza el Strategy?**

El patrón Strategy se utiliza cuando:
- Se tienen múltiples formas de realizar una tarea específica y se quiere elegir entre ellas dinámicamente.
- Se desea evitar grandes estructuras condicionales para seleccionar algoritmos.
- Se busca encapsular las variaciones del comportamiento en clases separadas para simplificar el código.

## **Ventajas del Patrón Strategy**
- **Flexibilidad:** Permite cambiar los algoritmos sin alterar el código cliente.
- **Organización:** Reduce el uso de estructuras condicionales para seleccionar un comportamiento.
- **Reusabilidad:** Los algoritmos encapsulados pueden reutilizarse en diferentes contextos.
- **Mantenimiento:** Facilita agregar nuevos algoritmos sin modificar el código existente.

## **Desventajas del Patrón Strategy**
- **Sobrecarga:** Incrementa el número de clases en el sistema.
- **Complejidad:** Introduce una capa adicional de abstracción.



- **Context (Contexto):**  
  Es el objeto principal que utiliza un objeto estrategia para realizar su trabajo. Tiene una referencia a un objeto de tipo estrategia y delega la ejecución a dicho objeto.





## **Estructura del Patrón Strategy**

El patrón **Strategy** consta de los siguientes elementos:

- **Context (Contexto):**  
  Es el objeto principal que utiliza un objeto estrategia para realizar su trabajo. Tiene una referencia a un objeto de tipo estrategia y delega la ejecución a dicho objeto.

```java
public class PaymentContext {
    private PaymentStrategy strategy;

    public PaymentContext(PaymentStrategy strategy) {
        this.strategy = strategy;
    }

    public void executePayment(double amount) {
        strategy.pay(amount);
    }
}
```
- **Estrategia (Strategy):**
Define una interfaz común para todas las estrategias concretas.
```
public interface PaymentStrategy {
    void pay(double amount);
}
```

- **Concrete Strategies (Estrategias Concretas):**
```
public class CreditCardPayment implements PaymentStrategy {
    @Override
    public void pay(double amount) {
        System.out.println("Pago de $" + amount + " realizado con tarjeta de crédito.");
    }
}

public class PayPalPayment implements PaymentStrategy {
    @Override
    public void pay(double amount) {
        System.out.println("Pago de $" + amount + " realizado a través de PayPal.");
    }
}

```


