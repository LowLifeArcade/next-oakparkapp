import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/client';
import styles from '../styles/Home.module.css';

export default function Secret() {
  const [session, loading] = useSession();
  const [content, setContent] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('/api/request');
      const json = await res.json();

      if (json.content) {
        setContent(json.content);
      }
    };
    fetchData();
  }, [session]);

  if (typeof window !== 'undefined' && loading) return null;

  if (!session) {
    return (
      <main>
        <div>
          <h1>You are not logged in</h1>
        </div>
      </main>
    );
  }
  return (
    <main>
      <div className={styles.container}>
        <h1>Meal Request Form</h1>
        <form className={styles.form}>
          <select>
            <option>food</option>
            <option>beer</option>
            <option>pizza</option>
          </select>
          <select>
            <option>food</option>
            <option>beer</option>
            <option>pizza</option>
          </select>

        </form>
      </div>
    </main>
  );
}
