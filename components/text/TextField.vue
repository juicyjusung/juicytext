<template>
  <client-only>
    <v-hover v-slot="{ hover }">
      <v-card
        :elevation="hover ? 8 : 2"
        height="100%"
        class="d-flex flex-column pa-0"
        color="#373753"
      >
        <v-card-title class="py-1 white--text">
          <slot name="header"></slot>
        </v-card-title>
        <v-card-text class="pa-0 fill-height overflow-y-hidden">
          <codemirror
            ref="cm"
            class="fill-height overflow-x-auto"
            style="border-radius: 0 0 4px 4px"
            :value="textPack.text"
            :options="cmOption"
            @input="inputText"
            @ready="ready"
            @contextmenu="contextMenu"
          />
        </v-card-text>
        <v-card-actions class="pa-0">
          <slot name="actions" />
        </v-card-actions>
      </v-card>
    </v-hover>
  </client-only>
</template>

<script lang="ts">
import { Component, Emit, Prop, Vue } from 'nuxt-property-decorator';
import CodeMirror from 'codemirror';
import { JuicyText } from '~/types/index';

@Component({
  components: {},
})
export default class TextField extends Vue {
  /*********************************************************************************
   * Prop & Variable & computed
   * ******************************************************************************/
  @Prop(Object) textPack!: JuicyText;
  @Prop(String) title!: string;
  @Prop({ type: Boolean, default: false }) readonly!: boolean;

  text = '';
  cm: typeof CodeMirror | null = null;
  get cmOption() {
    return {
      tabSize: 2,
      connect: 'align',
      mode: 'text',
      theme: 'paraiso-light',
      lineNumbers: true,
      line: true,
      readOnly: this.readonly,
      styleSelectedText: true,
      styleActiveLine: true,
      autoRefresh: true,
      highlightSelectionMatches: { annotateScrollbar: true, minChars: 2 },
      // scrollbarStyle: 'simple',
    };
  }

  /*********************************************************************************
   * Emit
   * ******************************************************************************/

  @Emit('input') inputText(val: string) {
    return val;
  }

  /*********************************************************************************
   * Life Cycles
   * ******************************************************************************/

  /*********************************************************************************
   * Methods
   * ******************************************************************************/
  ready(cm: typeof CodeMirror) {
    this.cm = cm;
  }

  contextMenu() {
    console.log('%c [JL] contextMenu - contextMenu', 'font-size: 13px; color:  orange;');
  }
}
</script>

<style lang="scss">
.CodeMirror {
  height: 100%;
}
.cm-matchhighlight {
  background-color: #c9f28f;
}
.CodeMirror-selection-highlight-scrollbar {
  background-color: #c9f28f;
}
.CodeMirror-scrollbar-filler,
.CodeMirror-simplescroll-vertical,
.CodeMirror-simplescroll-horizontal {
  z-index: 4 !important;
}

.CodeMirror-simplescroll-horizontal div,
.CodeMirror-simplescroll-vertical div {
  position: absolute;
  background: #ccc;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  border: 1px solid #bbb;
  border-radius: 2px;
}

.CodeMirror-simplescroll-horizontal,
.CodeMirror-simplescroll-vertical {
  position: absolute;
  z-index: 6;
  background: #eee;
}

.CodeMirror-simplescroll-horizontal {
  bottom: 0;
  left: 0;
  height: 8px;
}
.CodeMirror-simplescroll-horizontal div {
  bottom: 0;
  height: 100%;
}

.CodeMirror-simplescroll-vertical {
  right: 0;
  top: 0;
  width: 8px;
}
.CodeMirror-simplescroll-vertical div {
  right: 0;
  width: 100%;
}

.CodeMirror-overlayscroll .CodeMirror-scrollbar-filler,
.CodeMirror-overlayscroll .CodeMirror-gutter-filler {
  display: none;
}

.CodeMirror-overlayscroll-horizontal div,
.CodeMirror-overlayscroll-vertical div {
  position: absolute;
  background: #bcd;
  border-radius: 3px;
}

.CodeMirror-overlayscroll-horizontal,
.CodeMirror-overlayscroll-vertical {
  position: absolute;
  z-index: 6;
}

.CodeMirror-overlayscroll-horizontal {
  bottom: 0;
  left: 0;
  height: 6px;
}
.CodeMirror-overlayscroll-horizontal div {
  bottom: 0;
  height: 100%;
}

.CodeMirror-overlayscroll-vertical {
  right: 0;
  top: 0;
  width: 6px;
}
.CodeMirror-overlayscroll-vertical div {
  right: 0;
  width: 100%;
}
</style>
