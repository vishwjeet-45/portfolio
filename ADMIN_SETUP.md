# Admin Panel Setup Guide (Hinglish)

Aapke portfolio me ab ek `/admin` panel hai jaha se **Header, Hero, Summary,
Skills, Experience, Projects, Testimonials, Certifications, Education, aur
Footer** — sab kuchh edit ho sakta hai. Testimonials aur Hero photo ke liye
image upload bhi hai, aur agar image na daalo to sirf text dikhega (jaisa
abhi hai).

Ye sab **Firebase** (free) use karke kaam karta hai:
- **Firestore** → saara text data store hota hai
- **Storage** → uploaded images store hoti hain
- **Authentication** → sirf aap admin panel me login kar sako

---

## Step 1 — Firebase project banao

1. https://console.firebase.google.com pe jao → **Add project**
2. Naam do (e.g. `vishwjeet-portfolio`) → project create karo (Google
   Analytics skip kar sakte ho)

## Step 2 — Web app add karo aur config copy karo

1. Project overview me `</>` (Web) icon click karo
2. App nickname do → **Register app**
3. Jo `firebaseConfig` object dikhega, usme se values copy karo
4. Is project ke root me `.env.example` ko `.env` naam se copy karo aur
   values fill karo:

```
VITE_FIREBASE_API_KEY=...
VITE_FIREBASE_AUTH_DOMAIN=...
VITE_FIREBASE_PROJECT_ID=...
VITE_FIREBASE_STORAGE_BUCKET=...
VITE_FIREBASE_MESSAGING_SENDER_ID=...
VITE_FIREBASE_APP_ID=...
```

## Step 3 — Firestore Database enable karo

1. Firebase Console → **Build → Firestore Database → Create database**
2. **Production mode** select karo, location choose karo → Create
3. **Rules** tab me jao, is repo ki `firestore.rules` file ka content
   paste karke **Publish** karo (ye ensure karta hai ki content sabko
   dikhe but sirf logged-in admin edit kar sake)

## Step 4 — Storage enable karo (images ke liye)

1. Firebase Console → **Build → Storage → Get started**
2. Default location accept karo → Done
3. **Rules** tab me is repo ki `storage.rules` file ka content paste
   karke **Publish** karo

## Step 5 — Authentication enable karo aur apna admin account banao

1. Firebase Console → **Build → Authentication → Get started**
2. **Sign-in method** tab → **Email/Password** → Enable → Save
3. **Users** tab → **Add user** → apna email + password daalo

   Yehi email/password aap `/admin/login` pe use karoge. Koi public
   signup form nahi hai, isliye site secure rehti hai.

## Step 6 — Locally test karo

```bash
npm install
npm run dev
```

- Site: `http://localhost:5173/`
- Admin: `http://localhost:5173/admin` (login page pe redirect hoga)

Login karke koi bhi section edit karo → **Save changes** → site turant
update ho jayegi (real-time).

## Step 7 — Vercel pe deploy karo

1. Vercel dashboard → aapka `portfolio` project → **Settings →
   Environment Variables**
2. `.env` ki saari 6 keys yaha bhi add karo (Production + Preview dono
   environment ke liye)
3. **Redeploy** karo (Deployments tab → latest deployment → "..." →
   Redeploy) taaki naye env vars apply ho jayein

Bas — ab `https://<your-domain>/admin` pe jaake login karo aur poora
site edit karo.

---

### Notes

- Testimonials section tabhi dikhta hai jab kam se kam ek testimonial
  add ho — khaali hone par woh section site pe hide rehta hai.
- Hero photo aur testimonial photos optional hain — na daalo to sirf
  text dikhega, exactly jaisa aapne bola tha.
- Sirf **ek** admin account rakhna recommended hai (jo aapne Step 5 me
  banaya). Chaho to Authentication → Users me se aur add kar sakte ho.
