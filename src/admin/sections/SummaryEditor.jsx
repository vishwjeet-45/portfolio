import { TextField, TextAreaField } from '../fields';

export default function SummaryEditor({ value, onChange }) {
  const set = (key) => (v) => onChange({ ...value, [key]: v });
  return (
    <div>
      <h2 className="text-lg font-bold text-text mb-1">Summary</h2>
      <TextField label="Section heading" value={value.heading} onChange={set('heading')} />
      <TextAreaField label="Summary text" value={value.text} onChange={set('text')} rows={8} />
    </div>
  );
}
