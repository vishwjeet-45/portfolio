import { useEffect, useState } from 'react';
import { collection, addDoc, onSnapshot, orderBy, query, serverTimestamp } from 'firebase/firestore';
import { ChevronLeft, ChevronRight, MessageSquare, User } from 'lucide-react';
import { db } from '../firebase';
import { StarRating, StarPicker } from './StarRatingWidgets';

export default function CommentSection({ projectIndex }) {
  const [comments, setComments] = useState([]);
  const [active, setActive] = useState(0);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [rating, setRating] = useState(0);
  const [text, setText] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const q = query(collection(db, 'comments'), orderBy('createdAt', 'desc'));
    const unsub = onSnapshot(
      q,
      (snap) => {
        const all = snap.docs.map((d) => ({ id: d.id, ...d.data() }));
        setComments(all.filter((c) => c.projectIndex === projectIndex));
      },
      () => setComments([])
    );
    return () => unsub();
  }, [projectIndex]);

  useEffect(() => setActive(0), [comments.length]);

  async function handleSubmit(e) {
    e.preventDefault();
    setError('');
    if (!name.trim() || !text.trim() || rating === 0) {
      setError('Naam, comment aur rating zaroori hai.');
      return;
    }
    setSubmitting(true);
    try {
      await addDoc(collection(db, 'comments'), {
        projectIndex,
        name: name.trim(),
        email: email.trim() || null,
        phone: phone.trim() || null,
        rating,
        comment: text.trim(),
        approved: true,
        createdAt: serverTimestamp(),
      });
      setName('');
      setEmail('');
      setPhone('');
      setRating(0);
      setText('');
      setSuccess(true);
      setTimeout(() => setSuccess(false), 4000);
    } catch (err) {
      setError('Comment submit nahi ho paya. Dobara try karo.');
    } finally {
      setSubmitting(false);
    }
  }

  const avgRating = comments.length ? comments.reduce((s, c) => s + c.rating, 0) / comments.length : 0;

  return (
    <div className="mt-14 pt-10 border-t border-line">
      <div className="flex items-center gap-3 mb-7">
        <MessageSquare size={20} className="text-amber" />
        <h2 className="text-xl font-extrabold">Comments {comments.length > 0 && `(${comments.length})`}</h2>
        {comments.length > 0 && (
          <span className="flex items-center gap-1.5 ml-2">
            <StarRating rating={avgRating} size={15} />
            <span className="font-mono text-xs text-text-dim">{avgRating.toFixed(1)}</span>
          </span>
        )}
      </div>

      {/* Slider */}
      {comments.length > 0 ? (
        <div className="mb-10">
          <div className="bg-bg-raised border border-line rounded-xl p-6 min-h-[150px]">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-9 h-9 rounded-full bg-[#16213A] border border-line flex items-center justify-center text-text-dim shrink-0">
                <User size={16} />
              </div>
              <div>
                <div className="text-sm font-bold text-text">{comments[active].name}</div>
                <StarRating rating={comments[active].rating} size={13} />
              </div>
            </div>
            <p className="text-text-body text-[14.5px] leading-relaxed">{comments[active].comment}</p>
          </div>

          {comments.length > 1 && (
            <div className="flex items-center justify-center gap-4 mt-4">
              <button
                onClick={() => setActive((a) => (a - 1 + comments.length) % comments.length)}
                className="text-text-dim hover:text-amber transition-colors"
              >
                <ChevronLeft size={20} />
              </button>
              <div className="flex items-center gap-1.5">
                {comments.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    className={`w-1.5 h-1.5 rounded-full transition-colors ${i === active ? 'bg-amber' : 'bg-line'}`}
                  />
                ))}
              </div>
              <button
                onClick={() => setActive((a) => (a + 1) % comments.length)}
                className="text-text-dim hover:text-amber transition-colors"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          )}
        </div>
      ) : (
        <p className="text-text-dim text-sm font-mono mb-10">Abhi tak koi comment nahi — pehla comment aap kar sakte ho.</p>
      )}

      {/* Form */}
      <form onSubmit={handleSubmit} className="bg-bg-raised border border-line rounded-xl p-6 max-w-[560px]">
        <h3 className="text-sm font-bold text-text mb-4 font-mono">Apna comment likho</h3>

        {error && <div className="mb-3 text-sm text-red-400">{error}</div>}
        {success && <div className="mb-3 text-sm text-teal">Comment post ho gaya, dhanyavaad!</div>}

        <div className="mb-3">
          <label className="block text-xs text-text-dim mb-1">Rating</label>
          <StarPicker value={rating} onChange={setRating} />
        </div>

        <div className="grid sm:grid-cols-2 gap-3 mb-3">
          <div>
            <label className="block text-xs text-text-dim mb-1">Naam *</label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3 py-2 rounded-lg bg-bg border border-line text-text text-sm outline-none focus:border-teal"
              required
            />
          </div>
          <div>
            <label className="block text-xs text-text-dim mb-1">Email (optional)</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 rounded-lg bg-bg border border-line text-text text-sm outline-none focus:border-teal"
            />
          </div>
        </div>

        <div className="mb-3">
          <label className="block text-xs text-text-dim mb-1">Phone (optional)</label>
          <input
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full px-3 py-2 rounded-lg bg-bg border border-line text-text text-sm outline-none focus:border-teal"
          />
        </div>

        <div className="mb-4">
          <label className="block text-xs text-text-dim mb-1">Comment *</label>
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            rows={3}
            className="w-full px-3 py-2 rounded-lg bg-bg border border-line text-text text-sm outline-none focus:border-teal resize-y"
            required
          />
        </div>

        <button
          type="submit"
          disabled={submitting}
          className="bg-amber hover:bg-amber-hover text-bg font-mono font-bold text-xs px-5 py-2.5 rounded-lg transition-colors disabled:opacity-60"
        >
          {submitting ? 'Posting…' : 'Post comment'}
        </button>

        <p className="text-[10.5px] text-text-dim mt-3">
          Phone/email sirf record ke liye hai — publicly kabhi nahi dikhaya jayega.
        </p>
      </form>
    </div>
  );
}
