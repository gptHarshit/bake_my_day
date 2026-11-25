# BakeMyDay — menu site

Next.js 16 (App Router) + GSAP. Ek page ki menu site, saath me downloadable PDF menu.

## Local chalana

```bash
npm install
npm run dev
```

Phir http://localhost:3000 kholo. Node 20.9 ya usse naya chahiye.

## Vercel par deploy

1. Is folder ko ek GitHub repo me push karo.
2. vercel.com par **Add New → Project**, repo import karo.
3. Framework apne aap "Next.js" detect hoga. **Deploy** dabao. Link mil jayega.

Ya bina GitHub ke, isi folder se: `npx vercel`

## Kya kahan badalna hai

| Kaam | File |
| --- | --- |
| Cake ke naam / prices | `data/menu.js` |
| Phone number, WhatsApp, Instagram, address | `data/site.js` |
| Rang, fonts, spacing | `app/globals.css` (upar `:root` me) |
| Opening animation (Bake / My / Day) | `components/Intro.jsx` |
| Saari animation ki timing | `components/Motion.jsx` |
| Mascot (Sunny) | `components/Sunny.jsx` |
| Download hone wala PDF | `public/BakeMyDay-Menu.pdf` |

`data/site.js` me `whatsapp` number bharte hi "Order on WhatsApp" button hero aur footer me aa jata hai.

Phone number `data/site.js` ke `phone` field me hai — header button, hero button, footer
aur PDF, chaaro jagah wahi se aata hai. Download PDF ka button sirf footer me hai.

Dhyan rahe: `data/menu.js` me price badalne se PDF apne aap nahi badalta. PDF alag file hai, use naye wale se replace karna hoga.

## Opening animation

Site khulte hi **Bake → My → Day** upar se girte hain, screen ke 70% par rukte hain,
ek second ruk kar shutter khulta hai aur menu andar se dikhta hai (~4 second).
Kahin bhi click ya `Esc` dabane se skip ho jati hai, aur jis user ne apne system me
"reduce motion" on kiya hai usko seedha site dikhti hai.

## Fonts

Dono fonts `app/fonts` me bundled hain, build ke time kuch download nahi hota.

- TeX Gyre Bonum (headings, cake names) — GUST Font License
- Inter (prices, chhota text) — SIL Open Font License 1.1, Latin + ₹ subset
