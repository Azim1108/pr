// Вибрация (работает на некоторых телефонах)
navigator.vibrate = navigator.vibrate || navigator.webkitVibrate || navigator.mozVibrate || navigator.msVibrate;
if (navigator.vibrate) navigator.vibrate([500, 200, 500]);