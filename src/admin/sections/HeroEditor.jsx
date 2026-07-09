import { TextField, PairListField } from '../fields';
import ImageUpload from '../ImageUpload';

export default function HeroEditor({ value, onChange }) {
  const set = (key) => (v) => onChange({ ...value, [key]: v });
  return (
    <div>
      <h2 className="text-lg font-bold text-text mb-1">Hero Section</h2>
      <p className="text-xs text-text-dim mb-5">Top heading, profile photo (optional), aur contact info.</p>

      <TextField label="Heading — pehla hissa" value={value.headingBefore} onChange={set('headingBefore')} />
      <TextField label="Heading — highlighted (amber) hissa" value={value.headingHighlight} onChange={set('headingHighlight')} />
      <TextField label="Heading — aakhri hissa" value={value.headingAfter} onChange={set('headingAfter')} />

      <ImageUpload
        label="Profile photo (optional)"
        value={value.photoUrl}
        onChange={set('photoUrl')}
        folder="hero"
        helpText="Agar upload nahi karoge to sirf text dikhega, jaisa abhi hai."
      />

      <TextField label="Resume URL (download link)" value={value.resumeUrl} onChange={set('resumeUrl')} />
      <TextField label="GitHub URL" value={value.githubUrl} onChange={set('githubUrl')} />
      <TextField label="Phone" value={value.phone} onChange={set('phone')} />
      <TextField label="Email" value={value.email} onChange={set('email')} />
      <TextField label="Location" value={value.location} onChange={set('location')} />
      <TextField label="Live project — label" value={value.liveProjectLabel} onChange={set('liveProjectLabel')} />
      <TextField label="Live project — URL" value={value.liveProjectUrl} onChange={set('liveProjectUrl')} />

      <PairListField
        label="Terminal lines (command / output)"
        value={value.terminalLines || []}
        onChange={set('terminalLines')}
        keyA="t"
        keyB="out"
        placeholderA="command"
        placeholderB="output text"
      />
    </div>
  );
}
