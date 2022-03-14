# Hands On talk about Web Components

## Cloning this repository

This top repository goes together with two other repos:

- https://github.com/weknowinc/outline-phase2/tree/handson-freeze
- https://github.com/weknowinc/webcomponents_wk_handson

To pull them all together you'll need to run the following **git clone** command:

```
git clone --recurse-submodules --remote-submodules --branch docksal  git@github.com:weknowinc/webcomponents_handson.git
```

If you already cloned it, there is a script (`fix_repo.sh`) which will do the same.

## Setting up your sandbox environment

```
fin init
zcat resources/drupalwc.sql.gz | fin db import --progress
fin drush generate-realistic
```

This will leave you with a Drupal 9.1 installation using Olivero as the theme and some content.
Once you fetch Phase2's [Outline](https://github.com/phase2/outline) design system you'll be ready to start the hands on.

### Using Phase2 Outline

For outline you'll need to use [Node v16](https://nodejs.org/en/download/package-manager/#nvm) & [Yarn v1](https://classic.yarnpkg.com/lang/en/docs/install/).
Once you have them installed you can run the following commands:

```
cd outline/
yarn install
yarn start
```

This will start StoryBook and keep updating when you do changes.

## webComponent examples

When using outline/webComponents you'll have two realms:

- The StoryBook version of the component where you can refine and test it.
- The compiled version of your webComponent which you will export to Drupal and use it in your template.

These are examples which you will be able to check within StoryBook. In the next chapter "Drupal Integration" we will use them.

### Scenario 1: webComponent Hello World

### Scenario 2: webComponent gets simple string atributes

You can find the code for this example at: `<webcomponents-handson-repo-folder>/outline/src/components/wk/wk-simple-card/*`

Within it you'll find 3 files:

- The style file `wk-simple-card.css`
- The TypeScript file with the webComponent description `wk-simple-card.ts`.
- The StoryBook file `wk-simple-card.stories.ts` with an example use of the defined webComponent.

Once you have run Yarn you'll also have an output file used by StoryBook `*.lit.ts` which has the compiled output and should be ignored.

### Scenario 3: webComponent gets data as slots

### Scenario 4: webComponent gets more complex data

## Drupal Integration

intro…

## CleanUp

```
fin stop
fin project remove
rm -Rf vendor
rm -Rf web
```
