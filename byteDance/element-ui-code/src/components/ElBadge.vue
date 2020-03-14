<template>
  <div class="el-badge">
    <slot></slot>
    <transition name="el-zoom-in-center">
      <sup
        v-show="!hidden && (content || content === 0 || isDot)"
        class="el-badge__content"
        :class="[
            'el-badge__content--' + type,
            { 
                'is-fixed': $slots.default,
                'is-dot': isDot
            }
        ]"
        v-text="content"
      ></sup>
    </transition>
  </div>
</template>
<script>
export default {
    name: 'ElBadge',
    props: {
        value: [String, Number],
        max:  Number,
        hidden: Boolean,
        isDot: Boolean,
        type: {
            type: String,
            validator(val) {
                return ['primary', 'success', 'warning', 'info', 'danger'].indexOf(val) > -1
            }
        }
    },
    computed: {
        content() {
            // 整数输出，  超过max  与否
            // hot new
             if (this.isDot) return;
            const value = this.value
            const max = this.max;
            if (typeof value === 'number' && typeof max === 'number') {
                return max < value ? `${max}+` : value;
            }
            return value;
        }
    }
}
</script>