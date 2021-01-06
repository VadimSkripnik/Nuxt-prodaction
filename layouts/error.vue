<template>
  <div class="error-layout">
    <div class="error-content">
      <h1 class="error-title">Ошибка 404</h1>
      <nuxt-link to="/">Вернуться на главную</nuxt-link>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .error-layout {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-bottom: 150px;
  }

  .error-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 4rem;
  }

  .error-title {
    color: rgb(145, 6, 6);
    margin-bottom: 1rem;
  }

  a {
    color: #e2e2e2;
    text-decoration: none;
}

// .cright {
//     width: 1000px;
//     padding: 132px 0;
// }
</style>
