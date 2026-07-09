import { TextField } from '../fields';
import RepeaterEditor from '../RepeaterEditor';

export default function ExperienceEditor({ value, onChange }) {
  const set = (key) => (v) => onChange({ ...value, [key]: v });
  return (
    <div>
      <h2 className="text-lg font-bold text-text mb-1">Professional Experience</h2>
      <TextField label="Section heading" value={value.heading} onChange={set('heading')} />
      <RepeaterEditor
        items={value.jobs || []}
        onChange={set('jobs')}
        itemLabel="Job"
        emptyItem={{ role: '', company: '', date: '', current: false, points: [] }}
        fields={[
          { key: 'role', label: 'Role / title', type: 'text' },
          { key: 'company', label: 'Company', type: 'text' },
          { key: 'date', label: 'Date range', type: 'text' },
          { key: 'current', label: 'Currently working here?', type: 'checkbox' },
          { key: 'points', label: 'Responsibilities / bullet points', type: 'stringlist' },
        ]}
      />
    </div>
  );
}
