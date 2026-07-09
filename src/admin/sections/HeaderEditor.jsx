import { TextField, PairListField } from '../fields';

export default function HeaderEditor({ value, onChange }) {
  const set = (key) => (v) => onChange({ ...value, [key]: v });
  return (
    <div>
      <h2 className="text-lg font-bold text-text mb-1">Header / Navbar</h2>
      <p className="text-xs text-text-dim mb-5">Top navigation bar ka brand naam aur links.</p>

      <TextField label="Brand name" value={value.brand} onChange={set('brand')} />
      <TextField label="Brand suffix" value={value.brandSuffix} onChange={set('brandSuffix')} />

      <PairListField
        label="Nav links (label / link href, e.g. #summary)"
        value={value.links || []}
        onChange={set('links')}
        keyA="label"
        keyB="href"
        placeholderA="label"
        placeholderB="#section"
      />
    </div>
  );
}
