$(document).ready(function(){
	$("#form").submit(function(e) { 
	e.preventDefault();
	//устанавливаем событие отправки для формы с id=form
	var form_data = $(this).serialize(); //собераем все данные из формы
	$.ajax({
		type: "POST", //Метод отправки
		url: "notify.php", //путь до php фаила отправителя
		data: form_data,
		success: function() { //код в этом блоке выполняется при успешной отправке сообщения

		$('#notifyModal').modal('hide');
		// alert("Ваше сообщение отправлено!");
			}
		});
	});
}); 
