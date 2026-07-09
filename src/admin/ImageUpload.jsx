import { useState } from 'react';
import { uploadToCloudinary } from '../cloudinary';

export default function ImageUpload({ label, value, onChange, helpText }) {
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState('');

  async function handleFile(e) {
    const file = e.target.files?.[0];
    if (!file) return;
    setError('');
    setUploading(true);
    try {
      const url = await uploadToCloudinary(file);
      onChange(url);
    } catch (err) {
      setError(err.message || 'Upload failed.');
    } finally {
      setUploading(false);
      e.target.value = '';
    }
  }

  return (
    <div className="mb-4">
      <label className="block text-xs text-text-dim mb-1 font-mono">{label}</label>
      {helpText && <p className="text-[11px] text-text-dim mb-2">{helpText}</p>}

      {value ? (
        <div className="flex items-center gap-3 mb-2">
          <img src={value} alt="" className="w-16 h-16 object-cover rounded-lg border border-line" />
          <button type="button" onClick={() => onChange('')} className="text-xs text-red-400 hover:underline font-mono">
            Remove image
          </button>
        </div>
      ) : (
        <div className="text-[11px] text-text-dim mb-2 font-mono">No image — text-only dikhega jaisa abhi hai.</div>
      )}

      <input
        type="file"
        accept="image/*"
        onChange={handleFile}
        disabled={uploading}
        className="text-xs text-text-dim file:mr-3 file:px-3 file:py-1.5 file:rounded-lg file:border file:border-line file:bg-bg-raised file:text-text file:text-xs"
      />
      {uploading && <div className="text-xs text-teal mt-1 font-mono">Uploading…</div>}
      {error && <div className="text-xs text-red-400 mt-1 font-mono">{error}</div>}
    </div>
  );
}
