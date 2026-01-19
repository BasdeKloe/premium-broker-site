# Implementatieplan: Our Story Pagina

## Overzicht
Een nieuwe "Our Story" pagina toevoegen aan de De Kloe Yachts website die perfect integreert met de bestaande design system en visuele uitstraling van de website.

## Analyse van Screenshots

Op basis van de screenshots bevat de "Our Story" pagina:

### 1. Hero Sectie (Donkerblauwe achtergrond)
- **Overline**: "DE KLOE YACHTS" (goud, uppercase)
- **Titel**: "Our Story" (wit, serif)
- **Subtitle**: "A journey rooted in passion, heritage, and an unwavering commitment to excellence." (lichtgrijs)
- **Achtergrond**: Navy-800 of Navy-950

### 2. Content Secties (Lichte achtergrond)
Meerdere story-blokken met iconen:
- **Anker icoon** - Persoonlijk verhaal over opgroeien op een zeilboot
- **Hart icoon** - Evolutie naar motor yachts en yacht building
- **Schild icoon** - Familie heritage en motto "Salus in Adversis"
- **Kompas icoon** - Professionele aanpak en specialisatie

Elk blok bevat:
- Icoon in circulaire container (links uitgelijnd)
- Meerdere paragrafen tekst
- Lichte achtergrond (#f7f7f7 / bg-off-white)

### 3. CTA Sectie (Lichte achtergrond)
- **Titel**: "Let's Begin Your Journey Together"
- **Tekst**: Uitnodigende copy
- **Button**: "GET IN TOUCH" (goud border, transparant)
- **Achtergrond**: Off-white of licht grijs

## Huidige Design System Patronen

### Kleuren
- **Navy**: #1a2332 (navy-800), #0f1419 (navy-950)
- **Gold**: #c1a767 (gold-500), #b39751 (gold-600)
- **Achtergronden**:
  - `bg-background` - wit (#ffffff)
  - `bg-off-white` - lichtgrijs (#f7f7f7)
  - `bg-navy-800` - donkerblauw
  - `bg-navy-950` - zeer donkerblauw

### Typografie
- **Serif font**: Cormorant Garamond (titels, headers)
- **Sans-serif font**: Inter (body tekst)
- **Klassen**:
  - `text-hero` - Hero titels
  - `text-h1` - Grote headers
  - `text-body-lg` - Grote body tekst
  - `text-body` - Normale body tekst
  - `text-overline` - Uppercase labels

### Iconen Styling
Bestaande patronen in de codebase:
1. **Grote circulaire containers** (About.tsx:80-82):
   ```tsx
   <div className="w-28 h-28 rounded-full border-4 border-gold-500 flex items-center justify-center bg-navy-800">
     <Compass className="w-12 h-12 text-gold-500" />
   </div>
   ```

2. **Kleine icoon containers** (HeritageSection.tsx:52-54):
   ```tsx
   <div className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-2 sm:mb-3 rounded-full bg-navy-800/5 flex items-center justify-center">
     <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-gold-600" />
   </div>
   ```

### Layout Patronen
- **Container**: Centraal gepositioneerd met max-width
- **Section padding**: `section-padding` class (py-16 md:py-24 lg:py-32)
- **Grid layouts**: Two-column op desktop, single-column op mobile
- **Animaties**: `AnimatedSection` wrapper met direction props

## Implementatie Plan

### Stap 1: Route & Pagina Aanmaken
**Bestand**: `src/pages/OurStory.tsx`

**Acties**:
1. Nieuwe pagina component aanmaken
2. Route toevoegen in `src/App.tsx`
3. Navigatie link toevoegen in `src/components/layout/Header.tsx`

### Stap 2: Hero Sectie
**Styling vergelijkbaar met**: `About.tsx` (regels 39-52)

```tsx
<section className="pt-32 pb-20 bg-navy-950">
  <Container>
    <AnimatedSection>
      <div className="text-center max-w-3xl mx-auto">
        <span className="text-overline text-gold-500 block mb-4">
          DE KLOE YACHTS
        </span>
        <h1 className="text-hero text-white mb-6">Our Story</h1>
        <p className="text-body-lg text-neutral-300">
          A journey rooted in passion, heritage, and an unwavering
          commitment to excellence.
        </p>
      </div>
    </AnimatedSection>
  </Container>
</section>
```

**Design keuzes**:
- `bg-navy-950` voor donkerste achtergrond (zoals in About CTA sectie)
- `pt-32` voor ruimte onder header
- `pb-20` voor balans
- Gecentreerd met max-width constraint

### Stap 3: Story Content Secties
**Nieuw patroon**: Links uitgelijnd icoon + tekst blok

**Layout structuur**:
```tsx
<section className="section-padding bg-background">
  <Container>
    <div className="max-w-4xl mx-auto space-y-16">
      {/* Story Block 1 - Anchor */}
      <AnimatedSection direction="up">
        <div className="flex gap-6 items-start">
          {/* Icon Container */}
          <div className="flex-shrink-0">
            <div className="w-16 h-16 rounded-full bg-neutral-100 flex items-center justify-center">
              <Anchor className="w-8 h-8 text-navy-800" />
            </div>
          </div>
          {/* Text Content */}
          <div className="space-y-4 text-body text-neutral-600">
            <p>...</p>
            <p>...</p>
          </div>
        </div>
      </AnimatedSection>

      {/* Story Block 2 - Heart */}
      {/* ... herhaal patroon */}
    </div>
  </Container>
</section>
```

**Design keuzes**:
- `max-w-4xl` voor optimale leesbaarheid (smaller dan full container)
- `space-y-16` voor ruimte tussen story blocks
- Flexbox layout voor icoon + tekst
- `bg-neutral-100` voor subtiele icoon achtergrond (zachter dan screenshots)
- `text-navy-800` voor iconen (houdt het in brand kleuren)

### Stap 4: Alternerende Achtergronden (Optioneel)
Om meer visuele interesse toe te voegen:

```tsx
{/* Section 1 - White background */}
<section className="section-padding bg-background">...</section>

{/* Section 2 - Off-white background */}
<section className="section-padding bg-off-white">...</section>
```

**Of**: Alle content in één sectie met consistente achtergrond.

### Stap 5: CTA Sectie
**Styling vergelijkbaar met**: `About.tsx` (regels 204-218)

```tsx
<section className="py-20 bg-off-white">
  <Container>
    <AnimatedSection>
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-h1 text-navy-800 mb-6">
          Let's Begin Your Journey Together
        </h2>
        <p className="text-body-lg text-neutral-600 mb-8">
          Ready to explore the possibilities? I'm here to guide you
          through every step of your yachting journey.
        </p>
        <Button
          variant="outline"
          size="lg"
          className="border-gold-500 text-gold-600 hover:bg-gold-50"
          asChild
        >
          <Link to="/contact">GET IN TOUCH</Link>
        </Button>
      </div>
    </AnimatedSection>
  </Container>
</section>
```

**Design keuzes**:
- `bg-off-white` voor subtiel contrast
- `py-20` ipv `section-padding` voor compactere CTA
- Button outline variant met goud accent
- Centered layout

### Stap 6: Icoon Selectie
**Beschikbare lucide-react iconen**:
- Anchor ✓ (anker)
- Heart (hart)
- Shield ✓ (schild)
- Compass ✓ (kompas)

Alternatieve iconen (als Heart niet beschikbaar):
- Sparkles (voor passie)
- Award (voor excellence)

### Stap 7: Content Structuur

**Story blokken**:
1. **Childhood & Sailing** (Anchor icon)
   - Opgroeien op zeilboot
   - Zee als klaslokaal
   - Vroege passie voor varen

2. **Evolution to Motor Yachts** (Heart icon)
   - Overgang naar motor yachts
   - Yacht building ervaring
   - Passie voor craftsmanship

3. **Family Heritage** (Shield icon)
   - De Kloe familie traditie
   - 340 jaar maritieme geschiedenis
   - "Salus in Adversis" motto

4. **Professional Approach** (Compass icon)
   - Specialisatie in superyachts
   - Persoonlijke aanpak
   - Relatie met clients

## Verwachte Bestandswijzigingen

### Nieuwe bestanden:
1. `src/pages/OurStory.tsx` - Nieuwe pagina component

### Te wijzigen bestanden:
1. `src/App.tsx` - Route toevoegen
2. `src/components/layout/Header.tsx` - Navigatie link toevoegen

## Design Consistentie Checklist

- ✅ Gebruik navy-950/navy-800 voor hero achtergronden
- ✅ Gebruik gold-500/gold-600 voor accenten
- ✅ Gebruik serif font (Cormorant Garamond) voor headers
- ✅ Gebruik sans-serif font (Inter) voor body tekst
- ✅ Gebruik `AnimatedSection` voor scroll animaties
- ✅ Gebruik `Container` voor content width constraints
- ✅ Gebruik `section-padding` voor consistente spacing
- ✅ Gebruik lucide-react iconen
- ✅ Gebruik bestaande button variants
- ✅ Gebruik bestaande color classes (text-neutral-600, etc.)

## Responsive Overwegingen

1. **Hero titel**: `text-hero` class heeft responsive scaling
2. **Iconen**: Kleinere iconen op mobile (16x16 → 20x20)
3. **Story layout**:
   - Mobile: Verticale stack met kleinere gaps
   - Desktop: Horizontale flex met meer ruimte
4. **Padding**: `section-padding` class heeft responsive values

## Implementatie Volgorde

1. ✅ Analyseer screenshots en bestaande code
2. ✅ Schrijf implementatie plan
3. ⏳ Maak `OurStory.tsx` pagina aan
4. ⏳ Implementeer hero sectie
5. ⏳ Implementeer story content secties
6. ⏳ Implementeer CTA sectie
7. ⏳ Voeg route toe aan App.tsx
8. ⏳ Voeg navigatie link toe aan Header
9. ⏳ Test responsive gedrag
10. ⏳ Review en verfijn styling details

## Aandachtspunten

1. **Icoon styling**: Screenshots tonen simpele circulaire containers - niet te veel decoratie
2. **Tekst kleuren**: Zorg voor voldoende contrast voor leesbaarheid
3. **Spacing**: Houd genoeg witruimte tussen blokken
4. **Animaties**: Gebruik subtiele up-direction animaties
5. **Motto styling**: "Salus in Adversis" moet italic en gold zijn (zoals in andere secties)

## Alternatieve Benaderingen

### Optie A: Enkele sectie met alle content
- **Voordeel**: Eenvoudiger structuur, minder code
- **Nadeel**: Kan visueel saai zijn zonder variatie

### Optie B: Alternerende achtergrond secties
- **Voordeel**: Meer visuele interest, duidelijke scheiding
- **Nadeel**: Meer code, complexere structuur

### Optie C: Two-column layout (zoals HeritageSection)
- **Voordeel**: Past bij bestaande patronen
- **Nadeel**: Minder ruimte voor langere verhalen

**Aanbeveling**: Start met Optie A en evalueer visueel resultaat.

## Geschatte Complexiteit
- **Moeilijkheidsgraad**: ⭐⭐ (2/5)
- **Geschatte tijd**: 30-45 minuten
- **Risico's**: Laag - gebruikt alleen bestaande componenten en patronen
