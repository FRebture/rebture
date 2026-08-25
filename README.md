# rebture Website — Anleitung für dich

Diese Website ist bewusst einfach gebaut: reines HTML/CSS/JavaScript,
keine Programmiersprache, kein Server nötig. Du kannst jede Datei mit
einem normalen Texteditor öffnen und bearbeiten (z.B. [VS Code](https://code.visualstudio.com/), kostenlos).

## 1. Struktur

```
rebture-website/
├── index.html          → Startseite (Deutsch) = rebture.com/
├── about/index.html    → Über uns (Deutsch)     = rebture.com/about/
├── contact/index.html  → Kontakt (Deutsch)       = rebture.com/contact/
├── en/index.html        → Home (Englisch)        = rebture.com/en/
├── en/about/index.html  → About (Englisch)        = rebture.com/en/about/
├── en/contact/index.html→ Contact (Englisch)       = rebture.com/en/contact/
├── css/style.css       → Gesamtes Design (Farben, Schrift, Layout)
├── js/main.js          → Menü, Scroll-Animation, Bild-Fallbacks
├── images/              → Hier kommen Logo & Fotos rein (siehe Punkt 2)
├── sitemap.xml          → Für Google (listet alle Seiten)
├── robots.txt           → Erlaubt Suchmaschinen den Zugriff
└── 404.html              → Fehlerseite für falsche Links
```

Jede Seite ist eine eigene HTML-Datei in einem eigenen Ordner
(`about/index.html` statt `about.html`). Dadurch bekommt jede Seite
automatisch eine saubere, dauerhafte URL wie `rebture.com/about/`
— das nennt man "Permalink", und Suchmaschinen mögen das.

## 2. Deine Bilder

Schon eingebaut (aus deinen hochgeladenen Dateien):

| Datei | Quelle | Status |
|---|---|---|
| `images/logo-cutout.svg` | dein Logo-Icon (weiß, transparent) | ✅ fertig, fürs Hero |
| `images/logo-mark.svg` | dein Logo-Icon (schwarz, transparent) | ✅ fertig |
| `images/logo-wordmark.svg` | dein "Rebture"-Schriftzug (schwarz, transparent) | ✅ fertig, in der Navigation |
| `images/ropes-bg.jpg` | dein Kletterseil-Foto (hochauflösend) | ✅ fertig, zugeschnitten (schwarzer Fotorand & Papierrand entfernt) fürs Hero |
| `images/favicon.png` | dein rundes Logo-Badge | ✅ fertig |
| `images/og-cover.jpg` | dein Logo-Lockup | ✅ fertig (Vorschaubild beim Teilen des Links) |
| `images/team-nina.jpg` | Foto von Nina (Über-uns-Seite) | ✅ fertig |
| `images/team-flo.jpg` | Foto von Flo (Über-uns-Seite) | ✅ fertig |

Noch offen — lege diese Dateien einfach mit **exakt** diesem Namen in
`images/` ab, sie werden automatisch verwendet:

| Datei | Was rein soll | Empfohlene Größe |
|---|---|---|
| `images/gallery-1.jpg` `-2.jpg` `-3.jpg` | Drei Produkt-/Werkstattfotos für die "Einblicke"-Sektion auf der Über-uns-Seite | ca. 1200×1500 px |

Tipp zum Komprimieren (Ladezeit!): [squoosh.app](https://squoosh.app)
— kostenlos, im Browser, ohne Upload zu einem fremden Server.

## 3. Deine E-Mail-Adresse eintragen

Aktuell steht überall `hello@rebture.com` als Platzhalter. Ersetze
das in **allen 6 HTML-Dateien** durch deine echte Bestell-/Kontakt-
Adresse (Suchen & Ersetzen in VS Code: Strg/Cmd+Shift+F → "hello@rebture.com"
→ deine Adresse eingeben → "Alle ersetzen").

Falls du noch keine `@rebture.com`-Adresse hast: die meisten
Domain-/Hosting-Anbieter (auch GoDaddy) bieten weitergeleitete
E-Mail-Postfächer für wenige Euro im Monat an — oder du nutzt
vorerst eine bestehende Adresse.

## 4. Instagram-Link prüfen

Der Instagram-Link steht als `https://www.instagram.com/rebture_official/` in
allen Dateien. Falls euer tatsächlicher Handle anders lautet, auch
hier per Suchen & Ersetzen anpassen.

## 5. Lokal testen (bevor du live gehst)

Kein Programm nötig — einfach `index.html` doppelklicken, öffnet sich
im Browser. Für die Scroll-Animation und Unterseiten-Links am besten
mit einem kleinen lokalen Server testen (sonst funktionieren manche
Pfade nicht korrekt):

Mit VS Code: Erweiterung "Live Server" installieren → Rechtsklick auf
`index.html` → "Open with Live Server".

## 6. Live schalten (GitHub Pages + Domain bei GoDaddy)

Kostenlos, kein Hosting-Paket nötig — GitHub Pages hostet die Datei direkt
aus deinem GitHub-Repository, deine GoDaddy-Domain zeigt einfach darauf.

### Schritt 1 — GitHub-Konto & Repository

1. Falls noch nicht vorhanden: Konto auf [github.com](https://github.com) anlegen (kostenlos).
2. Oben rechts auf **+** → **New repository**.
3. Name z.B. `rebture-website`, Sichtbarkeit **Public**, sonst nichts ankreuzen (kein README, keine .gitignore) → **Create repository**.

### Schritt 2 — Dateien hochladen (kein Programmieren nötig)

1. Entpacke die ZIP-Datei, die du von mir bekommen hast, auf deinem Computer.
2. Öffne den entpackten Ordner `rebture-website` — du siehst darin `index.html`, die Ordner `about`, `contact`, `css`, `js`, `images`, `en`, usw.
3. Auf der leeren GitHub-Repo-Seite auf **uploading an existing file** klicken.
4. **Wichtig:** Zieh den **Inhalt** des Ordners (also `index.html`, `about/`, `css/`, `js/`, `images/` usw. — alles markieren und gemeinsam reinziehen), **nicht** den äußeren Ordner `rebture-website` selbst. `index.html` muss direkt im Hauptverzeichnis des Repos landen, nicht in einem Unterordner.
5. Unten **Commit changes** klicken.

*(Für spätere Änderungen ist die kostenlose App [GitHub Desktop](https://desktop.github.com) bequemer als jedes Mal neu hochzuladen — aber für den ersten Upload reicht das Drag & Drop im Browser völlig.)*

### Schritt 3 — GitHub Pages aktivieren

1. Im Repo auf **Settings** → links **Pages**.
2. Unter **Build and deployment** → **Source**: `Deploy from a branch`.
3. **Branch**: `main`, Ordner: `/ (root)` → **Save**.
4. GitHub zeigt dir jetzt eine Vorschau-URL wie `https://deinname.github.io/rebture-website/`. Die sieht **erstmal unstyled/kaputt aus** — das ist normal und liegt daran, dass die Seite für die spätere eigene Domain gebaut ist. Ignorier das und geh direkt zu Schritt 4.

### Schritt 4 — Eigene Domain eintragen

1. Weiterhin unter **Settings → Pages**, Feld **Custom domain**: `rebture.com` eingeben → **Save**.
   (GitHub legt dadurch automatisch eine Datei namens `CNAME` in deinem Repo an — nicht löschen.)

### Schritt 5 — DNS bei GoDaddy einstellen

1. Bei [godaddy.com](https://godaddy.com) einloggen → **Meine Produkte** → bei `rebture.com` auf **DNS verwalten**.
2. Diese Einträge anlegen (bestehende A-Einträge auf "@" vorher löschen, falls vorhanden):

   | Typ | Name | Wert | 
   |---|---|---|
   | A | @ | 185.199.108.153 |
   | A | @ | 185.199.109.153 |
   | A | @ | 185.199.110.153 |
   | A | @ | 185.199.111.153 |
   | CNAME | www | deinname.github.io |

3. Speichern. DNS-Änderungen brauchen meist wenige Minuten bis zu ein paar Stunden, in Einzelfällen bis 48h.

### Schritt 6 — HTTPS aktivieren

Sobald die DNS-Änderung angekommen ist (einfach ab und zu `https://rebture.com` aufrufen), gehst du zurück zu **Settings → Pages** und aktivierst die Checkbox **Enforce HTTPS**. GitHub stellt das SSL-Zertifikat automatisch aus — das kann nach dem ersten Erscheinen der Seite noch etwas dauern.

Danach ist `rebture.com` live. Änderungen an den Dateien später einfach wieder ins GitHub-Repo hochladen (oder mit GitHub Desktop synchronisieren) — die Seite aktualisiert sich automatisch innerhalb von ein bis zwei Minuten.

## 7. Checkliste vor dem Launch

- [ ] Drei Galerie-Fotos in `images/` eingefügt (Rest ist bereits drin)
- [ ] Echte E-Mail-Adresse in allen 6 Seiten eingetragen
- [ ] Instagram-Link geprüft
- [ ] Texte durchgelesen (Rechtschreibung, Ton)
- [ ] Impressum ergänzt, falls du in Österreich gewerblich verkaufst
      (Offenlegungspflicht nach ECG/§5 E-Commerce-Gesetz — auch bei
      einer reinen "Anfrage"-Seite ohne Shop empfehlenswert)
- [ ] Seite bei Google Search Console angemeldet, Sitemap eingereicht
