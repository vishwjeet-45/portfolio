import { useState } from 'react';
import { FileText } from 'lucide-react';
import { uploadToCloudinary } from '../cloudinary';

// Document upload (e.g. resume PDF). Stored on Cloudinary as a "raw" file,
// the returned URL is saved in Firestore like any other field.
export default function FileUpload({ label, value, onChange, helpText, accept = '.pdf,.doc,.docx' }) {
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState('');

  async function handleFile(e) {
    const file = e.target.files?.[0];
    if (!file) return;
    setError('');
    setUploading(true);
    try {
      const url = await uploadToCloudinary(file, 'raw');
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
          <FileText size={18} className="text-teal shrink-0" />
          <a href={value} target="_blank" rel="noopener noreferrer" className="text-xs text-teal hover:underline font-mono truncate max-w-[420px]">
            {value}
          </a>
          <button type="button" onClick={() => onChange('')} className="text-xs text-red-400 hover:underline font-mono shrink-0">
            Remove
          </button>
        </div>
      ) : (
        <div className="text-[11px] text-text-dim mb-2 font-mono">No file uploaded.</div>
      )}

      <input
        type="file"
        accept={accept}
        onChange={handleFile}
        disabled={uploading}
        className="text-xs text-text-dim file:mr-3 file:px-3 file:py-1.5 file:rounded-lg file:border file:border-line file:bg-bg-raised file:text-text file:text-xs"
      />
      {uploading && <div className="text-xs text-teal mt-1 font-mono">Uploading…</div>}
      {error && <div className="text-xs text-red-400 mt-1 font-mono">{error}</div>}
    </div>
  );
}
