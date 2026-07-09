import { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { LogIn } from 'lucide-react';
import { auth } from '../firebase';

export default function AdminLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email.trim(), password);
      navigate('/admin');
    } catch (err) {
      setError('Login failed — check email/password.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-bg px-6">
      <form onSubmit={handleSubmit} className="w-full max-w-sm bg-bg-raised border border-line rounded-xl p-8">
        <div className="flex items-center gap-2 mb-6">
          <LogIn size={18} className="text-amber" />
          <h1 className="text-lg font-bold text-text font-mono">Admin Login</h1>
        </div>

        {error && <div className="mb-4 text-sm text-red-400 font-mono">{error}</div>}

        <label className="block text-xs text-text-dim mb-1 font-mono">Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full mb-4 px-3 py-2.5 rounded-lg bg-bg border border-line text-text outline-none focus:border-teal"
          autoComplete="username"
          required
        />

        <label className="block text-xs text-text-dim mb-1 font-mono">Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mb-6 px-3 py-2.5 rounded-lg bg-bg border border-line text-text outline-none focus:border-teal"
          autoComplete="current-password"
          required
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-amber hover:bg-amber-hover text-bg font-mono font-bold text-sm py-2.5 rounded-lg transition-colors disabled:opacity-60"
        >
          {loading ? 'Signing in…' : 'Sign in'}
        </button>

        <p className="text-[11px] text-text-dim mt-5 font-mono leading-relaxed">
          Admin user Firebase Console → Authentication → Users me manually banega. Koi public signup nahi hai.
        </p>
      </form>
    </div>
  );
}
