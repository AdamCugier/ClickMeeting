<template>
  <Modal>
    <template #header>
      <div class="cm-msg-modal--header-wrapper">
        <span>{{ msg.title }}</span>
        <RoundedButton size="sm" primary icon="fa-regular fa-circle-xmark" @click="() =>  commit('TOGGLE_MSG_MODAL')"/>
      </div>
    </template>
    <template #body>
      <div class="cm-msg-modal--message-details">
        <TextWithLabel label="Email:" :text="msg.email"/>
        <TextWithLabel label="Data:" :text="formatDate(msg.date)" position="right"/>
      </div>
      <div class="cm-msg-modal--message-details--long-message">
      <TextWithLabel label="Wiadomość:" :text="msg.message"/>
      </div>
      <TextWithLabel label="Nadawca:" :text="msg.sender"/>
    </template>
    <template #footer>
      <div class="cm-msg-modal--footer">
        <Button label="Zamknij" size="md" @click="() => commit('TOGGLE_MSG_MODAL')"/>
      </div>
    </template>
  </Modal>
</template>
<script setup lang="ts">
import Modal from "@/components/Modal/Modal.vue";
// @ts-ignore
import {useStore} from "vuex";
import {computed} from "vue";
import type {MessageI} from "@/store/Messages/MsgsModule";
import Button from "@/components/Buttons/Button/Button.vue";
import './MessageDetailsModal.scss';
import RoundedButton from "@/components/Buttons/RoundedButton/RoundedButton.vue";
import TextWithLabel from "@/components/TextWithLabel/TextWithLabel.vue";
import moment from "moment/moment";
import useFunctions from "@/composables/useFunctions";

const {getters, commit} = useStore()
const {formatDate} =useFunctions()
const msg = computed<MessageI>((() => getters.activeMessage))
</script>

