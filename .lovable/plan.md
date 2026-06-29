

# Correzione Associazione Logo-URL Sponsor

## Problema

I file immagine degli sponsor sono stati salvati con nomi sbagliati:

| File | Contiene | Dovrebbe Contenere |
|------|----------|-------------------|
| `sponsor-harlem.png` | Logo Ridesk | Logo Harlem |
| `sponsor-mobimatter.png` | Logo Harlem | Logo MobiMatter |
| `sponsor-ridesk.png` | Logo MobiMatter | Logo Ridesk |

## Soluzione

Invece di rinominare i file (che richiederebbe riupload), modificare gli import in `src/pages/Index.tsx` per associare correttamente ogni logo al suo URL.

### Modifica: `src/pages/Index.tsx`

**Linee 13-17** - Cambiare gli import per riflettere il contenuto reale dei file:

```typescript
// Import basati sul CONTENUTO REALE dei file
import sponsorRidesk from "@/assets/sponsor-harlem.png";      // sponsor-harlem.png contiene Ridesk
import sponsorHarlem from "@/assets/sponsor-mobimatter.png";  // sponsor-mobimatter.png contiene Harlem
import sponsorMobiMatter from "@/assets/sponsor-ridesk.png";  // sponsor-ridesk.png contiene MobiMatter
import sponsorMystic from "@/assets/sponsor-mystic.webp";
import sponsorSurfr from "@/assets/sponsor-surfr.webp";
```

---

## Risultato Atteso

Dopo questa modifica:

| Logo Visualizzato | URL Aperto |
|-------------------|------------|
| Harlem | harlemkitesurfing.com |
| Mystic | mysticboarding.com |
| Surfr | thesurfr.app |
| MobiMatter | mobimatter.com |
| Ridesk | ridesk.app |

