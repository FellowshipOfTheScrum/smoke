warning: LF will be replaced by CRLF in smoke-editor/src/components/Editor.vue.
The file will have its original line endings in your working directory.
[1mdiff --git a/smoke-editor/package.json b/smoke-editor/package.json[m
[1mindex ad37371..052cf86 100644[m
[1m--- a/smoke-editor/package.json[m
[1m+++ b/smoke-editor/package.json[m
[36m@@ -15,6 +15,10 @@[m
     "report-coverage": "codecov"[m
   },[m
   "dependencies": {[m
[32m+[m[32m    "@fortawesome/fontawesome-svg-core": "^1.2.7",[m
[32m+[m[32m    "@fortawesome/free-solid-svg-icons": "^5.4.2",[m
[32m+[m[32m    "@fortawesome/vue-fontawesome": "^0.1.1",[m
[32m+[m[32m    "@mdi/font": "^3.0.39",[m
     "axios": "^0.18.0",[m
     "buefy": "^0.6.7",[m
     "bulma": "^0.7.1",[m
[36m@@ -25,6 +29,7 @@[m
     "vue": "^2.5.2",[m
     "vue-bulma-brace": "^0.1.0",[m
     "vue-bulma-components": "^1.7.1",[m
[32m+[m[32m    "vue-material-design-icons": "^2.3.0",[m
     "vue-resource": "^1.5.1",[m
     "vue-router": "^3.0.1"[m
   },[m
[1mdiff --git a/smoke-editor/src/components/Editor.vue b/smoke-editor/src/components/Editor.vue[m
[1mindex b42f478..9258f76 100644[m
[1m--- a/smoke-editor/src/components/Editor.vue[m
[1m+++ b/smoke-editor/src/components/Editor.vue[m
[36m@@ -17,6 +17,7 @@[m
 [m
     <!--Maximize Button-->[m
     <a class="button is-small  is-pulled-right">[m
[32m+[m[32m      on:click="toggleColor">[m
     <span class="icon is-small ">[m
       <font-awesome-icon icon="window-maximize" />[m
     </span>[m
[1mdiff --git a/smoke-editor/src/main.js b/smoke-editor/src/main.js[m
[1mindex e67d955..4fddda5 100644[m
[1m--- a/smoke-editor/src/main.js[m
[1m+++ b/smoke-editor/src/main.js[m
[36m@@ -2,11 +2,25 @@[m
 // (runtime-only or standalone) has been set in webpack.base.conf with an alias.[m
 import Vue from 'vue'[m
 import Resource from 'vue-resource'[m
[31m-import Bulma from 'vue-bulma-components'[m
 import App from './App'[m
[32m+[m[32mimport Bulma from 'vue-bulma-components'[m
 import Auth from './auth'[m
 import router from './router'[m
 [m
[32m+[m[32mimport { library } from '@fortawesome/fontawesome-svg-core'[m
[32m+[m[32mimport { faWindowMinimize, faWindowMaximize } from '@fortawesome/free-solid-svg-icons'[m
[32m+[m[32mimport { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'[m
[32m+[m
[32m+[m[32mlibrary.add(faWindowMinimize, faWindowMaximize)[m
[32m+[m
[32m+[m[32m// Minimize icon[m
[32m+[m[32m// library.add(faCoffee)[m
[32m+[m
[32m+[m[32m// Maximize Icon[m
[32m+[m[32m// library.add(faCoffee)[m
[32m+[m
[32m+[m[32mVue.component('font-awesome-icon', FontAwesomeIcon)[m
[32m+[m
 Vue.use(Resource)[m
 Vue.use(Bulma)[m
 Vue.config.productionTip = false[m
warning: LF will be replaced by CRLF in smoke-editor/src/main.js.
The file will have its original line endings in your working directory.
