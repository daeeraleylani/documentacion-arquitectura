# Observer Pattern

## ¿Que es Observer?

El patrón de diseño Observer es uno de los patrones más populares y utilizados en la programación orientada a objetos.
Este patrón permite que un objeto, conocido como “sujeto”, notifique a sus “observadores” cuando sucede un cambio en su estado.  
Por ejemplo, imaginemos que tenemos una aplicación de mensajería que notifica a los usuarios cuando reciben un nuevo mensaje.
En este caso, el sujeto sería el mensaje y los observadores serían los usuarios que están suscritos a ese mensaje.

<img src="https://cdn.discordapp.com/attachments/1120503923942371369/1314722390789591071/observer.png?ex=6754ce24&is=67537ca4&hm=b9b75197025ee7ad63d7d5820dc03b8618ec89d38a6aece0af3ad9b64e6cc203&" alt="Descripción de la imagen" class="custom-img-5" />

## ¿En que se utiliza Observer?

El patrón de diseño Observer permite observar los cambios producidos por un objeto, de esta forma, cada cambio que afecte el estado del objeto observado lanzará una notificación a los observadores; a esto se le conoce como Publicador-Suscriptor. Observer es uno de los principales patrones de diseño utilizados en interfaces gráficas de usuario (GUI), ya que permite desacoplar al componente gráfico de la acción a realizar.

## Estructura del patrón Observer

A continuacion se mostrara un ejemplo de como se compone la estructura

1. **Subject (Sujeto)**: Define una interfaz para registrar, eliminar y notificar a los observadores. Este es el objeto que se observa.

~~~

import java.util.ArrayList;
import java.util.List;

public class Subject {
    private List<Observer> observers = new ArrayList<>();
    private String state;

    public void attach(Observer observer) {
        observers.add(observer);
    }

    public void detach(Observer observer) {
        observers.remove(observer);
    }

    public void notifyObservers() {
        for (Observer observer : observers) {
            observer.update(state);
        }
    }

    public void setState(String state) {
        this.state = state;
        notifyObservers();
    }

    public String getState() {
        return state;
    }
}

~~~

2. **Observer (Observador)**: Define una interfaz para recibir actualizaciones del sujeto.

~~~

public interface Observer {
    void update(String state);
}

~~~

3. **ConcreteObserver (Observador Concreto)**: Implementa la interfaz del observador y define cómo reacciona a las actualizaciones del sujeto.

~~~

public class ConcreteObserver implements Observer {
    private String name;

    public ConcreteObserver(String name) {
        this.name = name;
    }

    @Override
    public void update(String state) {
        System.out.println("Observer " + name + " recibió actualización: " + state);
    }
}

~~~

4. **Cliente**: Configura el sujeto y los observadores, y ejecuta las notificaciones.

~~~

public class Client {
    public static void main(String[] args) {
        Subject subject = new Subject();

        Observer observer1 = new ConcreteObserver("A");
        Observer observer2 = new ConcreteObserver("B");

        subject.attach(observer1);
        subject.attach(observer2);

        System.out.println("Cambiando el estado a 'Estado 1':");
        subject.setState("Estado 1");

        System.out.println("\nCambiando el estado a 'Estado 2':");
        subject.setState("Estado 2");

        System.out.println("\nDesconectando Observer A y cambiando el estado a 'Estado 3':");
        subject.detach(observer1);
        subject.setState("Estado 3");
    }
}

~~~

## Ventajas y Desventajas

**Ventajas**

<img src="https://cdn.discordapp.com/attachments/1120503923942371369/1314475154423681036/check_yes.png?ex=6753e7e2&is=67529662&hm=c418a7c39cfd6c67158e2a50749ba40bd2eda601e8113203fd02dc66c9517741&" alt="Descripción de la imagen" class="custom-img" /> Principio de abierto/cerrado. Puedes introducir nuevas clases suscriptoras sin tener que cambiar el código de la notificadora (y viceversa si hay una interfaz notificadora).

<img src="https://cdn.discordapp.com/attachments/1120503923942371369/1314475154423681036/check_yes.png?ex=6753e7e2&is=67529662&hm=c418a7c39cfd6c67158e2a50749ba40bd2eda601e8113203fd02dc66c9517741&" alt="Descripción de la imagen" class="custom-img" /> Puedes establecer relaciones entre objetos durante el tiempo de ejecución.

**Desventajas**

<img src="https://cdn.discordapp.com/attachments/1120503923942371369/1314475154818207825/753345.png?ex=6753e7e2&is=67529662&hm=62fed469dfbdb82b8ff24fc400b57d24fd39f75a663f771a361a994dcf466cbe&" alt="Descripción de la imagen" class="custom-img-2" /> Puede ser difícil depurar si hay muchas notificaciones o dependencias circulares.

<img src="https://cdn.discordapp.com/attachments/1120503923942371369/1314475154818207825/753345.png?ex=6753e7e2&is=67529662&hm=62fed469dfbdb82b8ff24fc400b57d24fd39f75a663f771a361a994dcf466cbe&" alt="Descripción de la imagen" class="custom-img-2" /> Si hay muchos observadores, el proceso de notificación puede ser costoso.

## Ejemplo en un entorno real

***Notificaciones de una Tienda en Línea***

Contexto:  
Una tienda en línea lanza nuevos productos y promociones con frecuencia. Los clientes pueden suscribirse para recibir notificaciones sobre eventos específicos, como:

- Llegada de un producto que quieren comprar.
- Descuentos o promociones especiales.
- Noticias relacionadas con su categoría favorita.

La tienda utiliza el patrón Observer para gestionar esta funcionalidad.

***Estructura***

- Sujeto (Subject): La tienda es el sujeto principal que genera eventos, como la llegada de nuevos productos o promociones.

- Observadores (Observers): Los clientes son los observadores. Cada cliente está interesado en recibir actualizaciones específicas, como:

    - El lanzamiento de un nuevo teléfono.  
    - Ofertas en ropa deportiva.

- Relación entre Sujeto y Observadores:

    - Los clientes se suscriben a la tienda indicando en qué eventos están interesados.  
    - Cuando ocurre un evento (por ejemplo, una promoción), la tienda notifica a todos los clientes suscritos a ese tipo de evento.

***Funcionamiento***

- Un cliente se suscribe: Pedro está interesado en saber cuándo la tienda lanza descuentos en tecnología. Se suscribe al tema "Descuentos en tecnología".

- Otro cliente se suscribe: María quiere ser notificada cuando lleguen nuevos productos de moda. Se suscribe al tema "Nuevos productos de moda".

- El sujeto genera un evento: La tienda lanza una nueva promoción para dispositivos electrónicos. Esto activa el evento "Descuentos en tecnología".

- Notificación a los observadores:

    - Pedro, que está suscrito a "Descuentos en tecnología", recibe una notificación: "¡20% de descuento en smartphones!"
    - María no recibe esta notificación porque no está interesada en ese tema.

<img src="https://cdn.discordapp.com/attachments/1120503923942371369/1314722391108227102/observer-comic-1-es.png?ex=6754ce24&is=67537ca4&hm=2497ea007bd67ef20d3b41939c3d1a63fc97da18041346dc99f78d16a2b7b6f4&" alt="Descripción de la imagen" class="custom-img-3" />