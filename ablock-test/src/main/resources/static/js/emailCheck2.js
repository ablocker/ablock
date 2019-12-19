//*********获取语音验证码*********//

var AddInterValObj; // timer变量，控制时间
var AddInterValObjEmial; // timer变量，控制时间
var adcount = 60; // 间隔函数，1秒执行
var addCount; // 当前剩余秒数
var addCountEmail; // 当前剩余秒数
var hash;
var codeTimestamp;

$.fn.serializeObject = function() {
	var o = {};
	var a = this.serializeArray();
	$.each(a, function() {
		if (o[this.name]) {
			if (!o[this.name].push) {
				o[this.name] = [o[this.name]];
			}
			o[this.name].push(this.value || '');
		} else {
			o[this.name] = this.value || '';
		}
	});
	return o;
};

function sendAddmes() {
	/*
	 * var myreg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
	 * if(!myreg.test($("#email").val())) { layertest('请输入有效的邮箱') return
	 * false; }else{
	 */
	var verificationCode = document.getElementById("verificationCodeEmail").value;
	var EmailUserDTO = $('#registerForm').serializeObject();
	// 正则验证用户名和 email
	if(!/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/.test(EmailUserDTO.email)) {
		layertest('请填写正确的邮箱')
		return;
	}

	if(!/^[0-9a-zA-Z\u4e00-\u9fa5]{2,}$/.test(EmailUserDTO.login)) {
		layertest('用户名长度至少为两位')
		return
	}
	if ($('.emailerror').length > 0) {
		layertest('请您填写邮箱验证码');
		return false;
	}
	// 向后台发送处理数据
	var email = document.getElementById("email").value;
	if(email){
		addCountEmail = adcount;　　 // 设置button效果，开始计时
		$("#addSendCodeEmail").attr("disabled", "true");
		$("#addSendCodeEmail").val("" + addCountEmail + "秒后重新获取").css({
			"background-color": "#002e5b"
		});
		AddInterValObjEmial = window.setInterval(SetAddnTimeEmail, 1000); // 启动计时器，1秒执行一次
		
		console.log(email);
		$.ajax({　　
			type: "POST", // 用POST方式传输
			dataType: "JSON", // 数据格式:JSON
			contentType: "application/json",
			url: '/account/sendmessageemail?email=' + email, // 目标地址
			error: function(data) {
				console.log(data);　　
			},
			success: function(data) {
				hash = data.hash;
				codeTimestamp = data.time;　　
			}
		});
	}
	else{
		var phoneNumber = document.getElementById("phone").value;
		console.log(phoneNumber);
		
		addCount = adcount;　　 // 设置button效果，开始计时
		$("#addSendCode").attr("disabled", "true");
		$("#addSendCode").val("" + addCount + "秒后重新获取").css({
			"background-color": "#002e5b"
		});
		AddInterValObj = window.setInterval(SetAddnTime, 1000); // 启动计时器，1秒执行一次
		
		$.ajax({　　
			type: "POST", // 用POST方式传输
			dataType: "JSON", // 数据格式:JSON
			contentType: "application/json",
			url: '/account/sendmessagephone?phoneNumber=' + phoneNumber, // 目标地址
			error: function(data) {
				console.log(data);　　
			},
			success: function(data) {
				hash = data.hash;
				codeTimestamp = data.time;　　
			}
		});
	}
}

// timer处理函数
function SetAddnTime() {
	if (addCount == 0) {
		window.clearInterval(AddInterValObj); // 停止计时器
		$("#addSendCode").removeAttr("disabled"); // 启用按钮
		$("#addSendCode").val("重新获取验证码").css({
			"background-color": "#0097a8"
		});
	} else {
		addCount--;
		$("#addSendCode").val("" + addCount + "秒后重新获取").css({
			"background-color": "#D1D4D3"
		});
	}
}

function SetAddnTimeEmail() {
	if (addCountEmail == 0) {
		window.clearInterval(AddInterValObjEmial); // 停止计时器
		$("#addSendCodeEmail").removeAttr("disabled"); // 启用按钮
		$("#addSendCodeEmail").val("重新获取验证码").css({
			"background-color": "#0097a8"
		});
	} else {
		addCountEmail--;
		$("#addSendCodeEmail").val("" + addCountEmail + "秒后重新获取").css({
			"background-color": "#D1D4D3"
		});
	}
}

/*
 * function telphone(){ var myreg =
 * /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
 * if(!myreg.test($("#add_phone").val())) { layertest('请输入有效的手机号码');
 * $('.login_ipt').addClass('error'); return false; }else{
 * $('.login_ipt').removeClass('error'); } }
 * $(document).on('blur','.login_ipt',function(){ telphone(); });
 */

// code 验证
function email_code_test() {
	if ($('#verificationCodeEmail').val() == '') {
		layertest('邮箱验证码不能为空');
		$('#verificationCodeEmail').addClass('emailerror');
	} else {
		$('#verificationCodeEmail').removeClass('emailerror');
	}
}

function phone_code_test() {
	if ($('#verificationCodePhone').val() == '') {
		layertest('手机验证码不能为空');
		$('#verificationCodePhone').addClass('phoneerror');
	} else {
		$('#verificationCodePhone').removeClass('phoneerror');
	}
}

$(document).on('blur', '.code', function() {
	var email = document.getElementById("email").value;
	if(email){
		email_code_test();
	}else{
		phone_code_test();
	}
	
});

// layer modal
function layertest(content) {
	layer.open({
		content: content,
		btn: '我知道了'
	});
}
// layer loading
function loading(content) {
	layer.open({
		type: 2,
		content: content
	});
}

function registerCheck() {
	var verificationCode = document.getElementById("verificationCodeEmail").value;
	var EmailUserDTO = $('#registerForm').serializeObject();
	// 正则验证用户名和 email
	if(!/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/.test(EmailUserDTO.email)) {
		layertest('请填写正确的邮箱')
		return;
	}

	if(!/^[0-9a-zA-Z\u4e00-\u9fa5]{2,}$/.test(EmailUserDTO.login)) {
		layertest('用户名长度至少为两位')
		return
	}
	if ($('.emailerror').length > 0) {
		layertest('请您填写邮箱验证码');
		return false;
	} else {
		$.ajax({
			type: "POST", // 用POST方式传输
			dataType: "JSON", // 数据格式:JSON
			contentType: "application/json",
			url: "/account/registeremail?hash=" + hash + "&time=" + codeTimestamp + "&verificationCode=" + verificationCode,
			data: JSON.stringify(EmailUserDTO),
		}).success(function(message) {
			$.cookie('username',EmailUserDTO.login);
			layertest('注册成功!');
			console.log(message);
			window.location.href = "/login.html";
		}).fail(function(err) {
			console.log(err);
			layertest('注册失败!');
		})
		return false;
	}
}

function registerPhoneCheck() {
	var verificationCode = document.getElementById("verificationCodePhone").value;
	var PhoneUserDTO = $('#registerPhoneForm').serializeObject();
	console.log(PhoneUserDTO);
	// 正则验证用户名和手机号
	if(!/^[_'.@a-zA-Z0-9-]*$/.test(PhoneUserDTO.login)) {
		layertest('请填写正确的用户名')
		return
	}
	if(!/^[1](([3][0-9])|([4][5-9])|([5][0-3,5-9])|([6][5,6])|([7][0-8])|([8][0-9])|([9][1,8,9]))[0-9]{8}$/.test(PhoneUserDTO.phoneNumber)) {
		layertest('请填写正确的手机号')
		return
	}
	if ($('.phoneerror').length > 0) {
		layertest('请您填写手机验证码');
		return false;
	} else {
		$.ajax({
			type: "POST", // 用POST方式传输
			dataType: "JSON", // 数据格式:JSON
			contentType: "application/json",
			url: "/account/registerphone?hash=" + hash + "&time=" + codeTimestamp + "&verificationCode=" + verificationCode,
			data: JSON.stringify(PhoneUserDTO),
		}).success(function(message) {
			layertest('注册成功!');
			$.cookie('username',PhoneUserDTO.login);
			console.log(message);
			window.location.href = "/login.html";
		}).fail(function(err) {
			console.log(err);
			layertest('注册失败!');
		})
		return false;
	}
}

// update btn click
/*
 * $(document).on('submit','#registerForm',function(event){
 * event.preventDefault(); //阻止form表单默认提交 if($('.error').length >0){
 * layertest('请您填写验证码'); }else{ //loading('跳转中'); if(checkCode ==
 * document.getElementById("code").value) { $.ajax({ type: "post", url:
 * "/account/register", data: $('#registerForm').serialize(),
 * }).success(function(message) { layertest('注册成功!');
 * console.log($('#registerForm').serialize());
 * //setTimeout("javascript:location.href='../registerInfo.html'", 2000);
 * console.log(message); }).fail(function(err){ console.log(err); })
 * 
 * }else { layertest('验证码错误'); }
 *  } })
 */