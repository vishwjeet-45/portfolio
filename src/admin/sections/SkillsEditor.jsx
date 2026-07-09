import { TextField } from '../fields';
import RepeaterEditor from '../RepeaterEditor';

export default function SkillsEditor({ value, onChange }) {
  const set = (key) => (v) => onChange({ ...value, [key]: v });
  return (
    <div>
      <h2 className="text-lg font-bold text-text mb-1">Technical Stack</h2>
      <TextField label="Section heading" value={value.heading} onChange={set('heading')} />
      <RepeaterEditor
        items={value.groups || []}
        onChange={set('groups')}
        itemLabel="Skill group"
        emptyItem={{ title: '', items: [] }}
        fields={[
          { key: 'title', label: 'Group title (e.g. Languages)', type: 'text' },
          { key: 'items', label: 'Skills in this group', type: 'stringlist' },
        ]}
      />
    </div>
  );
}
