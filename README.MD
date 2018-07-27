# ODONNATA 
## God mod app to supervise habits by centralize features and more...
### Inspirations

Some known games launchers as Battle.net, Epic games, LoL, etc.. 


Version 0.0.0
---------------
- #1 - Add language/translation system, helper system 
- Project birth

### Install && how to use 

##### Prerequires
- Node.js
- npm
- git flow

_Usually npm is installed with npm on windows_

> 
**Open your favorite cmd (git bash is a must have on windows)**
```
    > git clone git@gitlab.com:robin2ruyck/odonnata.git
    > cd odonnata/
    > git co develop
    > git flow init // Keep all default values
```
**Now you have the latest version of project Odonnata, you can begin to make your features. **
```
    //Begin a feature development tracking the remote branch XX
    > git flow feature start XX
```
**To test the app u need to go into the root directory and type **
```
    > npm start
```
```
    // Allways commit changes, then make Merge request on Gitlab
    > git add . or git add --all if u have untracked files
    > git commit -am "#XX - What did you do"
    > git push origin feature/XX
```
**Now u can wait any response from a reviewer**

## Contributors
 
- [Robin De Ruyck](https://gitlab.com/robin2ruyck)

## License

Copyright © 2018 Terra nav.
