import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: 'Un style harmonisé, peu importe le projet',
    imageUrl: 'img/home/illu1.svg',
    description: (
      <>
        De notre site vitrine <a href="https://www.paygreen.io/" target="_blank">PayGreen IO</a> aux back-offices <a href="https://climatekit.paygreen.fr" target="_blank">ClimateKit</a> et <a href="https://charitykit.paygreen.fr" target="_blank">CharityKit</a> en passant par notre <a href="https://faq.paygreen.io/" target="_blank">FAQ</a>, toutes nos applications React utilisent la librairie de composants <strong>PayGreen UI</strong>. 👩‍🎤
      </>
    ),
  },
  {
    title: 'Un large choix de composants',
    imageUrl: 'img/home/illu2.svg',
    description: (
      <>
        Utilisable autant pour des vitrines que pour des back-offices de gestion, <strong>PayGreen UI</strong> décline ses composants en plusieurs versions visuelles&nbsp;: retrouvez notamment le composant <code>Button</code> pour les vitrines, et son homologue <code>DaButton</code> pour les interfaces de type <i><b>DA</b>shboard</i>. 💪
      </>
    ),
  },
  {
    title: 'Dark mode compliant',
    imageUrl: 'img/home/illu3.svg',
    description: (
      <>
        100% de nos composants sont disponibles à la fois en <code>lightmode</code> et en <code>darkmode</code>. Utilisez le Toggle 🌞🌜 en haut à droite pour vous en rendre compte&nbsp;!
      </>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`${siteConfig.title}`}
      description={siteConfig.tagline}>
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/')}>
              Commencer 🚀
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}
