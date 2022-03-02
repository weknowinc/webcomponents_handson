# Hands On talk about Web Components

## Setting up your sandbox environment

```
fin init
zcat resources/drupalwc.sql.gz | fin db import --progress
fin drush generate-realistic
```

This will leave you with a Drupal 9.1 installation using Olivero as the theme and some content.
Once you fetch Phase2's [Outline](https://github.com/phase2/outline) design system you'll be ready to start the hands on.

## webComponent examples

intro…

### Scenario1 - webComponent recibe atributos

Ejemplo1…

### Scenario2 - webComponent recibe slots

Ejemplo2…

### Cómo integrarlo a Drupal

intro…

## CleanUp

```
fin stop
fin project remove
rm -Rf vendor
rm -Rf web
```
