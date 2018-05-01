MODX-REVO- Сайт УЖК
=======================

> Шаблон построен на Materialize в связке с sass
******
####Директория
*****
>dir /font
>
>dir /img
>
>dir /libs
>
>dir /js
>
>dir /sass
>>dir /box

###MODX_TPL
********
>В папке(modx_tpl) находится уже шаблоны с готовыми полями

Авторизация Компоненты и страницы
-------------------------------
###Шаблон--Регистрация--Страница(8)
***************
```
[[!Register?
    &submitVar=`register-btn` 
    <!--указывает атрибут name тега input[type=submit]. То есть сниппет сработает, только если отправлена форма кнопкой с определенным именем.-->
    &activationResourceId=`27`
    <!--Активация пользователя-->
    &activationEmailTpl=`Email.Activation`
    <!--Письмо активации-->
    &activationEmailSubject=`Вы зарегистрированы на сайте example.com`
    &placeholderPrefix=`reg.`
    <!--указывает, что все плейсхолдеры, за редким исключением (об этом дальше), которые создаются в данном сниппете, должны начинаться с «reg.».-->
    &successMsg=`<div class="alert alert-success">Спасибо за регистрацию. На вашу электронную почту <b>[[!+reg.email]]</b> отправлено письмо со ссылкой на активацию аккаунта. Пройдите по этой ссылке, чтобы завершить регистрацию. </div>`
    &usernameField=`email`
    <!--указывает, что в качестве имени пользователя будет использоваться поле email.-->
    &usergroupsField=`reg_type`
    <!--определяет поле, устанавливающее группу, в которую будет добавлен новый пользователь.-->
    &customValidators=`valueIn`
    &validate=`username:blank,
        reg_type:valueIn=^Readers;Writers;Idlers ^,
        fullname:required:minLength=^6^,
        password:required:minLength=^6^,
        password_confirm:password_confirm=^password^,
        email:required:email`
    ]]
[[!+error.message:default=`[[!$Register.Form]]`]]
```
***************

###Шаблон--Авторизация--Страница(13)
***********
```
[[!Login? 
  &tplType=`modChunk`
  &loginTpl=`myLoginChunk`
  &logoutTpl=`myLogoutChunk`
  &errTpl=`lgnErrTpl` 
  &redirectToPrior=`1`
]]
```
***********

###Чанк myLoginChunk
***************
```
<h5 class='indigo-text'>[[+actionMsg]]</h5>
<form class="col s12 l12 " action="[[~[[*id]]]]" method="POST">
  <div class="row">
    <div class="input-field col s12">
      <input type="text" class="validate" name="username" id="username">
      <label for="username">[[%login.username]]</label>
    </div>
  </div>
  <div class="row">
    <div class="input-field col s12">
      <input id="password" type="password" name="password" class="validate">
      <label for="password">[[%login.password]]</label>
    </div>
  </div>
  <div class="row">
      <input class="returnUrl" type="hidden" name="returnUrl" value="[[+request_uri]]" />
      <input class="loginLoginValue" type="hidden" name="service" value="login">
  </div>
  <div class="row">
      <div class="input-field col s12">
          <input type="submit" value="[[+actionMsg]]" name="Login" id="Login" class="btn btn-primary pull-right col l12 s12">
      </div>
      <div class="input-field col s12">
        <div class="divider"></div>
      <a href="[[~22]]" style='color: white !important' class="btn btn-link red darken-3 white-text pull-right col s6 l6">Зарегистрироваться</a>
      <a href="[[~19]]" style='color: white !important' class="btn btn-link blue-grey lighten-3 white-text pull-right col s6 l6">Забыли пароль?</a>
      </div>
    </div>

  
</form>
```
***************

###Чанк myLgnErrTpl
***************
```
<p class="error">[[+msg]]</p>
```
***************

###Чанк myLogoutChunk
***************
```
<div class="row">
	<div class="col l12 s12">
			<div class="s6 l6 blue-text">
				<span>Пользователь: [[!+modx.user.username]] </span>
					<div class="loginMessage">[[+errors]]</div>
			</div>
	</div>
		<hr style="margin-top:8px; margin-bottom:8px;">
		<div class="col s12 m4 l3"><p></p></div>
    <div class="col s12 m4 l6 red darken-2"><i class="material-icons Medium col l3 s6">info</i><a class="col l6 s6 white-text" style='color: #fff !important' href="[[+logoutUrl]]" title="[[+actionMsg]]">[[+actionMsg]]</a></p></div>
    <div class="col s12 m4 l3"><p>s12 m4</p></div>
	</div>
```
***************

###Страница--Восстановления пароля--Страница(10)
***************
```
[[!ResetPassword:empty=`
  [[!ForgotPassword?  
    &resetResourceId=`[[*id]]`
    &loginResourceId=`29`
    &tpl=`mylgnForgotPassTpl`
    &sentTpl=`mylgnForgotPassSentTpl`
    &emailTpl=`mylgnForgotPassEmail`
    &emailSubject=`Восстановление пароля`
  ]]`? &tpl=`mylgnResetPassTpl`
       &expiredTpl=`mylgnExpiredTpl`
       &loginResourceId=`29`
]]

```
***************

###Чанк mylgnForgotPassTpl
****************
```
<div class="container">
  <div class="row">
    <div class="col-md-8 col-lg-6">
      <div class="panel panel-primary">
        <div class="panel-heading"><i class="glyphicon glyphicon-erase"></i> [[%login.forgot_password]]</div>
        <div class="panel-body">
          <div class="text-danger">[[+loginfp.errors]]</div>
          
          <form class="form-horizontal" action="[[~[[*id]]]]" method="post">
            <div class="form-group">
              <label for="username" class="col-sm-4 control-label">[[%login.username]]</label>
              <div class="col-sm-8">
                <input type="text" name="username" class="form-control" id="username" value="[[+loginfp.post.username]]">
              </div>      
            </div>
            <p>[[%login.or_forgot_username]]</p>
            <div class="form-group">
              <label for="username" class="col-sm-4 control-label">[[%login.email]]</label>
              <div class="col-sm-8">
                <input type="text" name="email" class="form-control" id="email" value="[[+loginfp.post.email]]">
              </div>      
            </div>            
            <input class="returnUrl" type="hidden" name="returnUrl" value="[[+loginfp.request_uri]]" />
            <input class="loginFPService" type="hidden" name="login_fp_service" value="forgotpassword" />
            <input type="submit" value="[[%login.reset_password]]" name="login_fp" id="login_fp" class="btn btn-primary pull-right">            
          </form>
        </div>
      </div>
    </div>
  </div>
</div>
```
********

###Чанк mylgnForgotPassSentTpl
*********
```
<p>Инструкция по сбросу пароля была отправлена на Ваш почтовый адрес ([[+email]]).</p>
```
*********

###Чанк mylgnForgotPassEmail
**********
```
<p>Здравствуйте.</p>
<p>Для активации нового пароля, пожалуйста, перейдите по следующей ссылке:</p>
<p><a href="[[+confirmUrl]]">[[+confirmUrl]]</a></p>
<p>В случае успеха, вы можете использовать следующий пароль для входа:</p>
<p><strong>Имя: </strong>[[+username]]</p>
<p><strong>Пароль: </strong> [[+password]]</p>
<p>Если Вы не запрашивали это сообщение, то просто проигнорируйте его.</p>
 
<p>Спасибо,<br>
<em>Администратор сайта</em></p>
```
**********

###Чанк mylgnResetPassTpl
***********
```
<div class="loginResetPass">
<p class="loginResetPassHeader">[[+username]],</p>
<p class="loginResetPassText">Ваш пароль успешно сброшен. Пожалуйста перейдите на страницу <a href="[[+loginUrl]]">"Авторизация"</a> для входа.</p>  
</div>
```
************

###Чанк mylgnExpiredTpl
************
```
<p><strong>Информация о сбросе пароля</strong></p>
<p>Ваш пароль уже сброшен или срок действия ссылки уже истёк. Если вам нужно сбросить пароль, то перейдите по следующей <a href="[[~11]]">ссылке</a>.</p>
```
*************