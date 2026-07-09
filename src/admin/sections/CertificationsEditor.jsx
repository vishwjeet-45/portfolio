import { TextField } from '../fields';
import RepeaterEditor from '../RepeaterEditor';

export default function CertificationsEditor({ value, onChange }) {
  const set = (key) => (v) => onChange({ ...value, [key]: v });
  return (
    <div>
      <h2 className="text-lg font-bold text-text mb-1">Certifications & Learning</h2>
      <TextField label="Section heading" value={value.heading} onChange={set('heading')} />
      <RepeaterEditor
        items={value.items || []}
        onChange={set('items')}
        itemLabel="Certification"
        emptyItem={{ label: '', sub: '' }}
        fields={[
          { key: 'label', label: 'Title', type: 'text' },
          { key: 'sub', label: 'Subtext', type: 'text' },
        ]}
      />
    </div>
  );
}
