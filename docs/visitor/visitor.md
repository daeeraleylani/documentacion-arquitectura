# Visitor Pattern

## ¿Que es Visitor?

Visitor es un patrón de diseño de software que permite agregar comportamientos nuevos a una estructura de objetos sin modificar las clases de los objetos individuales.  Esto se logra mediante la creación de una clase Visitor que contiene los nuevos comportamientos y la implementación de una interfaz en cada clase de la estructura de objetos que permita la visita del visitor.

<img src="https://cdn.discordapp.com/attachments/1120503923942371369/1314698739419447366/visitor-3x.png?ex=6754b81d&is=6753669d&hm=37c1563b28f983791c0bb6ae064bfbdd86573dc364427e81d71bced12f25717f&" alt="Descripción de la imagen" class="custom-img-4" />

## ¿En que se utiliza Visitor?

El patrón de diseño Visitor se utiliza para separar la lógica u operaciones que se pueden realizar sobre una estructura compleja. En ocasiones nos podemos encontrar con estructuras de datos que requieren realizar operaciones sobre ella, pero estas operaciones pueden ser muy variadas e incluso se pueden desarrollar nuevas a medida que la aplicación crece.

A medida que estas operaciones crecen, el número de operaciones que deberá tener la estructura también crecerá haciendo que administrar la estructura sea muy complejo. Por esta razón el patrón de diseño Visitor propone la separación de estas operaciones en clases independientes llamadas Visitantes, las cuales son creadas implementando una interface común y no requiere modificar la estructura inicial para agregar la operación.

## Estructura del patrón visitor

A continuacion se mostrara un ejemplo de como se compone la estructura

1. **Component (Interfaz o Clase Abstracta)**: Define una interfaz común para los elementos en la estructura que pueden aceptar un visitante.

~~~


public interface Element {
    void accept(Visitor visitor);
}

~~~

2. **ConcreteComponent (Clases Concretas)**: Clases que implementan la interfaz Element y representan los objetos concretos en la estructura.

~~~

public class ConcreteElementA implements Element {
    @Override
    public void accept(Visitor visitor) {
        visitor.visit(this);
    }

    public void operationA() {
        System.out.println("Operación específica de ElementA");
    }
}

public class ConcreteElementB implements Element {
    @Override
    public void accept(Visitor visitor) {
        visitor.visit(this);
    }

    public void operationB() {
        System.out.println("Operación específica de ElementB");
    }
}


~~~

3. **Visitor (Interfaz o Clase Abstracta)**: Define las operaciones que se realizarán sobre los elementos de la estructura. Cada tipo de elemento tiene su propio método visit.

~~~

public interface Visitor {
    void visit(ConcreteElementA elementA);
    void visit(ConcreteElementB elementB);
}


~~~

4. **ConcreteVisitor (Clases Concretas)**: Implementan las operaciones específicas para los diferentes tipos de elementos.

~~~

public class ConcreteVisitor1 implements Visitor {
    @Override
    public void visit(ConcreteElementA elementA) {
        System.out.println("ConcreteVisitor1: Procesando ElementA");
        elementA.operationA();
    }

    @Override
    public void visit(ConcreteElementB elementB) {
        System.out.println("ConcreteVisitor1: Procesando ElementB");
        elementB.operationB();
    }
}

public class ConcreteVisitor2 implements Visitor {
    @Override
    public void visit(ConcreteElementA elementA) {
        System.out.println("ConcreteVisitor2: Procesando ElementA de manera distinta");
    }

    @Override
    public void visit(ConcreteElementB elementB) {
        System.out.println("ConcreteVisitor2: Procesando ElementB de manera distinta");
    }
}


~~~

5. **ObjectStructure**: Un contenedor que almacena los elementos y permite que el visitante los recorra.

~~~

import java.util.ArrayList;
import java.util.List;

public class ObjectStructure {
    private List<Element> elements = new ArrayList<>();

    public void addElement(Element element) {
        elements.add(element);
    }

    public void applyVisitor(Visitor visitor) {
        for (Element element : elements) {
            element.accept(visitor);
        }
    }
}

~~~

6. **Cliente**: Crea los elementos, el visitante y aplica este último sobre la estructura.

~~~

public class Client {
    public static void main(String[] args) {
        ObjectStructure structure = new ObjectStructure();

        structure.addElement(new ConcreteElementA());
        structure.addElement(new ConcreteElementB());

        Visitor visitor1 = new ConcreteVisitor1();
        Visitor visitor2 = new ConcreteVisitor2();

        System.out.println("Aplicando Visitor1:");
        structure.applyVisitor(visitor1);

        System.out.println("\nAplicando Visitor2:");
        structure.applyVisitor(visitor2);
    }
}


~~~


## Ventajas y Desventajas

**Ventajas**

<img src="https://cdn.discordapp.com/attachments/1120503923942371369/1314475154423681036/check_yes.png?ex=6753e7e2&is=67529662&hm=c418a7c39cfd6c67158e2a50749ba40bd2eda601e8113203fd02dc66c9517741&" alt="Descripción de la imagen" class="custom-img" /> Principio de abierto/cerrado. Puedes introducir un nuevo comportamiento que puede funcionar con objetos de clases diferentes sin cambiar esas clases.  
<img src="https://cdn.discordapp.com/attachments/1120503923942371369/1314475154423681036/check_yes.png?ex=6753e7e2&is=67529662&hm=c418a7c39cfd6c67158e2a50749ba40bd2eda601e8113203fd02dc66c9517741&" alt="Descripción de la imagen" class="custom-img" /> Principio de responsabilidad única. Puedes tomar varias versiones del mismo comportamiento y ponerlas en la misma clase.  
<img src="https://cdn.discordapp.com/attachments/1120503923942371369/1314475154423681036/check_yes.png?ex=6753e7e2&is=67529662&hm=c418a7c39cfd6c67158e2a50749ba40bd2eda601e8113203fd02dc66c9517741&" alt="Descripción de la imagen" class="custom-img" /> Un objeto visitante puede acumular cierta información útil mientras trabaja con varios objetos. Esto puede resultar útil cuando quieras atravesar una compleja estructura de objetos, como un árbol de objetos, y aplicar el visitante a cada objeto de esa estructura.




**Desventajas** 

<img src="https://cdn.discordapp.com/attachments/1120503923942371369/1314475154818207825/753345.png?ex=6753e7e2&is=67529662&hm=62fed469dfbdb82b8ff24fc400b57d24fd39f75a663f771a361a994dcf466cbe&" alt="Descripción de la imagen" class="custom-img-2" /> Debes actualizar todos los visitantes cada vez que una clase se añada o elimine de la jerarquía de elementos.  
<img src="https://cdn.discordapp.com/attachments/1120503923942371369/1314475154818207825/753345.png?ex=6753e7e2&is=67529662&hm=62fed469dfbdb82b8ff24fc400b57d24fd39f75a663f771a361a994dcf466cbe&" alt="Descripción de la imagen" class="custom-img-2" /> Los visitantes pueden carecer del acceso necesario a los campos y métodos privados de los elementos con los que se supone que deben trabajar.


## Ejemplo en un entorno real

***Auditoría en una Empresa***  

Contexto:  
Una empresa tiene varios tipos de empleados: desarrolladores, diseñadores y gerentes. Cada uno de ellos tiene características y responsabilidades diferentes.
La empresa quiere realizar auditorías anuales y llevar a cabo evaluaciones de desempeño. Cada uno de estos procesos necesita información específica de cada tipo de empleado. Para evitar modificar continuamente las clases de empleados cuando se introduce un nuevo proceso (como "encuestas de satisfacción"), se usa el patrón Visitor.

***Estructura***

- Elementos (los empleados): Los empleados son los objetos sobre los que se aplicarán las operaciones. Hay tres tipos:

    - Desarrolladores: Tienen un número de líneas de código escritas.  
    - Diseñadores: Tienen un portafolio y métricas de creatividad.  
    - Gerentes: Tienen equipos a cargo y resultados de liderazgo.    

- Visitantes (las operaciones): Las auditorías y evaluaciones de desempeño son las operaciones que se realizarán sobre los empleados.

    - Auditoría: Revisa métricas como horas trabajadas, proyectos completados, etc.  
    - Evaluación de desempeño: Evalúa logros específicos según el rol del empleado.  

- Estructura de objetos: Una lista de todos los empleados de la empresa.  

***Funcionamiento***

**Los empleados aceptan visitantes**  

Cada empleado permite que un visitante (como la auditoría o la evaluación de desempeño) realice su trabajo. Por ejemplo:

- Un desarrollador muestra su cantidad de líneas de código y proyectos en los que participó.
- Un diseñador presenta su portafolio y proyectos creativos.
- Un gerente proporciona detalles de su equipo y resultados.  

**Los visitantes realizan las operaciones.**  

Cada visitante implementa una lógica diferente para cada tipo de empleado. Por ejemplo:  

- La auditoría verifica si los empleados han cumplido con las horas y metas esperadas.
- La evaluación de desempeño analiza métricas clave según el rol (líneas de código para desarrolladores, creatividad para diseñadores, liderazgo para gerentes).

<img src="https://cdn.discordapp.com/attachments/1120503923942371369/1314708093183197184/visitor-comic-1.png?ex=6754c0d3&is=67536f53&hm=0759056f91541a7c6f54e2ac3dad2af045c69398b2277109c9254d120bad0959&" alt="Descripción de la imagen" class="custom-img-3" />
