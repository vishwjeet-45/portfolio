import { Plus, Trash2, ChevronUp, ChevronDown } from 'lucide-react';
import { TextField, TextAreaField, CheckboxField, StringListField, PairListField } from './fields';
import ImageUpload from './ImageUpload';
import ImageListUpload from './ImageListUpload';
import { StarPicker } from '../components/StarRatingWidgets';

/**
 * fields: [{ key, label, type }]
 * type: 'text' | 'textarea' | 'checkbox' | 'stringlist' | 'image' | 'imagelist' | 'linklist' | 'rating'
 */
export default function RepeaterEditor({ items = [], onChange, fields, emptyItem, itemLabel = 'Item', folder }) {
  function update(idx, key, val) {
    onChange(items.map((it, i) => (i === idx ? { ...it, [key]: val } : it)));
  }
  function remove(idx) {
    onChange(items.filter((_, i) => i !== idx));
  }
  function add() {
    onChange([...items, { ...emptyItem }]);
  }
  function move(idx, dir) {
    const target = idx + dir;
    if (target < 0 || target >= items.length) return;
    const next = [...items];
    [next[idx], next[target]] = [next[target], next[idx]];
    onChange(next);
  }

  return (
    <div className="flex flex-col gap-4">
      {items.map((item, idx) => (
        <div key={idx} className="border border-line rounded-lg p-4 bg-bg">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-mono text-teal">
              {itemLabel} #{idx + 1}
            </span>
            <div className="flex items-center gap-3">
              <button type="button" onClick={() => move(idx, -1)} className="text-text-dim hover:text-amber" title="Move up">
                <ChevronUp size={15} />
              </button>
              <button type="button" onClick={() => move(idx, 1)} className="text-text-dim hover:text-amber" title="Move down">
                <ChevronDown size={15} />
              </button>
              <button type="button" onClick={() => remove(idx)} className="text-red-400 hover:text-red-300" title="Delete">
                <Trash2 size={15} />
              </button>
            </div>
          </div>

          {fields.map((f) => {
            const val = item[f.key];
            if (f.type === 'textarea') {
              return (
                <TextAreaField key={f.key} label={f.label} value={val} onChange={(v) => update(idx, f.key, v)} helpText={f.helpText} />
              );
            }
            if (f.type === 'checkbox') {
              return <CheckboxField key={f.key} label={f.label} checked={val} onChange={(v) => update(idx, f.key, v)} />;
            }
            if (f.type === 'stringlist') {
              return <StringListField key={f.key} label={f.label} value={val || []} onChange={(v) => update(idx, f.key, v)} />;
            }
            if (f.type === 'linklist') {
              return (
                <PairListField
                  key={f.key}
                  label={f.label}
                  value={val || []}
                  onChange={(v) => update(idx, f.key, v)}
                  keyA="label"
                  keyB="href"
                  placeholderA="Label"
                  placeholderB="https://..."
                />
              );
            }
            if (f.type === 'rating') {
              return (
                <div key={f.key} className="mb-4">
                  <label className="block text-xs text-text-dim mb-1 font-mono">{f.label}</label>
                  <StarPicker value={val || 0} onChange={(v) => update(idx, f.key, v)} size={20} />
                </div>
              );
            }
            if (f.type === 'image') {
              return (
                <ImageUpload
                  key={f.key}
                  label={f.label}
                  value={val}
                  onChange={(v) => update(idx, f.key, v)}
                  helpText={f.helpText}
                />
              );
            }
            if (f.type === 'imagelist') {
              return (
                <ImageListUpload
                  key={f.key}
                  label={f.label}
                  value={val || []}
                  onChange={(v) => update(idx, f.key, v)}
                  helpText={f.helpText}
                  max={f.max || 8}
                />
              );
            }
            return <TextField key={f.key} label={f.label} value={val} onChange={(v) => update(idx, f.key, v)} />;
          })}
        </div>
      ))}

      <button
        type="button"
        onClick={add}
        className="self-start inline-flex items-center gap-1.5 text-sm font-mono text-amber border border-line hover:border-amber rounded-lg px-3 py-2 transition-colors"
      >
        <Plus size={14} /> Add {itemLabel}
      </button>
    </div>
  );
}
