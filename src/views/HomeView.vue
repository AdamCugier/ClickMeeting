<template>
  <MainPanel>
    <template #view>
      <PageLayout>
        <template #header>
          <PageHeader icon="fa-house-chimney-window" :title="`Witaj, ${state.userModule.user.name}!`"/>
        </template>
        <template #content>
          <h2>Witaj w panelu zadania rekrutacyjnego</h2>
          <h4>Zadanie:</h4>
          <p>"Proszę przygotuj stronę z wiadomościami, które wygenerujesz osobnym skryptem (co będzie odzwierciedlało zachowanie prawdziwej aplikacji - np. poprzez asynchroniczną komunikację po API z backendem). Strona powinna pasować do stylistyki ClickMeeting, posiadać wyszukiwanie oraz podgląd pełnej wiadomości. Panel powinien być czytelny zarówno dla urządzeń mobile jak i desktopie. Liczba wiadomości to minimum 10 000. Posiadamy podobny panel, który znajduję się na stronie https://account-panel.clickmeeting.com/messages "</p>
          <ul>
            <li>Dane wiadomości zostały wygenerowane za pomocą Faker'a, (12 000 wiadomości) oraz udostepnione są przy pomocy mockowanego API json-server</li>
            <li>Pozostała część zadania dostępna z poziomu menu 'Wiadomości'</li>
          </ul>
          <h4>Tech stack:</h4>
          <ul>
            <li>Typescript</li>
            <li>Vue 3</li>
            <li>Vuex</li>
            <li>SCSS</li>
            <li>Storybook</li>
            <li>Vitest</li>
          </ul>
        </template>
      </PageLayout>
    </template>
  </MainPanel>
</template>

<script setup lang="ts">
import MainPanel from "@/layouts/Panel/MainPanel.vue";
import PageLayout from "@/layouts/PageView/PageLayout.vue";
import PageHeader from "@/components/PageHeader/PageHeader.vue";
//@ts-ignore
import {useStore} from "vuex";

const {state} = useStore()

</script>
