import { TextField, TextAreaField, PairListField } from '../fields';

export default function FooterEditor({ value, onChange }) {
  const set = (key) => (v) => onChange({ ...value, [key]: v });
  return (
    <div>
      <h2 className="text-lg font-bold text-text mb-1">Footer</h2>
      <TextField label="Heading" value={value.heading} onChange={set('heading')} />
      <TextAreaField label="Subtext" value={value.subtext} onChange={set('subtext')} rows={3} />
      <TextField label="Contact email (mailto button)" value={value.ctaEmail} onChange={set('ctaEmail')} />
      <TextField label="Contact phone" value={value.ctaPhone} onChange={set('ctaPhone')} />
      <TextField label="Project button — label" value={value.ctaProjectLabel} onChange={set('ctaProjectLabel')} />
      <TextField label="Project button — URL" value={value.ctaProjectUrl} onChange={set('ctaProjectUrl')} />

      <PairListField
        label="Social links (label / URL)"
        value={value.socials || []}
        onChange={set('socials')}
        keyA="label"
        keyB="href"
        placeholderA="label"
        placeholderB="https://..."
      />

      <TextAreaField label="Copyright line" value={value.copyright} onChange={set('copyright')} rows={2} />
    </div>
  );
}
