;(function() {
	function realType(toLower) {
		var r = typeof this;
		try { r = this.constructor && this.constructor.name ? this.constructor.name : Object.prototype.toString.call(this).slice(8, -1); }
		catch(e) { if (this['toString']) r = this.toString().slice(8, -1); }
		return !toLower ? r : r.toLowerCase();
	}
	Object['defineProperty'] && !Object.prototype.hasOwnProperty('realType')
		? Object.defineProperty(Object.prototype, 'realType', { get: realType }) : Object.prototype['realType'] = realType;
})();
