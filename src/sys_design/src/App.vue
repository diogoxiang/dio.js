<template>
	<div id="app">
		<router-view/>
	</div>
</template>

<script>
import { sessionStorage } from '@cm/js/utils' // tool
import { mapState } from 'vuex'

export default {
	computed: {
		...mapState(['Token', 'userInfor', 'menus'])
	},
	methods: {
		// F5刷新浏览器时仍然保持登陆
		beforeLoad () {
			window.addEventListener('beforeunload', e => {
				sessionStorage('token', this.Token)
				sessionStorage('userName', this.userInfor.userName)
          		sessionStorage('account', this.userInfor.account)
				sessionStorage('menus', JSON.stringify(this.menus))
			})
		}
	},
	mounted () {
		window.sessionStorage.clear()
		this.beforeLoad()
	}
}
</script>

<style lang="scss" scoped>
	#app {
		// font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		height: 100%;
		overflow: hidden;
	}
</style>
