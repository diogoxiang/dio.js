<template>
  <div class="form-edit-container">
    <v-form :model="form"
            :inline="true">
      <v-row>
        <v-col :span="24"
               v-for="(arr, index) in formConfig.formItems"
               :key="index">
          <v-col :span="24"
                 class="form-edit-col"
                 v-for="(item, index1) in arr"
                 :key="index + '-' + index1">
            <v-form-item class="detail-form-item"
                         :labelWidth="'auto'"
                         v-if="getDisplayCondition(item) && !item.slot"
                         :label="item.label + '：'"
                         :prop="item.key">
              <!-- 文本框 -->
              <template v-if="item.type === 'textarea'">
                <span class="detail-form-text">{{form[item.key]}}</span>
              </template>
              <!-- radio单选框 -->
              <template v-else-if="item.type === 'radio'">
                <span class="detail-form-text">{{getSingleLabel(form[item.key], item.options ? item.options : item.optionsRelationShips(form[item.optionsDepends]))}}</span>
              </template>
              <!-- 多选框 -->
              <template v-else-if="item.type === 'checkbox'">
                <span class="detail-form-text">{{getMultiLabels(form[item.key], item.options ? item.options : item.optionsRelationShips(form[item.optionsDepends]))}}</span>
              </template>
              <!-- select选择框 -->
              <template v-else-if="item.type === 'select'">
                <span class="detail-form-text">{{getSingleLabel(form[item.key], item.options ? item.options : item.optionsRelationShips(form[item.optionsDepends]))}}</span>
              </template>
              <!-- 日期选择器 -->
              <template v-else-if="['date', 'year', 'month', 'week', 'daterange', 'dates'].includes(item.type)">
                <span class="detail-form-text">{{form[item.key]}}</span>
              </template>
              <!-- 日期时间选择器 -->
              <template v-else-if="['datetime', 'datetimerange'].includes(item.type)">
                <span class="detail-form-text">{{form[item.key]}}</span>
              </template>
              <!-- 输入框 -->
              <template v-else>
                <span class="detail-form-text">{{form[item.key]}}</span>
              </template>
            </v-form-item>
            <div class="form-sub-title"
                 v-if="getDisplayCondition(item) && item.slot">
              <slot :name="item.slot">{{item.label}}</slot>
            </div>
          </v-col>
        </v-col>
      </v-row>
    </v-form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      depends: {} // 字段依赖关系
    }
  },
  props: {
    // 表单配置
    formConfig: {
      type: Object,
      default () {
        return {
          cols: 3,
          formItems: []
        }
      }
    },
    // 表单数据
    form: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  methods: {
    getSingleLabel (val, arr) {
      let res = arr.filter(item => item.value === val)[0]
      return res ? res.label : ''
    },
    getMultiLabels (vals, arr) {
      if (typeof vals === 'string') {
        vals = vals.split(',')
      }
      return arr.filter(item => vals.includes(item.value)).map(item => item.label).join('，') || '全部'
    },
    // 计算字段的依赖关系，控制显示隐藏
    getDisplayCondition (_item) {
      if (!_item.displayCondition) {
        return true // 没有依赖关系，一直显示
      } else {
        let arr = []
        for (let key of Object.keys(_item.displayCondition)) {
          let res
          // 将显示条件统一转成数组
          if (['string', 'number', 'boolean'].includes(typeof _item.displayCondition[key])) {
            res = [_item.displayCondition[key]]
          } else {
            res = _item.displayCondition[key]
          }

          if (['string', 'number', 'boolean'].includes(typeof this.form[key])) {
            arr.push(res.includes(this.form[key]))
          } else {
            let arr1 = []
            res.forEach(item1 => {
              arr1.push(this.form[key].includes(item1))
            })
            arr.push(arr1.every(item1 => item1))
          }
        }
        // console.log(arr)
        // 判断是否满足所有条件
        return arr.every(item => item)
      }
    },
    // 计算字段的依赖关系，控制值是否重置
    getDepends () {
      this.formConfig.formItems.forEach(arr => {
        arr.forEach(item => {
          if (item.optionsDepends) {
            this.depends[item.optionsDepends] = item.key
          }
        })
      })
    }
  },
  created () {
    // this.getDepends()
  }
}
</script>

<style lang="scss" scoped>
.form-edit-container {
  background-color: #fff;
  .form-edit-col {
    padding: 0 20px;
    // border-right: 1px dashed #eaeaea;
    .detail-form-item {
      display: block;
      .detail-form-text {
        display: inline-block;
        height: 30px;
        line-height: 30px;
      }
    }

    .form-sub-title {
      margin: 20px 0;
      padding-left: 10px;
      font-size: 16px;
      border-left: 4px solid #a2a2a2;
    }
  }
  .form-edit-line .form-edit-col:last-child {
    border-right: 0 none;
  }

  .form-edit-btns {
    text-align: center;
    padding-top: 10px;
  }
}
</style>
