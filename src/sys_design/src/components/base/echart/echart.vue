<template>
  <div class="echart-container"
       :id="uuid"
       v-on-echart-resize></div>
</template>

<script>
import { createUUID, __isArray, __isObject } from '@cm/js/utils.js'
import echarts from 'echarts'

let HANDLER = '_vue_echarts_resize_handler'

export default {
  name: 'vEchart',
  data () {
    return {
      uuid: '', // ID
      domInstance: null, // echart实例
      // 线条/柱状图/饼图样式
      seriesStyle: {
        line: {
          type: 'line',
          smooth: true,
          areaStyle: {
            opacity: 0.05
          }
        },
        bar: {
          type: 'bar',
          barMinHeight: 2,
          barWidth: 15
        },
        pie: {
          type: 'pie',
          radius: ['55%', '80%'],
          center: ['50%', '50%'],
          label: {
            normal: {
              show: false,
              position: 'center'
            },
            emphasis: {
              show: true,
              textStyle: {
                fontSize: '18',
                fontWeight: 'bold'
              }
            }
          },
          // 饼状图间隔
          itemStyle: {
            borderWidth: 2, // 设置border的宽度
            borderColor: '#fff'
          }
        }
      },
      // echart默认参数
      defaultOptions: {
        // 标题
        title: {
          text: '标题',
          show: false,
          textStyle: {
            fontSize: 14,
            lineHeight: 18
          }
        },
        // 图例
        legend: {
          show: true,
          itemWidth: 10,
          itemHeight: 10,
          top: 0
        },
        // 坐标系
        grid: {},
        // 提示框
        tooltip: {
          trigger: 'item'
        },
        // 数据
        dataset: {
          source: []
        },
        // X轴
        xAxis: {
          type: 'category',
          show: true,
          boundaryGap: false,
          // x轴线设置
          axisLine: {
            show: false
          },
          // x轴刻度设置
          axisTick: {
            show: true
          },
          // x轴 刻度标签设置
          axisLabel: {
            show: true,
            padding: [5, 0, 0, 0]
          }
        },
        // Y轴
        yAxis: {
          type: 'value',
          show: true,
          // Y轴线设置
          axisLine: {
            show: false
          },
          // Y轴刻度设置
          axisTick: {
            show: false
          },
          // Y轴网格线
          splitLine: {
            show: true,
            lineStyle: {
              color: ['#EEEEEE'],
              opacity: 0.6
            }
          }
        },
        series: [],
        // 调色盘颜色列表
        color: ['#73A8FF', '#FA6B67', '#8BC89E', '#FBA7C6', '#FEE185']
      }
    }
  },
  directives: {
    'onEchartResize': {
      bind (el, binding) {
        el[HANDLER] = function () {
          let chart = echarts.getInstanceByDom(el)
          if (!chart) return

          chart.resize()
        }

        window.addEventListener('resize', el[HANDLER])
      },
      unbind (el) {
        window.removeEventListener('resize', el[HANDLER])
        delete el[HANDLER]
      }
    }
  },
  props: {
    // 图标类型：line-线型图；bar-柱状图；pie-饼状图
    type: {
      type: String,
      default: 'line'
    },
    // 数据
    dataList: {
      type: Array,
      default () {
        return []
      }
    },
    // 参数
    options: {
      type: Object,
      default () {
        return {
          showLegend: true, // 是否显示legend
          grid: {
            top: 40,
            left: 40,
            right: 10,
            bottom: 30
          }
        }
      }
    }
  },
  methods: {
    // 合并options配置项
    generateOptions () {
      // console.log(this.options)
      // grid
      this.defaultOptions.grid = this.options.grid
      // legend显示
      this.defaultOptions.legend.show = this.options.showLegend || true
      // legend位置
      if (this.options.legendPosition === 'bottom') {
        this.defaultOptions.legend.top = null
        this.defaultOptions.legend.bottom = 0
      }
      this.defaultOptions.legend.orient = this.type === 'pie' ? 'vertical' : 'horizontal'
      this.defaultOptions.legend.left = this.type !== 'pie' ? 'center' : 0
      // tooltip
      this.defaultOptions.tooltip.trigger = this.type === 'pie' ? 'item' : 'axis'
      // 线性图boundaryGap设为true
      this.defaultOptions.xAxis.boundaryGap = this.type !== 'line'
    },
    // series数据处理
    generateSeries () {
      if (!this.dataList.length) return
      // 生成series
      let linesNum
      if (__isArray(this.dataList[0])) {
        linesNum = this.dataList[0].length - 1
      } else if (__isObject(this.dataList[0])) {
        linesNum = Object.keys(this.dataList[0]).length - 1
      }
      this.defaultOptions.series = []
      for (let i = 0; i < linesNum; i++) {
        this.defaultOptions.series.push(this.seriesStyle[this.type])
      }
      // dataset数据集
      this.defaultOptions.dataset = {
        source: this.dataList
      }
    },
    // init chart
    initChart () {
      this.generateOptions() // options参数处理
      this.generateSeries() // 数据处理
  
      this.$nextTick(() => {
        this.domInstance = echarts.init(document.getElementById(this.uuid))
        this.domInstance.showLoading()
        this.domInstance.setOption(this.defaultOptions)
        this.domInstance.hideLoading()
      })
    },
    handleResize () {
      // console.log('handleResize')
      // this.domInstance.dispose()
      // this.initChart()
      this.$nextTick(() => {
        this.domInstance.resize()
      })
    }
  },
  mounted () {
    this.uuid = 'e' + createUUID(10) // 生成唯一ID
    this.initChart()
  },
  watch: {
    dataList: {
      handler () {
        if (!this.dataList.length) {
          this.domInstance.clear()
          this.domInstance.showLoading({
            text: '加载中···',
            color: '#ffffff',
            textColor: '#333',
            maskColor: 'rgba(255, 255, 255, 1)',
          })
          return
        }
        this.initChart()
      },
      deep: true
    }
  }
}
</script>

<style lang="scss" scoped>
.echart-container {
  width: 100%;
  height: 250px;
}
</style>
