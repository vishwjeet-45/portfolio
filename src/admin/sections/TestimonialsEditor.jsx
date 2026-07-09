import { TextField } from '../fields';
import RepeaterEditor from '../RepeaterEditor';

export default function TestimonialsEditor({ value, onChange }) {
  const set = (key) => (v) => onChange({ ...value, [key]: v });
  return (
    <div>
      <h2 className="text-lg font-bold text-text mb-1">Testimonials</h2>
      <p className="text-xs text-text-dim mb-5">
        Har testimonial ke saath image upload optional hai — agar upload nahi karoge to sirf naam/quote text dikhega.
      </p>
      <TextField label="Section heading" value={value.heading} onChange={set('heading')} />
      <RepeaterEditor
        items={value.items || []}
        onChange={set('items')}
        itemLabel="Testimonial"
        folder="testimonials"
        emptyItem={{ name: '', role: '', quote: '', imageUrl: '', rating: 5 }}
        fields={[
          { key: 'imageUrl', label: 'Photo (optional)', type: 'image', helpText: 'Chhod doge to sirf text dikhega.' },
          { key: 'name', label: 'Person name', type: 'text' },
          { key: 'role', label: 'Role / company', type: 'text' },
          { key: 'rating', label: 'Rating', type: 'rating' },
          { key: 'quote', label: 'Testimonial text', type: 'textarea' },
        ]}
      />
    </div>
  );
}
