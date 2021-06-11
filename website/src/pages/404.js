import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

export default function Page404() {
    return (
        <Layout title="404" description="Page introuvable">
            <main className="container margin-vert--xl">
                <div className="row">
                    <div className="col col--6 col--offset-3">
                        <h1 className="hero__title">
                            404&nbsp;: page introuvable
                        </h1>

                        <p>
                            Il y a peut-être une erreur dans l'URL, ou alors la
                            page a été déplacée.
                        </p>

                        <div className={styles.buttons}>
                            <Link
                                className={clsx(
                                    'button button--primary button--lg',
                                    styles.getStarted,
                                )}
                                to={useBaseUrl('docs/')}
                            >
                                Parcourir la doc 📚
                            </Link>
                        </div>
                    </div>
                </div>
            </main>
        </Layout>
    );
}
