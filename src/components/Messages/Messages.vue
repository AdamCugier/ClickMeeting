<template>
  <div class="cm-messages">
    <table class="cm-messages--table">
      <tr class="cm-messages--table--header">
        <th>Tytuł</th>
        <th>Nadawca</th>
        <th>Email</th>
        <th>Data</th>
      </tr>
      <tr v-for="msg in state.msgsModule.messages" class="cm-messages--table--body" @click="() => openMessage(msg.id)">
        <td>{{ msg.title }}</td>
        <td>{{ msg.sender }}</td>
        <td>{{ msg.email }}</td>
        <td>{{ formatDate(msg.date) }}</td>
      </tr>
    </table>
    <div class="cm-messages--mobile">
      <MessageCard v-for="msg in state.msgsModule.messages" :message="msg"/>
    </div>
  </div>
</template>

<script setup lang="ts">
//@ts-ignore
import {useStore} from "vuex";
import './Messages.scss'
import MessageCard from "@/components/Messages/MessageCard/MessageCard.vue";
import useFunctions from "@/composables/useFunctions";
import useMessage from "@/composables/useMessage";

const {formatDate} = useFunctions();
const {state} = useStore();
const {openMessage} = useMessage()
</script>