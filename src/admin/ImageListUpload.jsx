import { useState } from 'react';
import { Trash2, ChevronUp, ChevronDown } from 'lucide-react';
import { uploadToCloudinary } from '../cloudinary';

export default function ImageListUpload({ label, value = [], onChange, helpText, max = 8 }) {
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState('');

  async function handleFiles(e) {
    const files = Array.from(e.target.files || []);
    if (files.length === 0) return;
    setError('');
    setUploading(true);
    try {
      const remaining = max - value.length;
      const toUpload = files.slice(0, remaining);
      const urls = await Promise.all(toUpload.map((f) => uploadToCloudinary(f)));
      onChange([...value, ...urls]);
    } catch (err) {
      setError(err.message || 'Upload failed.');
    } finally {
      setUploading(false);
      e.target.value = '';
    }
  }

  function remove(idx) {
    onChange(value.filter((_, i) => i !== idx));
  }

  function move(idx, dir) {
    const target = idx + dir;
    if (target < 0 || target >= value.length) return;
    const next = [...value];
    [next[idx], next[target]] = [next[target], next[idx]];
    onChange(next);
  }

  return (
    <div className="mb-4">
      <label className="block text-xs text-text-dim mb-1 font-mono">{label}</label>
      {helpText && <p className="text-[11px] text-text-dim mb-2">{helpText}</p>}

      {value.length > 0 && (
        <div className="grid grid-cols-3 gap-2 mb-3">
          {value.map((url, idx) => (
            <div key={idx} className="relative group border border-line rounded-lg overflow-hidden">
              <img src={url} alt="" className="w-full h-20 object-cover" />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                <button type="button" onClick={() => move(idx, -1)} className="text-white hover:text-amber" title="Move left">
                  <ChevronUp size={14} className="rotate-[-90deg]" />
                </button>
                <button type="button" onClick={() => remove(idx)} className="text-white hover:text-red-400" title="Remove">
                  <Trash2 size={14} />
                </button>
                <button type="button" onClick={() => move(idx, 1)} className="text-white hover:text-amber" title="Move right">
                  <ChevronDown size={14} className="rotate-[-90deg]" />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {value.length < max ? (
        <input
          type="file"
          accept="image/*"
          multiple
          onChange={handleFiles}
          disabled={uploading}
          className="text-xs text-text-dim file:mr-3 file:px-3 file:py-1.5 file:rounded-lg file:border file:border-line file:bg-bg-raised file:text-text file:text-xs"
        />
      ) : (
        <div className="text-[11px] text-text-dim font-mono">Max {max} images reached.</div>
      )}
      {uploading && <div className="text-xs text-teal mt-1 font-mono">Uploading…</div>}
      {error && <div className="text-xs text-red-400 mt-1 font-mono">{error}</div>}
    </div>
  );
}
