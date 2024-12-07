import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '¿Qué son?',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Los Patrones de Diseño de Comportamiento son soluciones probadas que facilitan la interacción y comunicación entre diferentes objetos en un sistema de software. Se centran en cómo los objetos colaboran, cómo se distribuyen responsabilidades y cómo logran trabajar juntos para resolver problemas complejos.
      </>
    ),
  },
  {
    title: '¿Qué mejoran?',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
       Mejoran la flexibilidad y reutilización del código al estructurar las interacciones de manera eficiente.
      </>
    ),
  },
  {
    title: 'Importancia',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Simplifican las interacciones entre componentes.
        Proveen soluciones estándar para problemas comunes.
        Facilitan cambios y escalabilidad del sistema.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
