import { TextField, StringListField } from '../fields';
import RepeaterEditor from '../RepeaterEditor';

export default function EducationEditor({ value, onChange }) {
  const set = (key) => (v) => onChange({ ...value, [key]: v });
  return (
    <div>
      <h2 className="text-lg font-bold text-text mb-1">Education</h2>
      <TextField label="Section heading" value={value.heading} onChange={set('heading')} />
      <RepeaterEditor
        items={value.items || []}
        onChange={set('items')}
        itemLabel="Education entry"
        emptyItem={{ title: '', school: '', meta: '' }}
        fields={[
          { key: 'title', label: 'Title (e.g. Diploma in CS)', type: 'text' },
          { key: 'school', label: 'School / University', type: 'text' },
          { key: 'meta', label: 'Meta (year, grade)', type: 'text' },
        ]}
      />

      <div className="mt-8 pt-6 border-t border-line">
        <TextField label="Highlights heading" value={value.highlightsHeading} onChange={set('highlightsHeading')} />
        <StringListField label="Highlights list" value={value.highlights || []} onChange={set('highlights')} />
      </div>
    </div>
  );
}
