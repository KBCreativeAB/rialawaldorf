

# Plan: Optimera bildladdning i Hero-sektionen

## Bakgrund

När sidan laddas på Netlify tar de två bilderna i hero-sektionen (bakgrundsbilden med parallax och förskolebyggnaden) lite tid att visas. Detta ger ett sämre första intryck för besökare.

## Föreslagna optimeringar

### 1. Lägg till preload-länkar i index.html

Genom att lägga till `<link rel="preload">` i HTML-headern börjar webbläsaren ladda bilderna direkt, innan JavaScript ens har körts.

**Ändringar i `index.html`:**
- Lägga till preload för `hero-bg.png` med hög prioritet
- Lägga till preload för `preschool-building.jpeg` med hög prioritet

### 2. Optimera img-taggen för förskolebilden

Uppdatera `<img>`-taggen i HeroSection.tsx med attribut som signalerar hög prioritet till webbläsaren.

**Ändringar i `src/components/sections/HeroSection.tsx`:**
- Lägga till `loading="eager"` för att undvika lazy loading
- Lägga till `fetchPriority="high"` för att prioritera laddningen
- Lägga till `decoding="async"` för smidigare rendering

### 3. Förbättra bakgrundsbildens laddning

Bakgrundsbilden laddas via CSS `background-image`, vilket är svårare att optimera. Jag föreslår att:
- Konvertera bakgrundsbilden till en `<img>`-tagg med rätt attribut
- Använda `object-fit: cover` för att behålla samma visuella effekt
- Detta ger bättre kontroll över laddningsprioritet

---

## Tekniska detaljer

### Ändringar i index.html (rad 10-12)

```html
<!-- Preload hero images for faster initial load -->
<link rel="preload" href="/src/assets/hero-bg.png" as="image" fetchpriority="high">
<link rel="preload" href="/src/assets/preschool-building.jpeg" as="image" fetchpriority="high">
```

### Ändringar i HeroSection.tsx

**Uppdatera img-taggen (rad 74-78):**
```tsx
<img
  src={preschoolBuilding}
  alt="Riala Waldorfförskola - röd stuga med trädgård"
  className="w-full h-auto object-cover object-center aspect-[4/3]"
  loading="eager"
  fetchPriority="high"
  decoding="async"
/>
```

**Uppdatera parallax-bakgrunden (rad 24-36) till en img-tagg:**
```tsx
<motion.div
  className="absolute inset-0 -top-[10%] -bottom-[10%] z-0"
  style={{
    y: backgroundY,
  }}
>
  <img
    src={heroBg}
    alt=""
    className="absolute inset-0 w-full h-full object-cover object-center"
    loading="eager"
    fetchPriority="high"
    decoding="async"
    aria-hidden="true"
  />
</motion.div>
```

---

## Sammanfattning av filer som ändras

| Fil | Typ av ändring |
|-----|----------------|
| `index.html` | Lägg till 2 preload-länkar |
| `src/components/sections/HeroSection.tsx` | Optimera båda bilderna med prioritetsattribut |

## Förväntat resultat

- Bilderna börjar laddas direkt när HTML-dokumentet parsas
- Webbläsaren prioriterar dessa bilder över andra resurser
- Snabbare visuell laddning av hero-sektionen
- Bättre First Contentful Paint (FCP) och Largest Contentful Paint (LCP)

