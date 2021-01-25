import Vue from 'vue';
// @ts-ignore
import VueCodemirror from 'vue-codemirror';
// codemirror language
import 'codemirror/mode/vue/vue.js';
// codemirror active-line.js
import 'codemirror/addon/selection/active-line.js';
import 'codemirror/addon/scroll/simplescrollbars.js';
import 'codemirror/addon/merge/merge.js';
import 'codemirror/addon/selection/mark-selection.js';
import 'codemirror/addon/search/search.js';
import 'codemirror/addon/search/searchcursor.js';
import 'codemirror/addon/search/matchesonscrollbar.js';
import 'codemirror/addon/search/jump-to-line.js';
import 'codemirror/addon/dialog/dialog.js';
import 'codemirror/addon/search/match-highlighter.js';

Vue.use(VueCodemirror);
