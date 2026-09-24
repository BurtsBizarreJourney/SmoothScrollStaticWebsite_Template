# Starter — efectos de scroll (GSAP + Lenis + Framer Motion)

Starter de Next.js con la pila de librerías típica detrás de landing pages
"cinemáticas" con scroll pinneado, smooth-scroll y transiciones animadas.
Todo el contenido es de relleno — reemplázalo por el tuyo.

## Librerías

| Librería | Para qué |
|---|---|
| `lenis` | Smooth-scroll con inercia (el scroll "se desliza" en vez de parar en seco) |
| `gsap` + `ScrollTrigger` | Pinnear una sección y animar su contenido según el progreso del scroll |
| `framer-motion` | Transiciones de entrada/salida (toggle, tarjetas al hacer scroll, hero) |

## Componentes (`app/components/`)

- **`SmoothScroll.tsx`** — envuelve toda la app en una instancia de Lenis y
  sincroniza su render loop con el de GSAP. Sin esto, GSAP y el scroll
  suave pueden desincronizarse y verse "a tirones".
- **`ScrollPinReveal.tsx`** — el efecto de "sección fija mientras haces
  scroll, cambiando imágenes de fondo". Recibe un arreglo de `frames` y
  cuánto scroll (`scrollLengthVh`) debe durar toda la secuencia.
- **`AnimatedToggle.tsx`** — switch de dos estados con `AnimatePresence` de
  Framer Motion, para que el contenido saliente se anime antes de que
  entre el nuevo.
- **`RevealCards.tsx`** — tarjetas que aparecen escalonadas (`stagger`)
  cuando entran en el viewport, usando `whileInView`.
- **`Hero.tsx`** — texto e imagen de fondo con un blur-in al cargar.

## Cómo hacerlo tuyo

1. **Contenido** → todo está en `app/page.tsx`, en props que le pasas a
   cada componente.
2. **Imágenes de la secuencia pinneada** → en `ScrollPinReveal.tsx`, cada
   `frame` es un `<div>` placeholder (`.pin-reveal-frame`). Cámbialos por
   `<Image fill src="..." alt="..." />` de `next/image`.
3. **Duración del efecto** → `scrollLengthVh` en `ScrollPinReveal`
   controla cuántos "viewports" de scroll dura la secuencia antes de
   soltar el pin.
4. **Colores y tipografía** → tokens al inicio de `app/globals.css`.
5. **Accesibilidad** → todos los componentes respetan
   `prefers-reduced-motion`: si el usuario lo activa en su sistema, los
   efectos se desactivan o se reducen a algo estático.

## Desarrollo local
```bash
npm install
npm run dev
```

## Desplegar en Vercel
```bash
npm i -g vercel
vercel --prod
```
o impórtalo desde GitHub en vercel.com — detecta Next.js automáticamente.

## Nota
Este starter reproduce **técnicas** de animación de uso común en la
industria (scroll pinning, smooth-scroll, crossfades), no el diseño,
copy ni assets de ningún sitio en particular.

Based on:
```bash
https://github.com/BurtsBizarreJourney/video-course-starter-kit/tree/main
```
