<template lang="pug">
  .skills
    .skills__header
      .skills__title
        input(type='text' placeholder='Название новой группы').skills__input.skills__input--title
        .skills__btns
          button(type='button').btn.btn--edit--ok
          button(type='button').btn.btn--edit--delete
      
    .skills__block
      
    .skills__footer
      input(type='text' name='newTitle' placeholder='Новый навык').skills__input
      input(type='text' name='newPercent').skills__input.skills__input--percent
      span.skills__percent %
      button(type='button').skills__plus
        .plus.plus--bg
</template>