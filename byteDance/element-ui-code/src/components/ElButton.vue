<template>
    <button 
    class="el-button"
    :type="nativeType"
    @click="handleClick"
    :class="[
        type ? 'el-button--' + type : '',
        {
          'is-round': round,
          'is-plain': plain,
          'is-loading': loading
        },
        ]"
        >
        <!-- ElButton -->
        <i class="el-icon-loading" v-if="loading"></i>
        <i v-if="icon && !loading" :class="icon"></i>
        <span v-if="$slots.default"><slot></slot></span>
    </button>
</template>
<script>
export default {
    name: 'ElButton',
    props: {
        loading: Boolean,
        size: String,
        type: {
            type: String,
            default: 'default'
        },
        nativeType: {
            type: String,
            default: 'button'
        },
        round: {
            type: Boolean,
            default: false
        },
        plain: {
            type: Boolean,
            default: false
        },
        icon:  String  
    },
    computed: {
        // 放下一些其他的因素
    },
    methods: {
        handleClick(evt) {
            this.$emit('click', evt)
        }
    }
}
</script>