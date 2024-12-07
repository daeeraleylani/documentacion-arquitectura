# Template Method

## **¿Qué es Template Method?**

El patrón **Template Method** es un patrón de diseño creacional que define el esqueleto de un algoritmo en una clase base, dejando la implementación de ciertos pasos en clases derivadas. Esto permite que las subclases redefinan partes del algoritmo sin cambiar su estructura general.

El patrón organiza el comportamiento común en un solo lugar y delega las variaciones específicas a las subclases, promoviendo el principio de reutilización de código.

<img src="https://refactoring.guru/images/patterns/content/template-method/template-method.png?id=eee9461742f832814f19612ccf472819" alt="Diagrama del patrón Template Method" class="custom-img-5"/>

## **¿En qué se utiliza el Template Method?**

El patrón Template Method se utiliza cuando:
- Quieres evitar la duplicación de código al tener varias implementaciones similares con ligeras variaciones.
- Deseas proporcionar una estructura general para un conjunto de operaciones, permitiendo a las subclases modificar comportamientos específicos.
- Es necesario seguir un algoritmo común con detalles específicos que dependen de la implementación concreta.

## **Ventajas del Patrón Template Method**
- **Reutilización de código:** Permite definir la estructura común de un algoritmo en un solo lugar.
- **Flexibilidad:** Facilita la personalización de partes específicas del algoritmo en subclases.
- **Mantenimiento:** Reduce la duplicación de código y centraliza los cambios comunes.

## **Desventajas del Patrón Template Method**
- **Fuerte acoplamiento:** Las subclases dependen de la estructura de la clase base.
- **Complejidad inicial:** Puede ser excesivo para casos donde las variaciones son mínimas.

## **Estructura del patrón Template Method**

El patrón **Template Method** está compuesto por los siguientes elementos:

- **Abstract Class (Clase Abstracta):**  
  Define el esqueleto del algoritmo mediante un método que incluye los pasos en un orden específico. Algunos pasos pueden estar implementados en la clase base, mientras que otros son abstractos y deben implementarse en las subclases.

~~~java
public abstract class DataProcessor {
    // Método plantilla
    public final void process() {
        readData();
        processData();
        writeData();
    }

    // Pasos específicos que pueden ser implementados en subclases
    protected abstract void readData();
    protected abstract void processData();
    protected abstract void writeData();
}
~~~

- **Concrete Class (Clase Concreta):**  
  Implementa los pasos específicos definidos como abstractos en la clase base.

~~~java
public class CsvDataProcessor extends DataProcessor {
    @Override
    protected void readData() {
        System.out.println("Leyendo datos desde un archivo CSV...");
    }

    @Override
    protected void processData() {
        System.out.println("Procesando datos del archivo CSV...");
    }

    @Override
    protected void writeData() {
        System.out.println("Escribiendo datos procesados en un archivo CSV...");
    }
}

public class JsonDataProcessor extends DataProcessor {
    @Override
    protected void readData() {
        System.out.println("Leyendo datos desde un archivo JSON...");
    }

    @Override
    protected void processData() {
        System.out.println("Procesando datos del archivo JSON...");
    }

    @Override
    protected void writeData() {
        System.out.println("Escribiendo datos procesados en un archivo JSON...");
    }
}
~~~

## **Ejemplo en un entorno real**

### ***Procesamiento de Datos***

**Contexto:**  
En una aplicación de análisis de datos, existen diferentes formatos de entrada (como CSV, JSON, XML) que requieren pasos específicos para leer, procesar y escribir los datos. Sin embargo, el flujo general del procesamiento es el mismo.

El patrón Template Method ayuda a definir este flujo general, mientras que las subclases manejan las diferencias en los formatos de datos.

### ***Estructura***

- **Clase Abstracta:** Define el flujo general de lectura, procesamiento y escritura de datos.
- **Clases Concretas:** Implementan los detalles específicos para cada formato de datos (CSV, JSON, XML).

### ***Funcionamiento***

1. **Paso común:**  
   La clase abstracta gestiona el flujo general del procesamiento de datos.  

2. **Personalización:**  
   Cada subclase implementa los detalles para manejar formatos específicos, como cómo leer o escribir los datos.  

### ***Ejemplo en detalle***

- **Procesador de CSV:**  
  - **Lectura:** Leer datos desde un archivo CSV.  
  - **Procesamiento:** Transformar datos según reglas específicas para CSV.  
  - **Escritura:** Guardar datos procesados en un nuevo archivo CSV.  

- **Procesador de JSON:**  
  - **Lectura:** Leer datos desde un archivo JSON.  
  - **Procesamiento:** Aplicar transformaciones específicas para JSON.  
  - **Escritura:** Guardar datos procesados en un nuevo archivo JSON.  

### ***Relación entre la Clase Abstracta y las Clases Concretas***

- La clase base controla el flujo general del procesamiento de datos, asegurando consistencia.  
- Las subclases implementan las variaciones específicas, garantizando flexibilidad y personalización.
