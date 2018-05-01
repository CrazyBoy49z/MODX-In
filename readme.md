MODX-REVO- Сайт УЖК
=======================

> Шаблон построен на Materialize в связке с sass
   dir /font
    dir /img
    dir /libs
    dir /js
    dir /sass
      dir /box

Авторизаци Компоненты и страницы
-------------------------------
###Сниппет Register:
***************
```
[[!Register?
    &submitVar=`register-btn` 
    <!--указывает атрибут name тега input[type=submit]. То есть сниппет сработает, только если отправлена форма кнопкой с определенным именем.-->
    &activationResourceId=`27`
    <!--Активация пользователя->>
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

###myLoginChunk
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

###myLgnErrTpl
***************
```
<p class="error">[[+msg]]</p>
```
***************

###myLogoutChunk
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

###Страница Восстановления пароля
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