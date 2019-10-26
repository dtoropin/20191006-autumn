<template lang="pug">
  .skills
    .skills__header
      form(@submit.prevent).skills__title
        input(type='text' placeholder='Название новой группы').skills__input.skills__input--title
        .skills__btns
          button(type='submit').btn.btn--edit--ok
          button(type='button' @click.self='deleteGroup').btn.btn--edit--delete
      
    .skills__block
      
    .skills__footer
      input(type='text' placeholder='Новый навык').skills__input
      input(type='text' value='0').skills__input.skills__input--percent
      span.skills__percent %
      button(type='button').skills__plus
        .plus.plus--bg
</template>