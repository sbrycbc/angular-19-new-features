# Angular19NewFeatures


Dieses Projekt wurde erstellt, um die neuen Funktionen in Angular 19 zu testen. Im Folgenden finden Sie kurze Informationen zu einigen der wichtigsten Neuerungen und Änderungen in der neuen Version.

## 1. Hot Module Replacement (HMR)
Mit Angular 19 wurde die Unterstützung für **Hot Module Replacement** (HMR) standardmäßig aktiviert. Dies ermöglicht Entwicklern, Module zu aktualisieren, ohne die Seite neu zu laden. HMR beschleunigt den Entwicklungsprozess und verbessert die Benutzererfahrung.

### Was hat sich geändert?
- Änderungen am Code können sofort angezeigt werden, ohne die Seite neu zu laden.
- Verbesserte Leistung durch sofortige Aktualisierungen ohne vollständige Seitenaktualisierung.

## 2. Standalone Component Standard auf True
Mit Angular 19 ist die Option für **Standalone-Components** standardmäßig auf **true** gesetzt. Dadurch können Angular-Komponenten unabhängig von Modulen verwendet werden, was eine flexiblere Struktur ermöglicht. Komponenten können nun direkt und ohne Abhängigkeit von Modulen verwendet werden.

### Was hat sich geändert?
- Komponenten können nun unabhängig definiert und verwendet werden.
- Keine Notwendigkeit mehr, Module zu verwenden, um Komponenten zu erstellen.

## 3. State of Testing Tooling
Angular 19 hat die Testwerkzeuge verbessert, um sie stärker und benutzerfreundlicher zu machen. Dies erleichtert das Schreiben von Tests, insbesondere in großen Projekten.

### Was hat sich geändert?
- Einfachere Integration neuer Testwerkzeuge.
- Verbesserte Fehlerbehebung und Reporting-Funktionen.

## 4. Secure from the Start (CSP)
Angular 19 bietet nun Unterstützung für **Content Security Policy (CSP)**, um die Sicherheitsvorkehrungen von Anwendungen zu verstärken. Dies hilft dabei, Angular-Anwendungen sicherer zu machen.

### Was hat sich geändert?
- Sicherheitsaspekte wurden von Anfang an stärker berücksichtigt.
- Schutz vor Angriffen durch Richtlinien zur Inhaltsicherheit.

## 5. Stabilisierung von Inputs, Outputs und View Queries

Im letzten Jahr haben wir beobachtet, wie Entwickler die neuen APIs für Inputs, Outputs und View Queries nutzen, und wir stabilisieren diese APIs! Um die Einführung dieser neuen APIs zu vereinfachen, haben wir Schematics entwickelt, die Ihre bestehenden Inputs, Outputs und View Queries transformieren:

### Verfügbare Schematics
- Um die Input-APIs zu migrieren:
  ```bash
  ng generate @angular/core:signal-input-migration

- Um die View Queries zu migrieren:
  ```bash
  ng generate @angular/core:signal-queries-migration


- Um die Output-APIs zu migrieren:
  ```bash
  ng generate @angular/core:output-migration


### Gesamte Migration
- Wenn Sie alle Migrationen auf einmal ausführen möchten, verwenden Sie diesen Befehl:
   ```bash
   ng generate @angular/core:signals


### Wichtiger Hinweis
Signal-Inputs sind im Gegensatz zu traditionellen Inputs nur lesbar (read-only). Daher müssen Sie möglicherweise Teile Ihrer Anwendung manuell migrieren, wenn Sie Werte für Inputs setzen.

## 6. Neue Funktion: Resources (Ressourcen)

Mit Angular 19 wurde das neue Konzept **Resources** (Ressourcen) eingeführt. Resources ist eine API, die darauf abzielt, die Datenverwaltung, insbesondere API-Anfragen, einfacher und effizienter zu gestalten.

### Was sind Resources?
- **Resources** ermöglichen eine reaktive und zentralisierte Handhabung von Prozessen wie HTTP-Anfragen in einer Anwendung.
- Traditionell wurden HTTP-Anfragen mit `HttpClient` oder Drittanbieterbibliotheken verwaltet, was oft zu komplexem Code führte.
- **Resources** vereinfachen diesen Prozess und verwalten alle Interaktionen (Lesen, Schreiben, Aktualisieren usw.) mit einer Datenquelle.

### Funktionen
1. **Reaktiv und Einfach**: Alle Vorgänge im Zusammenhang mit Ressourcen können reaktiv definiert und verwaltet werden.
2. **Zentrale Verwaltung**: Alle CRUD-Operationen (Create, Read, Update, Delete) für eine Ressource werden zentral definiert.
3. **Leistungsverbesserungen**: Daten werden zwischengespeichert, um unnötige HTTP-Anfragen zu minimieren.

### Beispiel für die Verwendung
Nachfolgend ein einfaches Beispiel für die Definition und Verwendung einer Resource:
```typescript
import { createResource } from '@angular/core';

export const userResource = createResource({
  getUser: {
    method: 'GET',
    url: '/api/user/:id',
  },
  updateUser: {
    method: 'PUT',
    url: '/api/user/:id',
  }
});

// Nutzung
userResource.getUser({ id: 1 }).subscribe(user => {
  console.log(user);
});
```

### Warum Resources?
Einfacherer Code: Für HTTP-Operationen wird kein komplexer HttpClient-Code mehr benötigt.
Reaktivität: Änderungen an Daten werden automatisch in der Benutzeroberfläche reflektiert.
Leistung: Unnötige Anfragen werden vermieden und Daten zwischengespeichert.

## 7. State of the effects API




