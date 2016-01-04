require('enyo');

/**
* This modules exposes API's for controlling animations.
* @private
*/
module.exports = {

	timeline: 0,
	_cachedValue: 0,
	_frameSpeed: 1,
	_startTime: 0,

	cache: function(){
		if(this._frameSpeed === 0){
			this._frameSpeed = this._cachedValue;			
		}
	},
	
	play : function (delay){		
		this._frameSpeed = 1;
		this.animating = true;
	},

	resume: function() {
		this.cache();
		this._frameSpeed *= 1;
	},

	pause: function () {
		this._cachedValue = this._frameSpeed;
		this._frameSpeed = 0;
	},

	reverse: function () {
		this.cache();
		this._frameSpeed *= -1;
	},

	fast: function (mul) {
		this.cache();
		this._frameSpeed *= mul;
	},

	slow: function (mul) {
		this.cache();
		this._frameSpeed *= mul;
	},

	stop: function () {
		this._cachedValue = 1;
		this._frameSpeed = 0;
		this.timeline = 0;
	},

	rolePlay: function (t) {
		this.timeline += _rolePlay(t, this._frameSpeed);
		return this.timeline;
	}
};

function _rolePlay(t, mul) {
	return mul * t;
}