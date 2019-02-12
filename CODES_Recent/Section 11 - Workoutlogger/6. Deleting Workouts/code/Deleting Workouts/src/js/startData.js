module.exports = {
	init: function(){
		localStorage.clear();
		localStorage.setItem('workouts', JSON.stringify([
		{
			id: 0001,
			type:'Jogging',
			minutes: 20,
			miles: 2,
			date: new Date()
		},
		{
			id: 0002,
			type:'Yoga',
			minutes: 40,
			miles: '',
			date: new Date()
		}
		]));
	}
}