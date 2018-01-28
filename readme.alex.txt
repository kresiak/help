J'ai rencontré aussi le problème suivant lors de la msie en place du projet template:

Cannot find module '@angular-devkit/core'

Le problème est du à une divergence de version d'angular-cli (pas très bien compris encore)

Solution:  https://github.com/angular/angular-cli/issues/9307

En particulier la partie:

Citation:

"
    I struggled with the same problem just a minute ago. My project was generated using the v 1.6.0 of angular-cli.

    npm update -g @angular/cli

    editing my package.json changing the line
    "@angular/cli": "1.6.0",
    to
    "@angular/cli": "^1.6.0",

    npm update

    did the trick.
"

