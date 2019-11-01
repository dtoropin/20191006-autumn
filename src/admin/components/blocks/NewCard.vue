<template lang="pug">
  .new-card
    .new-card__center
      .new-card__link
        button(
          type='button'
          @click='$emit("addNewBlock")'
        ).new-card__btn
          .new-card__plus
            .plus
      span.new-card__info {{ info }}
</template>

<script>
export default {
  props: {
    info: String
  }
}
</script>

<style lang="postcss" scoped>
@import "../../../styles/mixins.pcss";

/* new-card */
.new-card {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(to top, #f29400, #ea7400);
}
.new-card__center {
  display: flex;
  flex-direction: column;
  text-align: center;
  @include phones {
    flex-direction: row;
    align-items: center;
  }
}
.new-card__link {
  width: 150px;
  height: 150px;
  margin-bottom: 30px;
  @include phones {
    width: 70px;
    height: 70px;
    margin-bottom: 0;
    margin-right: 30px;
  }
}
.new-card__btn {
  width: 100%;
  height: 100%;
  padding: 0;
  transition: 0.3s opacity ease;
  &:hover {
    opacity: 0.8;
  }
}
.new-card__plus {
  position: relative;
  width: 100%;
  height: 100%;
  & .plus {
    border: 2px solid #fff;
    background: transparent;
  }
}
.new-card__info {
  width: 95px;
  margin: 0 auto;
  font-size: 18px;
  font-weight: bold;
  color: #fff;
}
</style>