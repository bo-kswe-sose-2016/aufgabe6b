# KSwe SoSe 2016 - Aufgabe 6b

Aufgabe ist es eine Leaflet-App zu entwickeln, welche Daten über die
[Geodata API](http://geoapi-kswe2016.rhcloud.com/) abruft und visualisiert.

Die Funktionalität soll an die [Android-Variante](https://github.com/bo-kswe-sose-2016/aufgabe6a)
angelehnt sein.

## Projektbasis

Das vorliegend Projekt-Template ist mit `Grunt` und `bower` vorkonfiguriert.
Die Javascript-Abhängigkeiten zu Leaflet und jQuery sind bereits eingebunden.

Folgende Kommandos müssen zur Initialisierung ausgeführt werden:

```
npm install
```

```
bower install
```

```
grunt wiredep
```

Damit ist das Projekt startbereit. Mit ExpressJS ist bereits ein minimaler Webserver
installiert und somit kann das Projekt lokal getestet werden:

```
node server.js
```

Danach sollte die Website lokal unter
[http://localhost:3000/public/](http://localhost:3000/public/) verfügbar sein.

## Veröffentlichung

Stelle deine beiden Projekte auf GitHub online!
