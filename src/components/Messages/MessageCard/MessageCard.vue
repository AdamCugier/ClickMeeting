<template>
  <div class="cm-msg-card">
    <TextWithLabel label="Tytuł" :text="message.title"/>
    <TextWithLabel label="Data" :text="formatDate(message.date)"/>
    <TextWithLabel label="Email" :text="message.email"/>
    <TextWithLabel label="Nadawca" :text="message.sender"/>
    <div class="cm-msg-card--footer">
      <Button label="Więcej" primary size="sm" @click="() => openMessage(message.id)"/>
    </div>
  </div>
</template>
<script setup lang="ts">
import type {MessageI} from "@/store/Messages/MsgsModule";
import useFunctions from "@/composables/useFunctions";
import TextWithLabel from "@/components/TextWithLabel/TextWithLabel.vue";
import './MessageCard.scss'
import Button from "@/components/Buttons/Button/Button.vue";
import useMessage from "@/composables/useMessage";

interface MessageCardI {
  message: MessageI
}

const props = withDefaults(defineProps<MessageCardI>(), {});
const {formatDate} = useFunctions();
const {openMessage} = useMessage();
</script>