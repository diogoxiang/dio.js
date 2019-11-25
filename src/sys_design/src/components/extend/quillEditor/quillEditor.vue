<template>
  <quill-editor class="ui-text-editor"
                ref="myTextEditor"
                :content="value"
                :options="editorOption"
                @change="onEditorChange($event)">
  </quill-editor>
</template>

<script>
import { quillEditor } from 'vue-quill-editor'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'

export default {
  name: 'vEditor',
  components: {
    quillEditor
  },
  props: {
    value: String,
    // 参数设置
    editorOption: {
      type: Object,
      default () {
        return {
          placeholder: '',
          modules: {
            toolbar: [
              ['bold', 'italic', 'underline', 'strike'], // toggled buttons
              // [{size: ['small', 'large', 'huge', false]}],
              ['blockquote', 'code-block'],
              // [{header: ['1', '2', '3', '4', '5', '6', false]}],
              [{ color: [] }],
              [{ align: [] }],
              // [{font: []}],
              [{ list: 'ordered' }, { list: 'bullet' }],
              [{ indent: '-1' }, { indent: '+1' }],
              ['clean']
            ]
          }
        }
      }
    }
  },
  methods: {
    // 富文本编辑器  文本改变时 设置字段值
    onEditorChange ({ editor, html, text }) {
      this.$emit('input', html)
    }
  }
}
</script>

<style lang="scss">
.quill-editor.ui-text-editor {
  .ql-toolbar.ql-snow {
    padding: 0;
    button {
      width: 20px;
      height: 20px;
    }
    .ql-formats {
      margin-right: 10px;
    }
  }
  .ql-editor {
    padding: 10px;
    min-height: 200px;
    p {
      font-size: 12px;
    }
  }
}
</style>
