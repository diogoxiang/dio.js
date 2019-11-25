<template>
  <el-tree ref="treeComponent"
           :data="data"
           :show-checkbox="showCheckbox"
           highlight-current
           :expand-on-click-node="false"
           :check-on-click-node="true"
           :check-strictly="false"
           :default-expand-all="defaultExpandAll"
           :node-key="nodeKey"
           :props="props">
    <span class="tree-row"
          slot-scope="{ node, data }">
      <span>{{node.label}}</span>
      <span class="tree-edit-container"
            v-if="showEditBtn">
        <v-button type="text"
                  :size="'mini'"
                  v-if="data.type !== '2'"
                  @click.stop="handleClick('add', node, data)">新增</v-button>
        <v-button type="text"
                  :size="'mini'"
                  v-if="data.id !== 0"
                  @click.stop="handleClick('edit', node, data)">修改</v-button>
        <v-button type="text"
                  :size="'mini'"
                  v-if="data.id !== 0"
                  @click.stop="handleClick('delete', node, data)">删除</v-button>
      </span>
    </span>

  </el-tree>
</template>

<script>
import { Tree } from 'element-ui'
export default {
  name: 'vTree',
  components: {
    [Tree.name]: Tree
  },
  props: {
    // 展示数据
    data: {
      type: Array,
      default () {
        return []
      }
    },
    // 每个树节点用来作为唯一标识的属性，整棵树应该是唯一的
    nodeKey: {
      type: String,
      default: 'id'
    },
    // 节点是否可被选择
    showCheckbox: {
      type: Boolean,
      default: false
    },
    props: {
      type: Object,
      default () {
        return {
          label: 'name'
        }
      }
    },
    // 是否显示按钮
    showEditBtn: {
      type: Boolean,
      default: true
    },
    // 是否默认展开全部
    defaultExpandAll: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    // 节点右侧按钮点击时触发
    handleClick (_type, _node, _data) {
      this.$emit('handleEdit', _type, _data)
    },
    // 若节点可被选择（即 show-checkbox 为 true），则返回目前被选中的节点的 key 所组成的数组
    getCheckedKeys () {
      return this.$refs.treeComponent.getCheckedKeys()
    },
    // 若节点可被选择（即 show-checkbox 为 true），则返回目前半选中的节点的 key 所组成的数组
    getHalfCheckedKeys () {
      return this.$refs.treeComponent.getHalfCheckedKeys()
    },
    // 通过 keys 设置目前勾选的节点，使用此方法必须设置 node-key 属性
    setCheckedKeys (keys) {
      this.$refs.treeComponent.setCheckedKeys([])
      keys.forEach(key => {
        this.$refs.treeComponent.setChecked(key, true)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.tree-row {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
