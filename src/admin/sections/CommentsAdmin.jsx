import { useEffect, useState } from 'react';
import { collection, onSnapshot, orderBy, query, doc, updateDoc, deleteDoc } from 'firebase/firestore';
import { Trash2, EyeOff, Eye, MessageSquare } from 'lucide-react';
import { db } from '../../firebase';
import { useContent } from '../../context/ContentContext';
import { StarRating } from '../../components/StarRatingWidgets';

export default function CommentsAdmin() {
  const { content } = useContent();
  const [comments, setComments] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const q = query(collection(db, 'comments'), orderBy('createdAt', 'desc'));
    const unsub = onSnapshot(
      q,
      (snap) => setComments(snap.docs.map((d) => ({ id: d.id, ...d.data() }))),
      () => setError('Comments load nahi ho paye.')
    );
    return () => unsub();
  }, []);

  async function toggleApprove(c) {
    try {
      await updateDoc(doc(db, 'comments', c.id), { approved: !c.approved });
    } catch (err) {
      setError('Update fail hua.');
    }
  }

  async function remove(c) {
    if (!confirm(`"${c.name}" ka comment permanently delete karna hai?`)) return;
    try {
      await deleteDoc(doc(db, 'comments', c.id));
    } catch (err) {
      setError('Delete fail hua.');
    }
  }

  function projectName(idx) {
    return content.projects.items[idx]?.name || `Project #${idx}`;
  }

  return (
    <div>
      <h2 className="text-lg font-bold text-text mb-1">Comments</h2>
      <p className="text-xs text-text-dim mb-5">
        Naye comments turant live dikhte hain. Koi ajeeb/spam comment aaye to yaha se hide ya delete kar do.
      </p>

      {error && <div className="text-sm text-red-400 mb-4">{error}</div>}

      {comments === null && <div className="text-text-dim text-sm font-mono">Loading…</div>}

      {comments !== null && comments.length === 0 && (
        <div className="flex flex-col items-center gap-2 text-text-dim py-12">
          <MessageSquare size={22} />
          <span className="text-sm font-mono">Abhi tak koi comment nahi aaya.</span>
        </div>
      )}

      <div className="flex flex-col gap-3">
        {comments?.map((c) => (
          <div
            key={c.id}
            className={`border rounded-lg p-4 bg-bg ${c.approved ? 'border-line' : 'border-red-400/40'}`}
          >
            <div className="flex items-start justify-between gap-3 mb-2">
              <div>
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-sm font-bold text-text">{c.name}</span>
                  <StarRating rating={c.rating} size={13} />
                  {!c.approved && (
                    <span className="text-[10px] font-mono uppercase tracking-wide text-red-400 border border-red-400/40 px-1.5 py-0.5 rounded">
                      Hidden
                    </span>
                  )}
                </div>
                <div className="text-[11px] text-text-dim font-mono mt-0.5">
                  {projectName(c.projectIndex)}
                  {c.email && ` · ${c.email}`}
                  {c.phone && ` · ${c.phone}`}
                </div>
              </div>
              <div className="flex items-center gap-3 shrink-0">
                <button
                  onClick={() => toggleApprove(c)}
                  className="text-text-dim hover:text-amber"
                  title={c.approved ? 'Hide from site' : 'Show on site'}
                >
                  {c.approved ? <Eye size={16} /> : <EyeOff size={16} />}
                </button>
                <button onClick={() => remove(c)} className="text-red-400 hover:text-red-300" title="Delete permanently">
                  <Trash2 size={16} />
                </button>
              </div>
            </div>
            <p className="text-text-body text-sm">{c.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
