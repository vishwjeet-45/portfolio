import { TextField } from '../fields';
import RepeaterEditor from '../RepeaterEditor';

export default function ProjectsEditor({ value, onChange }) {
  const set = (key) => (v) => onChange({ ...value, [key]: v });
  return (
    <div>
      <h2 className="text-lg font-bold text-text mb-1">Key Projects</h2>
      <TextField label="Section heading" value={value.heading} onChange={set('heading')} />
      <RepeaterEditor
        items={value.items || []}
        onChange={set('items')}
        itemLabel="Project"
        emptyItem={{ tag: '', name: '', desc: '', feats: [], tech: '', links: [], highlight: false }}
        fields={[
          { key: 'tag', label: 'Tag (e.g. 01 / Open Source)', type: 'text' },
          { key: 'name', label: 'Project name', type: 'text' },
          { key: 'desc', label: 'Description', type: 'textarea' },
          { key: 'feats', label: 'Feature tags', type: 'stringlist' },
          { key: 'tech', label: 'Tech stack line', type: 'text' },
          { key: 'links', label: 'Links (label / URL)', type: 'linklist' },
          { key: 'highlight', label: 'Highlight this project (teal border)', type: 'checkbox' },
        ]}
      />
    </div>
  );
}
