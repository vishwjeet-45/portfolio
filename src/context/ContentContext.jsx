import { createContext, useContext, useEffect, useState } from 'react';
import { doc, onSnapshot } from 'firebase/firestore';
import { db } from '../firebase';
import { defaultContent } from '../defaultContent';

export const contentDocRef = () => doc(db, 'site', 'content');

const ContentContext = createContext({ content: defaultContent, loading: true });

function isPlainObject(v) {
  return v && typeof v === 'object' && !Array.isArray(v);
}

// Merges Firestore data on top of defaults so missing fields never break
// the public site (e.g. if you only edited Hero, everything else still works).
function deepMerge(base, override) {
  if (override === undefined || override === null) return base;
  if (Array.isArray(base)) return Array.isArray(override) ? override : base;
  if (isPlainObject(base) && isPlainObject(override)) {
    const out = { ...base };
    for (const key of Object.keys(override)) {
      out[key] = key in base ? deepMerge(base[key], override[key]) : override[key];
    }
    return out;
  }
  return override;
}

export function ContentProvider({ children }) {
  const [content, setContent] = useState(defaultContent);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsub = onSnapshot(
      contentDocRef(),
      (snap) => {
        setContent(snap.exists() ? deepMerge(defaultContent, snap.data()) : defaultContent);
        setLoading(false);
      },
      () => {
        // If Firestore isn't reachable/configured yet, fall back to defaults
        // so the public site still renders correctly.
        setContent(defaultContent);
        setLoading(false);
      }
    );
    return () => unsub();
  }, []);

  return <ContentContext.Provider value={{ content, loading }}>{children}</ContentContext.Provider>;
}

export function useContent() {
  return useContext(ContentContext);
}
