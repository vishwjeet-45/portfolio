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
        emptyItem={{ tag: '', name: '', desc: '', feats: [], tech: '', links: [], highlight: false, longDescription: '', screenshots: [] }}
        fields={[
          { key: 'tag', label: 'Tag (e.g. 01 / Open Source)', type: 'text' },
          { key: 'name', label: 'Project name', type: 'text' },
          { key: 'desc', label: 'Short description (shown on card)', type: 'textarea' },
          {
            key: 'longDescription',
            label: 'Full description (shown on project detail page)',
            type: 'textarea',
            helpText: 'Khaali chhodoge to short description hi detail page pe bhi dikhegi.',
          },
          { key: 'screenshots', label: 'Screenshots (up to 8, gallery on detail page)', type: 'imagelist' },
          { key: 'feats', label: 'Feature tags', type: 'stringlist' },
          { key: 'tech', label: 'Tech stack line', type: 'text' },
          { key: 'links', label: 'Links (label / URL)', type: 'linklist' },
          { key: 'highlight', label: 'Highlight this project (teal border)', type: 'checkbox' },
        ]}
      />
    </div>
  );
}
