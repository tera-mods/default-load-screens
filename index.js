module.exports = function DefaultLoadScreens(mod) {
	mod.hook('S_LOADING_SCREEN_CONTROL_INFO', 2, event => !(event.enableCustom = false))
}