---
layout: page
title: Надіслати повідомлення
---

<p>
  <picture>
    <source srcset="assets/images/52.webp" type="image/webp">
    <img src="assets/images/52.jpg" alt="Дзвонiть! Пишiть!" class="rounded mx-auto d-block">
  </picture>
</p>

# <i class="fas fa-pencil-alt"></i> Написати повідомлення

<form name="contact" netlify-honeypot="bot-field" data-form-output="form-output-global" data-form-type="contact" method="POST" action="thank-you" netlify>
  <p class="d-none">
    <label>Don’t fill this out if you're human: <input name="bot-field"></label>
  </p>
  <div class="form-group">
    <label for="contact-email">Адреса Email</label>
    <input id="contact-email" type="email" name="email" data-constraints="@Required @Email" aria-describedby="emailHelp" class="form-control" placeholder="Ваш email">
    <small id="emailHelp" class="form-text text-muted">Ми ніколи не будемо використовувати вашу адресу з ким-небудь ще.</small>
  </div>
  <div class="form-group">
    <label for="contact-message">Ваше питання, пропозиції, зауваження</label>
    <textarea id="contact-message" name="message" data-constraints="@Required" class="form-control" rows="3"></textarea>
  </div>
  <div class="form-group">
    <div data-netlify-recaptcha></div>
  </div>
  <button type="submit" class="btn btn-success btn-lg"><i class="far fa-envelope"></i> Відправити</button>
</form>
