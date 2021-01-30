import Head from 'next/head';
import styles from '../styles/Home.module.css';
import React from 'react';
import Link from 'next/link';
import { signIn, signOut, register, useSession } from 'next-auth/client';

export default function Home() {
  const [session, loading] = useSession();
  return (
    <div className={styles.container}>
      <Head>
      <title>Food Order Service</title>
        <meta property="og:title" content="My page title" key="title" />
      </Head>
      <header className={styles.header}>
        <title>Head</title>
        {!session && (
          <>
            Hello, guest 
            <button onClick={register} style={{}} className={styles.buttonhead}>
              Sign Up
            </button>
          </>
        )}
        {session && (
          <div style={{}}>
            Signed in as {session.user.email}
            <button onClick={signOut} style={{}} className={styles.buttonhead}>
              Sign Out
            </button>
          </div>
        )}
      </header>
      <main className={styles.main}>
        {!session && (
          <>
            <h1>Oak Park Food Services</h1>

            <button onClick={signIn} className={styles.button}>
              Sign In
            </button>
          </>
        )}
        {session && (
          <>
            Signed in as {session.user.email} <br />
            <div>You can now access secret pages</div>
            <button>
              <Link href="/request">To the Secret</Link>
            </button>
          </>
        )}
      </main>

      <footer className={styles.footer}>
        <title>feet</title>
        copyright 2021
      </footer>
    </div>
  );
}
