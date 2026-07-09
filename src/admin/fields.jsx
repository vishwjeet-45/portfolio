export function TextField({ label, value, onChange, placeholder }) {
  return (
    <div className="mb-4">
      <label className="block text-xs text-text-dim mb-1 font-mono">{label}</label>
      <input
        type="text"
        value={value ?? ''}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-3 py-2 rounded-lg bg-bg border border-line text-text text-sm outline-none focus:border-teal"
      />
    </div>
  );
}

export function TextAreaField({ label, value, onChange, rows = 4 }) {
  return (
    <div className="mb-4">
      <label className="block text-xs text-text-dim mb-1 font-mono">{label}</label>
      <textarea
        value={value ?? ''}
        rows={rows}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-3 py-2 rounded-lg bg-bg border border-line text-text text-sm outline-none focus:border-teal resize-y"
      />
    </div>
  );
}

export function CheckboxField({ label, checked, onChange }) {
  return (
    <label className="flex items-center gap-2 mb-4 text-sm text-text font-mono">
      <input type="checkbox" checked={!!checked} onChange={(e) => onChange(e.target.checked)} />
      {label}
    </label>
  );
}

export function StringListField({ label, value = [], onChange, placeholder }) {
  function update(i, v) {
    const next = [...value];
    next[i] = v;
    onChange(next);
  }
  function remove(i) {
    onChange(value.filter((_, idx) => idx !== i));
  }
  function add() {
    onChange([...value, '']);
  }
  return (
    <div className="mb-4">
      <label className="block text-xs text-text-dim mb-1 font-mono">{label}</label>
      <div className="flex flex-col gap-2">
        {value.map((v, i) => (
          <div key={i} className="flex items-center gap-2">
            <input
              value={v}
              placeholder={placeholder}
              onChange={(e) => update(i, e.target.value)}
              className="flex-1 px-3 py-1.5 rounded-lg bg-bg border border-line text-text text-sm outline-none focus:border-teal"
            />
            <button type="button" onClick={() => remove(i)} className="text-red-400 text-xs shrink-0">✕</button>
          </div>
        ))}
      </div>
      <button type="button" onClick={add} className="text-xs text-amber mt-2 hover:underline font-mono">+ Add</button>
    </div>
  );
}

// Generic list of {a, b} pairs — used for nav links, terminal lines, etc.
export function PairListField({ label, value = [], onChange, keyA, keyB, placeholderA, placeholderB }) {
  function update(i, key, v) {
    const next = value.map((item, idx) => (idx === i ? { ...item, [key]: v } : item));
    onChange(next);
  }
  function remove(i) {
    onChange(value.filter((_, idx) => idx !== i));
  }
  function add() {
    onChange([...value, { [keyA]: '', [keyB]: '' }]);
  }
  return (
    <div className="mb-4">
      <label className="block text-xs text-text-dim mb-1 font-mono">{label}</label>
      <div className="flex flex-col gap-2">
        {value.map((item, i) => (
          <div key={i} className="flex items-center gap-2">
            <input
              placeholder={placeholderA}
              value={item[keyA] ?? ''}
              onChange={(e) => update(i, keyA, e.target.value)}
              className="w-2/5 px-3 py-1.5 rounded-lg bg-bg border border-line text-text text-sm outline-none focus:border-teal"
            />
            <input
              placeholder={placeholderB}
              value={item[keyB] ?? ''}
              onChange={(e) => update(i, keyB, e.target.value)}
              className="flex-1 px-3 py-1.5 rounded-lg bg-bg border border-line text-text text-sm outline-none focus:border-teal"
            />
            <button type="button" onClick={() => remove(i)} className="text-red-400 text-xs shrink-0">✕</button>
          </div>
        ))}
      </div>
      <button type="button" onClick={add} className="text-xs text-amber mt-2 hover:underline font-mono">+ Add</button>
    </div>
  );
}
